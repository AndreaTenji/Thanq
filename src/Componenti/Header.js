import React from 'react';
import Form from './../Atom/Form';
import './Header.css';
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

                        <img src={require('./../Componenti/images/icon_search.svg')} alt='cerca' onClick={() => this.Cerca()} />

                    </div>}
            </div>
        )
    }
}

