import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homefeed from './Component/Homefeed/Homefeed';
import Post from "./Component/Post/Post";
import Post3 from "./Component/Post/Postuid3";
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
import UserProfile from "./Component/Profile/UserProfile";
import Quest from "./Component/Quest/Quest";
import QuestDetail from "./Component/Quest/QuestDetail";
import EndedQuestDetail from "./Component/Quest/EndedQuestDetail";
import AdminPanel from "./Component/Quest/AdminPanel";
import ShortListQuest from "./Component/Quest/ShortListQuest";
import MakeShort from "./Component/Quest/MakeShort";
import AdminLogin from "./Component/Quest/Authentication/AdminLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<MyImageList />} />
      <Route path="/posts" element={<MyImageList />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/posts3/:id" element={<Post3 />} />
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
      <Route path="/profile" element={<UserProfile />} />

      <Route path="/Galleries" element={<Galleries />} />
      <Route path="/Gallery/:id" element={<Gallery />} />
      <Route path="/quest/" element={<Quest />} />
      <Route path="/quest/:questId" element={<QuestDetail />} />
      <Route path="/endedquest/:questId" element={<EndedQuestDetail />} />

      <Route path="/questPanel/" element={<AdminPanel />} />
      <Route path="/admin/Announce/" element={<AdminPanel />} />
      <Route path="/admin/Quest" element={<ShortListQuest />} />
      <Route path="/admin/quest/:id" element={<MakeShort />} />
      <Route path="/admin/Login" element={<AdminLogin />} />
      



    </Routes>
    
  </Router>
);

// serviceWorker.unregister();
