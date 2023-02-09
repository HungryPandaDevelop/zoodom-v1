import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CabinetPopup from 'blocks/header/CabinetPopup';
import { Link } from 'react-router-dom';
import ActionFn from 'store/actions';
import { getRoomsOnline } from "store/asyncActions/inviteChat";
import avatar from 'front-end/images/icons/avatar-white.svg';

const CabinetHeader = ({ userInfo, showPopup, uid }) => {

  const [cabinetPopupShow, setCabinetPopupShow] = useState(false);
  const [rooms, setRooms] = useState();

  useEffect(() => {
    const hideByBody = (e) => {
      if (e.target.className !== 'cabinet-header-avatar img-cover') {
        setCabinetPopupShow(false)
      }
      if (e.key === 'Escape') { setCabinetPopupShow(false); }
    }

    getRoomsOnline(setRooms, uid);
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };


  }, []);


  let myRoomsMessage = [];

  rooms && rooms.map(room => {
    const filterItem = room.messages.filter(item => item.read === false).filter(item => item.uid !== uid);
    if (filterItem.length > 0) {
      myRoomsMessage.push(filterItem)
    }
  })


  const onCabinetPopupShow = () => {
    setCabinetPopupShow(!cabinetPopupShow);
  }
  // console.log('userInfo', userInfo.typeCabinet)
  return (

    <>

      <div className="sigin-body">
        <div className="btn-header-container">
          <Link to={`/cabinet/${userInfo.typeCabinet}-new`} className="btn-header-cards btn-header"></Link>
          <Link to='/cabinet/chat' className="btn-header-chat btn-header">
            {myRoomsMessage.length > 0 && <div className="new-message-warning"></div>}
          </Link>
          <Link to='/cabinet/liked' className="btn-header-favorites btn-header"></Link>
        </div>
        <div
          className={`cabinet-header-avatar-container ${cabinetPopupShow ? 'active' : ''}`}
          onClick={onCabinetPopupShow}
        >
          <div
            className="cabinet-header-avatar img-cover"
            style={{ backgroundImage: `url(${userInfo.imgsAccount ? userInfo.imgsAccount : avatar})` }}
          >
          </div>
        </div>
        {cabinetPopupShow && <CabinetPopup myRoomsMessage={myRoomsMessage} userInfo={userInfo} onCabinetPopupShow={onCabinetPopupShow} />}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
    userInfo: state.accountInfo,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(CabinetHeader);