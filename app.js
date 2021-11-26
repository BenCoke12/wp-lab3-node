const express = require("express");

//creating app
const app = express();
//console.log("hi");
//handling static HTML and EJS templates
app.use(express.static("."));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("homepage");
  res.render("index"); //no need for ejs extension?
  //res.sendFile("index.html", { root: __dirname });
});

app.get("/contacts", (req, res) => {
  console.log("contacts");
  res.render("contacts"); //add in , contacts: []
});

app.get("/login", (req, res) => {
  console.log("login");
  res.render("login");
});

app.get("/register", (req, res) => {
  console.log("register");
  res.render("register");
});

//pass requests the the router middleware
const router = require("./routes/apis");
app.use(router);

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
