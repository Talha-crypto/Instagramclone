import React from "react";

import { Link } from "react-router-dom"; // Link and to is used to from react instead of tag <a>. just to remove refresh rate of page

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right ">
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar