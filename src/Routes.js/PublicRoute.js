import { Navigate, Route } from 'react-router-dom';
import { getToken } from '../service/AuthService';

function PublicRoute({ component: Compontent,authenticated }) {
 


  return !authenticated ? <Compontent/> : <Navigate to="/" />

}

export default PublicRoute;