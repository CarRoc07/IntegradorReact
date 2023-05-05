import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import React from 'react'
import Home from '../pages/home/Home';
import NotFound from '../pages/404/404';
import LoginPage from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Cart from '../pages/cart/Cart';

const Routes = () => {
    return (
    <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/cart' element={<Cart />}/>
    </ReactDomRoutes>
    );
}

export default Routes;