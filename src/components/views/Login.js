import React from 'react'

//components - layouts
import Header from '../layouts/Header'
import LoginForm from '../layouts/LoginForm'

const Login = (props) => {

    return (
        <div id='login'>
            <Header view="login"/>
            <LoginForm/>
        </div>


    )
}

export default Login