import { useState, useEffect } from 'react';
import BreedsItem from 'pages/breeds/parts/BreedsItem';
import Search from 'pages/breeds/parts/Search';

import axios from "axios";

const Breeds = () => {

  const siteWp = 'http://zoo-base.sait.website/';

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [getSerchVal, setGetSearchVal] = useState('');

  useEffect(() => {

    axios.get(`${siteWp}/wp-json/breeds/list?search=${getSerchVal}`).then(res => {
      console.log('list', res.data);

      setListings(res.data);
      setLoading(false)
    });

  }, [getSerchVal])




  return (
    <div className='content'>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Все породы собак по алфавиту</h1>
      </div>
      <Search
        setGetSearchVal={setGetSearchVal}
      />
      <div className="main-grid">

        {loading ? 'Loading...' : listings.length > 0 ? (
          <>
            {listings.map((item, index) => (
              <div className='col-3' key={index}>
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
