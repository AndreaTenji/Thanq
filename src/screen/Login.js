import React from 'react';
import Button from './../Atom/Button';
import Form from './../Componenti/Forms';
import Checkbox from './../Atom/Checkbox';

import './Login.css'

export default class Login extends React.Component {
    render() {
        return (
            <div className='login-background '>
                <div className='centered'>
                    <Form />
                    <Checkbox />
                    <Button />
                </div>
            </div>
        )
    }
}