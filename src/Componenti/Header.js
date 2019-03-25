import React from 'react';
import './Header.css';
export default class Header extends React.Component{
    state = {
        focus: false,
    };
    Cerca()
    {
        this.setState({
            focus: true
        })
    }
    render(){
        const CercaEl = this.state.focus ? 
        <input type="text" className="ciao" onBlur={()=>this.setState({focus: false})} autoFocus/>
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

