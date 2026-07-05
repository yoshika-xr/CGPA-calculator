import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Percenatge({ gpa }) {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbarWithChildren
        value={gpa}
        maxValue={10}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#22c55e",
          trailColor: "#e5e7eb",
          strokeLinecap: "round",
        })}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "45px",
              fontWeight: "bold",
            }}
          >
            {gpa.toFixed(2)}
          </h1>

          <p
            style={{
              margin: 0,
              color: "#666",
            }}
          >
            GPA
          </p>
        </div>
      </CircularProgressbarWithChildren>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <span>0.0</span>
        <span>10.0</span>
      </div>
    </div>
  );
}

export default Percenatge;