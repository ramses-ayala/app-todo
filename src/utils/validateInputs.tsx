import FormInputs from "../interfaces/FormInputs"; 

import { checkErrors } from "./checkErrors";

const validate = (values: FormInputs): Object => {

    let errors: FormInputs = {
        email: "",
        password: ""
    };

    if (!values.firstName) {
        errors.firstName = 'FirstName Required !!!'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Too short firstName !!!';
    }

    if (!values.lastName) {
        errors.lastName = 'LastName Required !!!';
    } else if (values.lastName.length < 2) {
        errors.firstName = 'Too short lastName !!!';
    }


    if (!values.email) {
        errors.email = 'Email required !!!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


    if (!values.password) {
        errors.password = 'Password required !!!';
    }
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/.test(values.password)) {
        errors.password = 'Your password must have at least 10 characters, 1 uppercase, 1 lowercase and 1 numeric.';
    }
    

    if (!values.email) {
        errors.email = 'Email required !!!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password required !!!';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/.test(values.password)) {
        errors.password = 'Your password must have at least 10 characters, 1 uppercase, 1 lowercase and 1 numeric.';
    }    

    return checkErrors(errors);

}

export { validate };