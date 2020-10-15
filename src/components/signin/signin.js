import React, {useState} from 'react';
import './sign.scss'
import {connect} from 'react-redux';


import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'

// google sign-in
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'


const SignIn = ({ emailSignInStart,googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({email:'',password:''})
    const {email, password} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email,password)
      
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({...userCredentials,[name]:value});
    }

        return(
                <div className="sign-in">
                    <h3>I already have an account</h3>
                    <span>Sign in with your email and password</span>
    
                    <form onSubmit={handleSubmit}>
                        <FormInput label="E-mail" type="email" name="email" value={email} handleChange={handleChange} required/>
                        <FormInput label="Password" type="password" name="password" value={password} handleChange={handleChange} required/>
                        <div className="buttons">
                            <CustomButton type="submit">SIGN IN</CustomButton>
                            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                        </div>
                        
                    </form>
                </div>    
            )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password)=> dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);