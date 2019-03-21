import React from 'react'


export default class Module extends React.Component {
    render() {

        const style = {
            backgroundColor: 'white',
            width: '60%',
            padding: '40px',
            color: 'grey',
            borderRadius: '2px'
        }

        return (
            <div style={style}>
                <h2> {this.props.title} </h2>

                {this.props.children}
            </div>

        )
    }
}