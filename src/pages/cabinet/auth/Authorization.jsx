import RenderFormAccount from 'components/forms/RenderFormAccount';
import { useEffect } from 'react';
import { connect } from 'react-redux';

// import { authAccount } from 'actions';

import { Link } from 'react-router-dom';

import OAuth from 'components/cabinet/OAuth';

import { useNavigate } from 'react-router-dom';

import { authAccount } from 'store/actions/authAccount';

const Authorization = ({ uid, formData, fieldsAuthorization }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (uid) {
      navigate('/cabinet/', { replace: true });
    }
  }, [uid]);

  const onSubmitIn = () => {
    authAccount(formData)
  }

  return (
    <>
      <div className="stub"></div>
      <div className="content">
        <div className="main-grid">
          <div className="col-5 col-sm-12 col-xs-12">
            <h1>Авторизация</h1>
            <RenderFormAccount
              btnSaveText="Авторизация"
              objFields={fieldsAuthorization}
              orderFields={fieldsAuthorization.order}
              onSubmitIn={onSubmitIn}
              formClassAdd='form-default'
              btnClass='btn--orange'
              sending={true}
            />
            <Link to="/forgot-password">Восстановить пароль</Link>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            {/* <OAuth /> */}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  // console.log(formReducer)

  return {
    fieldsAuthorization: state.fieldsAuthorization, // база полей
    formData: formReducer,
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps, { authAccount })(Authorization);