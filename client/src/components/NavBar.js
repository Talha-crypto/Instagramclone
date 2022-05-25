import React from "react";
import "../App.css"; 

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <a href="#" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" className="right ">
                    <li><a href="Login">Sass</a></li>
                    <li><a href="Profile">Components</a></li>
                    <li><a href="Sign-up">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar