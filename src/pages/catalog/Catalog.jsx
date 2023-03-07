import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';



import { connect } from 'react-redux';

import CatalogChange from 'pages/catalog/parts/CatalogChange';

import { getListing } from 'store/asyncActions/getListing';

import { useParams } from 'react-router-dom';

import filterMain from 'components/filterMain/filterMain';

import Pagination from 'pages/catalog/Pagination';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';

const Catalog = ({
  listingSearch,
  uid,
  cabinetType,
  accountInfo,

}) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  const params = useParams();


  useEffect(() => {

    getListing('company').then(res => {

      let data = filterMain(listingSearch, res);

      setListings(data);
      setLoading(false);
    });

  }, [listingSearch, params.catagoryName]);


  let titleCategory;

  switch (params.catagoryName) {
    case "nurseries":
      titleCategory = "Питомники"
      break;
    case "salon":
      titleCategory = "Салоны"
      break;
    case "clinics":
      titleCategory = "Клиники"
      break;
    case "specialists":
      titleCategory = "Специалисты"
      break;

    default:
      titleCategory = "Все компании"
  }


  return (
    <>
      <div className="stub"></div>

      <Breadcrumbs titleCategory={titleCategory} listingType={params.catagoryName} />
      <div className="btn-container">
        <CatalogChange />
      </div>
      <div className="content">
        <PageTitle title={titleCategory} />

        <div className="catalog-grid">
          {loading ? <PreloaderList /> : listings.length > 0 ? (
            <>

              <Pagination
                listings={listings}
                listingType={params.catagoryName}
                uid={uid}
                accountInfo={accountInfo}
                cabinetType={cabinetType}

              />
            </>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listingSearch: state.listingSearchReducer,
    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.typeCabinet,

  }
}



export default connect(mapStateToProps)(Catalog);
