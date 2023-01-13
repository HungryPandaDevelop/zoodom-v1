
export default function(){
  return {
    order: [
      "accountName",
      "email",
      "nameCompany",
      "password",
      "typeCabinet",
      "family",
      "name",
      "secondName",
      "phones",
    ],
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Имя аккаунта", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "01",
    },
    email: { 
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      type:"text" , 
      validate: ['required','minLength','mailCheck'],
      wrapClass: "account-item  col-12",
      num: "02"
    },
    password: { 
      name: "password", 
      label: "Пароль",
      placeholder: "Введите пароль", 
      type:"password", 
      validate: ['required','minLength'],
      wrapClass: "account-item  col-12",
      num: "04"
    },
    nameCompany: { 
      type:"text" ,
      name: "nameCompany", 
      label: "Наименование компании", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "05",
    },
    family: { 
      type:"text" ,
      name: "family", 
      label: "Фамилия", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "06",
    },
    name: { 
      type:"text" ,
      name: "name", 
      label: "Имя", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "07",
    },
    secondName: { 
      type:"text" ,
      name: "secondName", 
      label: "Отчество", 
      wrapClass: "col-12 account-item" ,
      validate: ['required','minLength'],
      num: "06",
    },
    typeCabinet: { 
      type:"radio", 
      name: "typeCabinet", 
      label: "Выберите основной вид вашей деятельности", 
      options: [
        { label: 'Питомники', value: 'nurseries' },
        { label: 'Клиники', value: 'clinics' },
        { label: 'Салон', value: 'salon' }
      ],
      wrapClass: "col-12 account-item",
      num: "07"
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
  }
}