import React from "react";
import Nav from "./components/NavBar";
 import About from "./components/About";
 import Contact from "./components/Contact";
import Home from "./components/Home";
 import Work from "./components/Work";


function App() {
  return (
      <div>
      <Nav/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
      </div>
    );
}

export default App;
