

export default function(){
  return {
    order: [
      "activeCards",
      "typeCompany",
      "card_name",
      "cards_logo",
      "cards_description_mini",
      "cards_description_full",
      "cards_photos",
      "card_city",
      "cards_coords",
      "card_phone",
      "card_mail",
      "card_site",
    ],
    card_name:{
      type:"text", 
      name: "card_name",  
      label:"Наименование компании*", 
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['required', 'minLength'],
      num:"02"
    },
    card_site:{
      type:"text", 
      name: "card_site",  
      label:"Адрес сайта компании", 
      wrapClass: "col-12 account-item input-animate-label",
      num:"12"
    },
    card_city:{
      type:"city", 
      name: "card_city",  
      placeholder: "Выберите город", 
      label:"Выберите город", 
      wrapClass: "col-12 account-item input-animate-label",
      num: "06"
    },
    card_mail:{
      type:"text", 
      name: "card_mail",  
      label:"Email", 
      wrapClass: "col-12 account-item input-animate-label",
      num:"09"
    },
    card_phone:{
      type:"phone", 
      name: "card_phone",  
      label:"Телефон компании", 
      wrapClass: "col-12 account-item  input-animate-label",
      validate: ['required', 'minLength'],
      num:"08"
    },
    cards_coords: { 
      type:"coords", 
      name: "cards_coords",  
      label: " Выберите адрес ",
      wrapClass: "col-12 account-item input-animate-label",
      num: "07",
    },
    cards_description_mini:{
      type:"textarea", 
      name: "cards_description_mini",  
      label:"Краткое описание", 
      labelSecond:"Длина текста не должна превышать 110 символов, включая пробелы.", 
      wrapClass: "col-12 account-item input-animate-label",
      num: "04",
      maxLength: 110
    },
    cards_description_full:{
      type:"textarea", 
      name: "cards_description_full",  
      label:"Подробное описание", 
      labelSecond:"Длина текста не должна превышать 3 000 символов, включая пробелы.", 
      wrapClass: "col-12 account-item input-animate-label",
      maxLength: 3000,
      num: "05",
    },    
    cards_logo: {
      type: "file", 
      name: "cards_logo", 
      label:"Загрузите логотип компании", 
      labelSecond:"(Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.  )", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "Загрузите логотип",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item img-item-input",
      num: "03"
    },
    cards_photos: {
      type: "dropzone", 
      name: "cards_photos", 
      label:"Загрузите фото компании", 
      labelSecond:"(Вы можете загрузить 1 файл. Вес файла не должен превышать 500 Кб. Допустимый формат файлов: *.jpg, *.png.  )", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      num: "06",
      wrapClass: "col-12 col-lg-3 col-sm-5 account-item  img-item-input"
    },
    typeCompany: {
      type: "radio", 
      name: "typeCompany", 
      label:"Тип компании", 
      wrapClass: "col-12 account-item",
      num: "01",
      options:[
        {label: "Питомники", value:"type_1"},
        {label: "Клиники", value:"type_2"},
        {label: "Салоны", value:"type_3"},
      ]
    },
    activeCards: {
      type:"switch",
      name: "activeCards", 
      label: "Статус", 
      options: [
        {name:"Активно",value:"on"},
        {name:"Не активно", value:"off"},
      ],
      wrapClass: "col-12 account-item"
    },
    titleOne: {
      type:"title",
      label:"Основаная информация",
      num: "01",
      wrapClass: "col-12 account-item",
      
    },
  }

}