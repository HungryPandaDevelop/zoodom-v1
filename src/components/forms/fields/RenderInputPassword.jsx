import { useState, useEffect } from 'react';
import { Field } from 'redux-form';

import { required, minLength, mailCheck, checkRus } from 'components/forms/validator';


const TemplateFieldPassword = ({
  input,
  label,
  placeholder,
  labelSecond,
  num,
  checkErrorSubmit,
  setErrCheck,
  meta: {
    error,
  }
}) => {

  const [showPass, setShowPass] = useState(false);


  useEffect(() => {
    if (error) {
      setErrCheck(false);
    }
    else {
      setErrCheck(true);
    }
  }, [error]);


  return (
    <>
      {num && <i className="num-offset">{num}</i>}


      <input
        type={showPass ? ("text") : ("password")}
        {...input}
        id={input.name}
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''}`}
      />
      {label && <label htmlFor={input.name}><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <i className="pass-ico" data-visibility={showPass} onClick={() => { setShowPass((prevState) => !prevState) }}></i>

      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
  )
}

const RenderInputPassword = ({
  name,
  label,
  labelSecond,
  num,
  checkErrorSubmit,
  setErrCheck,
  validate,
}) => {

  let validateArr = [];

  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(minLength); }
    // else if (item === 'checkRus') { validateArr.push(checkRus); }
    else if (item === 'mailCheck') { validateArr.push(mailCheck); }

  })

  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    num={num}
    component={TemplateFieldPassword}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}
  />;
}

export default RenderInputPassword;