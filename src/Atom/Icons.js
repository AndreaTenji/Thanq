import React from 'react'
import Back from './../Assets/icons/icon_next.svg'
import Job from './../Assets/icons/icon_job.svg'

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


