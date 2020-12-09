import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle  } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // TODO auth.signInWithEmailAndPassword
        this.setState({email:'',password:''});
    }

    handleChange = event => {
        const {name,value} = event.target;
        // r如果name=email 相当于 {email:'1193094618@qq.com'}
        this.setState({[name]: value});
    }


    render(){
        return(

            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label="email"
                        required/>
                    
                    <FormInput
                        name="password"
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label="password"
                        required/>
                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }


}

export default SignIn;