import React from "react";
import Photo from "./components/info/Photo";
import Name from "./components/info/Name";
import Buttons from "./components/info/Buttons";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/footer/Icons";
import Css from "./style.css";

function App() {
  return (
    <div>
      <Photo />
      <Name />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
