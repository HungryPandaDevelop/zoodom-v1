

export default function(){
  return {
    order: [
      "imgsAccount",
      "accountName",
      "email",
      "phones",
    ],
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Имя пользователя", 
      wrapClass: "col-10 account-item" ,
      validate: ['required','minLength'],
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0,
      wrapClass: "col-10 col-offset-3 account-item",
      validate: ['required','minLength'],
    },
    phones: {
      type: "complex", 
      name: "phones", 
      label:"Телефоны компании",  
      wrapClass: "col-5 col-offset-3 account-item",
      btnAddText: "Добавить телефон",
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
      wrapClass: "col-2 col-lg-3 col-sm-5 input-photo-container"
    },
  }
}