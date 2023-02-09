import { Field } from 'redux-form';
import { useEffect } from 'react';

import { required, minLength, mailCheck } from 'components/forms/validator';

const TempateInputText = (props) => {


  const {
    input,
    label,
    labelSecond,
    num,
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
      {num && <i className="num-offset">{num}</i>}

      {labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}
      <input
        {...input}
        type="text"
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}

      />
      {label && <label htmlFor={input.name}><b>{label}</b></label>}
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </>
  );
}



const RenderInputText = ({
  name,
  label,
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
    component={TempateInputText}
    num={num}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}

  />;
}

export default RenderInputText;