const express = require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
