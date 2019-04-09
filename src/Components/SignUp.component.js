import React from 'react'

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='email' placeholder="Enter your email" required/>
                    <input type='password' required />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp