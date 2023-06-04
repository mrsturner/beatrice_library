import React from "react";
import { Link } from 'react-router-dom';
import {} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <ul className="nav-links">
                {/* <li href="">Welcome</li> */}
                <li>
                    <Link to="/src/components/pages/about/About.js">About</Link>
                </li>
                <li><img src="/images/searchGlass.png" alt="magnifying glass" />
                    <Link to="/src/components/pages/catalog/Catalog.js">Library Catalog</Link>
                </li>
                <li>
                    <Link to="/src/components/pages/search/search.js">Events</Link>
                </li>
                <li>
                Donate
                </li>
                <li>
                   <Link to="/src/components/pages/myAccount/myAccount.js">My Account</Link> 
                </li>
                <li>
                    <Link to="/src/components/pages/signin/signin.js">Sign In</Link>
                </li>
            </ul>

        </>
    );
};

export default Navbar;