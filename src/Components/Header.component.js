import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => (
    <div>
        <h1>Welcome to my app</h1>
        <ul>
        <li>
          <NavLink to="/">Sign up</NavLink>
          </li>
        <li>
          <NavLink to="/SignIn">Sign In</NavLink>
          </li>
      </ul>
    </div>
)