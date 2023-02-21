import SingleSelect from 'pages/breeds/breedsList/SingleSelect';

const SearchSelects = ({
  fieldPurpose,
  fieldSize,
  fieldKeep,
  fieldСountry,
  searchValSelect,
  setSearchValSelect,
  startSelect
}) => {

  console.log(fieldPurpose)

  return (
    <div className='main-grid search-selects'>

      <SingleSelect
        topic='Назначение'
        options={fieldPurpose}
        idSelect='purpose'
        className='col-3 col-xs-12'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
        startName={startSelect.purpose}
      />
      <SingleSelect
        topic='Размер'
        options={fieldSize}
        idSelect='size'
        className='col-3 col-xs-12'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
        startName={startSelect.size}
      />
      <SingleSelect
        topic='Содержание'
        options={fieldKeep}
        idSelect='keep'
        className='col-3 col-xs-12'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
        startName={startSelect.keep}
      />
      <SingleSelect
        topic='Страна'
        options={fieldСountry}
        className='col-3 col-xs-12'
        idSelect='country'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
        startName={startSelect.country}

      />
    </div>
  )
}

export default SearchSelects;
