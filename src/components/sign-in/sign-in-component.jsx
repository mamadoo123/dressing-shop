import React from 'react';
import FormInput from '../form-input/form-input-component';
import ButtonComponent from '../button-component/button-component';
import {auth, signInWithGoogle} from '../../firebase/firebase-utilities';
import './sign-in.scss';

class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state = {password:'',email:''}
}

handleSubmit = async e =>{
    e.preventDefault();
    const {email, password} = this.state;
    try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({password:'', email:''});
    }catch(error){
        console.error(error);
    }
}

handleChange = e =>{
    const {name, value} = e.target;
    this.setState({[name]: value});
}

render(){
    return(
        <div className="sign-in">
            <h2>I Already Have An Account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email"
                    label="email"
                    name="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    label="password"
                    name="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                />
                <div className="buttons">
                    <ButtonComponent 
                        type="submit">
                    Sign In
                    </ButtonComponent>
                    <ButtonComponent 
                        onClick={signInWithGoogle}
                        isGoogleSignIn>
                    Sign In With Google
                    </ButtonComponent>
                </div>
            </form>
        </div>
    )
}
}

export default SignIn; 