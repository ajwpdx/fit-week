import React from 'react'

const SignupForm = (props) => {

    return (
        <div className='login-signup-form'>
            <h2>Sign Up</h2>
            <form>
                <input
                    name='email'
                    placeholder='email'
                />
                <input
                    name='username'
                    placeholder='username'
                />
                <input
                    name='password'
                    placeholder='password'
                />
                <input
                    name='confirm-password'
                    placeholder='confirm password'
                />
                <button>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignupForm