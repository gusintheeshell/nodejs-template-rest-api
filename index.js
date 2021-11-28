var express = require("express");
var app = express();
var router = require("./routes/routes");
const PORT = 8080;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})