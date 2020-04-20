const express = require("express");

const app = express();

app.use(express.json());

app.get("/projects", (req, res) => {
  // query params
  const { title, owner } = req.query;

  console.log("title", title);
  console.log("owner", owner);

  return res.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;
  console.log("title", title);
  console.log("owner", owner);
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (req, res) => {
  // route params
  const { id } = req.params;
  console.log("id", id);

  return res.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("✔ Server UP!");
});
