
export default function(){
  return {
    order: [
      // "typeCabinet",
      // "titleOne",
      // "accountName",
      // "innCompany",
      // "nameCompany",
      // "family",
      // "name",
      // "secondName",
      // "phones",
      "email",
      // "invitation",
      "password",

    ],
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Имя аккаунта", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      placeholder: "Введите Имя аккаунта", 
    },
    email: { 
      name: "email", 
      label: "Почта", 
      type:"text" , 
      validate: ['required','minLength','mailCheck'],
      wrapClass: "account-item  col-12 input-animate-label",
      num: "01"
    },
    password: { 
      name: "password", 
      label: "Пароль",
      type:"password", 
      validate: ['required','minLength','checkRus'],
      wrapClass: "account-item  col-12 input-animate-label",
      num: "02"
    },
    nameCompany: { 
      type:"text" ,
      name: "nameCompany", 
      label: "Наименование компании", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      placeholder: "Введите Наименование компании", 
    },
    family: { 
      type:"text" ,
      name: "family", 
      label: "Фамилия", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      placeholder: "Введите Фамилию", 
    },
    name: { 
      type:"text" ,
      name: "name", 
      label: "Имя", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      placeholder: "Введите Имя", 
    },
    innCompany: { 
      type:"inn" ,
      name: "innCompany", 
      label: "Инн", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      placeholder: "Введите инн", 
    },
    secondName: { 
      type:"text" ,
      name: "secondName", 
      label: "Отчество", 
      wrapClass: "col-12 account-item input-animate-label" ,
      validate: ['required','minLength'],
      placeholder: "Введите Отчество",
    },
    invitation: { 
      type:"text" ,
      name: "invitation", 
      label: "Введите ваш пригласительный код", 
      placeholder: "Введите ваш пригласительный код", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
     
    },
    typeCabinet: { 
      type:"radio", 
      name: "typeCabinet", 
      label: "Выберите основной вид вашей деятельности", 
      options: [
        { label: 'Питомник', value: 'nurseries' },
        { label: 'Вет клиника', value: 'clinics' },
        { label: 'Салон красоты', value: 'salon' },
        { label: 'Приют', value: 'shelter' },
        { label: 'Магазин', value: 'market' },
        { label: 'Дистрибьютор', value: 'distributor' },
        { label: 'Обычный Пользователь', value: 'user' }
      ],
      wrapClass: "col-12 account-item type-cabinet-item",
      num: "01"
    },
    phones: {
      type: "complex", 
      name: "phones", 
      label:"Телефоны компании",  
      wrapClass: "col-12 account-item",
      btnAddText: "Добавить телефон",
      
      allFields: [
        { 
          type:"phone", 
          name: "phones", 
          wrapClass: "col-12" 
        },
      ],
    },
    titleOne: {
      type:"title",
      label:"Основная информация",
      wrapClass: "col-12 account-item", 
      num: "02",
    },
  }
}