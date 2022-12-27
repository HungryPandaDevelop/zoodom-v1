import { Link } from 'react-router-dom';


import BtnInvite from 'pages/catalog/parts/cardsItem/BtnInvite';
import BtnCall from 'pages/catalog/parts/cardsItem/BtnCall';
import ToggleBtn from 'pages/catalog/parts/cardsItem/ToggleBtn';

import phoneIco from 'front-end/images/icons/phone-black.svg'
import mainIco from 'front-end/images/icons/mail-black.svg'
import markerIco from 'front-end/images/icons/marker-black.svg'

import SimpleDateTime from 'react-simple-timestamp-to-date';



import defaultCardsImg from 'front-end/images/icons/avatar-black.svg';

const ListItem = ({
  listing,
  link,
  listingType,
  uid,
}) => {



  const imgCards = listing.userInfo.imgsAccount ? listing.userInfo.imgsAccount : defaultCardsImg;
  const address = listing.coords && listing.coords.split('--');





  return (
    <div className="cards-item shadow-container">
      <div className="main-grid cards-item-roof">
        <div className="col-6">
          <span>
            <SimpleDateTime
              format="MYD"
              showTime="0"
              dateSeparator="."
            >{listing.timestamp.seconds}</SimpleDateTime></span>
        </div>
        <div className="col-3">
          {(uid) && (
            <ToggleBtn
              listing={listing}
              uid={uid}
              nameCollection='hidden'
            />
          )}
        </div>
        <div className="col-3 cards-like">

          {(uid) && (
            <ToggleBtn
              listing={listing}
              uid={uid}
              nameCollection='liked'
            />
          )}

        </div>
      </div>
      <div className="main-grid">
        <div className="col-2 col-md-3 col-sm-4 col-xs-12">
          <div
            className="cards-face-container"
          >
            <div
              className="cards-face img-cover"
              style={{ backgroundImage: `url(${imgCards})` }}
            >
            </div>
            {uid !== listing.userInfo.uid && <BtnCall listing={listing} />}


          </div>
        </div>
        <div className="col-6 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-item-info-container">
          <div className="cards-item-info">
            <div className="cards-item-info-top">
              <h3>
                <Link to={link}>
                  {listing.card_name}
                </Link>
              </h3>

            </div>


          </div>
          <div className="cards-item-delimetr"></div>
        </div>

        <div className="cards-pay-offset col-md-3 col-sm-4">

        </div>
        <div className="col-4 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-pay-container">
          <div className="cards-item-info cards-item-pay-info">
            <h3>{listing.userInfo.accountName}</h3>
            <ul className="ln cards-item-info-list">
              {listing.userInfo.phone && (
                <li>
                  <img src={phoneIco} alt="" />
                  <a href={`tel:${listing.userInfo.phone}`}>
                    {listing.userInfo.phone}
                  </a>
                </li>
              )}
              {listing.userInfo.email && (
                <li>
                  <img src={mainIco} alt="" />
                  <a href={`mailto:${listing.userInfo.email}`}>{listing.userInfo.email}</a>
                </li>
              )}
              {address && (<li>
                <img src={markerIco} alt="" />
                <span>Адрес: </span>
                <b>{address[0]}</b>
              </li>)}

            </ul>
            <div className="cards-item-bottom btn-container">
              {uid && (
                <BtnInvite
                  listing={listing}
                />
              )}
              {address && (<Link to={`/catalog/${listingType}/map/${listing.id}`} className="btn btn--green-border ico-in ico-in--left btn-show-map">
                <i></i>
                <span>Показать на карте</span>
              </Link>)}

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}



export default ListItem;