
export default function(){
  return {
    order: [
      "email",
      "password",
      "accountName",
      "typeCabinet"
    ],
    email: { 
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      type:"text" , 
      validate: ['required','minLength','mailCheck'],
      wrapClass: "form-line"
    },
    password: { 
      name: "password", 
      label: "Пароль",
      placeholder: "Введите пароль", 
      type:"password", 
      validate: ['required','minLength'],
      wrapClass: "form-line"
    },
    accountName: { 
      name: "accountName", 
      label: "Фио",
      placeholder: "Фио", 
      type:"text", 
      validate: ['required','minLength'],
      wrapClass: "form-line",
      nameChangingBool: true
    },
    typeCabinet: { 
      type:"radio", 
      name: "typeCabinet", 
      options: [
        { label: 'Питомники', value: 'nurseries' },
        { label: 'Клиники', value: 'clinics' },
        { label: 'Салон', value: 'salon' }
      ],
      wrapClass: "col-12 account-item",
    },
  }
}