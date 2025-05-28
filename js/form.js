import { isValueLength, 
    setErrorMessage, 
    removeErrors, 
    isValidEmail, 
    isValidPassword 
} from './formHelpers.js' // Import the function from formHelpers.js
// This code handles the form submission for a signup form
let form = document.getElementById('signupform')

// Check if the form exists before adding the event listener
form.addEventListener('submit', submitForm)

// function that takes the sumbit event
function submitForm(event){
    event.preventDefault() // prevent the default form submission behavior
    removeErrors()

    let firstName = event.target.firstname
    let lastName = event.target.lastname
    let address = event.target.address
    let zipCode = event.target.zipcode
    let country = event.target.country
    let email = event.target.email
    let password = event.target.password
    let passwordRepeat = event.target.passwordRepeat

    // Validate the first name field
    if (!isValueLength(firstName.value, 2)) {
        setErrorMessage('Fornavn skal være mindst 2 karakterer', firstName);
    }
    if (!isValueLength(lastName.value, 2)) {
        setErrorMessage('Efternavn skal være mindst 2 karakterer', lastName);
    }
    if (!isValueLength(address.value, 5)) {
        setErrorMessage('Adresse skal være mindst 5 karakterer', address);
    }
    if (zipCode.value.length !== 4){
        setErrorMessage('Postnummer skal være 4 tal', zipCode);
    }
    if (!isValueLength(country.value, 5)) {
        setErrorMessage('Land skal være mindst 5 karakterer', country);
    }
    if (!isValidEmail(email.value)) {
        setErrorMessage('Ugyldig email format', email);
    }
    if (!isValidPassword(password)){
        // The isValidPassword function already sets the error message
        if (password.value !== passwordRepeat.value){
            setErrorMessage('passwords skal være ens', passwordRepeat);
        }
    }
    alert('Formularen er gyldig og kan sendes!') // If all validations pass, show a success message
    // Here you can add code to actually submit the form data to the server
}
