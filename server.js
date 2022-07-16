const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());

app.post("/api/login", loginHandler);
app.post("/api/signup", signupHandler);

// find email in database if exist throw error
//  save all credential and reponnse ok

function signupHandler(req, res) {
  const { name, email, password, cpassword } = req.body;
  res.json(req.body);
}

// find email if not exit throw error || user not found
// if email exist then match it with password else invalid password
//if match login successfully

function loginHandler(req, res) {
  const { email, password } = req.body;
  res.json(req.body);
}
const port = process.env.port || 2000;

app.listen(port, () => {
  console.log(`server is listeing on ${port}`);
});
