import stubImg from 'front-end/images/stub-img.svg';
import { Link } from 'react-router-dom';



const CardsItem = ({ listing }) => {

  const imgCards = listing.thumbnail ? listing.thumbnail : stubImg;

  return (
    <>
      <div className="nurseries-item">
        <Link className="nurseries-item-img" to={`/porodi-${listing.category}/${listing.slug}.html`}>
          <div className="img-cover" style={{ backgroundImage: `url( ${imgCards} )` }}>
          </div>
        </Link>
        <div className="nurseries-item-info">
          <h3><Link to={`/porodi-${listing.category}/${listing.slug}.html`}>{listing.title}</Link></h3>
        </div>
      </div>
    </>
  )
}

export default CardsItem;
