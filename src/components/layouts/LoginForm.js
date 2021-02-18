import React from 'react'

const LoginForm = (props) => {

    return (
        <div className='login-form'>
            <h2>Log In</h2>
            <form>
                <input
                    name='username'
                    placeholder='username'
                />
                <input
                    name='password'
                    placeholder='password'
                />
                <button>
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LoginForm