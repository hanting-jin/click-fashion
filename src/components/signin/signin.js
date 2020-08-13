import React from 'react';
import './sign.scss'

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'

// google sign-in
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default class Sign extends React.Component{
    constructor(){
        super();

        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error)
        }
      
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h3>I already have an account</h3>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="E-mail" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>    
        )
    }
}