import { useState } from 'react';
import { Field } from 'redux-form';

const TemplateFieldPassword = ({ input, label, placeholder, labelSecond, num, errorOn, meta: { touched, error } }) => {

  const [showPass, setShowPass] = useState(false);


  return (
    <>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <div className="password-field" >
        <input
          type={showPass ? ("text") : ("password")}
          {...input}
          placeholder={placeholder}
          className={`input-decorate ${errorOn && touched && error && 'error-input'}`}
        />
        <i className="view-ico" data-visibility={showPass} onClick={() => { setShowPass((prevState) => !prevState) }}></i>
      </div>
      {errorOn && touched && error && <span className='error-hint'>{error}</span>}
    </>
  )
}

const RenderInputPassword = ({ name, placeholder, label, labelSecond, errors, errorOn, num }) => {
  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    placeholder={placeholder}
    component={TemplateFieldPassword}
    errors={errors}
    errorOn={errorOn}
    num={num}
  />;
}

export default RenderInputPassword;