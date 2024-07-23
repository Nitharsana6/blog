import React from 'react';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';

function Posts(){
    return(
<div>
    <section id='Post1'>
    <Post1/>
    </section>
    <section id='Post2'>
    <Post2/>
    </section>
    <section id='Post3'>
    <Post3/>
    </section>
    <section id='Post4'>
    <Post4/>
    </section>
    
</div>
    )
}
export default Posts;