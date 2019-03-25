import React from 'react'
import './SingleChat.css'
import ProfileImage from './../Atom/ProfileImage'
export default class SingleChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: 'Roberta',
            Surname: 'Caresti',
            Job: 'MediaSocial Maneger',
            LastMessage: 'Hi, come stai?',
            LastMessageTime: '14:10',
            ImgProfileURL: 'image-katia123456',
            Favorite: true,
        }
    }

    render() {
        return (
            <div className='singleChatDisplay'>
                <ProfileImage favoriteBool={this.state.Favorite} imageProfileURL={this.state.ImgProfileURL} />

            </div>
        )
    }
} 