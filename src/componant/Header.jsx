import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
<>
    <div className="header">
        <div className="left-side">
          <i>
            <svg width="60" height="50" viewBox="0 0 100 100">
              <path
                d="M70 20 A35 35 0 1 0 70 80"
                fill="none"
                stroke="#37cf71b4"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="40"
                x2="65"
                y2="40"
                stroke="#353535"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="55"
                x2="65"
                y2="55"
                stroke="#383838"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </i>
          <h2 className={"head-title $"}>EduCalc</h2>
        </div>

    <nav className="head-cont">
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gpa">GPA Calculator</NavLink>
        <NavLink to="/cgpa">CGPA Calculator</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      {/* <div className="nav-buttons">
        <NavLink to="/gpa" className="calculate-btn">
          Calculate Now
        </NavLink>
      </div> */}
    </nav>
    </div>
    </>
  );
}
export default Header;
