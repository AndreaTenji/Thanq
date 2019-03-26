import React from 'react';
import './ChatInput.css'
export default class ChatInput extends React.Component{
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
            <h4  onClick={()=>this.Cerca()}>Write a message</h4>
        return(
            <div class="send-message">
                <img src={require('./../img/icon_attachment.svg')}/>
                {CercaEl}
                <img src={require('./../img/icon_send.svg')}/>
            </div>
        )
    }
}