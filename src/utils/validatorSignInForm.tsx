import  FormInputs from "../interfaces/FormInputs";

import { checkErrors } from "./checkErrors";

const validatorFormSignIn = (values: FormInputs) => {

    let errors = {email: '', password: ''};

    if (!values.email) {
        errors.email = 'Email required !!!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    if(!values.password){
        errors.password = 'Password required !!!';
    }

    return checkErrors(errors);
}

export { validatorFormSignIn };