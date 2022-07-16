const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());
const userCredentials = new Map();

app.post("/api/login", loginHandler);
app.post("/api/signup", signupHandler);

// find email in database if exist throw error
//  save all credential and reponnse ok

function signupHandler(req, res) {
  const { name, email, password } = req.body;
  if (userCredentials.has(email)) {
    res.json({
      msg: "user already exist",
    });
  }

  userCredentials.set(email, {
    name,
    password,
  });
  res.json({
    msg: "signed up successfully",
  });
}

// find email if not exit throw error || user not found
// if email exist then match it with password else invalid password
//if match login successfully

function loginHandler(req, res) {
  const { email, password } = req.body;
  if (userCredentials.has(email)) {
    if (userCredentials.get(email).password === password) {
      res.json({
        msg: "loggedin successfully",
      });
    } else {
      res.json({
        msg: "password wrong",
      });
    }
  } else {
    res.json({
      msg: "invalid user",
    });
  }
  res.json(req.body);
}
const port = process.env.port || 2000;

app.listen(port, () => {
  console.log(`server is listeing on ${port}`);
});
