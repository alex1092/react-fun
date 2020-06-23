import React from "react";
import ReactDOM from "react-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import FavFoods from "./FavFoods";
import Header from "./Header";

ReactDOM.render(
  <div>
    <Header />
    <AboutMe />
    <FavFoods />
    <Contact />
    <Footer />
  </div>,
  document.getElementById("root")
);
