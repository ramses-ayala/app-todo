import CrownLogo from '../../assets/crown.svg';

// components
import LoginForm from '../../components/loginForm/LoginForm';

export interface ILoginProps{}

const Login: React.FC<ILoginProps> = () => {
    return(
        <>
            <div className="container-xl text-center py-5">
                <img src={CrownLogo} alt="logo" />
                <h1>Welcome to <span className='MyTodoApp' style={{color: 'rgb(7, 122, 210)'}}>MyTodoApp</span></h1>    
                <LoginForm />
            </div>
        </>
    )
}

export default Login;