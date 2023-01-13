import Breadcrumbs from 'pages/parts/Breadcrumbs';
import { useState, useEffect, useRef } from 'react';
import { getListing } from 'store/asyncActions/getListing';
import { getSingleListing } from 'store/asyncActions/getSingleListing';
import { useParams } from 'react-router-dom';
import stubImg from 'front-end/images/stub-img.svg';
import AnnouncementItem from 'pages/catalog/parts/cardsDetail/AnnouncementItem';
import { connect } from 'react-redux';

import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';


const CardsDetail = ({ uid }) => {

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const [totalGrade, setTotalGrade] = useState(0);

  const [announcement, setAnnouncement] = useState(null);
  const [loadingAnnouncement, setLoadingAnnouncement] = useState(true);

  const params = useParams();

  useEffect(() => {
    // console.log('res.userInfo.uid', params.catagoryName, params.elementId)
    getSingleListing(params.catagoryName, params.elementId).then(res => {

      setListing({ ...res, id: params.elementId });
      setLoading(false);

      getListing('announcement', res.userInfo.uid, 'userRef').then(res => {
        console.log(res)
        setAnnouncement(res);
        setLoadingAnnouncement(false);

      });
    });
    // baseName, uid, type, listingId, limitSiz


    getListing('reviews', params.elementId, 'reviews').then(res => {


      let totalGradeTemp = 0;

      if (res.length > 0) {


        res.map(item => {
          totalGradeTemp = totalGradeTemp + Number(item.grade);
        })
        totalGradeTemp = (totalGradeTemp / res.length).toFixed(2);
        setTotalGrade(totalGradeTemp);
      }

    });



  }, []);

  if (loading) {
    return <>Loading</>
  }

  let coords;
  if (listing.cards_coords) {
    coords = listing.cards_coords.split('--');

  }

  const imgCards = listing.cards_photo ? listing.cards_photo : stubImg;

  const formatPhone = (value) => {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`
  }

  const renderStars = (grade) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<i
        key={i}
        className={`star-ico star-ico--green ${Number(grade) - 1 >= i && 'active'}`}
      ></i>)
    }

    return stars;
  }

  return (
    <>
      <div className="stub"></div>
      <Breadcrumbs />
      <div className="content">
        <div className="main-full">
          <h1>{listing.card_name}</h1>
        </div>
        <div className="main-grid nurseries-main">
          <div className="col-5">
            <div className="nurseries-main-img-container">
              <div className="nurseries-main-img">
                <img src={imgCards} alt={imgCards} />
              </div>
              <div className="nurseries-main-reviews">
                <div className="nurseries-main-reviews-container">
                  <h3>Оцените нашу работу</h3>
                  <div className="reviews-stars">
                    <div className="reviews-stars-container">
                      {renderStars(totalGrade)}
                    </div>
                    <div className="reviews-stars-total">{totalGrade}</div>
                  </div>
                </div>
                <div className="btn-container">
                  <div className="btn btn--green-border" >Оставить отзыв</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="nurseries-main-about">
              <h3>О нас</h3>
              <p>
                {listing.cards_description_full}
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="nurseries-main-info">
              <div className="nurseries-main-info-item">
                {listing.cards_coords && (
                  <><h3>Адрес: </h3>
                    <div>{coords[0]}</div></>
                )}
              </div>

              {listing.card_phone && (
                <div className="nurseries-main-info-item">
                  <h3>Контактный номер</h3>
                  <div>
                    <a href={`tel:+7${listing.card_phone}`}>+7{formatPhone(listing.card_phone)}</a>
                  </div>
                </div>
              )}
              {listing.card_mail && (
                <div className="nurseries-main-info-item">
                  <h3>Email</h3>
                  <div> <a href={`mailto:${listing.card_mail}`}>{listing.card_mail}</a></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {listing.cards_photos && listing.cards_photos.length > 0 && (
          <section className="nurseries-gallery">
            <div className="main-full head-section">
              <h2 className="title-section">
                Галерея</h2>
            </div>

            <div className="catalog-grid" >
              {listing.cards_photos.map((item, index) => (
                <div className="col-4" key={index}>
                  <div
                    className="nurseries-gallery-item img-cover"
                    style={{ backgroundImage: `url(${item})` }}
                  >

                  </div>
                </div>
              ))}
            </div>


          </section>
        )}
        <div className="main-full head-section">
          <h2 className="title-section">
            Объявления</h2><a className="back-link" href="/catalog/nurseries">Все Питомники</a>
        </div>
        {announcement && console.log('announcement', announcement)}
        <div className='main-grid'>
          {loadingAnnouncement ? 'Loading' : announcement &&
            announcement.map((item, index) => (
              <div key={index} className="col-3">
                <AnnouncementItem listing={item} />
              </div>
            ))}
        </div>




        <Reviews
          listingType={params.catagoryName}
          elementId={params.elementId}
          listing={listing}
        />
        <div className="stub"></div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
  }
}


export default connect(mapStateToProps)(CardsDetail);