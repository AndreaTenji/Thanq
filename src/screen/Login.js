import React from 'react';
import Button from './../Atom/Button';
import Form from './../Componenti/Forms';
import Checkbox from './../Atom/Checkbox';

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