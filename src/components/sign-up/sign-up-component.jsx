import React from 'react';
import FormInput from '../form-input/form-input-component';
import ButtonComponent from '../button-component/button-component';
import {auth, createUserProfileDocument} from '../../firebase/firebase-utilities';
import './sign-up.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'', email:'', password:'', confirmPassword:''
        }
    }
    
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({ displayName:'', email:'', password:'', confirmPassword:''})
        }catch(error){
            console.error(error);
        } 
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value}); 
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I dont Have Account</h2>
                <span>Sign Up Now with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                        type="text"
                        label="Display Name"
                        name="displayName"
                        value={displayName}
                        onChange= {this.handleChange}
                        required
                    />
                    <FormInput 
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        onChange= {this.handleChange}
                        required
                    />
                    <FormInput 
                        type="password"
                        label="Enter Password"
                        name="password"
                        value={password}
                        onChange= {this.handleChange}
                        required
                    />
                    <FormInput 
                        type="password"
                        label="Confirm Your Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange= {this.handleChange}
                        required
                    />
                    <ButtonComponent type="submit">Sign Up</ButtonComponent>
                </form>
            </div>
        )
    }

}

export default SignUp;