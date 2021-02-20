import React from 'react'

import HeaderNav from './HeaderNav'

import { SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <h1 className='header-logo'>
                W/O Plan

        </h1>
        <HeaderNav view={props.view}/>
        </header>
    )

}

export default Header
