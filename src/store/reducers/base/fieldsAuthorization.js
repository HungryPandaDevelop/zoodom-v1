
export default function(){
  return {
    order: ["email","password",],
    email: { 
      name: "email", 
      label: "Почта пользователя", 
      placeholder: "Почта пользователя", 
      type:"text",
      validate: ['required','minLength','mailCheck'],
      wrapClass: "col-12 account-item",
      num: "01"

    },
    password: { 
      name: "password", 
      label: "Пароль", 
      placeholder: "Введите пароль", 
      type:"password",
      validate: ['required','minLength'],
      wrapClass: "col-12 account-item",
      num: "02"
    },
  }
}