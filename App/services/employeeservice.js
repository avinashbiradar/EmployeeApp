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
        return  model.getOne(req.params.id).then((data)=>{
            let  a =data;
            console.log("Print data: ", data);
      return model.update(req, a).then((data) => {
        return data;
        }).catch(err =>{
            return err;
        })
     }).catch((err) => {
        console.log(err);
    })
}
    getEmployeeDelete=(id)=>{
        return model.delete(id).then((data) =>{
            return data;
            console.log("deleted successfully")
        }).catch(err =>{
            return err;
        })
    }
}
module.exports=new EmployeeService();