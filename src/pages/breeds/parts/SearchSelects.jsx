import SingleSelect from 'pages/breeds/parts/SingleSelect';

const SearchSelects = ({ fieldPurpose, fieldSize, fieldKeep, fieldCity, searchValSelect, setSearchValSelect }) => {



  return (
    <div className='main-grid search-selects'>

      <SingleSelect
        topic='Назначение'
        options={fieldPurpose}
        idSelect='purpose'
        className='col-3'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
      />
      <SingleSelect
        topic='Размер'
        options={fieldSize}
        idSelect='size'
        className='col-3'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
      />
      <SingleSelect
        topic='Содержание'
        options={fieldKeep}
        idSelect='keep'
        className='col-3'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
      />
      <SingleSelect
        topic='Страна'
        options={fieldCity}
        className='col-3'
        idSelect='city'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
      />
    </div>
  )
}

export default SearchSelects;
