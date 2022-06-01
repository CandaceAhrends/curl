const express = require("express");
const curlRequest = require("./routes/curlRequest");
const saveRequest = require("./routes/saveRequest");
const saveDataRequest = require("./routes/saveDataRequest");
const listRequest = require("./routes/listRequest");
const listData = require("./routes/listData");
const readRequest = require("./routes/readRequest");
const readDataRequest = require("./routes/readDataRequest");
const bodyParser = require("body-parser");
const cors = require("cors");
const { init } = require("./files");
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/curl", curlRequest);
app.post("/curls", saveRequest);
app.post("/data", saveDataRequest);
app.get("/curls", listRequest);
app.get("/data", listData);
app.get("/curls/:file", readRequest);
app.get("/data/:file", readDataRequest);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

init();
