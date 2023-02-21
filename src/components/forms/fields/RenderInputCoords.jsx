import { Field } from 'redux-form';
import { useEffect, useState, useRef } from 'react';

const TemplateCoords = (props) => {

  const { input, label, labelSecond, num } = props;

  const elRef = useRef();
  const originRef = useRef();
  const [custVal, setCustVal] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      const getClearAddress = input.value.split('--');
      originRef.current.value = getClearAddress[0]
      setCustVal(input.value);
    }
  });

  useEffect(() => {

    setTimeout(() => {
      const { ymaps } = window
      const suggest = new ymaps.SuggestView(input.name)

      suggest.events.add('select', (e) => {
        const val = String(e.get('item').value.trim())
        const myGeocoder = ymaps.geocode(val)
        myGeocoder
          .then(res => {

            setCustVal(val + "--" + res.geoObjects.get(0).geometry._coordinates[0] + "--" + res.geoObjects.get(0).geometry._coordinates[1]);
            elRef.current.focus();

          })
      })
    }, 1000)

  }, []);

  const checkEpmty = (e) => {

    if (e.target.value.length === 0) {
      console.log('set empty');
      setCustVal('');
      elRef.current.focus();
    }
  }

  return (
    <div className='map-input'>
      {num && <i className="num-offset">{num}</i>}

      <input
        ref={originRef}
        id={input.name}
        type="text"
        className={`input-decorate  ${input.value.length > 0 ? 'input-empty' : ''}`}
        onChange={checkEpmty}
        autoComplete="off"

      />
      {label && <label htmlFor={input.name} className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}
      <input
        type="text"
        ref={elRef}
        {...input}
        value={custVal}
        className={`hidden-field`}
        autoComplete="off"
      />


    </div>
  )
}
const RenderInputCoords = (props) => {


  return <>

    <Field
      name={props.name}
      props={props}
      component={TemplateCoords}
    />
  </>
}


export default RenderInputCoords;