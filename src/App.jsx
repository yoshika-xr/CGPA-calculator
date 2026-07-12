import React, { useState } from "react";
import Header from "./componant/Header";
import Content from "./componant/content";
import Sidebar from "./componant/Sidebar";
import Footer from "./componant/Footer";

function App() {
    const [semester, setSemester] = useState("");

  return (
    <>
      <Header />
      <div className="main-section">
        <div className="left">
          <Content 
          semester={semester}
            setSemester={setSemester}
            />
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
