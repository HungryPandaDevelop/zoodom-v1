
export default function(){
  return {
    order: ["grade","titleOne","dignity","limitations","reviews","titleTwo","titleThree","activeCards"],
    grade: { 
      name: "grade", 
      placeholder: "Оценка... ", 
      type:"star",
      wrapClass: "form-line col-12",
    },
    dignity: { 
      name: "dignity", 
      placeholder: "Достоинства... ", 
      type:"text",
      wrapClass: "form-line col-12",
      validate: ['required', 'minLength'],
    },
    limitations: { 
      name: "limitations", 
      placeholder: "Недостатки... ", 
      type:"text",
      wrapClass: "form-line col-12",
      validate: ['required', 'minLength'],
    },
    reviews: { 
      name: "reviews", 
      placeholder: "Дополнительные комментарии... ", 
      type:"text",
      wrapClass: "form-line col-12",
      validate: ['required', 'minLength'],
    },
    titleOne: {
      type:"title",
      label:"Поделитесь впечатлениями о породе",
      wrapClass: "col-12 account-item", 
    },
    titleTwo: {
      type:"title",
      label:"Вы оставляете отзыв как:",
      wrapClass: "col-12 account-item title-rew-small", 
    },
    titleThree: {
      type:"title",
      label:"Евгений Медведев",
      wrapClass: "col-12 account-item", 
    },
    activeCards: {
      type:"switch",
      name: "activeCards", 
      label: "Скрыть мои данные в отзыве", 
      options: [
        {name:"",value:""},
        {name:"", value:""},
      ],
      wrapClass: "col-12 account-item rew-switch"
    },
  }
}