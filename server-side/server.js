
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/configDb");
const userRoutes = require("./route/users");
const authRoutes = require("./route/auth");


connection();


app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));