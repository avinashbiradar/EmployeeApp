const model =require('../model/model');

class EmployeeService{

    createServices=(req)=>{
        console.log("Request data in service->",req);
        return model.create(req).then(data =>{
            return data;
        }).catch(err =>{
            return err;
        })
    }
    geteEmpServices=()=>{
        return model.read().then(data =>{
            return data;
        }).catch(err =>{
            return err;
        })
    }
    getEmployeeUpdate=(req)=>{
        let a = model.getOne(req.params.id).then((data=>
            console.log("updated successfully",data)
            )).catch(err =>{
            return err;
        })
    }
    // getEmployeeDelete=()=>{
    //     return model.delete().then(data =>{
    //         return data;
    //         console.log("deleted successfully")
    //     }).catch(err =>{
    //         return err;
    //     })
    // }
}
module.exports=new EmployeeService();