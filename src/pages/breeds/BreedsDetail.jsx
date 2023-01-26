import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';

import ico1 from 'front-end/images/adv/sobaka-naznachenie.svg';
import ico2 from 'front-end/images/adv/sobaka-stoimost.svg';
import ico3 from 'front-end/images/adv/sobaka-dlitelnost_zhizni.svg';
import ico4 from 'front-end/images/adv/sobaka-potomstvo.svg';
import ico5 from 'front-end/images/adv/sobaka-rost.svg';
import ico6 from 'front-end/images/adv/sobaka-ves.svg';
import ico7 from 'front-end/images/adv/sobaka-linka.svg';
import ico8 from 'front-end/images/adv/sobaka-soderzhanie.svg';
import ico9 from 'front-end/images/adv/razmer-sobaki.svg';

import ico10 from 'front-end/images/adv/malopodvignaya-sobaka.svg';
import ico11 from 'front-end/images/adv/sobaka-malo-est.svg';
import ico12 from 'front-end/images/adv/sobaka-dla-allergika.svg';
import ico13 from 'front-end/images/adv/sobaka-mnogo-spit.svg';
import ico14 from 'front-end/images/adv/sobaka-drugit-s-detmi.svg';
import ico15 from 'front-end/images/adv/giperaktivnaya-sobaka.svg';
import ico16 from 'front-end/images/adv/sobaka-nyanka.svg';
import ico17 from 'front-end/images/adv/sobaka-prigodna-dka-ohoti.svg';
import ico18 from 'front-end/images/adv/legko-obuchaemaya-sobaka.svg';
import ico19 from 'front-end/images/adv/ochen-ymnaya-sobaka.svg';
import ico20 from 'front-end/images/adv/mirolubivaya-sobaka.svg';
import ico21 from 'front-end/images/adv/sobaka-otlichnii-storog.svg';
import ico22 from 'front-end/images/adv/sobaka-ne-drugit-s-detmi.svg';
import ico23 from 'front-end/images/adv/sobaka-nabiraet-lishnii-ves.svg';
import ico24 from 'front-end/images/adv/ochen-ymnaya-sobaka.svg';
import ico25 from 'front-end/images/adv/legko-obuchaemaya-sobaka.svg';




import ico50 from 'front-end/images/adv/strana-proishogdeniya-sobaki.svg';

import ImageGallery from 'react-image-gallery';


const Breeds = () => {

  const siteWp = 'http://zoo-base.sait.website/';

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesAll, setImagesAll] = useState([]);
  const params = useParams();

  //http://zoo-base.sait.website/wp-json/wp/v2/events?slug=conferam-tecum-quam-cuiq
  // /wp-json/custompath/connect?slug=corgi
  useEffect(() => {
    console.log('params.breedsID', params.breedsID)
    axios.get(`${siteWp}/wp-json/breeds/detail?slug=${params.breedsID}`).then(res => {
      let imagesTemp = res.data[0].images;
      imagesTemp.map((item) => {
        item.original = item.full_image_url;
        item.thumbnail = item.thumbnail_image_url;

      })
      console.log('res', res.data);
      setListings(res.data);
      setLoading(false)
    });



  }, [])

  const renderItemFromTo = (id, title, ico, partsText) => {
    return (
      <>
        {
          (listings[0][id] && (listings[0][id].num_1 || listings[0][id].num_2)) && (
            <>
              <div className="breed-adv-item">
                <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
                <div className="breed-adv-item-info">
                  <h3>{title}</h3>
                  <h4>
                    {listings[0][id].num_1 && (<>от {listings[0][id].num_1} </>)}
                    {listings[0][id].num_2 && (<>до {listings[0][id].num_2} {partsText}</>)}
                  </h4>
                </div>
              </div>
            </>
          )
        }
      </>
    )
  }

  const renderItemFromToFamale = (id, title, ico, partsText) => {
    return (
      <>
        {
          (listings[0][id] && listings[0][id].devochka.num_1) && (
            <>
              <div className="breed-adv-item">
                <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
                <div className="breed-adv-item-info">
                  <h3>{title}</h3>
                  <h4>
                    Мальчик  от {listings[0][id].malchik.num_1 + ' '}
                    до {listings[0][id].malchik.num_2} {partsText}
                  </h4>
                  <h4>
                    Девочка от {listings[0][id].devochka.num_1 + ' '}
                    до {listings[0][id].devochka.num_2} {partsText}
                  </h4>


                </div>
              </div>
            </>
          )
        }
      </>
    )
  }

  const renderItem = (id, title, ico) => {
    return (<>
      {listings[0][id] && (
        <div className="breed-adv-item">
          <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
          <div className="breed-adv-item-info">
            <h3>{title}</h3>
            <h4>{listings[0][id]}</h4>
          </div>
        </div>
      )}</>)
  }

  const renderItemCheckbox = (obj) => {

    return obj.value.map((item, index) => {


      let ico;
      switch (item) {
        case "type1":
          ico = ico10;
          break;
        case "type2":
          ico = ico12;
          break;
        case "type3":
          ico = ico13;
          break;
        case "type4":
          ico = ico11;
          break;
        case "type5":
          ico = ico14;
          break;
        case "type6":
          ico = ico15;
          break;
        case "type7":
          ico = ico16;
          break;
        case "type8":
          ico = ico17;
          break;
        case "type9":
          ico = ico18;
          break;
        case "type10":
          ico = ico19;
          break;
        case "type11":
          ico = ico20;
          break;
        case "type12":
          ico = ico21;
          break;
        case "type13":
          ico = ico22;
          break;
        case "type14":
          ico = ico23;
          break;
        default:
          console.log("Sorry.");
      }


      return (
        <div key={index} className="breed-adv-item">
          <div className="breed-adv-item-img">
            <img src={ico} alt="" />
          </div>
          <div className="breed-adv-item-info">
            <h4>{obj.choices[item]}</h4>
          </div>
        </div>

      )
    }
    );
  }


  return (
    <div className='content'>
      <div className="stub"></div>

      <div className="main-full">

        {loading ? 'Loading...' : listings.length > 0 ? (

          <>
            <div className="main-full">
              <h1 dangerouslySetInnerHTML={{ __html: listings[0].title }}></h1>
            </div>
            <div className="main-grid breed-main">
              <div className="col-9 col-xxl-8">
                <div className="breed-slider-wrapper">
                  <ImageGallery
                    items={listings[0].images}
                    thumbnailPosition="right"

                  />
                </div>
                <div className=" breed-description">

                  <div className='breed-description-roof'>


                  </div>

                  <div dangerouslySetInnerHTML={{ __html: listings[0].pervyj_abzac }}></div>

                  <div className="breed-description-roof-content">
                    <h2>Особенности породы:</h2>
                    {renderItemCheckbox(listings[0].osobennosti_porody)}
                  </div>

                  <div dangerouslySetInnerHTML={{ __html: listings[0].vtoroj_blok_teksta }}></div>

                  {listings[0].interesnyj_fakt_1.title && (<div className="breed-description-roof-content">

                    <h2>
                      <img src={listings[0].interesnyj_fakt_1.img} alt="" />
                      <span>{listings[0].interesnyj_fakt_1.title}</span></h2>
                    <div className="breed-description-text">
                      {listings[0].interesnyj_fakt_1.content}
                    </div>
                  </div>)}

                  <div dangerouslySetInnerHTML={{ __html: listings[0].tretij_blok_teksta }}></div>
                  {listings[0].interesnyj_fakt_2.title && (<div className="breed-description-roof-content">
                    <h2>
                      <img src={listings[0].interesnyj_fakt_2.img} alt="" />
                      <span>{listings[0].interesnyj_fakt_2.title}</span></h2>
                    <div className="breed-description-text">
                      {listings[0].interesnyj_fakt_2.content}
                    </div>
                  </div>)}
                  <div dangerouslySetInnerHTML={{ __html: listings[0].chetvertyj_blok_teksta }}></div>

                  {listings[0].interesnyj_fakt_3.title && (<div className="breed-description-roof-content">

                    <h2>
                      <img src={listings[0].interesnyj_fakt_3.img} alt="" />
                      <span>{listings[0].interesnyj_fakt_3.title}</span></h2>
                    <div className="breed-description-text">
                      {listings[0].interesnyj_fakt_3.content}
                    </div>
                  </div>)}

                  <div dangerouslySetInnerHTML={{ __html: listings[0].pyatyj_blok_teksta }}></div>
                </div>
              </div>
              <div className="col-3 col-xxl-4 breed-adv-box">
                <div className="breed-adv">
                  {listings[0].naznachenie && (
                    <div className="breed-adv-item">
                      <div className="breed-adv-item-img"><img src={ico1} alt="" /></div>
                      <div className="breed-adv-item-info">
                        <h3>Назначение</h3>
                        <h4>
                          {(listings[0].naznachenie).join(', ')}
                        </h4>
                      </div>
                    </div>

                  )}


                  {renderItemFromTo('stoimost_shhenka', 'Стоимость щенка', ico2, 'тыс. руб.')}



                  {renderItemFromTo('dlitelnost_zhizni', 'Длительность жизни', ico3, 'лет')}

                  {renderItemFromTo('potomstvo', 'Потомство', ico4, 'щенков')}


                  {renderItemFromToFamale('rost_v_holke', 'Рост в холке', ico5, 'см.')}
                  {renderItemFromToFamale('ves', 'Вес', ico6, 'кг.')}



                  {renderItem('linka', 'Линька', ico7)}
                  {renderItem('soderzhanie', 'Содержание', ico8)}
                  {renderItem('strana', 'Страна происхождения', ico50)}
                  {/* {renderItem('osobennosti_porody', 'Особенности породы', ico3)} */}
                  {renderItem('razmer', 'Размер', ico9)}


                  <div className="btn-container">
                    <a href="#" className="btn btn--blue">Купить щенка {listings[0].title}</a>
                  </div>
                </div>

              </div>
            </div>

          </>
        ) : 'empty'}
      </div>
      <Reviews
        listingType={'nurseries'}
        elementId={'02jc6ldhVJaArhTu1Lue'}
      // listing={listing}
      />
      <div className="stub"></div>
    </div>
  )
}

export default Breeds
