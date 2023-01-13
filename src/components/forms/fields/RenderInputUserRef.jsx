import { Field } from 'redux-form';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';



const TempateInputText = ({ uid, input }) => {
  useEffect(() => {
    console.log(uid)

    input.onChange(uid);
  }, [uid])
  return (
    <>

      <input
        {...input}
        type="hidden"

      />

    </>
  );
}



const RenderInputText = ({ name, uid }) => {

  return <Field
    name={name}
    component={TempateInputText}
    uid={uid}

  />;
}


const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps)(RenderInputText);