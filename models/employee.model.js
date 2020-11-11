const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create the necessary schema to map to the database
const GENDERS = ["M", "F"];

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: false },
  gender: { type: String, enum: GENDERS, required: true },
  salary: { type: Number, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
