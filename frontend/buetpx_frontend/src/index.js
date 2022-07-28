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
import Upload from "./Component/Photo_Upload/Upload_page"



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />
      <Route path="/posts" element={<Homefeed />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/post_with_tags/:tagname" element={<Tags />} />
      <Route path="/Discover" element={<Discover />} />
      <Route path="/Upload" element={<Upload />} />
	  <Route path="/discover/filtered/:catname" element={<ShowFilteredResult />} />


    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
