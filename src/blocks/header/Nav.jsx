import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="ln nav-header">
        <li> <Link to="/porodi/">Породы</Link></li>
        <li> <Link to="/catalog/nurseries/">Питомники</Link></li>
      </ul>
      <ul className="ln nav-header">
        <li> <Link to="/contacts/">Контакты</Link></li>
      </ul>
    </>
  )
}

export default Nav;
