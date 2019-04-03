import React from 'react';
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types'
//
import './ChatInput.css'
import { TextRegularGrey } from './../Atom/Texts'
import { IconBack } from '../Atom/Icons';


export default class DivSetting extends React.Component {

    render() {
        const { text, func } = this.props

        return (
            <Link to={`/settings/${func}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextRegularGrey Text={text} />
                    <IconBack />
                </div>
            </Link>

        )
    }
}

DivSetting.propsTypes = {
    text: PropsTypes.string,
    func: PropsTypes.string,
}