const express = require("express");

// import db from '/./data/db'; is same as below
const db = require("./data/db");

const server = express();

server.get("/", (req, res) => {
  res.send("Api running");
});

server.get("/api/users", (req, res) => {
  db
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      /*do something with the error */
    });
});

server.get("/api/users/:id", (req, res) => {
  // console.log(req);
  const id = req.params.id;
  db
    //look in db.js
    .findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
});

server.listen(5000, () => console.log("we doin it my broseph"));
