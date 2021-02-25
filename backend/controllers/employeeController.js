const express = require("express");
const router = express.Router();

var { Employee } = require("../models/employee");

//get
router.get("/", async (req, res) => {
  const employees = await employee.find();
  res.send(employees);
});

//post
router.post("/", async (req, res) => {});

module.exports = router;
