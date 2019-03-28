import React from 'react'
import Attachment from './../Assets/icons/icon_attachment.svg'
import Cancel from './../Assets/icons/icon_cancel.svg'
import Back from './../Assets/icons/icon_next.svg'
import BackWhite from './../Assets/icons/icon_back.svg'
import FavoriteOutline from './../Assets/icons/icon_favorite_outline.svg'
import FavoritePurple from './../Assets/icons/icon_favorite_purple.svg'
import FavoriteYellow from './../Assets/icons/icon_favorite_yellow.svg'
import FavoriteWhite from './../Assets/icons/icon_favorite_white.svg'
import Job from './../Assets/icons/icon_job.svg'
import Messages from './../Assets/icons/icon_messages.svg'
import Next from './../Assets/icons/icon_next.svg'
import Profile from './../Assets/icons/icon_profile.svg'
import Search from './../Assets/icons/icon_search.svg'
import SearchAdd from './../Assets/icons/icon_search_add.svg'
import Send from './../Assets/icons/icon_send.svg'
import Trash from './../Assets/icons/icon_trash.svg'

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
export class IconBackWhite extends React.Component {
    render() {
        return (
            <img
                src={BackWhite}
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

export class IconFavoriteOutline extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={FavoriteOutline}
                alt="FavoriteOutline"
                width={size}
                height={size}

            />
        )
    }
}

export class IconFavoritePurple extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={FavoritePurple}
                alt="FavoritePurple"
                width={size}
                height={size}

            />
        )
    }
}

export class IconFavoriteWhite extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={FavoriteWhite}
                alt="FavoriteWhite"
                width={size}
                height={size}

            />
        )
    }
}

export class IconFavoriteYellow extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={FavoriteYellow}
                alt="FavoriteYellow"
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

export class IconMessages extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Messages}
                alt="Messages"
                width={size}
                height={size}

            />
        )
    }
}

export class IconNext extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Next}
                alt="Next"
                width={size}
                height={size}

            />
        )
    }
}

export class IconProfile extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Profile}
                alt="Profile"
                width={size}
                height={size}

            />
        )
    }
}

export class IconSearch extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Search}
                alt="Search"
                width={size}
                height={size}

            />
        )
    }
}
export class IconSearchAdd extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={SearchAdd}
                alt="SearchAdd"
                width={size}
                height={size}

            />
        )
    }
}

export class IconSend extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Send}
                alt="Send"
                width={size}
                height={size}

            />
        )
    }
}

export class IconTrash extends React.Component {
    render() {
        const { size } = this.props
        return (
            <img
                src={Trash}
                alt="Trash"
                width={size}
                height={size}

            />
        )
    }
}


