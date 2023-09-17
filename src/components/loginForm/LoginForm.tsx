
import { MouseEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import "./LoginForm.css";

export interface ILoginFormProps{}

const LoginForm: React.FC<ILoginFormProps> = () => {

    const [showFormSignUp, setShowFormSignUp] = useState(false);

    const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(showFormSignUp){
            console.log('sending data to sign up');
        }else{
            console.log('sending data to log in');
        }
    }

    return(
        <>
            <div className="box-form mt-5">
                <div className="d-flex w-100 box-form-head border mb-4">
                    <div className={`login-tab tabs w-100 py-2 ${showFormSignUp ? 'tab-selected' : ''}`} onClick={() => setShowFormSignUp(true)}>
                        SignUp
                    </div>

                    <div className={`signUp-tab tabs w-100 py-2 ${showFormSignUp !== true ? 'tab-selected' : ''}`} onClick={() => setShowFormSignUp(false)}>
                        Login
                    </div>
                </div>

                <form id="login" onSubmit={handleSubmit} className="" >
                    {showFormSignUp &&
                        <>
                            <div className="input-group mb-3 d-flex justify-content-center">
                                <span className="input-group-text border border-light bg-white">
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                <input type="text" className="p-2 border border-light border-2 w-50" id="firstName" placeholder="Your First Name"/>
                            </div>

                            <div className="input-group mb-3 d-flex justify-content-center">
                                <span className="input-group-text border border-light bg-white">
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                <input type="text" className="p-2 border border-light border-2 w-50" id="lastName" placeholder="Your last name"/>
                            </div>        
                        </>
                    }
                    <div className="input-group mb-3 d-flex justify-content-center">
                        <span className="input-group-text border border-light bg-white">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </span>
                        <input type="email" className="p-2 border border-light border-2 w-50" id="email" placeholder="Your email"/>
                    </div>

                    <div className="input-group mb-3 d-flex justify-content-center">
                        <span className="input-group-text border border-light bg-white">
                            <FontAwesomeIcon icon={faLock}/>
                        </span>
                        <input type="password" className="p-2 border border-light border-2 w-50" id="password" placeholder="Your password"/>
                    </div>

                    
                    <input type="submit" className="p-2 mb-3 w-50 border border-light" value={showFormSignUp ? "Create an account" : "Log In"}/>
                    
                </form>
            </div>
            
        </>
    )
}

export default LoginForm;