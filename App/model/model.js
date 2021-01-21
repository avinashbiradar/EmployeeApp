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
    
    update =(req)=>{
        console.log("Update by Id");
        return new Promise((resolve,reject)=>{
            employee.
            findByIdAndUpdate(
                req.params.id,
                {
                    firstName:req.body.firstName||"Undefined",
                    lastName:req.body.lastName||"Undefined",
                    email:req.body.email||"Undefined",
                    department:req.body.department||"Undefined",
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
     
    // delete=()=>{
    //     console.log(" req in model ");
    //     return new Promise((resolve,reject)=>{
    //         employee.findByIdAndDelete().then(data=>{
    //             resolve(data)
    //         }).catch(err =>{
    //             reject(err)
    //         })
    //     })
    // }
}

module.exports = new EmployeeModel()