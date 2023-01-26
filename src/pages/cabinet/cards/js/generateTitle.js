const generateTitle = (rubricId, arrName)=>{

  let titleForm = '';

  switch (rubricId) {
    case 'services':
      titleForm = arrName[0]; // 'Мои объявления';
      break;
    case 'company':
      titleForm = arrName[1]; // 'Мои объявления';
      break;
    default:
      return 'default text'
  }

  return titleForm;
}

export default generateTitle;