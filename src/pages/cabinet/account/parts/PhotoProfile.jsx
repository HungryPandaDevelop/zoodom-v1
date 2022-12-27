import defaultCardsImg from 'front-end/images/cabinet/profile-black.svg'

const PhotoProfile = ({ userInfo }) => {

  const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;

  return (
    <>

      <div className="cards-face-container">
        <b>Фото профиля</b>
        <div
          className={`img-cover ${userInfo.imgsAccount ? 'cards-face' : 'empty-face'} `}
          style={{ backgroundImage: `url(${imgCards})` }}
        >
        </div>
      </div>
    </>
  )
}

export default PhotoProfile;
