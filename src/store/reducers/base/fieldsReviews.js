
export default function(){
  return {
    order: [
      "grade",
      "titleOne",
      "dignity",
      "limitations",
      "reviews",
      "statusName",
      "fio"
      // "titleThree",
      // "activeCards"
    ],
    grade: { 
      name: "grade", 
      label: "Ваша оценка", 
      type:"star",
      wrapClass: "form-line col-12",
    },
    dignity: { 
      name: "dignity", 
      label: "Достоинства", 
      type:"text",
      wrapClass: "form-line col-12 input-animate-label",
      validate: ['required', 'minLength'],
    },
    limitations: { 
      name: "limitations", 
      label: "Недостатки", 
      type:"text",
      wrapClass: "form-line col-12 input-animate-label",
      validate: ['required', 'minLength'],
    },
    reviews: { 
      name: "reviews", 
      label: "Дополнительные комментарии", 
      type:"text",
      wrapClass: "form-line col-12 input-animate-label",
    },
    statusName: { 
      name: "statusName", 
      placeholder: "Дополнительные комментарии... ", 
      type:"outValue",
      wrapClass: "form-line col-12",
    },
    fio: { 
      name: "fio", 
      placeholder: "Дополнительные комментарии... ", 
      type:"outValue",
      wrapClass: "form-line col-12",
    },
    titleOne: {
      type:"title",
      label:"Поделитесь впечатлениями о породе",
      wrapClass: "col-12 account-item", 
    },


  }
}