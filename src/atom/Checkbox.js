import React from 'react'
import './Checkbox.css'

export default class Login extends React.Component {
    render() {
        return (
            <div className='display'>
                <input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
                <label for="checkboxG1" class="css-label"><h3>Remember Me </h3></label>
            </div>
        )
    }
}