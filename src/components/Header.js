import React from 'react'
import UserIcon from './UserIcon'
import { SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <h1>
                FIT WEEK
        </h1>
        <nav>
            <UserIcon/>
        </nav>
        </header>
    )

}

export default Header
