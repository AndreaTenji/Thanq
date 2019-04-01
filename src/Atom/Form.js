import React from 'react';

import './Form.css'
export default class Form extends React.Component {

    render() {
        const { typeInput, placeholder, cambia, name } = this.props

        return (
            <input name={name} onChange={cambia} type={typeInput} placeholder={placeholder}></input>
        )
    }
}

