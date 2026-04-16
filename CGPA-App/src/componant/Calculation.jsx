import React from "react";

function Calculation() {
  return (
    <>
      <div className="calcu-sec">
        <input className="input-form" type="text" placeholder="Enter subject name" />
        <input className="input-form" type="text" placeholder="Enter subject code" />
        <input className="input-form" type="text" placeholder="Enter grade" />
        <input className="input-form" type="number" placeholder="Enter credits" />
      </div>
    </>
  );
}

export default Calculation;
