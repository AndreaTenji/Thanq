import React from 'react';

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

