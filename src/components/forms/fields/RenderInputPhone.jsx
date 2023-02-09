import { Field } from 'redux-form';

import { createTextMask } from 'redux-form-input-masks';

const phoneMask = createTextMask({
  pattern: '+7 (999) 999-99-99',
});

const TempateInputText = (props) => {
  const {
    input,
  } = props;

  return (
    <>
      <input
        {...input}
        type="text"
        id={input.name}
        className={`input-decorate  ${input.name.length > 0 ? 'input-empty' : ''} `}

      />
    </>
  );
}


const RenderInputPhone = ({ name, placeholder, label, labelSecond, num }) => {
  return (
    <>
      {num && <i className="num-offset">{num}</i>}


      <Field
        name={name}
        type="tel"
        placeholder={placeholder}
        component={TempateInputText}
        {...phoneMask}

      />
      {label && (<label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>)}
    </>
  );
}

export default RenderInputPhone;