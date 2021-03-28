export const emailHasErrors = (email) => {
  let emailErrors = false;
  let errorMessage = "";
  const isAnEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  const isEmpty = email === "";

  if (isEmpty) {
    errorMessage = "Please, write an email!";
    emailErrors = errorMessage;
  } else if (!isAnEmail) {
    errorMessage = "Your email is not valid, please try again!";
    emailErrors = errorMessage;
  }

  return emailErrors;
};

export const printErrors = (dataForm) => {
    console.log(dataForm, 'inicial');
    let hasErrors = {
        email : '',
        desc : ''
    };
    if (emailHasErrors(dataForm.email)) {
        console.log('hay errores de email')
      hasErrors.email = emailHasErrors(dataForm.email);
      return hasErrors;     
    
    } else if (dataForm.desc === "") {
        console.log('hay errores desc')
      hasErrors.desc = "Please, enter a description!";
       return hasErrors;
    }
    return hasErrors;
  };
  

 
