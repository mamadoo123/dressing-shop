import React from 'react';
import SignIn from '../../components/sign-in/sign-in-component';
import SignUp from '../../components/sign-up/sign-up-component';
import './authentication-page.scss';

const AuthenticationPage = ()=>(
    <div className="authDiv">
        <SignIn />
        <SignUp />
    </div>
)

export default AuthenticationPage;