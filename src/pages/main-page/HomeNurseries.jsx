import { useEffect, useState } from 'react';
import { getListing } from 'store/asyncActions/getListing';

import CardsItem from 'pages/catalog/CardsItem';

const HomeNurseries = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    getListing('nurseries', false, 'limit', false, 4).then(res => {

      console.log(res)
      setListings(res);
      setLoading(false);
    });

  }, []);


  return (
    <>
      <div className="main-full head-section">
        <h2 className="title-section">
          Питомники</h2><a className="back-link" href="/catalog/nurseries">Все Питомники</a>
      </div>
      <div className='main-grid'>
        {loading ? 'Loading' : listings &&
          listings.map((item) => (
            <div key={item.id} className="col-3">
              <CardsItem
                listing={item}
                key={item.id}
              />
            </div>
          ))}
      </div></>
  )
}

export default HomeNurseries
