import imgLogo from 'front-end/images/logo.svg'
import vkw from 'front-end/images/social/vk-white.svg'
import vkor from 'front-end/images/social/vk-orange.svg'
import tlw from 'front-end/images/social/telegram-white.svg'
import tlor from 'front-end/images/social/telegram-orange.svg'
import wzw from 'front-end/images/social/whatsapp-white.svg'
import wzor from 'front-end/images/social/whatsapp-orange.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      {/* <div className="stub-footer"></div> */}
      <footer>
        <div className="main-grid">
          <div className="col-3 col-md-12">
            <div className="logo-container">
              <Link className="logo" to="/">
                <img src={imgLogo} alt={imgLogo} />
              </Link>
            </div>
            <div className="company">
              Компания «Zoodom Russia»
            </div>
            <div className="social">
              <Link className="social-ico--white" to="/">
                <img src={vkw} alt="" />
                <img className='ico-hover' src={vkor} alt="" />
              </Link>
              <Link className="social-ico--white" to="/">
                <img src={tlw} alt="" />
                <img className='ico-hover' src={tlor} alt="" />
              </Link>
              <Link className="social-ico--white" to="/">
                <img src={wzw} alt="" />
                <img className='ico-hover' src={wzor} alt="" />
              </Link>

            </div>

          </div>
          <div className="col-4 col-xs-6 contacts-footer">
            <div className="phone-footer contacts-footer-item">
              <i className='phone-ico'></i>
              <a href="tel:79852826532">+7 985 282 65 32</a>
            </div>
            <div className="address-footer contacts-footer-item">
              <i className='marker-ico'></i>
              <span>
                Москва, 102250 <br />
                15-Парковая 29к8, <br />
                офис 112
              </span>
            </div>
            <div className="mail-footer contacts-footer-item">
              <a href="mailto:mail@mail.ru">
                <i className='mail-ico'></i><span>
                  mail@mail.ru</span></a>
            </div>

          </div>
          <nav className="col-2 col-md-4 col-xs-6">
            <h3>Портал</h3>
            <ul>
              <li> <a href="/about"> О нас</a></li>
              <li> <a href="/contacts">Контакты</a></li>
              <li> <a href="/breeds">Породы</a></li>
              <li> <a href="/catalog/nurseries">Питомники</a></li>
            </ul>
          </nav>
          <div className="col-3 col-xs-12  footer-info">
            <div>Мы будем признательны за вашу помощь по улучшению функционала портала. Ждем ваших предложений: </div>
            <div className="cooperation">
              <b>Заявка на сотрудничество:</b>
              <a href="/">
                partner@zoodom.ru
              </a>
            </div>
          </div>

          <div className="col-12 footer-bottom">
            <div className="copyright">
              © 2023 Zoodom. Все права защищены.
            </div>
            <Link to="/">Пользовательское соглашение</Link>
            <Link to="/">Политика конфиденциальности</Link>
            <Link to="/">
              Создание сайта Style You</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer