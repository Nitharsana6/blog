import React from "react";
import { Link } from 'react-router-dom';
 import logo from './download.png';
function BlogNav(){
    return(
        <>
        <nav>
            <div className="logo">
            <img src={logo}></img>
            <h1>Blog Platform</h1>
            </div>
            <div>
            <ul>
                <li><Link to="/Post1">JavaScript</Link></li>
                <li><Link to="/Post2">Datastructure</Link></li>
                <li><a href="/Post3">Alcorithm</a></li>
                <li><a href="/Post4">ComputerNetwork</a></li>
                <input type="text" placeholder="Search..." className="search-box" />

            </ul>
</div>
        </nav>
        </>
    )
}
export default BlogNav;