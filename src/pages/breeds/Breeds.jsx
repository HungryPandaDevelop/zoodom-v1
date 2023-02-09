import { useState, useEffect } from 'react';
import BreedsItem from 'pages/breeds/parts/BreedsItem';
import Search from 'pages/breeds/parts/Search';
import SearchSelects from 'pages/breeds/parts/SearchSelects';

import axios from "axios";

const Breeds = () => {

  const siteWp = 'http://zoo-base.sait.website/';

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [getSerchVal, setGetSearchVal] = useState('');

  const [searchValSelect, setSearchValSelect] = useState({
    city: '',
    keep: '',
    size: '',
    purpose: '',

  });

  const [loadListFields, setLoadListFields] = useState([])
  const [loadingLoadListFields, setLoadingLoadListFields] = useState(true)

  useEffect(() => {
    console.log(searchValSelect);
    axios.get(`${siteWp}/wp-json/breeds/list?search=${getSerchVal}&city=${searchValSelect?.city}&keep=${searchValSelect?.keep}&purpose=${searchValSelect?.purpose}&size=${searchValSelect?.size}`).then(res => {
      setLoading(false);
      setListings(res.data);


    });
    axios.get(`${siteWp}/wp-json/fields/get`).then(res => {
      setLoadingLoadListFields(false);
      setLoadListFields(res.data)
    });

  }, [getSerchVal, searchValSelect])




  return (
    <div className='content'>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Все породы собак по алфавиту</h1>
      </div>
      <Search
        setGetSearchVal={setGetSearchVal}

      />

      {loadingLoadListFields ? (<div className="main-full">Loading...</div>) : (
        <SearchSelects
          fieldCity={loadListFields?.field_city?.choices}
          fieldKeep={loadListFields?.field_keep?.choices}
          fieldSize={loadListFields?.field_size?.choices}
          fieldPurpose={loadListFields?.field_purpose?.choices}
          searchValSelect={searchValSelect}
          setSearchValSelect={setSearchValSelect}
        />
      )}

      <div className="catalog-grid">

        {loading ? 'Loading...' : listings.length > 0 ? (
          <>
            {listings.map((item, index) => (
              <div className='col-3 col-lg-4 col-sm-6  col-xs-12' key={index}>
                <BreedsItem listing={item} />

              </div>))}
          </>
        ) : 'empty'}
      </div>

      <div className="stub"></div>
    </div>
  )
}

export default Breeds
