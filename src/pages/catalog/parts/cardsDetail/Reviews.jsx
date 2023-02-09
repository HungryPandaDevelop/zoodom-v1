import RenderFormReviews from 'components/forms/RenderFormReviews';
import ReviewsItem from 'pages/catalog/parts/cardsDetail/ReviewsItem';
import axios from "axios";
import { connect } from 'react-redux';

import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

// import { addRews } from 'store/asyncActions/addCards';
// import { getListing } from 'store/asyncActions/getListing';


import defaultCardsImg from 'front-end/images/icons/avatar-black.svg';

const Reviews = ({
  uid,
  checkingStatus,
  dataForm,
  userInfo,
  fields,
  elementId,
  title,
  authwp
}) => {


  const siteWp = 'http://zoo-base.sait.website/';

  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const [refreshDoc, setRefreshDoc] = useState(false);
  const [tempValue, setTempValue] = useState({});

  useEffect(() => {
    let isMounted = true;

    // getListing('reviews', elementId, 'reviews').then(res => {
    //   if (isMounted) {
    //     setListings(res);
    //     setLoading(false);
    //   }
    // });
    axios.get(`${siteWp}/wp-json/comments/list?listingRef=${elementId}`).then(res => {

      if (isMounted) {
        setListings(res.data);
        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, [refreshDoc]);


  const onSubmitIn = () => {

    const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;

    const addUserInfo = {
      ...dataForm.values,
      accountName: userInfo.accountName,
      imgsAccount: imgCards,
      uid: userInfo.uid,
      listingRef: elementId
    };
    if (!dataForm.syncErrors) {

      // addRews(addUserInfo, 'reviews', elementId).then((res) => {
      //   setRefreshDoc(!refreshDoc)
      // });


      axios.post(`${siteWp}/wp-json/comments/add`, addUserInfo, {


      }).then(res => {
        setRefreshDoc(!refreshDoc);
        toast.success('Отзыв опубликован');

        setTimeout(() => {
          setTempValue({
            dignity: ' ',
            limitations: ' ',
            reviews: ' ',
          });
        }, 3000);

      }).catch(err => {
        console.log('err', err);
      });

    }

  }


  const showHideForm = (thisListing) => {
    let chectUId = true;

    // thisListing.map(item => {
    //   if (item.uid === uid) {
    //     chectUId = false;
    //   }
    // });

    if (chectUId) {
      return (
        checkingStatus ? 'Loading account...' : (
          <>

            <h2>Оставить отзыв о {title}</h2>
            <h3>Оцените породу</h3>
            <RenderFormReviews
              btnSaveText="Оставить отзыв"
              objFields={fields}
              orderFields={fields.order}
              onSubmitIn={onSubmitIn}
              sending={true}
              initialValues={tempValue}
              btnClass='btn-save btn--orange'
              formClassAdd="form-default rew-default-container"
              userInfo={userInfo}
              uid={uid}
            />
            <div className="rew-hint-send">
              Перед отправкой ознакомьтесь с <a href="#">правилами публикации</a>
            </div>
          </>

        )
      )
    }
    else {
      return (<h2>Вы уже оставили отзыв</h2>);
    }

  }



  return (
    <>
      <div className="reviews-detail">
        <div className="main-grid ">
          <div className="col-6 col-sm-12">
            {loading ? 'Загрузка...' : listings.length === 0 ? (<></>) : (
              <>
                <h2>Отзывы о {title}</h2>
                <div className="reviews-list">
                  {listings.map((item, index) => (
                    <ReviewsItem
                      key={index}
                      item={item}
                      defaultCardsImg={defaultCardsImg}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="col-6  col-sm-12 rew-default-container">
            {listings && showHideForm(listings)}

          </div>
        </div>

      </div>


    </>
  )
}


const mapStateToProps = (state) => {

  const fields = state.fieldsReviews;
  const formReducer = state.form && state.form.singleInput;
  return {
    fields: fields,
    dataForm: formReducer,
    userInfo: state.accountInfo,
    uid: state.accountInfo.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps)(Reviews);