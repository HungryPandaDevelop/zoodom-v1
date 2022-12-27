
import {BrowserRouter, Routes, Route,  Navigate, useParams } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from 'blocks/Header';
import PrivateRoute from 'components/PrivateRoute';
import Footer from 'blocks/Footer';

import MainPage from 'pages/MainPage';
import Demo from 'pages/Demo';


import NotFound from 'pages/NotFound';

import Chat from 'pages/cabinet/chat/Chat';
// import ChatList from 'pages/cabinet/chat/ChatList';

import Videochat from 'pages/cabinet/videochat/Videochat';
import VideoRoomIn from 'pages/cabinet/videochat/VideoRoomIn';
import VideoRoomOut from 'pages/cabinet/videochat/VideoRoomOut';



import Subscription from 'pages/cabinet/subscription/Subscription';

import Authorization from 'pages/cabinet/auth/Authorization';
import ForgotPassword from 'pages/cabinet/auth/ForgotPassword';
import Registration from 'pages/cabinet/auth/Registration';


import Account from 'pages/cabinet/account/Account';
import AccountEdit from 'pages/cabinet/AccountEdit';





import Cards from 'pages/cabinet/cards/Cards';
import CardsNew from 'pages/cabinet/cards/CardsNew';
import CardsEdit from 'pages/cabinet/cards/CardsEdit';




import Liked from 'pages/cabinet/liked/Liked';
import Hidden from 'pages/cabinet/hidden/Hidden';


import Pages from 'pages/cabinet/pages/Pages';
import PagesNew from 'pages/cabinet/pages/PagesNew';
import PagesEdit from 'pages/cabinet/pages/PagesEdit';

// Страницы Елементов Вакансии\ Резюме
import Catalog from 'pages/catalog/Catalog';
import CardsDetail from 'pages/catalog/CardsDetail';
// Страницы Елементов Вакансии\ Резюме

import GoMap from 'pages/goMap/GoMap';




const App = () => {

const params = useParams();


  return (
    <>
      <BrowserRouter>

        <Header typeListing={params.catagoryName} />
                
        
        <Routes> 
          <Route path='/' exept element={<MainPage/>} ></Route>
          <Route path='/demo' element={<Demo/>} ></Route>


          <Route path='/authorization'  element={<Authorization/>} ></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/registration'  element={<Registration/>} ></Route>

        
          {/*  Страницы кабинет  */}
            <Route path='/cabinet' element={<PrivateRoute/>}>
              <Route index  element={<Account/>}></Route>
    
              <Route path='/cabinet/account-edit' element={<AccountEdit/>}></Route>

              <Route path='/cabinet/liked/' element={<Liked/>}></Route>
              <Route path='/cabinet/hidden/' element={<Hidden/>}></Route>


              <Route path='/cabinet/chat/'  element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomUrl'  element={<Chat/>} ></Route>

              <Route path='/cabinet/videochat/'  element={<Videochat/>} ></Route>
              <Route path='/cabinet/videochat/videoroom-out/:userId'  element={<VideoRoomOut/>} ></Route>
              <Route path='/cabinet/videochat/videoroom-in/:roomUrl'  element={<VideoRoomIn/>} ></Route>

{/* Нужна универсальность */}

              <Route path='/cabinet/cards' element={<Cards/>}></Route>
              <Route path='/cabinet/cards-new' element={<CardsNew/>}></Route>
              <Route path='/cabinet/cards-edit/:elementId' element={<CardsEdit/>}></Route>


              <Route path='/cabinet/pages' element={<Pages/>}></Route>
              <Route path='/cabinet/pages-new' element={<PagesNew/>}></Route>
              <Route path='/cabinet/pages-edit/:elementId' element={<PagesEdit/>}></Route>
{/* Нужна универсальность */}

              <Route path='/cabinet/subscription/'  element={<Subscription/>} ></Route>

            </Route>
          {/*  Страницы кабинет  */}


        



          <Route path='/catalog/:catagoryName'  element={<Catalog/>}></Route>
          <Route path='/catalog/:catagoryName/map' element={<GoMap/>}></Route>
          <Route path='/catalog/:catagoryName/map/:idPopup' element={<GoMap/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<CardsDetail/>}></Route>

          <Route path="/404" element={ <NotFound /> } />
          <Route path="*" element={ <Navigate to="/404" replace />} />


        </Routes>

        <Footer/>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </>
  );
}

export default App;
