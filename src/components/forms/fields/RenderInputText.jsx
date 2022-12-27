import { Field } from 'redux-form';
import { useEffect } from 'react';

import { required, minLength, mailCheck } from 'components/forms/validator';

const TempateInputText = (props) => {


  const {
    input,
    placeholder,
    label,
    labelSecond,
    checkErrorSubmit,
    setErrCheck,
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
      {label && <label><b>{label}</b> {labelSecond && <span>{labelSecond}</span>}</label>}
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



const RenderInputText = ({ name, placeholder, label, checkErrorSubmit, setErrCheck, validate }) => {

  let validateArr = [];

  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(required); }
    else if (item === 'mailCheck') { validateArr.push(required); }
  })

  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputText}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}
  />;
}

export default RenderInputText;