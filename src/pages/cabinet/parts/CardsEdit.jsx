import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { useParams, useNavigate } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { saveInfo } from 'store/asyncActions/saveInfo';


const VacanciesEdit = ({ accountInfo, cabinetType, fields, dataForm }) => {

  const [getInfo, setGetInfo] = useState({});
  const [loading, sedLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    getSingleListing(cabinetType, params.elementId).then(res => {

      setGetInfo(res);

      sedLoading(false)
    });

  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    // console.log(dataForm.values);



    saveInfo({ ...dataForm.values, userInfo: accountInfo }, params.elementId, cabinetType).then(() => {
      navigate('/cabinet/cards', { replace: true });
    });
  }

  /* сохранение данных пользователя */


  return (
    <>{loading ? 'loading' : (<TemplateAccount title="Редактировать карточку" >
      <RenderFormAccount
        btnSaveText="Сохранить изменения"
        objFields={fields}
        orderFields={fields.order}
        initialValues={getInfo ? getInfo : null}
        onSubmitIn={onSubmitIn}
        btnWrapClass='btn-container col-12'
        btnClass='btn-save btn--green ico-in ico-in--left'
        formClassAdd='main-grid'
        cabinetBack={true}
        cabinetBackLink={cabinetType}
        sending={true}
      />
    </TemplateAccount>)}


    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.fieldsNurseries;
  return {
    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo,
    cabinetType: state.accountInfo.typeCabinet,
    fields: fields, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(VacanciesEdit);