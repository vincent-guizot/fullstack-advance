const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Router
const routers = require("./routers");
app.use(routers);

app.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});