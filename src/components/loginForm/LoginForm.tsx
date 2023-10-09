
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';

import { validatorSignUpForm } from "../../utils/validatorSignUpForm";
import { validatorFormSignIn } from "../../utils/validatorSignInForm";


import "./LoginForm.css";

export interface ILoginFormProps { }

const LoginForm: React.FC<ILoginFormProps> = () => {

    const [showFormSignUp, setShowFormSignUp] = useState(false);

    const formik = useFormik({
        initialValues: showFormSignUp ? { firstName: '', lastName: '', email: '', password: '' } : { email: '', password: '' },
        validate: showFormSignUp ? validatorSignUpForm : validatorFormSignIn,
        onSubmit: values => {

            if (showFormSignUp) {
                
                console.log('values for signUp --> ', values);

            } else {
                
                const { email, password } = values;
                console.log('values for signIn --> ', email, ' , ', password);
            }
            
        },
    });

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
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                
                            </div>
                            {formik.touched.firstName && formik.errors.firstName ? <p className="mb-2 text-danger">{formik.errors.firstName}</p> : null}

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
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {formik.touched.lastName && formik.errors.lastName ? <p className="mb-2 text-danger">{formik.errors.lastName}</p> : null}
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
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? <p className="mb-2 text-danger">{formik.errors.email}</p> : null}

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
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password ? <p className="mb-2 text-danger">{formik.errors.password}</p> : null}

                    <input type="submit" className="p-2 mb-3 w-50 border border-light" value={showFormSignUp ? "Create an account" : "Log In"} />

                </form>
            </div>

        </>
    )
}

export default LoginForm;