import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => {
    return(
        <ul className="nav main" id="main-nav">
            <li className="nav-item">
                <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/faq" className="nav-link" activeClassName="active">FAQ</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink>
            </li>
            <li className="nav-item">
                <a href="https://medium.com/@mttv.app" target="_blank" rel="noopener noreferrer" className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
                <a href="https://github.com/mttv" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            </li>
        </ul>
    )
}

export default nav