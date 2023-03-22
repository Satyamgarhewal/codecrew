import React from "react";
import "./global/global.scss";
import "./global/global.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/Footer";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"


function App() {
  return (
    
      <NextUIProvider>      
        <Header/>
      <h1>Welcome to Code Crew</h1>
      <Footer/>
      <p>Hi, How can I help you??</p>
      <p>hello User</p>
      </NextUIProvider>
   
  );
}

export default App;
