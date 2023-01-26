import { Field } from 'redux-form';
import { useState, useEffect } from 'react';

import { required, minLength } from 'components/forms/validator';

const TempateInputInn = (props) => {


  const {
    input,
    placeholder,
    label,
    labelSecond,
    checkErrorSubmit,
    setErrCheck,
    num,
    setTempCompany,
    meta: {
      error,
    }
  } = props;

  useEffect(() => {
    if (error) {
      setErrCheck(false);
    }
    else {
      setErrCheck(true);
    }
  }, [error]);

  const [term, setTerm] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [companyInfo, setCompanyInfo] = useState({});

  const search = (inn) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "bd8d3f0b43aeec0a40af952669c10318449b6dd1";
    var query = inn;//"7730228018";

    var options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query: query })
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        console.log(result.suggestions[0].data)
        setCompanyInfo(result.suggestions[0].data)
        setErrMessage('');

        setTempCompany(result.suggestions[0].data.name.full)
      })
      .catch(error => {
        console.log("error",);
        setCompanyInfo({})
        setErrMessage('error');
      });
  }


  useEffect(() => {

    if (term.length === 10) {
      const timeId = setTimeout(() => {
        console.log('search', term)
        search(term)
      }, 2000);

      return (() => {
        clearTimeout(timeId);
      });
    }

  }, [term])


  const getValue = (e) => {
    setTerm(e.target.value)
    input.value = e.target.value
  }

  return (
    <>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b></label>}
      {labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}
      <input
        {...input}
        type="text"
        placeholder={placeholder}
        className={`input-decorate ${checkErrorSubmit && error && 'error-input'}`}
        onChange={(e) => getValue(e)}
      />
      {(checkErrorSubmit && (error && <span>{error}</span>))}

      {companyInfo.name && (<div className="showinfo">
          <h3>name</h3>
          <div>{companyInfo.name.full}</div>
          <h3>address</h3>
          <div>{companyInfo.address.value}</div>
          <h3>inn</h3>
          <div>{companyInfo.inn}</div>
          <h3>kpp</h3>
          <div>{companyInfo.kpp}</div>
        </div>)}
        {errMessage.length > 0 && 'Ошибка'}
    </>
  );
}



const RenderInputInn = ({ name, placeholder, label, checkErrorSubmit, setErrCheck, validate, num, setTempCompany}) => {

  let validateArr = [];

  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(minLength); }

  })

  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputInn}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}
    num={num}
    setTempCompany={setTempCompany}
  />;
}

export default RenderInputInn;