import PhotoProfile from 'pages/cabinet/account/parts/PhotoProfile';

const MainInfo = ({ userInfo }) => {

  const formatPhone = (value) => {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`
  }

  return (
    <>
      <div className="col-12">
        <h3>Основная информация</h3>
      </div>
      <div className="col-2">
        <PhotoProfile userInfo={userInfo} />
      </div>
      <div className="col-10">
        <div className="account-item col-6"> <b>Название</b>
          <div>{userInfo.accountName ? userInfo.accountName : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Email </b>
          <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Сайт компании </b>
          <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
        </div>
        <div className="account-item col-6"> <b>Телефоны</b>
          <div>{userInfo.phones ? (
            <>
              {userInfo.phones.map((item, index) => (
                <div key={index}>
                  <a href={`mailto:+7${item.phones}`}>+7{formatPhone(item.phones)}</a>
                </div>
              ))}
            </>
          ) : '-/-'}
          </div>
        </div>

      </div>


    </>
  )
}

export default MainInfo
