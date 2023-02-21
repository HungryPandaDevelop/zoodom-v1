const generateTitle = (rubricId, arrName)=>{

  let titleForm = '';

  switch (rubricId) {
    case 'services':
      titleForm = arrName[0]; //
      break;
    case 'company':
      titleForm = arrName[1]; // 
      break;
    case 'specialists':
      titleForm = arrName[2]; // 
      break;
    case 'promo':
      titleForm = arrName[3]; // 
      break;
    default:
      return 'default text'
  }

  return titleForm;
}

export default generateTitle;