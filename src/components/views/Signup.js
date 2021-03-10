import React from 'react'

import Header from '../layouts/Header'
import SignupForm from '../layouts/SignupForm'

const Signup = (props) => {

    return (

        <div id="login">
            <Header view="signup"/>
            <SignupForm/>
        </div>
    )

}

export default Signup