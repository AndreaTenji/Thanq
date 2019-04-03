import React from 'react';
import Button from './../Atom/Button';
import Form from './../Atom/Form';
import Checkbox from './../Atom/Checkbox';
import { app } from './../utils/Firebase';
import './Login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value, });
    }

    login() {
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.props.authLogin();
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className='login-background'>
                <div className='centered'>
                    <Form cambia={this.handleChange} name='email' typeInput='email' placeholder='Email' />
                    <Form cambia={this.handleChange} name='password' typeInput='password' placeholder='Password' />
                    <Checkbox />

                    <Button funzione={this.login} titoloBottone='Login' />
                </div>
            </div>

        )
    }
}