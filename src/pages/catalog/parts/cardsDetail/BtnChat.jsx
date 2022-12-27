import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { useNavigate } from "react-router-dom";



import { createRoom } from 'store/asyncActions/inviteChat';

import { getListing } from 'store/asyncActions/getListing';

const BtnChat = ({
  accountInfo,
  listing,
  uid,
}) => {

  const navigate = useNavigate();


  const [invited, setInvited] = useState([]);

  const [currentRoom, setCurrentRoom] = useState('');

  useEffect(() => {
    let isMounted = true;

    getListing('message', uid, 'inviteBtn', listing.id).then(res => {
      if (isMounted) {


        setInvited(res.map(el => el.accountInfo.currentCard[0]));

        res.length > 0 && setCurrentRoom(res[0].id)

      }
    });

    return () => { isMounted = false };

  }, []);


  let inviteStatus = invited.length > 0;

  const onInvite = () => {



    !inviteStatus ? createRoom(
      listing,
      accountInfo
    ).then((res) => {

      navigate('/cabinet/chat/' + res, { replace: true })

    }) : (navigate('/cabinet/chat/' + currentRoom, { replace: true }));

  }



  return (
    <div
      className="btn btn--green-border"
      onClick={onInvite}
    >
      Чат
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo,
  }
}



export default connect(mapStateToProps)(BtnChat);