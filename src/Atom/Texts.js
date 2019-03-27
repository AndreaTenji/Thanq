import React from 'react'
import './Text.css'
export class TextSettings extends React.Component {
    render() {
        const { Text } = this.props
        return (
            <h1 className='textSettings'>{Text}</h1>
        )
    }
}
export class TextRegularGrey extends React.Component {
    render() {
        const { Text } = this.props
        return (
            <h1 className='textRegularGrey'>{Text}</h1>
        )
    }
}

export class TextSemiBoldGrey extends React.Component {
    render() {
        const { Text } = this.props
        return (
            <h1 className='textSemiBoldGrey'>{Text}</h1>
        )
    }
}

