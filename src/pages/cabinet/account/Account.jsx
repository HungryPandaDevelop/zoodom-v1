
import { connect } from 'react-redux';



import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


import MainInfo from 'pages/cabinet/account/parts/MainInfo';
import LegalInfo from 'pages/cabinet/account/parts/LegalInfo';
import BtnContainer from 'pages/cabinet/account/parts/BtnContainer';



const Account = ({ userInfo }) => {





  return (
    <>
      <TemplateAccount title="Учетная запись" >


        <div className="main-grid">
          <MainInfo userInfo={userInfo} />


          <BtnContainer />
        </div>



      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    userInfo: state.accountInfo,
  }
}

export default connect(mapStateToProps)(Account);