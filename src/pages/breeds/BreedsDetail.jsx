import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';

import BreedAdv from 'pages/breeds/breedsDetail/BreedAdv';

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

import ico24 from 'front-end/images/adv/malopodvizhnaya-koshka.svg';
import ico25 from 'front-end/images/adv/legko-obuchaema-koshka.svg';
import ico26 from 'front-end/images/adv/podhodit-allergikam-koshka.svg';
import ico27 from 'front-end/images/adv/giperaktivnaya-koshka.svg';
import ico28 from 'front-end/images/adv/nabiraet-lishnij-ves-koshka.svg';
import ico29 from 'front-end/images/adv/mnogo-spit-koshka.svg';
import ico30 from 'front-end/images/adv/mirolyubiva-koshka.svg';
import ico31 from 'front-end/images/adv/malo-est-koshka.svg';


import Traits from 'pages/breeds/breedsDetail/Traits';
import PageNav from 'pages/breeds/breedsDetail/PageNav';


import ImageGallery from 'react-image-gallery';


const Breeds = () => {

  const siteWp = 'http://zoo-base.sait.website/';

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  //http://zoo-base.sait.website/wp-json/wp/v2/events?slug=conferam-tecum-quam-cuiq
  // /wp-json/custompath/connect?slug=corgi
  useEffect(() => {
    // console.log('params.breedsID', params.breedsID)
    axios.get(`${siteWp}/wp-json/breeds/detail?slug=${params.breedsID}`).then(res => {

      let imagesTemp = res.data[0].images;

      imagesTemp?.map((item) => {
        item.original = item.full_image_url;
        item.thumbnail = item.thumbnail_image_url;
      });

      // console.log('res', res.data);
      setListings(res.data);
      setLoading(false);


      // setTimeout(() => {
      //   window.scrollTo(0, 0);
      // }, 1500)
    });



  }, [])


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
        case "type15":
          ico = ico24;
          break;
        case "type16":
          ico = ico25;
          break;
        case "type17":
          ico = ico26;
          break;
        case "type18":
          ico = ico27;
          break;
        case "type19":
          ico = ico28;
          break;
        case "type20":
          ico = ico29;
          break;
        case "type21":
          ico = ico30;
          break;
        case "type22":
          ico = ico31;
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

      {loading ? 'Loading...' : listings.length > 0 ? (

        <>
          <div className="main-full">
            <h1 dangerouslySetInnerHTML={{ __html: listings[0].title }}></h1>
          </div>

          <div className="main-grid breed-main">
            <div className="col-9 col-xxl-8 col-lg-7 col-md-8 col-xs-12">
              <div className="breed-slider-wrapper ">
                {listings[0].images && (
                  <>
                    <div className="breed-slider-wrapper-desktop">
                      <ImageGallery
                        items={listings[0].images}
                        thumbnailPosition="right"
                      />
                    </div>
                    <div className="breed-slider-wrapper-mobile">
                      <ImageGallery
                        items={listings[0].images}
                        thumbnailPosition="bottom"
                      />
                    </div>
                  </>
                )}

                <div className="hidden breed-adv-mobile">

                  <BreedAdv listings={listings} />

                </div>
              </div>
              <div className=" breed-description" id="point-1">

                <div dangerouslySetInnerHTML={{ __html: listings[0].pervyj_abzac }}></div>
                <div id="point-2">
                  <Traits listings={listings} />
                </div>
                <div className="breed-description-roof-content" >
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

                <div id="point-3" dangerouslySetInnerHTML={{ __html: listings[0].tretij_blok_teksta }}></div>
                {listings[0].interesnyj_fakt_2.title && (<div className="breed-description-roof-content">
                  <h2>
                    <img src={listings[0].interesnyj_fakt_2.img} alt="" />
                    <span>{listings[0].interesnyj_fakt_2.title}</span></h2>
                  <div className="breed-description-text">
                    {listings[0].interesnyj_fakt_2.content}
                  </div>
                </div>)}
                <div id="point-4" dangerouslySetInnerHTML={{ __html: listings[0].chetvertyj_blok_teksta }}></div>

                {listings[0].interesnyj_fakt_3.title && (<div className="breed-description-roof-content">

                  <h2>
                    <img src={listings[0].interesnyj_fakt_3.img} alt="" />
                    <span>{listings[0].interesnyj_fakt_3.title}</span></h2>
                  <div className="breed-description-text">
                    {listings[0].interesnyj_fakt_3.content}
                  </div>
                </div>)}

                <div id="point-6" dangerouslySetInnerHTML={{ __html: listings[0].pyatyj_blok_teksta }}></div>
              </div>
            </div>
            <div className="col-3 col-xxl-4 col-lg-5 col-md-4 col-xs-12 breed-adv-box hidden-xs">

              <BreedAdv listings={listings} />
              <PageNav />
            </div>
          </div>

        </>
      ) : 'empty'}
      {loading ? 'Loading...' : (
        <>
          <Reviews
            title={listings[0].title}
            elementId={listings[0].id}
            authwp={listings[0].auth}
          />
          <div className="stub"></div></>
      )
      }
    </div>
  )
}

export default Breeds
