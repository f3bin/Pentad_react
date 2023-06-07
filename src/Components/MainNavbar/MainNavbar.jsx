import React from 'react'
import './MainNavbar.css'
import PentadLogo from '../../images/pentad-logo.jpeg'

const MainNavbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo"><img className="logo-image" src={PentadLogo} alt="logo" /></div>
            <ul className="navbar-items">
                <li className="navbar-item">About</li>
                <li className="navbar-item">Products</li>
                <li className="navbar-item">Platform</li>
                <li className="navbar-item">Attention Investors</li>
                <li className="navbar-item">Contact Us</li>
                <li className="navbar-item">Open An Account</li>
            </ul>
            <button className="navbar-item-button">Login</button>
        </div>
    )
}

export default MainNavbar
