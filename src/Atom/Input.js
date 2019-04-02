import React from 'react';
import PropsTypes from 'prop-types'
import './Input.css'
export default class Input extends React.Component {

    render() {
        const { placeholder } = this.props

        return (
            <div className='inputLogin'>
                <input type='password' name="name" placeholder={placeholder}></input>
            </div>


        )
    }
}

Input.propsTypes = {
    placeholder: PropsTypes.string,
}