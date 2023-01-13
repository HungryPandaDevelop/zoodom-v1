import { Field } from 'redux-form';


const TempateInputText = (props) => {

  const { input, placeholder, label, labelSecond, errorOn, meta: { touched, error }, num } = props;

  return (
    <>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <input
        {...input}
        type="date"
        placeholder={placeholder}
        className={`input-decorate ${errorOn && touched && error && 'error-input'}`}
      />
      {errorOn && touched && error && <span className='error-hint'>{error}</span>}

    </>
  );
}



const RenderInputDate = ({ name, placeholder, label, errorOn, num }) => {
  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputText}
    errorOn={errorOn}
    num={num}
  />;
}

export default RenderInputDate;