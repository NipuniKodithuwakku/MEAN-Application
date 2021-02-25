const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const employeeSchema = mongoose.Schema({
  name: String,
  salary: String,
  id: Number,
});

const employee = mongoose.model("Employee", employeeSchema);

//get
router.get("/", async (req, res) => {
  const employees = await employee.find();
  res.send(employees);
});
//post
router.post("/", async (req, res) => {});
