import img4 from 'front-end/images/temp/1.jpg';

const MainSection = () => {


  return (
    <>

      <div className="main-home">
        <img className="main-home-img" src={img4} alt="main-bg" />
        <div className="main-home-content">
          <div className="main-grid">
            <div className="col-5 col-sm-9">
              <div className="main-home-info">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h1>
                <div className="main-home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore fuga deleniti nemo aut laboriosam, soluta fugiat amet odit quod commodi quasi ut, optio odio eaque dicta explicabo ratione similique?</div>
                <div className="btn-container">
                  <a href="/" className="btn btn--blue">Узнать больше</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default MainSection;
