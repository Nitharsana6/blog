import React from "react";
import image1 from './JavaScript-Tutorial.jpg';


function Post1(){
    return(
        <>
        <div className="post">
        <img src={image1}></img>
        <div>
            <h2>JavaScript</h2>
            <p>JavaScript is the world most lightweight, interpreted compailed programming language. It is also known<br></br>as scripting language for web pages. It is known for the development of web pages, many non-browser <br></br>environment also use it.JavaScript can be used for client-side developments as well as server side<br></br> developments</p>
        <button>Read more</button>
        </div>
        </div>
        </>
    )

    
}
export default Post1;