
import { addCards } from 'store/asyncActions/addCards';
import { getListing, onDeleteCollection } from 'store/asyncActions/getListing';


import { useEffect, useState } from 'react';


const ToggleBtn = ({
  listing,
  uid,
  nameCollection
}) => {

  const [collectionId, setCollectionId] = useState([]);
  const [collection, setCollection] = useState([]);
  const [update, setUpdate] = useState(false);


  useEffect(() => {
    let isMounted = true;

    getListing(nameCollection, uid, 'userRef').then(res => {
      if (isMounted) {
        setCollectionId(res.map(el => el.idCards));
        setCollection(res);
      }
    });

    return () => { isMounted = false };
  }, [update]);



  let toggleStatus = collectionId.includes(listing.id);

  const toggleCollection = () => {

    if (toggleStatus) {
      const currentId = collection.filter(item => item.idCards === listing.id)

      setCollectionId(collectionId.filter(item => item === listing.id))
      onDeleteCollection(nameCollection, currentId[0].id);
    } else {

      listing.idCards = listing.id
      addCards(listing, nameCollection, uid);
    }
    setUpdate(!update);
  }


  return (
    <>
      <div className={`hide-btn ${toggleStatus ? 'active' : ''}`} onClick={toggleCollection}>{toggleStatus ? 'Активно' : 'Не активно'}</div>
    </>
  )

}




export default ToggleBtn;