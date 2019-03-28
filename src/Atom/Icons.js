import React from 'react'
import Back from './../Assets/icons/icon_next.svg'
import Job from './../Assets/icons/icon_job.svg'
import Attachment from './../Assets/icons/icon_attachment.svg'
import Cancel from './../Assets/icons/icon_cancel.svg'



export class IconAttachment extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Attachment}
                alt="Attachment"
                width={size}
                height={size}

            />
        )
    }
}

export class IconBack extends React.Component {
    render() {
        return (
            <img
                style={{ transform: `rotate(180deg)` }}
                src={Back}
                alt="Back Icon"

            />
        )
    }
}

export class IconCancel extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Cancel}
                alt="Cancel"
                width={size}
                height={size}

            />
        )
    }
}


export class IconJob extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Job}
                alt="Job Icon"
                width={size}
                height={size}

            />
        )
    }
}

