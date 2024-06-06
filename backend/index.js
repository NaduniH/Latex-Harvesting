const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/db");
const supervisorRoutes = require("./routes/supervisorRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api", supervisorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
