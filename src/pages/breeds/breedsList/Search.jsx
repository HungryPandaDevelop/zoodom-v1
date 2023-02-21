import { useState, useEffect } from 'react';
import PreloaderList from 'pages/cabinet/parts/PreloaderList';

const Search = ({ setGetSearchVal, getSerchVal }) => {

  // const [searchVal, setSearchVal] = useState('');

  const [showPreloader, setShowPreloader] = useState(false);
  const onSearch = (e) => {

    setGetSearchVal(e.target.value)
    // setGetSearchVal(e.target.value)
  }



  useEffect(() => {
    console.log('log')
    setShowPreloader(true);
    let idStartSearch = setTimeout(() => {

      setShowPreloader(false)
      setGetSearchVal(getSerchVal);
    }, 1500);
    // setSearchVal(startValue)
    return (() => {
      clearTimeout(idStartSearch);
    })
  }, [getSerchVal]);

  return (
    <div className="main-full">
      <div className={`search-container input-animate-label`}>
        <input
          type="text"
          id="search"
          className={`input-search input-decorate ${getSerchVal.length > 0 ? 'input-empty' : ''}`}
          onChange={(e) => { onSearch(e) }}
          value={getSerchVal}

        />
        <label htmlFor="search">Быстрый поиск породы</label>

        {showPreloader ? <PreloaderList /> : <i></i>}

        <div className="input-search-hint">
          Более 400 пород собак с подробным описанием и характеристиками
        </div>
      </div>

    </div>
  )
}

export default Search
