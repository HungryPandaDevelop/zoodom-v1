
export default function(){
  return {
    // order: ["name","phone","email","commets","agreement"],
    order: ["name"],
    name: { 
      name: "name", 
      placeholder: "Имя", 
      type:"text",
      wrapClass: "col-12 col-xs-12 form-line",
      validate: ['required', 'minLength']
    },
    phone: { 
      type:"phone" ,
      name: "phone", 
      placeholder: "Телефон",
      wrapClass: "col-6 col-xs-12 form-line"
    },
    email: { 
      name: "email", 
      placeholder: "Почта", 
      type:"text", 
      wrapClass: "col-6 col-xs-12 form-line"
    },
    commets: { 
      type:"textarea", 
      name: "commets", 
      placeholder: "Комментарий", 
      maxLength: 500,
      wrapClass: "col-12 "
    },
    agreement: { 
      type:"checkbox", 
      name: "agreement",
      options: [
        { 
          label: 'Я даю свое согласие на обработку персональных данных', 
          value: 'agreement_on',
          checked: 1,
          disabled: 1
        },
      ],
      wrapClass: "col-12  form-line"
    },
  }
}