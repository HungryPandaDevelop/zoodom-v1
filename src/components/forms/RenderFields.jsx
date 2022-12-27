import RenderTitle from './fields/RenderTitle';

import RenderInputText from './fields/RenderInputText'; // поле стандартное

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

import RenderInputFileVideo from './fields/RenderInputFileVideo'; // поле с добавлением поля! 

import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // поле с добавлением поля! 

import RenderInputSelectTrue from './fields/RenderInputSelectTrue'; // поле с селект

import RenderInputComplex from './fields/RenderInputComplex'; // поле с селект

import RenderInputCoords from './fields/RenderInputCoords'; // поле с селект



const RenderFields = ({ orderFields, objFields, checkErrorSubmit, setErrCheck }) => {



  const choiseFieldType = (type, obj) => {
    switch (type) {
      case 'title':
        return RenderTitle(obj.label);
      case 'text':
        return (
          <>
            <RenderInputText
              name={obj.name}
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
      case 'star':
        return (
          <RenderInputStar
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
          />
        );
      case 'date':
        return (
          <RenderInputDate
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}

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

          />
        )
      case 'checkbox':
        return (<RenderInputCheckbox
          name={obj.name}
          label={obj.label}
          labelSecond={obj.labelSecond}
          options={obj.options}
        />)
      case 'radio':
        return (
          <RenderInputRadio
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
          />
        );
      case 'list':
        return RenderInputList(obj.name, obj.label, obj.labelSecond, obj.options,);
      case 'password':
        return (
          <RenderInputPassword
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
          />
        );

      case 'switch':
        return (
          <RenderInputSwitch
            name={obj.name}
            label={obj.label}
            options={obj.options}

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
          />
        );
      case 'complex':
        return (
          <RenderInputComplex
            name={obj.name}
            label={obj.label}
            allFields={obj.allFields}
            btnAddText={obj.btnAddText}
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
