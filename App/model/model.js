const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    sallary: String,
    email: String,
    department: String
},{
    timestamps: true
});

const employee = mongoose.model('employee',EmployeeSchema);

class EmployeeModel{

    create=(req)=>{
        console.log(" req in model ",req);
        return new Promise((resolve, reject) => {
            employee.create(req).then(data=>{
                console.log("success full",data);
                resolve(data);
            }).catch(err=>{
                console.log(err);
                reject(err);
            })
          })
    }
    read=()=>{
        console.log(" req in model ");
        return new Promise((resolve,reject)=>{
            employee.find().then(data=>{
                resolve(data)
            }).catch(err =>{
                reject(err)
            })
        })
    }
    
    getOne = (id) => {
        console.log("Request One Emp Data by id in Model");
        return new Promise((resolve, reject) => {
          employee
            .findById(id)
            .then((data) => {
              resolve(data);
              console.log("Get Data Successfull", data);
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            });
        });
      };
    
    update =(req,a)=>{
        console.log("Update by Id");
        return new Promise((resolve,reject)=>{
            employee.
            findByIdAndUpdate(
                req.params.id,
                {
                    firstName:req.body.firstName||a.firstName,
                    lastName:req.body.lastName||a.lastName,
                    sallary: req.body.sallary||a.sallary,
                    email:req.body.email||a.email,
                    department:req.body.department||a.department,
                },
                {new:true}
            ).then((data)=>{
                resolve(data);
                console.log("get Data successfull",data);
            }).catch(err =>{
                console.log(err);
                reject(err)
            })
        })
    }
     
    delete=(id)=>{
        console.log(" req in model ");
        return new Promise((resolve,reject)=>{
            employee.findByIdAndDelete(id).then((data)=>{
                resolve(data);
                console.log("delete data success")
            }).catch(err =>{
                reject(err)
            })
        })
    }
}

module.exports = new EmployeeModel()