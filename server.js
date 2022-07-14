const express = require(express);
const app = express();
require("dotenv").config();
app.use(express.json())
app.use(express.static())

const port = process.env.port || 2000;

app.post("api/login", loginHandler);
app.post("api/signup", signupHandler);

function signupHandler(req, res) {
    const { name, email, password } = req.body;
}
function loginHandler(req, res) {
    const {email, password } = req.body;

}

app.listen(port, () => {
  console.log(`server is listeing on ${port}`);
});
