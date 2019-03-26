import React from 'react';
import Button from './../Atom/Button';
import Form from './../Atom/Form';
import Checkbox from './../Atom/Checkbox';

import './Login.css'

export default class Login extends React.Component {
    render() {
        return (
            <div className='login-background'>
                <div className='centered'>
                    <Form typeInput='email' placeholder='Email' />
                    <Form typeInput='password' placeholder='Password' />
                    <Checkbox />
                    <Button titoloBottone='Login' />
                </div>
            </div>

        )
    }
}