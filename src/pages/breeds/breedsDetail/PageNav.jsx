import { useEffect } from "react"
const PageNav = () => {


  useEffect(() => {

  }, [])

  const movePage = (e) => {

    let getPoint = e.target.dataset.index;
    let pointOne = document.getElementById(getPoint).offsetTop;

    console.log('move', e.target.dataset.index, pointOne)
    window.scrollTo({
      top: pointOne - 90,
      behavior: 'smooth',
    });
  }

  const movePageExtraOne = (e, index) => {
    let getPoint = e.target.dataset.index;
    let parent = document.querySelector(getPoint);
    let firstChild = parent.querySelectorAll('h2');

    let point = firstChild[index].offsetTop;

    window.scrollTo({
      top: point - 90,
      behavior: 'smooth',
    });
  }

  return (
    <div className="breedsNav">
      <h2>Содержание</h2>
      <ul className="ln">
        <li><h3><span data-index="point-1" onClick={(e) => movePage(e)}>1 Описание породы</span></h3></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.1 Голова </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.2 Морда  </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.3 Уши  </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.4 Глаза  </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.5 Зубы и челюсти </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.6 Лапы (Передние конечности Задние конечности) </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.7 Туловище </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.8 Хвост </span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.9 Шерсть</span></li>
        <li><span data-index="point-2" onClick={(e) => movePage(e)}>1.10 Окрас</span></li>
        <li><h3><span data-index="point-3" onClick={(e) => movePage(e)}>2. Характер</span></h3></li>
        <li><h3><span data-index="point-4" onClick={(e) => movePage(e)}>3. Содержание и уход</span></h3></li>
        <li><h3><span data-index="#point-4" onClick={(e) => movePageExtraOne(e, 3)}>4. Дрессировка и обучение</span></h3></li>
        <li><h3><span data-index="point-6" onClick={(e) => movePage(e)}>5. Как выбрать щенка</span></h3></li>
        <li><h3><span data-index="#point-6" onClick={(e) => movePageExtraOne(e, 2)}>6. Здоровье и болезни</span></h3></li>
      </ul>
    </div>
  )
}

export default PageNav
