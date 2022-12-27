import { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { addCards } from 'store/asyncActions/addCards';


import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RenderFormAccount from 'components/forms/RenderFormAccount';


const VacanciesNew = ({ accountInfo, uid, cabinetType, fields, dataForm }) => {

  const navigate = useNavigate();


  const params = useParams();

  console.log('test ', params.cabinetType)


  const onSubmitIn = () => {
    const addUserInfo = { ...dataForm.values, userInfo: accountInfo };


    // console.log('addUserInfo', addUserInfo)
    addCards(addUserInfo, cabinetType, uid).then(() => {
      navigate('/cabinet/cards', { replace: true });
    });

  }


  return (
    <>
      <TemplateAccount title={`Создание карточки`} >
        <RenderFormAccount
          btnSaveText={`Добавить карточку`}
          objFields={fields}
          orderFields={fields.order}
          onSubmitIn={onSubmitIn}
          sending={true}
          btnWrapClass='btn-container col-12'
          btnClass='btn-save btn--green ico-in ico-in--left'
          formClassAdd='main-grid'
          cabinetBack={true}
          cabinetBackLink={cabinetType}
        />
      </TemplateAccount>
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

export default connect(mapStateToProps)(VacanciesNew);