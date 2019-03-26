import React from 'react';
import Button from './../Atom/Button';
import Form from '../Atom/Form';
import Checkbox from './../Atom/Checkbox';

import './Login.css'

export default class PasswordRecovery extends React.Component {
    render() {
        return (

            <div className='login-background'>
                <div className='centered'>
                    <h1>Recovery Password</h1>
                    <Form typeInput='email' placeholder='Please enter email address' />
                    <Form typeInput='email' placeholder='Please confirm email address' />
                    <Button titoloBottone='Reset Password' />
                </div>
            </div>

        )
    }
}