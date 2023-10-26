import React from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import  {getToken} from '../service/AuthService';




function PrivateRoute({ component: Compontent,authenticated,models,videos,images }) {
    // console.log(authenticated)


  return authenticated ? <Compontent models={models} videos={videos} images={images}/> : <Navigate to="/login" />

}

export default PrivateRoute;
