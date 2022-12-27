import { connect } from 'react-redux';

import { useEffect, useState } from 'react';


import { createRoom } from 'store/asyncActions/inviteChat';
import { sendMessage } from 'store/asyncActions/inviteChat';

import { getListing } from 'store/asyncActions/getListing';

const BtnInvite = ({
  accountInfo,
  listing,
  uid,

}) => {

  const [invited, setInvited] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getListing('message', uid, 'inviteBtn', listing.id).then(res => {
      if (isMounted) {

        setInvited(res.map(el => el.accountInfo.currentCard[0]));

      }
    });

    return () => { isMounted = false };
  }, [update]);



  let inviteStatus = invited.includes(accountInfo.currentCard[0]);



  const onInvite = () => {



    !inviteStatus &&
      createRoom(
        listing,
        accountInfo
      ).then((res) => {


        sendMessage(res, 'Новый отклик', uid);

        setUpdate(!update);
      });

  }


  return (
    <div
      className={`btn btn--orange-border response-btn ${inviteStatus && 'active'}`}
      onClick={onInvite}
    >
      {inviteStatus ? 'Вы откликнулись' : 'Откликнуться'}

    </div>
  )
}



const mapStateToProps = (state) => {
  return {

    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo,

  }
}



export default connect(mapStateToProps)(BtnInvite);