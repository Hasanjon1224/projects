import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
const App = () => {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <About />
      </div>
    </div>
  );
};

export default App;
