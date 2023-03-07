import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="ln nav-header">
        <li> <span>Породы</span><i></i>
          <ul className="ln">
            <li><Link to="/porodi-sobak/">Породы собак</Link></li>
            <li><Link to="/porodi-koshki/">Породы Кошек</Link></li>
          </ul>
        </li>
        <li> <Link to="/catalog/company/">Все компании</Link></li>
      </ul>
      <ul className="ln nav-header">
        <li> <Link to="/contacts/">Контакты</Link></li>
      </ul>
    </>
  )
}

export default Nav;
