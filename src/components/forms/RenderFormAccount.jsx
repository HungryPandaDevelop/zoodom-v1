import RenderFields from 'components/forms/RenderFields';

import { Link } from 'react-router-dom';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

import ploaderImg from 'front-end/images/preloader.gif'

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  //console.log(props)
  const {
    objFields,
    orderFields,
    btnSaveText,
    btnClass,
    onSubmitIn,
    waitAnsw
  } = props;


  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const onSubmit = (e) => {

    e.preventDefault();
    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 1000);

    errCheck && !waitAnsw && onSubmitIn();

  }






  return (
    <form
      className='form main-grid'
    >
      <RenderFields
        orderFields={orderFields}
        objFields={objFields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}

      />
      <div className='col-12 btn-container'>
        <button className="btn   btn-save btn--blue ico-in ico-in--left" onClick={(e) => { onSubmit(e) }} >
          {waitAnsw ? (<img className='preloader' src={ploaderImg} />) : (
            <><i></i><span>{btnSaveText}</span></>
          )}
        </button>
        <Link to="/cabinet/" className="btn btn--red-border ico-in ico-in--left btn-cancel "><i></i><span>Отменить</span></Link>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


