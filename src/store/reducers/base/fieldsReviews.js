
export default function(){
  return {
    order: ["grade","reviews",],
    grade: { 
      name: "grade", 
      placeholder: "Оценка... ", 
      type:"star",
      wrapClass: "form-line col-12",
    },
    reviews: { 
      name: "reviews", 
      placeholder: "Напишите Отзыв... ", 
      type:"textarea",
      wrapClass: "form-line col-12",
      validate: ['required', 'minLength'],
    },
  }
}