import React from 'react';
import PropTypes from 'prop-types';

import './Form.css'
export default class Form extends React.Component {

    render() {
        const { typeInput, placeholder } = this.props

        return (
            <input type={typeInput} name="name" placeholder={placeholder}></input>

            
        )
    }
}
