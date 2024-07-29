import React from 'react';
import BlogNav from './Components/BlogNav';
import Posts from './Components/Posts';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div>
     <Router>
      <div>
      <BlogNav/>
       
      <Routes>
      <Route path="/blog" element={<Posts />} />
      <Route path="/Post1" element={<Post1 />} />
          <Route path="/Post2" element={<Post2 />} />
          <Route path="/Post3" element={<Post3 />} />
          <Route path="/Post4" element={<Post4 />} />
      </Routes>
      </div>
      </Router>
      </div>
    </>
  );
}

export default App;
