import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PercentageGauge = ({ percentage }) => {
  return (
    <div style={{ width: 220, height: 220 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        maxValue={100}
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
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            {percentage}%
          </h1>

          <p
            style={{
              margin: 0,
              color: "#666",
              fontSize: "16px",
            }}
          >
            Percentage
          </p>
        </div>
      </CircularProgressbarWithChildren>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          fontSize: "15px",
          color: "#555",
        }}
      >
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default PercentageGauge;