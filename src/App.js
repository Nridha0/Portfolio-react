import React from "react";
import Nav from "./components/NavBar";
 import About from "./components/About";
 import Contact from "./components/Contact";
import Home from "./components/Home";
 import Resume from "./components/Resume";


function App() {
  return (
      <div>
      <Nav/>
      <Home/>
      <About/>
      <Resume/>
      <Contact/>
      </div>
    );
}

export default App;
