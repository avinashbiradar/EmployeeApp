const express = require('express');
const router = express.Router();
const EmpController = require('../controller/employeeController');
console.log("router running");
router.post('/register',EmpController.create);
router.get('/getemployeelist',EmpController.getEmployeeList)
router.put('/updateEmployeeData/:id',EmpController.updateEmployeeData)
// router.delete('/deleteEmployeeData/:id',EmpController.deleteEmployeeData)
module.exports= router;