import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homefeed from './Component/Homefeed/Homefeed';
import Post from "./Component/Post/Post";
import Tags from "./Component/Post/Tags/Tags";
import Discover from "./Component/Discover/Discover"; 
import ShowFilteredResult from "./Component/Discover/ShowFilteredResult";



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />
      <Route path="/posts" element={<Homefeed />} />
      <Route path="/posts/:id" e1lement={<Post />} />
      <Route path="/tag_specific_post/:tagname" element={<Tags />} />
      <Route path="/Discover" element={<Discover />} />
	  <Route path="/discover/filtered/:catname" element={<ShowFilteredResult />} />


    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
