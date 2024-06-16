const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/db");
const supervisorRoutes = require("./routes/supervisorRoutes");
const authRoutes = require("./routes/authRoutes");
const estateRoutes = require("./routes/estateRoutes");
const allEstateRoute = require("./routes/allEstateRoute");
const dashboardRoute = require("./routes/dashboardRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api", supervisorRoutes);
app.use("/api", estateRoutes);
app.use("/api", allEstateRoute);
app.use("/api", dashboardRoute);

console.log("index");

app.use("/images", express.static("src/assets/images"));
// app.use('/images', express.static('public/images'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
