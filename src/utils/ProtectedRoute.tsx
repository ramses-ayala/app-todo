import { ReactNode, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

export interface IProtectedRoute{
    children: ReactNode
}

const ProtectedRoute = ({children}:{children: JSX.Element}) => {
    
    const [flag, setFlag] = useState(false);

    return flag ? children : <Navigate to={'/'}/>
}

export default ProtectedRoute;