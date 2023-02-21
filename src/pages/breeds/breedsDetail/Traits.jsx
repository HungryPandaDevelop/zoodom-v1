import ico1 from 'front-end/images/traits/golova.svg';
import ico2 from 'front-end/images/traits/zubi.svg';
import ico3 from 'front-end/images/traits/yshi.svg';
import ico4 from 'front-end/images/traits/glaza.svg';
import ico5 from 'front-end/images/traits/tuluvisho.svg';
import ico6 from 'front-end/images/traits/lapi.svg';
import ico7 from 'front-end/images/traits/sherst.svg';
import ico8 from 'front-end/images/traits/chelusti.svg';
import ico9 from 'front-end/images/traits/morda.svg';

const Traits = ({ listings }) => {

  console.log('listings', listings[0].otlichitelnye_cherty);

  const nameArr = ['Голова', 'Зубы', 'Уши', 'Глаза', 'Туловище', 'Лапы', 'Шерсть', 'Челюсть', 'Морда'];
  const slugArr = ['golova', 'zuby', 'ushi', 'glaza', 'korpus', 'konechnosti', 'sherst', 'cheljust', 'morda'];
  const imgArr = [ico1, ico2, ico3, ico4, ico5, ico6, ico7, ico8, ico9];
  const obj = listings[0].otlichitelnye_cherty;
  return (
    <div className='breed-traits'>
      <h2>Отличительные черты</h2>
      {nameArr.map((item, index) => {
        if (obj[slugArr[index]]) {
          return (<div className="traits-item" key={index}>
            <h3>{item}</h3>
            <img src={imgArr[index]} alt="" />
            <div className="traits-text">
              {obj[slugArr[index]]}
            </div>
          </div>)
        }
      })}

    </div>
  )
}

export default Traits
