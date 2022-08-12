import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homefeed from './Component/Homefeed/Homefeed';
import Post from "./Component/Post/Post";
import Tags from "./Component/Post/Tags/Tags";
import Discover from "./Component/Discover/Discover"; 
import ShowFilteredResult from "./Component/Discover/ShowFilteredResult";
import Upload from "./Component/Upload/PutPhoto";

import TestForm from "./Component/TestForm/TestFrom";
import MyImageList from "./Component/ImageList/ImageList";
// import Upload from "./Component/Photo_Upload/Upload_page";
import Explore from "./Component/Discover/Explore";
import SignUp from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import Galleries from "./Component/Gallery/Galleries";
import Gallery from "./Component/Gallery/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />
      <Route path="/posts" element={<Homefeed />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/post_with_tags/:tagname" element={<Tags />} />
      
      <Route path="/Discover" element={<Explore />} />
      <Route path="/discover/filtered/:catname" element={<ShowFilteredResult />} />
      {/* <Route path="/Discover_" element={<Explore />} /> */}
      <Route path="/Upload" element={<Upload />} />

      <Route path="/TestForm" element={<TestForm />} />
      <Route path="/ImageList" element={<MyImageList />} />
	  <Route path="/discover/filtered/:catname" element={<ShowFilteredResult />} />


      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/Galleries" element={<Galleries />} />
      <Route path="/Gallery/:id" element={<Gallery />} />




    </Routes>
    
  </Router>
);

// serviceWorker.unregister();
