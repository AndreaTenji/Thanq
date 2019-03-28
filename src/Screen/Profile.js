import React from 'react';
import ProfileImage from './../Atom/ProfileImage'
import Separator from './../Atom/Separator'
import DivSetting from './../Componenti/DivSetting'
import { TextSettings, TextSemiBoldGrey } from './../Atom/Texts'
import { IconJob } from './../Atom/Icons'
export default class Profile extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            Name: 'Roberto',
            Surname: 'Greco',
            Job: 'Social Media',
            ImageProfileURL: 'Roberto',
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ padding: '30px', flex: 2 }}>
                        <ProfileImage
                            imageProfileURL={'image-katia123456'}
                            size='90px'
                        />
                    </div>
                    <div style={{ paddingLeft: '30px', flex: 6 }}>
                        <TextSettings Text={this.state.Name + ' ' + this.state.Surname} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IconJob size='40px' />
                            <TextSemiBoldGrey Text={this.state.Job} />
                        </div>

                    </div>
                </div>
                <Separator />
                <div style={{ paddingLeft: '30px' }}>
                    <TextSettings Text={'Settings'} />
                    <div style={{ paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>

                        <DivSetting Func={() => this.props.actionSetting('ChangePassword')} Text={'Change Password'} />
                        <DivSetting Func={() => this.props.actionSetting('ChangeProfileImg')} Text={`Change profile's image`} />
                        <DivSetting Func={() => this.props.actionSetting('ChangeBackground')} Text={`Change chat's background`} />
                        <DivSetting Func={() => this.props.actionSetting('ChangeTextSize')} Text={`Change text size`} />

                    </div>

                </div>
                <Separator />

                <div style={{ paddingTop: '10px', paddingLeft: '50px' }}>
                    <DivSetting Func={() => alert('About')} Text={`About`} />
                </div>


                <div
                    onClick={() => this.props.actionLogout()}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <TextSettings Text={'Logout'} />
                </div>

            </div>



        )
    }
}