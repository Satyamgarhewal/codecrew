import React from "react";
import "./global/global.scss";
import "./global/global.css";
import "./App.scss";
import Header from "./components/common/header/Header.jsx";
import Footer from "./components/common/footer/Footer.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
