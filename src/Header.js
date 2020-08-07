import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1>I"m Header</h1>
            <div className="header__right">
                <button>Dashboard</button>
                <button>Login</button>
            </div>
            
        </div>
    )
}

export default Header
