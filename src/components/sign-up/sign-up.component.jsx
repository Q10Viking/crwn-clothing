import './sign-up.styles.scss';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h1 className="title">I don't have an account</h1>
                <span>Sign up email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        label="displayName"
                        required
                    />

                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />

                    
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submite">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const {password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("密码不相同");
            this.setState({
                password:'',
                confirmPassword:''
            })
            return;
        }

        // TODO firebase auth and store user info
        console.log(this.state);


        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },()=>{
            alert("提交成功");
        });

    }
}

export default SignUp;