import React from "react";
import {NavLink} from 'react-router-dom'
export function Header(){
return(
<header>
    <ul>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
</header>
)
}