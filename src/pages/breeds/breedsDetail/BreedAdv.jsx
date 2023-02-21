import ico1 from 'front-end/images/adv/sobaka-naznachenie.svg';
import ico2 from 'front-end/images/adv/sobaka-stoimost.svg';
import ico3 from 'front-end/images/adv/sobaka-dlitelnost_zhizni.svg';
import ico4 from 'front-end/images/adv/sobaka-potomstvo.svg';
import ico5 from 'front-end/images/adv/sobaka-rost.svg';
import ico6 from 'front-end/images/adv/sobaka-ves.svg';


import ico7 from 'front-end/images/adv/sobaka-linka.svg';
import ico8 from 'front-end/images/adv/sobaka-soderzhanie.svg';

import ico50 from 'front-end/images/adv/strana-proishogdeniya-sobaki.svg';
import ico9 from 'front-end/images/adv/razmer-sobaki.svg';


import ico32 from 'front-end/images/adv/dlitelnost-zhizni-koshka.svg';
import ico33 from 'front-end/images/adv/potomstvo-koshka.svg';
import ico34 from 'front-end/images/adv/razmer-koshka.svg';

const BreedAdv = ({ listings }) => {

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
    // console.log('id', listings[0][id])
    return (<>
      {

        listings[0][id]?.length > 0 && (
          <div className="breed-adv-item">
            <div className="breed-adv-item-img"><img src={ico} alt="" /></div>
            <div className="breed-adv-item-info">
              <h3>{title}</h3>
              {Array.isArray(listings[0][id]) ? (
                listings[0][id].map((item, index) => (<h4 key={index}>{item}</h4>))
              ) : <h4>{listings[0][id]}</h4>}

            </div>
          </div>
        )}</>)
  }


  return (
    <div className="breed-adv">

      {renderItem('naznachenie', 'Назначение', ico1)}


      {renderItemFromTo('stoimost_shhenka', 'Стоимость щенка', ico2, 'тыс. руб.')}



      {renderItemFromTo('dlitelnost_zhizni', 'Длительность жизни', ico3, 'лет')}
      {renderItemFromTo('dlitelnost_zhizni_koshka', 'Длительность жизни', ico32, 'лет')}

      {renderItemFromTo('potomstvo', 'Потомство', ico4, 'щенков')}
      {renderItemFromTo('potomstvo_koshka', 'Потомство', ico33, 'котят')}


      {renderItemFromToFamale('rost_v_holke', 'Рост в холке', ico5, 'см.')}
      {renderItemFromToFamale('ves', 'Вес', ico6, 'кг.')}



      {renderItem('linka', 'Линька', ico7)}
      {renderItem('soderzhanie', 'Содержание', ico8)}
      {renderItem('strana', 'Страна происхождения', ico50)}
      {/* {renderItem('osobennosti_porody', 'Особенности породы', ico3)} */}
      {renderItem('razmer', 'Размер', ico9)}
      {renderItem('razmer_koshka', 'Размер', ico34)}


      <div className="btn-container">
        <a href="#" className="btn btn--blue">Купить щенка {listings[0].title}</a>
      </div>
    </div>
  )
}

export default BreedAdv
