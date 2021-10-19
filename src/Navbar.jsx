import React  from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className = {classes.navbar}>
            <div>
                <NavLink to = '/content'>Content</NavLink>
            </div>
            <div>
                <NavLink to = '/dialogs'>Dialogs</NavLink>
             </div>
            <div>
                <NavLink to = '/users'>Users</NavLink>
             </div>
        </div>
    )
}

export default Navbar;