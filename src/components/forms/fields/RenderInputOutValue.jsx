import { Field } from 'redux-form';
import { useEffect } from 'react';

const TempateInputText = (props) => {


  const {
    input,
    outerValue
  } = props;



  useEffect(() => {
    input.onChange(outerValue);
  }, [outerValue]);

  return (
    <>

      <input
        {...input}
        type="hidden"

      />

    </>
  );
}



const RenderInputOutValue = ({ name, outerValue }) => {




  return <Field
    name={name}
    outerValue={outerValue[name]}
    component={TempateInputText}

  />;
}

export default RenderInputOutValue;