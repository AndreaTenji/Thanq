import React from 'react';
import Button from './../Atom/Button';
import Form from './../Atom/Form';
import Checkbox from './../Atom/Checkbox';
import fire from './../utils/firebase'
import './Login.css'

export default class Login extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }*/
    render() {
        return (
            <div className='login-background'>
                <div className='centered'>
                    <Form /*value={this.state.email} onChange={this.handleChange}*/ typeInput='email' placeholder='Email' />
                    <Form /*value={this.state.password} onChange={this.handleChange}*/ typeInput='password' placeholder='Password' />
                    <Checkbox />
                    <Button onClick={this.signup} funzione={() => this.props.authLogin()} titoloBottone='Login' />
                </div>
            </div>

        )
    }
}