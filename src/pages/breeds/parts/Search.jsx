import { useState, useEffect } from 'react';
import PreloaderList from 'pages/cabinet/parts/PreloaderList';
const Search = ({ setGetSearchVal }) => {

  const [searchVal, setSearchVal] = useState('');
  const [showPreloader, setShowPreloader] = useState(false);
  const onSearch = (e) => {

    setSearchVal(e.target.value)
    // setGetSearchVal(e.target.value)
  }

  const startSearch = () => {
    console.log(searchVal)
  }

  useEffect(() => {
    setShowPreloader(true);
    let idStartSearch = setTimeout(() => {
      startSearch();
      setShowPreloader(false)
      setGetSearchVal(searchVal);
    }, 1500);

    return (() => {
      clearTimeout(idStartSearch);
    })
  }, [searchVal]);

  return (
    <div className="main-full">
      <div className="search-container">
        <input
          type="text"
          className="input-search input-decorate"
          onChange={(e) => { onSearch(e) }}
          value={searchVal}
          placeholder="Быстрый поиск породы"
        />

        {showPreloader ? <PreloaderList /> : <i></i>}

        <div className="input-search-hint">
          Более 400 пород собак с подробным описанием и характеристиками
        </div>
      </div>

    </div>
  )
}

export default Search
