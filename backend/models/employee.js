const mongoose = require("mongoose");
const express = require("express");

const employeeSchema = mongoose.Schema({
  name: { type: String },
  position: { type: String },
  salary: { type: String },
  office: { type: String },
  id: { type: Number },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
