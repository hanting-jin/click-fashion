import React from 'react';

import "./Sign-in-and-Sign-up.scss"

import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/signup'

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;