import React from 'react'

//components - layouts
import LoginHeader from '../layouts/LoginHeader'
import LoginForm from '../layouts/LoginForm'

const Login = (props) => {

    return (
        <div id='login'>
            <LoginHeader />
            <LoginForm/>
        </div>


    )
}

export default Login