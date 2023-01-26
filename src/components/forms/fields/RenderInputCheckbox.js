import { Field} from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';



const TemplateCheckbox = ({ name, input, label, num }) => (
  <div className="checkbox">
    <label>
      {label}
      <input type="checkbox" {...input} />
      <span></span>
    </label>
  </div>
);

const RenderInputCheckbox = ({name, label, labelSecond, options, num}) => {
  return (
    <>
      {num && <i className="num-offset">{num}</i>}
      <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>
      <div className='checkbox-container'>
        <Field
          name={name}
          component={ReduxCheckbox(Checkboxes)}
          data={options}
          itemComponent={TemplateCheckbox}
          variants={options}
          num={num}
        />
      </div>
    </>
  );
}

export default RenderInputCheckbox;