import { Link } from 'react-router-dom';

import phoneIco from 'front-end/images/icons/phone-black.svg';
import mainIco from 'front-end/images/icons/mail-black.svg';
import markerIco from 'front-end/images/icons/marker-black.svg';

import SimpleDateTime from 'react-simple-timestamp-to-date';


const CardsMain = ({ listing, imgCards, elementId, refContent, listingType }) => {

  const address = listing.coords && listing.coords.split('--');




  return (
    <>
      <div className="cards-main shadow-container" ref={refContent}>
        <div className="cards-item-roof">
          <span>
            <SimpleDateTime
              format="MYD"
              showTime="0"
              dateSeparator="."
            >
              {listing.timestamp.seconds}
            </SimpleDateTime></span>
        </div>
        <div className="main-grid">
          <div className="col-2 col-md-3 col-sm-4 col-xs-12" >
            <div className="cards-face-container">
              <div
                className="cards-face img-cover"
                style={{ backgroundImage: `url(${imgCards})` }}
              >
              </div>
            </div>
          </div>
          <div className="col-6 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-item-info-container">
            <div className="cards-item-info" >
              <div className="cards-item-info-top">
                <h3>{listing.card_name}</h3>

              </div>

            </div>
            <div className="cards-item-delimetr"></div>
          </div>

          <div className="col-4 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-pay-container" >
            <div className="cards-item-info cards-item-pay-info">
              {listing.userInfo.fio && (<h3>{listing.userInfo.fio}</h3>)}
              <ul className="ln cards-item-info-list">
                {listing.userInfo.phone && (
                  <li>
                    <img src={phoneIco} alt="" />
                    <Link to={`tel:${listing.userInfo.phone}`}>
                      {listing.userInfo.phone}
                    </Link>
                  </li>
                )}
                {listing.userInfo.email && (
                  <li>
                    <img src={mainIco} alt="" />
                    <Link to={`mailto:${listing.userInfo.email}`}>{listing.userInfo.email}</Link>
                  </li>
                )}

                {address && (<li>
                  <img src={markerIco} alt="" />
                  <span>Адрес: </span>
                  <b>{address[0]}</b>
                </li>)}
              </ul>
              <div className="cards-item-bottom btn-container">
                {address && (
                  <Link to={`/catalog/${listingType}/map/${elementId}`} className="btn btn--green-border ico-in ico-in--left btn-show-map">
                    <i></i>
                    <span>Показать на карте</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsMain
