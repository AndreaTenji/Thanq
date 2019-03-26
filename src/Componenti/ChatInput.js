import React from 'react';
import './ChatInput.css'
import Messaggi from './../img/icon_attachment.svg';
import Send from './../img/icon_send.svg';

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
        <input type="text" className="Message" onBlur={()=>this.setState({focus: false})} autoFocus/>
            :
            <h4  onClick={()=>this.Cerca()}>Write a message</h4>
        return(
            <div class="send-message">                
                <img src={Messaggi}/>
                {CercaEl}
                <img src={Send}/> 
            </div>
        )
    }
}