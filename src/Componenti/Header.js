import React from 'react';
import './Header.css';
export default class Header extends React.Component{
    state = {
        focus: false,
    };
    Cerca()
    {
        this.setState({
            focus: !this.state.focus
        })
    }
    render(){
        const CercaEl = this.state.focus ? 
        <input type="text" onBlur={()=>this.Cerca()} autoFocus/>
            :
            <img src={require('./../img/icon_search.svg')} onClick={()=>this.Cerca()} />
        return(
            <div className="background-one header">
                <h2>ThanQ</h2>
                {CercaEl}
            </div>
        )
    }
}

