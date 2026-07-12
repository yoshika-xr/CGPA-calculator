import React from "react";
import Header from "./componant/Header";
import Content from "./componant/content";
import Sidebar from "./componant/Sidebar";
import Footer from "./componant/Footer";

function App() {

  return (
    <>
      <Header />
      <div className="main-section">
        <div className="left">
          <Content />
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
