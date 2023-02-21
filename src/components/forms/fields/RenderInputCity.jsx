import { Field } from 'redux-form';
import { useState, useEffect, useRef } from 'react';


import { connect } from 'react-redux';

const TempateInputCity = (props) => {

  const {
    input,
    placeholder,
    label,
    labelSecond,
    num,
    russianCities } = props;

  const [сhoiseName, setСhoiseName] = useState('');
  const [сhoiseNameFiltering, setСhoiseNameFiltering] = useState('');
  const [russianCitiesList, setRussianCities] = useState(russianCities);
  const [cityPopupState, setCityPopupState] = useState(false);


  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {

    setRussianCities(russianCities);

    if (input.value) {

      setСhoiseName(input.value);

    };

    const hideByBodyClick = (e) => {
      if (e.target.className !== 'city-input input-decorate' && e.target.className !== 'city-name') {
        setCityPopupState(false)
      }

    };
    const hideByBodyByKey = (e) => {
      if (e.key === 'Escape') { setCityPopupState(false); }
    };
    document.addEventListener('keydown', hideByBodyByKey);
    document.body.addEventListener('click', hideByBodyClick);
    return () => {
      document.body.removeEventListener('click', hideByBodyByKey)
      document.body.removeEventListener('keydown', hideByBodyClick)
    };


  }, [input.value]);

  const choiseCity = (e) => {
    setСhoiseName(e.currentTarget.getAttribute('namecity'));
    setСhoiseNameFiltering('');
    setRussianCities(russianCities);


    setCityPopupState(false);

    input.onChange(e.currentTarget.getAttribute('namecity'));
  }
  const onSearchCity = (e) => {

    setСhoiseNameFiltering(e.target.value);

    const dataSearch = russianCities.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setRussianCities(dataSearch)

  }

  const renderCityList = (russianCitiesListParam) => {
    console.log('city')
    return (russianCitiesListParam.length > 0) ? russianCitiesListParam.map((item, index) => (
      <li
        key={index}
        coords={[item.coords.lat, item.coords.lon]}
        namecity={item.name}
        onClick={choiseCity}

      >
        {item.name}</li>
    )) : (<li>Список пуст</li>);
  }

  return (
    <>
      {num && <i className="num-offset">{num}</i>}


      <input
        {...input}
        type="hidden"
        placeholder={placeholder}
        className={`input-decorate  ${input.value.length > 0 ? 'input-empty' : ''} `}

      />
      {label && <label><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      <div className="city-field">

        <div
          className="city-name"
          onClick={() => { setCityPopupState(true) }}
        >{сhoiseName}</div>
        <i className={`city-field-arrow ${cityPopupState ? 'active' : ''}`}></i>


        {cityPopupState && (
          <div
            className="city-field-popup"
            ref={wrapperRef}
          >
            <div className="filters-close-popup" onClick={() => { setCityPopupState(false) }}></div>
            <div className="city-field-container">
              <i></i>

              <input
                ref={inputRef}
                type="text"
                value={сhoiseNameFiltering}
                className="city-input input-decorate"
                onChange={onSearchCity}
                // onBlur={() => setCityPopupState(false)}
                placeholder="Введите название города"
                onFocus={(event) => { setCityPopupState(true); event.target.select() }}
              />
            </div>

            <ul className="ln">
              {renderCityList(russianCitiesList)}
            </ul>
          </div>
        )}
      </div>
    </>

  );
}



const RenderInputCity = ({ name, placeholder, label, checkErrorSubmit, setErrCheck, validate, num, russianCities }) => {

  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputCity}
    num={num}
    russianCities={russianCities}
  />;
}

const mapStateToProps = (state) => {

  return {
    russianCities: state.russianCities
  }
}

export default connect(mapStateToProps)(RenderInputCity);