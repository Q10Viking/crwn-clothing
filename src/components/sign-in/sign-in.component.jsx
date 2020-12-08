import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';

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
        console.log('执行了吗');
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
    
                    <input type="submit" value="submit form"/>
                </form>
            </div>
        )
    }


}

export default SignIn;