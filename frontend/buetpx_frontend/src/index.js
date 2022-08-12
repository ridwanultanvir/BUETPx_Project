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
import Up from "./Component/Upload/UploadDetail"
import Explore from "./Component/Discover/Explore";
import PutPhoto from "./Component/Upload/PutPhoto";
import Panel from "./Component/Upload/Panel";
// import UploadTest from './Component/Upload/uploadTest'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />
      <Route path="/posts" element={<Homefeed />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/post_with_tags/:tagname" element={<Tags />} />
      <Route path="/Discover" element={<Explore />} />
      {/* <Route path="/Discover_" element={<Explore />} /> */}
      <Route path="/Upload" element={<Upload />} />
      <Route path="/up" element={<Up />} />
      <Route path="/PutPhoto" element={<PutPhoto />} />
      <Route path="/imgdetail" element={<Panel />} />
      {/* <Route path="/Upload_" element={<UploadTest />} /> */}
	  <Route path="/discover/filtered/:catname" element={<ShowFilteredResult />} />


    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
