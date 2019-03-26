import React from 'react';
import Button from '../Atom/Button';
import Form from './../Atom/Form';
import './Recovery.css';

export default class Recovery extends React.Component {
    render() {
        return (
            <div className='login-background'>
                <div className='centered'>
                    <Form typeInput='email' placeholder='Insert email' />
                    <Form typeInput='confirm' placeholder='Confirm email' />
                    <Button titoloBottone='Reset password' />
                </div>
            </div>

        )
    }
}