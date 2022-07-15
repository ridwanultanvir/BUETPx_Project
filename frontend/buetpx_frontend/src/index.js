import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homefeed from './Homefeed';
import Post from "./Post/Post";
import Discover from "./Component/Discover"; 
import CommentExampleComment1 from "./Post/Comment/Comment"; 

import post_single from "./Post/post_single"; 




ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />

      <Route path="/post" element={<Post {...post_single}/>} />

      {/* <Route path="/post" element={<Post />} /> */}
      <Route path="/discover" element={<Discover />} />

      <Route path="/comment" element={<CommentExampleComment1 />} />

      
    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
