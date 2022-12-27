
const CardsAbout = ({ listing }) => {
  return (
    <>

      {listing.about && (
        <div className="cards-about-item">
          <h3>Обо мне</h3>
          {listing.about}
        </div>
      )}



    </>
  )
}

export default CardsAbout
