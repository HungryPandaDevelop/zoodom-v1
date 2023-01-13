import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDeleteCards } from 'store/asyncActions/getListing';

import CardsItemDefault from 'pages/cabinet/parts/cardsDefault/CardsItemDefault';

import ActionFn from 'store/actions';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


import { connect } from 'react-redux';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

const CardsListDefault = ({ uid, cabinetType, nameList, whatshow, whatshowName, titleForm }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getListing(nameList, uid).then(res => {
      if (isMounted) {

        res.sort((a, b) => a.card_name > b.card_name ? 1 : -1)

        setListings(res);
        // console.log(res.length, accountInfo.currentCard)

        setLoading(false);
      }
    });




    return () => { isMounted = false };
  }, [nameList]);

  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, nameList).then(res => {
      setListings(res);
    });
    // onDeleteMessage(id);
  }


  const onEdit = (listingId) => {
    navigate(`/cabinet/${nameList}-edit/${listingId}`)
  }




  return (
    <>
      <TemplateAccount
        title={titleForm}
        cabinetType={cabinetType}
        addWrapClass='cards-account-container'
        showAddBtn={true}

      >
        <div className="add-cards-container">
          <Link className="btn btn--orange-border cabinet-add-cards ico-in ico-in--left" to={`/cabinet/${nameList}-new`}>
            <i></i>
            <span>
              Создать
            </span>
          </Link>
        </div>
        {loading ? <PreloaderList /> : listings.length > 0 ? (
          <>

            <table>
              <tbody>
                <tr>
                  {whatshowName.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                  <th>Обновлено</th>
                  <th>Действия</th>
                </tr>
                {
                  listings.map((listing) => (
                    <tr key={listing.id}>
                      <CardsItemDefault
                        listing={listing}
                        id={listing.id}
                        onEdit={() => onEdit(listing.id)}
                        onDelete={() => deleteItem(listings, listing.id)}
                        whatshow={whatshow}

                      />
                    </tr>
                  ))
                }
              </tbody>
            </table>

          </>
        ) : <EmptyList />}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.typeCabinet,
  }
}

export default connect(mapStateToProps, { ActionFn })(CardsListDefault);