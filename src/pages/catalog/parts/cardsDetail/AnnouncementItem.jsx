import stubImg from 'front-end/images/stub-img.svg';
import { Link } from 'react-router-dom';

const AnnouncementItem = ({ listing }) => {



  const imgCards = listing.cards_photo ? listing.cards_photo : stubImg;


  let coords;
  if (listing.cards_coords) {
    coords = listing.cards_coords.split('--');

  }


  return (
    <>
      <div className="nurseries-item">
        <Link className="nurseries-item-img" to={`/catalog/nurseries/${listing.id}`}>
          <div className="img-cover" style={{ backgroundImage: `url( ${imgCards} )` }}>

            <img src={imgCards} alt="" />
          </div>

        </Link>
        <div className="nurseries-item-info">
          <h3><Link to={`/catalog/nurseries/${listing.id}`}>{listing.card_name}</Link></h3>
          <div className="announcement-item-info">Русская голубая; Девочка, 2 года</div>
          {listing.description && (<div className="announcement-item-description">{listing.description}</div>)}
          {listing.age && (<div className="announcement-item-date"> <b>Дате рождения:</b><span>{listing.age}</span></div>)}
        </div>
      </div>
    </>
  )
}

export default AnnouncementItem;
