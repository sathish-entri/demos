import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/preloader/Preloader";
// import Navbar from "../../src/navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "../../src/Projects/Projects";
// import Footer from "../../src/footer/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Skills from "../../src/Skills/Skills";
// import Contact from "../../src/contact/Contact";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app`}>
    <h2>cuucugcwucwyce</h2>
    </div>
   
  );
}

export default App;
// "homepage": "https://sathish-entri.github.io/demos",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"