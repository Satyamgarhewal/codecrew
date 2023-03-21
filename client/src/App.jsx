import React from "react";
import "./global/global.scss";
import "./global/global.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/Footer";


function App() {
  return (
    <div>
      <Header/>
      <h1>Welcome to Code Crew</h1>
      <Footer/>
      <p>Hi, How can I help you??</p>
      <p>hello User</p>
    </div>
  );
}

export default App;
