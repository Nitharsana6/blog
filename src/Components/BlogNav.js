import React from "react";
 
function BlogNav(){
    return(
        <>
        <nav>
            <h1>Blog Platform</h1>
            <div>
            <ul>
               
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">Datastructure</a></li>
                <li><a href="#">Alcorithm</a></li>
                <li><a href="#">ComputerNetwork</a></li>
                <input type="text" placeholder="Search..." className="search-box" />

            </ul>
</div>
        </nav>
        </>
    )
}
export default BlogNav;