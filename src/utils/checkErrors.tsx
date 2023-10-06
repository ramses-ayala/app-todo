import FormInputs from "../interfaces/FormInputs";

const checkErrors = (errors: FormInputs) => {
    const result = Object.values(errors).some(item => item !== '');

    if(result !== true){
        return {};
    }else{
        return errors;
    }
}

export {checkErrors};