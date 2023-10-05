
import { MouseEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';

import { validate } from "../../utils/validateInputs";

import "./LoginForm.css";

export interface ILoginFormProps { }

const LoginForm: React.FC<ILoginFormProps> = () => {

    const [showFormSignUp, setShowFormSignUp] = useState(false);
    const [firstName, setFirstName] = useState('');

    //const [errors, setErrors] = useState(showFormSignUp ? {firstName: '', lastName: '', email: '', password: ''} : {email: '', password: ''});

    const formik = useFormik({
        initialValues: showFormSignUp ? { firstName: '', lastName: '', email: '', password: '' } : { email: '', password: '' },
        validate,        
        onSubmit: values => {

            if (showFormSignUp) {
                console.log('sending data to sign up');
                console.log('values for signUp --> ', values);

            } else {
                console.log('sending data to log in');
                const { email, password } = values;
                console.log('values for signIn --> ', email, ' , ', password);
            }
            
        },
    });



    /*  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
         e.preventDefault();
         
         if(showFormSignUp){
             console.log('sending data to sign up');
         }else{
             console.log('sending data to log in');
         }
     } */

    return (
        <>
            <div className="box-form mt-5">
                <div className="d-flex w-100 box-form-head border mb-4">
                    <div className={`login-tab tabs fw-700 w-100 py-2 ${showFormSignUp ? 'tab-selected' : ''}`} onClick={() => setShowFormSignUp(true)}>
                        SignUp
                    </div>

                    <div className={`signUp-tab tabs fw-700 w-100 py-2 ${showFormSignUp !== true ? 'tab-selected' : ''}`} onClick={() => setShowFormSignUp(false)}>
                        Login
                    </div>
                </div>

                <form id="login" onSubmit={formik.handleSubmit} className="" >
                    {showFormSignUp &&
                        <>
                            <div className="input-group mb-3 d-flex justify-content-center">
                                <span className="input-group-text border border-light bg-white">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input
                                    type="text"
                                    className="p-2 border border-light border-2 w-50"
                                    id="firstName"
                                    placeholder="Your First Name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    required 
                                />
                                
                            </div>
                            {formik.errors.firstName ? <div className="text-danger">{formik.errors.firstName}</div> : null}

                            <div className="input-group mb-3 d-flex justify-content-center">
                                <span className="input-group-text border border-light bg-white">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input
                                    type="text"
                                    className="p-2 border border-light border-2 w-50"
                                    id="lastName"
                                    placeholder="Your last name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {formik.errors.lastName ? <div className="text-danger">{formik.errors.lastName}</div> : null}
                        </>
                    }
                    <div className="input-group mb-3 d-flex justify-content-center">
                        <span className="input-group-text border border-light bg-white">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                            type="email"
                            className="p-2 border border-light border-2 w-50"
                            id="email"
                            placeholder="Your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}

                    <div className="input-group mb-3 d-flex justify-content-center">
                        <span className="input-group-text border border-light bg-white">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input
                            type="password"
                            className="p-2 border border-light border-2 w-50"
                            id="password"
                            placeholder="Your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}

                    <input type="submit" className="p-2 mb-3 w-50 border border-light" value={showFormSignUp ? "Create an account" : "Log In"} />

                </form>
            </div>

        </>
    )
}

export default LoginForm;