import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

//get user input
app.post("/calculate", (req, res) => {
  const { subjects, gpa, semester } = req.body;
  console.log("subjects:", subjects);
  console.log("GPA:", gpa);
  console.log("semester:", semester);
  res.json({ message: "received" });
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
