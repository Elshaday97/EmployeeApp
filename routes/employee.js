const router = require("express").Router();
let Employee = require("../models/employee.model"); //get the model

//APIs

//get all the employees from DB
router.route("/").get((req, res) => {
  Employee.find()
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json("Error:" + err)); //if the status of the response is 400, send an error message
});

//add new employees
router.route("/add").post((req, res) => {
  //get info from the req..body
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const birthDate = req.body.birthDate;
  const gender = req.body.gender;
  const salary = req.body.salary;

  // create a new employee using the data defined above
  const newEmployee = new Employee({
    firstName,
    lastName,
    birthDate,
    gender,
    salary,
  });

  //save to DB
  newEmployee
    .save()
    .then(() => res.json("Employee Created!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

//get a specific employee
router.route("/:id").get((req, res) => {
  Employee.findById(req.params.id) //get the ID from the url
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json("Error" + err));
});

//delete an employee
router.route("/:id").delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json("Employee Removed!"))
    .catch((err) => res.status(400).json("Error" + err));
});

//update employee information

router.route("/update/:id").put((req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => {
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.birthDate = req.body.birthDate;
      employee.gender = req.body.gender;
      employee.salary = req.body.salary;

      employee
        .save()
        .then(() => res.json("Employee Data Updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
