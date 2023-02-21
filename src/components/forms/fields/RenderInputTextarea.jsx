import { Field } from 'redux-form';

import { required, minLength } from 'components/forms/validator';

import { useEffect } from 'react';

const TempateInputTextarea = (props) => {

  const {
    input,
    placeholder,
    label,
    labelSecond,
    checkErrorSubmit,
    setErrCheck,
    maxLength,
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


      <textarea
        {...input}
        id={input.name}
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'error-input'} ${input.value.length > 0 ? 'input-empty' : ''}`}
        maxLength={maxLength}
      >
      </textarea>
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {(checkErrorSubmit && (error && <span>{error}</span>))}
    </>
  );
}

const RenderInputTextarea = ({ name, placeholder, label, labelSecond, checkErrorSubmit, setErrCheck, validate, num, maxLength }) => {

  let validateArr = [];

  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(minLength); }
  })

  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    placeholder={placeholder}
    component={TempateInputTextarea}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}
    num={num}
    maxLength={maxLength}
  />;
}

export default RenderInputTextarea;