

export default function(){
  return {
    order: [
      "imgsAccount",
      "accountName",
      "nameCompany",
      "family",
      "name",
      "secondName",
      "email",
      "phones",
      "licenses",
    ],
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Имя аккаунта", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "02",
    },
    nameCompany: { 
      type:"text" ,
      name: "nameCompany", 
      label: "Наименование компании", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "03",
    },
    family: { 
      type:"text" ,
      name: "family", 
      label: "Фамилия", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "04",
    },
    name: { 
      type:"text" ,
      name: "name", 
      label: "Имя", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "05",
    },
    secondName: { 
      type:"text" ,
      name: "secondName", 
      label: "Отчество", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "06",
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0,
      wrapClass: "col-12 account-item",
      validate: ['required','minLength'],
      num: "07",
    },
    phones: {
      type: "complex", 
      name: "phones", 
      label:"Телефоны компании",  
      wrapClass: "col-12 account-item",
      btnAddText: "Добавить телефон",
      num: "08",
      allFields: [
        { 
          type:"phone", 
          name: "phones", 
          wrapClass: "col-12" 
        },
      ],
    },
    imgsAccount: {
      type: "photo", 
      name: "imgsAccount", 
      label:"Фото профиля", 
      labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "На данный момент фоно не выбрано",
      wrapClass: "col-12 input-photo-container account-item",
      num: "01",
    },
    licenses: {
      type: "dropzone", 
      name: "licenses", 
      label:"Загрузите фото лицензии/сертификата на ваши услуги/продукцию*", 
      labelSecond:"Это необходимо для проверки актуальности ваших предложений для потребителя", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      num: "09",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item"
    },

  }
}