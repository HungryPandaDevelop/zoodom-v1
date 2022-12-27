import { useState, useEffect } from 'react';



import CheckLogged from 'blocks/header/CheckLogged';
import Logo from 'blocks/header/Logo';
import City from 'blocks/header/City';

import AuthInfo from 'blocks/header/AuthInfo';
import Nav from 'blocks/header/Nav';

import MenuPopup from 'components/popup/MenuPopup';
import CallPopup from 'components/popup/CallPopup';

const Header = () => {


  useEffect(() => {
    const hideByBody = (e) => {
      if (e.target.className !== 'hamburger-btn element-btn') {
        setShowNavMenu(false)
      }
      if (e.key === 'Escape') { setShowNavMenu(false); }
    }
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };
  }, []);



  const [showNavMenu, setShowNavMenu] = useState(false);

  const showPopup = () => {
    setShowNavMenu(true);
  }
  const closePopup = () => {
    setShowNavMenu(false);
  }

  return (
    <>

      <MenuPopup
        showNavMenu={showNavMenu}
        closePopup={closePopup}
      />
      <CallPopup />
      <AuthInfo />
      <header >
        <div className="main-grid">
          <div className="vertical-align col-5">
            <Logo />
            <div className="hamburger-btn element-btn" onClick={showPopup}></div>
            <City />
            <CheckLogged showPopup={showPopup} />
          </div>
          <div className="vertical-align col-6">
            <Nav />
          </div>
          <div className="vertical-align col-1">
            <a className="search-btn" href="/"></a>
          </div>
          <div className="header-line"></div>


        </div>

      </header>
    </>
  )
}

export default Header
