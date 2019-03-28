import React from 'react';
import { TextRegularGrey, TextSettings } from './../Atom/Texts'
import { IconNext } from './../Atom/Icons'
import Input from './../Atom/Input'



export default class ChangeProfileImg extends React.Component {

    render() {

        return (

            <div style={{ height: '100vh', backgroundColor: 'white' }}>

                <div style={{ position: 'absolute', paddingTop: '3%', display: 'flex' }}
                    onClick={this.props.actionBack} >
                    <IconNext />

                    {/* <TextRegularGrey Text={'Back'} /> */}
                </div>


                <div style={{ paddingTop: '3%', height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextSettings Text={'Change Profile Image'} />

                    <Input type={'password'} placeholder={'CurrentPassword'} />
                    <Input type={'password'} placeholder={'New Password'} />
                    <Input type={'password'} placeholder={'Conferm new Password'} />
                </div>

                <div onClick={() => alert('PasswordCambiata')} style={{ textAlign: 'center', paddingTop: '30px' }}>
                    <TextSettings Text={'CONFIRM'} />
                </div>

            </div >

        )
    }
}