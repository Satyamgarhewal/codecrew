import React from "react";
import "./global/global.scss";
import "./global/global.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"


function App() {
  return (

    <NextUIProvider>
      <Header />


      <Footer />

    </NextUIProvider>

  );
}

export default App;
