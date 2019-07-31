import React from 'react';
import FormInput from '../form-input/form-input-component';
import ButtonComponent from '../button-component/button-component';
import {signInWithGoogle} from '../../firebase/firebase-utilities';
import './sign-in.scss';

class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state = {password:'',email:''}
}

handleSubmit = e =>{
    e.preventDefault();
    this.setState({password:'', email:''});

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