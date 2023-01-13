import { Field } from 'redux-form';
import { useEffect } from 'react';

import { required, minLength } from 'components/forms/validator';

const TempateInputText = (props) => {


  const {
    input,
    placeholder,
    label,
    labelSecond,
    checkErrorSubmit,
    setErrCheck,
    num,
    meta: {
      error,
    }
  } = props;

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
      {label && <label><b>{label}</b></label>}
      {labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}
      <input
        {...input}
        type="text"
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'error-input'}`}

      />
      {(checkErrorSubmit && (error && <span>{error}</span>))}
    </>
  );
}



const RenderInputText = ({ name, placeholder, label, checkErrorSubmit, setErrCheck, validate, num }) => {

  let validateArr = [];

  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(minLength); }

  })

  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputText}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}
    num={num}
  />;
}

export default RenderInputText;