// hvor mange karakterer der skal være i et felt
export function isValueLength(value, targetLength){
    if (value < targetLength){
        return false
    } else{
        return true
    }
}


// function to set an error message on a field
export function setErrorMessage(message, targetInput){
    const errorElement = document.createElement('b')
    errorElement.innerText = message
    errorElement.classList.add('error')
    targetInput.after(errorElement) // add the error message after the input field
}
export function removeErrors(){
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.remove(); // remove the error message from the DOM
    });
    
}
export function isValidEmail(email){
    // Regular expression to validate email format
    const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if (emailRegex.test(email)){
        return true; // Email is valid
    } else{
        return false; // Email is invalid
    }
}

export function isValidPassword(password){
    if (password.value.length < 32){
        setErrorMessage('Password skal være mindst 32 karakterer', password);
        return false;
    }
    if (!RegExp(/\d+/).test(password.value)) {
        setErrorMessage('Password skal indeholde mindst et tal', password);
        return false;
    }
    if (!RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/).test(password.value)) {
        setErrorMessage('Password skal indeholde mindst et specialtegn', password);
        return false;
    }
    return true;
}