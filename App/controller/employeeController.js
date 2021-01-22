const { response } = require('express');
const employeeservice = require('../services/employeeservice');
const service = require('../services/employeeservice')
const employeeUpdate = require('../services/employeeservice')
const employeeDelete= require('../services/employeeservice')
class EmployeeController{
    create=(req,res)=>{
        console.log(req.body);
        service.createServices(req.body)
        .then(data=>{
            return res.status(200).send(data);
        }).catch(err=>{
            return res.status(400).send(err);
        })
    }
    getEmployeeList=(req,res)=>{
        employeeservice.geteEmpServices().then(data=>{
            return res.send(data)
        }).catch(err=>{
            return res.send(err)
        })
    }

    updateEmployeeData=(req,res)=>{
        console.log("Data in controller ",req.body);
      employeeUpdate
      .getEmployeeUpdate(req)
      .then((data)=>{
        response.message="updated succcessfully ";
        response.data=data;
          return res.send(response)
      }).catch(err=>{
        return res.send(response)
      })
  };
    
    
   deleteEmployeeData=(req,res)=>{
    console.log("Data in controller ",req.body);
   employeeDelete.getEmployeeDelete(req.params.id)
    .then(data=>{
        response.message="deleted succcessfully ";
        response.data=data;
        return res.send(response)
    }).catch(err=>{
      return res.send(response)
    })
   }
}
module.exports=new EmployeeController();