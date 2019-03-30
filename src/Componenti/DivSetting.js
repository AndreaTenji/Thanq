import React from 'react';
import { Link } from 'react-router-dom'
import './ChatInput.css'
import { TextRegularGrey } from './../Atom/Texts'
import { IconBack } from '../Atom/Icons';


export default class DivSetting extends React.Component {

    render() {
        const { Text, Func } = this.props

        return (
            <Link to={`/settings/${Func}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextRegularGrey Text={Text} />
                    <IconBack />
                </div>
            </Link>

        )
    }
}