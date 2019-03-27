import React from 'react';
import './Chat.css';

export default class Chat extends React.Component{
    state ={
        test:false,
        message: 'Hola',
        timedate: new Date(),
        Utenteid: null, //will be 1  props
    }
    render(){
        const Test = this.state.test ? 
        <div class="Chat-Messaggio2"> <div class="speech-bubble2"> <div class="Cloud-Messaggio2"> <h4 class="Cloud-Text2">{this.state.message}</h4></div></div> <span class="time-right" >11:00</span></div>
        :
        <div class="Chat-Messaggio3">  <span class="time-left" >11:00</span> <div class="speech-bubble3">  <div class="Cloud-Messaggio3">  <h4 class="Cloud-Text3">{this.state.message}</h4></div></div></div>
        return(
        <div className="Lista"> 
            <div className="Contenitore">
            {Test}
            </div>
        </div>
        )
    
    }
}