import React from 'react';
import Button from './../Atom/Button';
import Form from './../Atom/Form';
import Checkbox from './../Atom/Checkbox';
import './Login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className='login-background'>
                <div className='centered'>
                    <Form cambia={(event) => this.handleChange(event)} name='email' typeInput='email' placeholder='Email' />
                    <Form cambia={(event) => this.handleChange(event)} name='password' typeInput='password' placeholder='Password' />
                    <Checkbox />

                    <Button funzione={() => this.props.authLogin(this.state.email, this.state.password)} titoloBottone='Login' />
                </div>
            </div>

        )
    }
}