import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '', 
            password: '',
            formErrors: {
                name: 'invalid',
                email: 'invalid',
                password: 'invalid'
            },
            nameValid: false,
            emailValid: false,
            passwordValid: false,
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    
    }

    onNameChange(event) {
        // console.log('name');
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {name: value}, 
            () => {this.validateField(name, value);});
    }
    onEmailChange(event) {
        const email = event.target.name;
        const value = event.target.value;
        // console.log('email');
        this.setState(
            {email: value}, 
            () => {this.validateField(email, value);});
    }
    onPasswordChange(event) {
        const password = event.target.name;
        const value = event.target.value;
        // console.log('password');
        this.setState(
            {password: value}, 
            () => {this.validateField(password, value);});
    }

    validateField(field, value) {
        let errorValid = this.state.formErrors;
        let nameValid = this.state.nameValid;             
        let emailValid = this.state.emailValid;            
        let passwordValid = this.state.passwordValid;           
        switch(field) {
            case 'name':
                nameValid = value.length > 0;
                this.setState({nameValid: nameValid});
                errorValid.name = nameValid ? '' : 'invalid';   //alert('Your name is to short');
                break;

            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); //Devise library
                this.setState({emailValid: emailValid});
                errorValid.email = emailValid ? '' : 'invalid';   //alert('Your email is invalid');
                break;

            case 'password':
                passwordValid = value.length >= 6;
                this.setState({passwordValid: passwordValid});
                errorValid.password = passwordValid ? '' : 'invalid';   //alert('Your password is to short');
                break;

                default:
                break;
        }
    }

    onSubmit(event) {
        // console.log('submit');
        alert(`Hello ${this.state.name}!`);
        event.preventDefault();
    }

    render(){
        return(
            <section className='form'>
                <div className='container'>
                    <form onSubmit = {this.onSubmit} className = 'form-form'>
                        <label>name:
                            <input 
                                type = 'text' 
                                name ='name'
                                placeholder = 'enter your name'
                                // required
                                style = {{outlineColor: this.state.formErrors.name === 'invalid' ? '#da6868' : '#fff'}}
                                value = {this.state.name} 
                                onChange = {this.onNameChange}/>
                        </label>
                        <label>email:
                            <input 
                                type = 'text' 
                                name ='email'
                                placeholder = 'enter your email'
                                // required
                                style = {{outlineColor: this.state.formErrors.email === 'invalid' ? '#da6868' : '#fff'}}
                                value = {this.state.email} 
                                onChange = {this.onEmailChange}/>
                        </label>
                        <br />
                        <label>password:
                            <input 
                                type ='text' 
                                name = 'password' 
                                placeholder = 'enter your password'
                                // required
                                style = {{outlineColor: this.state.formErrors.password === 'invalid' ? '#da6868' : '#fff'}}
                                value = {this.state.password} 
                                onChange = {this.onPasswordChange}/>
                        </label>
                        <input
                            type = 'submit'
                            value = 'SUBMIT'
                            disabled = {!(this.state.nameValid && this.state.emailValid && this.state.passwordValid)}/>
                    </form>
                </div>
            </section>
        );
    }
}

export default Form;