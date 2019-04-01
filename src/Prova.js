import React from 'react'

export default class Prova extends React.Component {
    render() {
        console.log(this.props)


        return (
            <div>

                {this.props.location.pathname === '/prova/jjj' &&
                    <h1> {this.props.testo}</h1>}

            </div>
        )
    }
}
