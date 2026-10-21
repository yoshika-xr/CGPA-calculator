import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./componant/Header";
import Sidebar from "./componant/Sidebar";
import Content from "./componant/Content";
import Footer from "./componant/Footer";
import History from "./componant/History";
import About from "./componant/About";

function App() {
  const [semester, setSemester] = useState("");

  const calculatorPage = (
    <div className="main-section">
      <div className="left">
        <Content semester={semester} setSemester={setSemester} />
      </div>
      <div className="right">
        <Sidebar />
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={calculatorPage} />
        <Route path="/gpa" element={calculatorPage} />
        <Route path="/cgpa" element={<h2 className="page">CGPA Calculator coming soon</h2>} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;