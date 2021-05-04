import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// all routes in here are starting with /users
// use this route to get all users.
router.get("/", (req, res) => {
  res.send(users);
});

// use this route to add users into a database.
router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database`);
});

// use this route to find a particular user.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with id ${id} is successfully deleted.`);
});

router.patch("/:id", (req, res) => {

})

export default router;
