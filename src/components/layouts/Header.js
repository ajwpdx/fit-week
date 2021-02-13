import React from 'react'
import UserIcon from './UserIcon'
import { SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <h1 className='header-logo'>
                W/O Plan
        </h1>
            <nav className='header-nav'>
                <a href='/My-Play'>My Plan</a>
                <a href='/Workout-Plans'>Programs</a>
                <a href='/Connect'>Connect</a>
                <UserIcon />
            </nav>
        </header>
    )

}

export default Header