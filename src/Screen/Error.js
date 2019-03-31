import React from 'react'
import { Link } from 'react-router-dom'

export default class Error extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <h1>
                    PAGINA NON TROVATA
                </h1>
                <Link to='/messages/'>
                    TORNA ALLA HOME
                </Link>

            </div>
        )
    }
}
