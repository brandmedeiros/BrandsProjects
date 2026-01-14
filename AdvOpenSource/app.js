const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/todo", (req, res) => {
  const todo = path.join(__dirname, "todo.json");
  fs.readFile(todo, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "THIS IS A FAILURE IN /TODO CHECK!" });
    }
    res.type("application/json");
    res.send(data);
  });
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/read-todo", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "read-todo.html"));
});

app.get("/", (req, res) => {
  res.redirect("/index");
});

app.use((req, res) => {
  res.redirect("/index");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});