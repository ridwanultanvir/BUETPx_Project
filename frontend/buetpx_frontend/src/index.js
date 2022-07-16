import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homefeed from './Homefeed';
import Post from "./Post/Post";
import Discover from "./Component/Discover"; 


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />
      <Route path="/posts" element={<Homefeed />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/Discover" element={<Discover />} />

    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
