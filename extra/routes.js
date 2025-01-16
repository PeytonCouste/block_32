const express = require("express");
const router = express.Router();
//🐝
let employees = require("../employees");
const { v4: uuidv4 } = require("uuid");

// GET all employees
router.get("/", (req, res) => {
  res.json(employees);
});

//GET random employee
router.get("/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

//GET employee by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === Number(id));
  if (employee) {
    res.status(200).send(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
    //next({ status: 404, message: `Employee with id ${id} does not exist` });
  }
});

//POST new employee
router.post("/", (req, res) => {
  const { name } = req.body;

  //🐝
  if (name) {
    //create uuid
    employees.push({ id: uuidv4(), name });
    res.status(201).json(name);
  } else {
    return res.status(400).send(`Invalid input for name - we read ${name}.`);
  }
});

module.exports = router;
