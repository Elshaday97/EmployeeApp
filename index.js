//load required dependencies

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//get the environment variables in a .env file
require("dotenv").config();

//require the files needed
const employeeRouter = require("./routes/employee");

//create the express server
const app = express();
const port = process.env.PORT || 8000;

//cors middleware
app.use(cors());
app.use(express.json()); //parse JSON

//setup DB connection
const uri =
  " mongodb+srv://new-user-mac:hdFtNkQ7nOnU5Ply@cluster0.atwct.gcp.mongodb.net/EmployeeDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});
//use the files
app.use("/employee", employeeRouter); //append /employee to the root url and add corresponding api points as needed

//start listening on a certain port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
