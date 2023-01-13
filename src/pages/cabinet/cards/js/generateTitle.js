const generateTitle = (rubricId, arrName)=>{

  let titleForm = '';

  switch (rubricId) {
    case 'nurseries':
      titleForm = arrName[0]; // 'Мои питомники'
      break;
    case 'announcement':
      titleForm = arrName[1]; // 'Мои объявления';
      break;
    default:
      return 'default text'
  }

  return titleForm;
}

export default generateTitle;