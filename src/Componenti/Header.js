import React from 'react';
import './Header.css';
import { IconSearchAdd } from '../Atom/Icons';

export default class Header extends React.Component {
    state = {
        focus: false,
    };
    Cerca() {
        this.setState({
            focus: !this.state.focus
        })
    }
    render() {
        return (
            <div className="background-one header">

                {(this.state.focus) ?
                    <div className='searchInput'  >
                        <input type='text' onBlur={() => this.Cerca()} autoFocus placeholder='Search'></input>
                    </div>
                    :
                    <div className='searchDisplay'>
                        <h2>thanQ</h2>
                        <div onClick={() => this.Cerca()} >
                            <IconSearchAdd />
                        </div>
                    </div>}
            </div>
        )
    }
}

