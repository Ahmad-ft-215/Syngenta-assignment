const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const userController = require("./routes/User.routes");
const organizationController = require("./routes/Organization.routes");
const authentication = require("./middlewares/authentication");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Heroku Testing");
});

app.use("/user", userController);

app.use(authentication);

app.use("/organization", organizationController);

app.listen(8000, async () => {
    try {
        await connection;
        console.log("database connnected");
    } catch (err) {
        console.log(err);
    }
    console.log("port started on 8000");
});