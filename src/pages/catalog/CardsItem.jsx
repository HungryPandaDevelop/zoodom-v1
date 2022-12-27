import stubImg from 'front-end/images/stub-img.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getListing } from 'store/asyncActions/getListing';


const CardsItem = ({ listing }) => {


  const [countGrade, setCountGrade] = useState(0);
  const [totalGrade, setTotalGrade] = useState(0);

  const imgCards = listing.cards_photo ? listing.cards_photo : stubImg;


  let coords;
  if (listing.cards_coords) {
    coords = listing.cards_coords.split('--');
    console.log(coords[0])

  }

  useEffect(() => {

    getListing('reviews', listing.id, 'reviews').then(res => {


      let totalGradeTemp = 0;

      if (res.length > 0) {
        setCountGrade(res.length);

        res.map(item => {
          totalGradeTemp = totalGradeTemp + Number(item.grade);
        })
        totalGradeTemp = (totalGradeTemp / res.length).toFixed(2);
        setTotalGrade(totalGradeTemp);
      }

    });

  }, []);

  return (
    <>
      <div className="nurseries-item">
        <Link className="nurseries-item-img" to={`/catalog/nurseries/${listing.id}`}>
          <div className="img-cover" style={{ backgroundImage: `url( ${imgCards} )` }}>

            <img src={imgCards} alt="" />
          </div>
          <div className="nurseries-raiting"> <i> </i><span>{totalGrade}</span><em>| {countGrade} отзывов</em></div>
        </Link>
        <div className="nurseries-item-info">
          <h3><Link to={`/catalog/nurseries/${listing.id}`}>{listing.card_name}</Link></h3>
          <div className="nurseries-item-text">{listing.cards_description_mini}</div>
          {listing.cards_coords && (
            <div className="nurseries-address"> <b>Адрес:</b><span>{coords[0]}</span></div>
          )}

        </div>
      </div>
    </>
  )
}

export default CardsItem;
