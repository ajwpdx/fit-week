import { SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <header>
            <h1>
                FIT WEEK
        </h1>
            <SettingOutlined className='setting-icon' />
        </header>
    )

}

export default Header
