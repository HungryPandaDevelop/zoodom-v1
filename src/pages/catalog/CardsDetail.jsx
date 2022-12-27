//1 норм решение но не работает с картинкой fb
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
//1 норм решение но не работает с картинкой fb

import { useReactToPrint } from 'react-to-print';


import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import CardsSidebar from "pages/catalog/parts/cardsDetail/CardsSidebar";
import Breadcrumbs from 'pages/parts/Breadcrumbs';




import CardsMain from 'pages/catalog/parts/cardsDetail/CardsMain';

import CardsAbout from 'pages/catalog/parts/cardsDetail/CardsAbout';
// import CardsSidebar from 'pages/catalog/parts/cardsDetail/CardsSidebar';
import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';

import defaultCardsImg from 'front-end/images/icons/avatar-black.svg';


const CardsDetail = ({ uid, cabinetType }) => {
  const refContent = useRef(null);

  const toPdf = (namecards, accountName) => {

    htmlToImage.toPng(refContent.current, { quality: 0.50 })
      .then(function (dataUrl) {

        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        const pdf = new jsPDF();
        // console.log(dataUrl)
        const imgProps = pdf.getImageProperties(dataUrl);
        console.log(imgProps)
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / (imgProps.width);
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${namecards}-${accountName}.pdf`);
      });

  }

  const handlePrint = useReactToPrint({
    content: () => refContent.current,
  });

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {

    getSingleListing(params.catagoryName, params.elementId).then(res => {
      setListing({ ...res, id: params.elementId });
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <>Loading</>
  }

  const imgCards = listing.userInfo.imgsAccount ? listing.userInfo.imgsAccount : defaultCardsImg;


  return (
    <>
      <div className="stub"></div>

      <Breadcrumbs />
      <div className="stub"></div>
      <div className="content" >
        <div className="main-grid" >
          <div className="col-10 col-lg-9 col-sm-12 docpdf-container" >
            <div className="docpdf" ref={refContent}>

              <CardsMain
                listing={listing}
                elementId={params.elementId}
                imgCards={imgCards}
                listingType={params.catagoryName}
              />



              <CardsAbout listing={listing} />

              <Reviews
                listingType={params.catagoryName}
                elementId={params.elementId}
                listing={listing}
              />
            </div>
          </div>
          <div className="col-2 col-lg-3 hidden-sm hidden-xs">
            <CardsSidebar
              toPdf={toPdf}
              handlePrint={handlePrint}
              listing={listing}
              imgCards={imgCards}
              uid={uid}
              cabinetType={cabinetType}
              listingType={params.catagoryName}
              elementId={params.elementId}
            />
          </div>
        </div>

      </div>
      <div className="stub"></div>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentCard: state.accountInfo.currentCard,
    roomUpdate: state.accountInfo.roomUpdate,
    uid: state.accountInfo.uid,
    cabinetType: state.accountInfo.typeCabinet,
  }
}



export default connect(mapStateToProps)(CardsDetail);

