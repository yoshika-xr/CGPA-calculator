import React, { useState } from "react";
import Calculation from "./Calculation";
import Popup from "./Popup";

// create a new empty subject with a unique id
const newSubject = () => ({
  id: crypto.randomUUID(),
  name: "",
  code: "",
  grade: "",
  credit: "",
});

function Content({ semester, setSemester }) {
  const [subjects, setSubjects] = useState([newSubject()]);

  // add form
  const addForm = () => {
    setSubjects((prev) => [...prev, newSubject()]);
  };

  // remove form
  const removeForm = (id) => {
    setSubjects((prev) => prev.filter((sub) => sub.id !== id));
  };

  // handle input change
  const handleChange = (id, field, value) => {
    setSubjects((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, [field]: value } : sub))
    );
  };

  // grade -> point
  const getGradePoint = (grade) => {
    const map = {
      O: 10,
      "A+": 9,
      A: 8,
      "B+": 7,
      B: 6,
      F: 0,
    };
    return map[(grade || "").trim().toUpperCase()] ?? 0;
  };

  // calculate GPA
  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((sub) => {
      const gp = getGradePoint(sub.grade);
      const credit = Number(sub.credit);

      if (!credit) return; // skip empty or invalid credit

      totalPoints += gp * credit;
      totalCredits += credit;
    });

    return totalCredits === 0 ? "0.00" : (totalPoints / totalCredits).toFixed(2);
  };

  // send data to the server
  const sendData = async (gpa) => {
    try {
      const response = await fetch("http://localhost:5000/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subjects, gpa, semester }),
      });
      const result = await response.json();
      console.log("Semester in Content:", semester);
      console.log("server response:", result);
    } catch (error) {
      console.error("Could not reach the server:", error);
    }
  };

  // button click
  const handleCalculate = () => {
    const gpa = calculateGPA();
    alert("GPA: " + gpa);
    sendData(gpa);
  };

  return (
    <>
      <div className="show-container">
        <div className="welcome-content">
          <h2 className="title">
            👋 Welcome to <span className="highlight">EduCalc!</span>{" "}
          </h2>
          <p className="second-tit">
            Fast. Simple. Accurate.
            <br /> Calculate your CGPA in seconds.
          </p>
        </div>

        <Popup semester={semester} setSemester={setSemester} />

        <div className="calcu-sec">
          {subjects.map((sub) => (
            <Calculation
              key={sub.id}
              data={sub}
              onChange={(field, value) => handleChange(sub.id, field, value)}
              onRemove={() => removeForm(sub.id)}
            />
          ))}
        </div>

        <i className="plusButton" onClick={addForm}>
          <svg
            className="plusIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <g mask="url(#mask0_21_345)">
              <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
            </g>
          </svg>
        </i>

        <button className="cssbuttons-io" onClick={handleCalculate}>
          <span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              ></path>
            </svg>
            Calculate
          </span>
        </button>
      </div>
    </>
  );
}

export default Content;
