import React from 'react';
import PropsTypes from 'prop-types'

import './Form.css'
export default class Form extends React.Component {

    render() {
        const { typeInput, placeholder, cambia, name } = this.props

        return (
            <input name={name} onChange={cambia} type={typeInput} placeholder={placeholder}></input>
        )
    }
}


Form.propsTypes = {
    typeInput: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string,
    cambia: PropsTypes.func
}
