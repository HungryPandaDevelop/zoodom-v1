import { useState } from 'react';

import RenderTitle from './fields/RenderTitle';

import RenderInputText from './fields/RenderInputText'; // поле стандартное
import RenderInputInn from './fields/RenderInputInn'; // поле стандартное
import RenderInputCity from './fields/RenderInputCity'; // поле стандартное

import RenderInputUserRef from './fields/RenderInputUserRef'; // поле стандартное userref

import RenderInputStar from './fields/RenderInputStar'; // поле стандартное

import RenderInputDate from './fields/RenderInputDate'; // поле стандартное

import RenderInputPhone from './fields/RenderInputPhone'; // поле телефон

import RenderInputPassword from './fields/RenderInputPassword'; // поле пароля

import RenderInputTextarea from './fields/RenderInputTextarea'; // поле текста

import RenderInputSwitch from './fields/RenderInputSwitch'; // поле переключателя, не уневерсальное!

import RenderInputCheckbox from './fields/RenderInputCheckbox';  // поле чекбокс множественное, не уневерсальное!

import RenderInputRadio from './fields/RenderInputRadio';  // поле чекбокс множественное, не уневерсальное!

import RenderInputList from './fields/RenderInputList'; // поле список множественное, не уневерсальное!

import RenderInputMulty from './fields/RenderInputMulty'; // поле селект + текст

import RenderInputFile from './fields/RenderInputFile'; // поле с добавлением поля! 
import RenderInputFileDropZone from './fields/RenderInputFileDropZone'; // поле с добавлением поля! 

import RenderInputFileVideo from './fields/RenderInputFileVideo'; // поле с добавлением поля! 

import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // поле с добавлением поля! 

import RenderInputSelectTrue from './fields/RenderInputSelectTrue'; // поле с селект

import RenderInputComplex from './fields/RenderInputComplex'; // поле с селект

import RenderInputCoords from './fields/RenderInputCoords'; // поле с селект





const RenderFields = ({ orderFields, objFields, checkErrorSubmit, setErrCheck }) => {


  const [tempCompany, setTempCompany] = useState('');


  const choiseFieldType = (type, obj) => {
    switch (type) {
      case 'title':
        return (
          <>
            <RenderTitle
              label={obj.label}
              num={obj.num}
            />
          </>
        )
      case 'text':
        return (
          <>
            <RenderInputText
              name={obj.name}
              num={obj.num}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              validate={obj.validate}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              tempCompany={tempCompany}
            />
          </>
        );
      case 'inn':
        return (
          <>
            <RenderInputInn
              name={obj.name}
              num={obj.num}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              validate={obj.validate}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              setTempCompany={setTempCompany}
            />
          </>
        );
      case 'city':
        return (
          <>
            <RenderInputCity
              name={obj.name}
              num={obj.num}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              validate={obj.validate}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
            />
          </>
        );
      case 'userRef':
        return (
          <>
            <RenderInputUserRef
              name={obj.name}
              num={obj.num}
            />
          </>
        );
      case 'star':
        return (
          <RenderInputStar
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            num={obj.num}
          />
        );
      case 'date':
        return (
          <RenderInputDate
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            num={obj.num}

          // errorOn={errorOn}
          />
        );
      case 'coords':
        return (
          <RenderInputCoords
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            num={obj.num}
          />
        );
      case 'phone':
        return (
          <RenderInputPhone
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            num={obj.num}
          />
        );
      case 'textarea':
        return (
          <RenderInputTextarea
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            maxLength={obj.maxLength}
            num={obj.num}

            validate={obj.validate}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}

          />
        )
      case 'checkbox':
        return (<RenderInputCheckbox
          name={obj.name}
          label={obj.label}
          labelSecond={obj.labelSecond}
          options={obj.options}
          num={obj.num}
        />)
      case 'radio':
        return (
          <RenderInputRadio
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
            num={obj.num}
          />
        );
      case 'list':
        return (
          <RenderInputList
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
            num={obj.num}

          />
        );
      case 'password':
        return (
          <RenderInputPassword
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            num={obj.num}
          />
        );

      case 'switch':
        return (
          <RenderInputSwitch
            name={obj.name}
            label={obj.label}
            options={obj.options}
            num={obj.num}
          />
        );
      case 'multy':
        return (
          <RenderInputMulty
            mainname={obj.mainname}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}
            num={obj.num}
          />
        );
      case 'select':
        return (
          <RenderInputSelectTrue
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            placeholder={obj.placeholder}
            options={obj.options}
            num={obj.num}
          />
        );
      case 'file':
        return (
          <RenderInputFile
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            typeAccept={obj.typeAccept}
            maxSize={obj.maxSize}
            textEmpty={obj.textEmpty}
            nameFolder={obj.nameFolder}
            num={obj.num}
          />
        );
      case 'dropzone':
        return (
          <RenderInputFileDropZone
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            typeAccept={obj.typeAccept}
            maxSize={obj.maxSize}
            textEmpty={obj.textEmpty}
            nameFolder={obj.nameFolder}
            num={obj.num}




          />
        );
      case 'fileVideo':
        return (
          <RenderInputFileVideo
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            typeUpload={obj.typeUpload}
            maxSize={obj.maxSize}
            textEmpty={obj.textEmpty}
            num={obj.num}
          />
        );
      case 'photo':
        return (
          <RenderInputFilePhoto
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            typeUpload={obj.typeUpload}
            maxSize={obj.maxSize}
            typeFile={obj.typeFile}
            textEmpty={obj.textEmpty}
            num={obj.num}
          />
        );
      case 'complex':
        return (
          <RenderInputComplex
            name={obj.name}
            label={obj.label}
            allFields={obj.allFields}
            btnAddText={obj.btnAddText}
            num={obj.num}
          />
        );
      default:
    }
  }



  return (
    <>
      {orderFields.map((item, index) => (
        <div key={index} className={objFields[item].wrapClass}>
          {
            (choiseFieldType(objFields[item].type, objFields[item]))
          }
        </div>
      ))}
    </>
  )
}

export default RenderFields;
