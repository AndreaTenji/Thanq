import React from 'react';
import Button from './../atom/Button';
import Form from './../Componenti/Forms';
import Checkbox from './../atom/Checkbox';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <Checkbox />
                <Button />
            </div>
        )
    }
}