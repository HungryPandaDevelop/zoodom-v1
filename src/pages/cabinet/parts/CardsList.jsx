import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDeleteCards } from 'store/asyncActions/getListing';

import CardItem from 'pages/cabinet/parts/CardItem';

import ActionFn from 'store/actions';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { saveInfo } from 'store/asyncActions/saveInfo';

import { connect } from 'react-redux';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

const CardsList = ({ uid, cabinetType, accountInfo, ActionFn }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getListing(cabinetType, uid, 'userRef').then(res => {
      if (isMounted) {
        setListings(res);
        // console.log(res.length, accountInfo.currentCard)
        if (res.length === 1 && !accountInfo.currentCard) {
          onActivateItem([res[res.length - 1].id, res[res.length - 1].data.card_name]);
        }

        setLoading(false);
      }
    });

    return () => { isMounted = false };
  }, []);

  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, cabinetType).then(res => {
      setListings(res);
      if (res.length > 0) {
        onActivateItem([res[res.length - 1].id, res[res.length - 1].data.card_name]);
      } else {
        onActivateItem(['', '']);
      }
    });
    // onDeleteMessage(id);
  }


  const onEdit = (listingId) => {
    navigate(`/cabinet/cards-edit/${listingId}`)
  }

  const onActivateItem = (el) => {
    if (accountInfo.currentCard !== el) {
      const addUserInfo = { ...accountInfo, currentCard: el };

      saveInfo(addUserInfo, uid, 'users').then(() => {
        ActionFn('SET_INFO_ACCOUNT', addUserInfo);
      });
    }
  }



  return (
    <>
      <TemplateAccount
        title="Мои карточки"
        cabinetType={cabinetType}
        addWrapClass='cards-account-container'

      >
        <div className="add-cards-container">
          <Link className="btn btn--blue-border cabinet-add-cards ico-in ico-in--left" to={`/cabinet/cards-new`}>
            <i></i>
            <span>
              Создать питомник
            </span>
          </Link>
        </div>
        {loading ? <PreloaderList /> : listings.length > 0 ? (
          <>

            <table>
              <thead>
                <tr className="cards-account-head">
                  <th>Название</th>
                  <th>Обновлено</th>
                  <th>Статус</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {
                  listings.map((listing) => (
                    <tr key={listing.id}>
                      <CardItem
                        listing={listing}
                        id={listing.id}
                        currentCard={accountInfo.currentCard}
                        onEdit={() => onEdit(listing.id)}
                        onDelete={() => deleteItem(listings, listing.id)}
                        onActivate={() => onActivateItem([listing.id, listing.card_name])}
                        cabinetType={cabinetType}

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
    accountInfo: state.accountInfo,
    cabinetType: state.accountInfo.typeCabinet,
  }
}

export default connect(mapStateToProps, { ActionFn })(CardsList);