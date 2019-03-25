import React from 'react'
import './SingleChat.css'
import ProfileImage from './../Atom/ProfileImage'
export default class SingleChat extends React.Component {

    render() {
        return (
            <div className='singleChatDisplay'>
                <ProfileImage preferito={true} />

            </div>
        )
    }
} 