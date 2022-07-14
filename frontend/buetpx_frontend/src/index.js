import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import About from './About'; 
// import {
//   Navigation,
//   Footer,
//   Home,
//   About,
//   Contact,
//   Blog,
//   Posts,
//   Post,
// } from "./components";

ReactDOM.render(
  <Router>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
