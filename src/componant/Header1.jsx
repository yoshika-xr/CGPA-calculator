import { Link } from "react-router-dom";
import React from "react";


function Header1() {
    return (
        <nav className="navbar">

            <div className="logo">
                <Link to="/">
                    CGPA<span>Calc</span>
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/gpa">GPA Calculator</Link>
                <Link to="/cgpa">CGPA Calculator</Link>
                <Link to="/history">History</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="nav-buttons">
                <Link to="/gpa" className="calculate-btn">
                    Calculate Now
                </Link>
            </div>

        </nav>
    );
}

export default Header1;