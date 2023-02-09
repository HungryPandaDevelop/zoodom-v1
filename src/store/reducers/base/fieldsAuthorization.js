
export default function(){
  return {
    order: ["email","password",],
    email: { 
      name: "email", 
      label: "Почта пользователя", 
      type:"text",
      validate: ['required','minLength','checkRus','mailCheck'],
      wrapClass: "col-12 account-item input-animate-label",
      num: "01"

    },
    password: { 
      name: "password", 
      label: "Пароль", 
      type:"password",
      validate: ['required','minLength'],
      wrapClass: "col-12 account-item input-animate-label password-field",
      num: "02"
    },
  }
}