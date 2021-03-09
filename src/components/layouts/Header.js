import React from 'react'

import HeaderNav from './HeaderNav'

import { SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <nav className='header-nav-container'>
                <h1 className='header-logo'>W/O Plan</h1>
                <HeaderNav view={props.view} />
            </nav>
        </header>
    )

}

export default Header
