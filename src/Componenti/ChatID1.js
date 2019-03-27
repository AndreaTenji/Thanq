import React from 'react'
import './Chat.css';

export default class ChatID1 extends React.Component{
    state ={
        Verifica:true,
    }
    constructor(props){
        super(props)    
    }
    render()
    {
        const Test = this.state.Verifica ? <div class="Chat-Messaggio2"> 
        <div class="speech-bubble2"> 
            <div class="Cloud-Messaggio2"> 
                <h4 class="Cloud-Text2">{this.props.message}</h4>
            </div>
        </div> 
            <span class="time-right" >{this.props.data}</span>
    </div>
        :
        <div class="Chat-Messaggio3">  
                <span class="time-left" >{this.props.data}</span> 
                <div class="speech-bubble3">  
                    <div class="Cloud-Messaggio3">  
                    <h4 class="Cloud-Text3">{this.props.message}</h4>
                    </div>
                </div>
            </div>

        return(
            <div className="Contenitore">
            {Test}
            </div>
        )
    }
}