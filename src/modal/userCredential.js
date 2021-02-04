const mongoose=require('mongoose');
const t_Adminlogin = require('../model/t_Adminlogin');

//Method: post
//URL: localhost:5000/api/login
module.exports.userLogin=async(req, res)=>{
    const { f_sno, f_firstname, f_lastname, f_email, f_password, f_companyname, f_status, f_creationdate}=req.body;
    // console.log(f_sno, f_firstname, f_lastname, f_email, f_password, f_companyname, f_status, f_creationdate);
    
    //convert email to lowerCase and remover space if any
    var userEmail = f_email.toLowerCase().trim();
    
    //find by email
    const userExist = await user.findOne({ "f_email":f_email }).populate(f_email);
    console.log('userExist', userExist);
 
    //check if user exist?
    if(userExist === userEmail)
        return res.send(`Please try with different email!`);
    //collect user detail and store in collectUserData variable
    const getUserData=new t_Adminlogin({ f_sno, f_firstname, f_lastname, f_email, f_password, f_companyname, f_status, f_creationdate});

    try{
        //create new user and save in collection(DB)
        const createNewUser=await getUserData.save();
        res.status(201).send('user created!');
    }catch(error){
        //400 bad request
        res.status(400).send(`error: ${error}`);
    }

}

//Get all users
module.exports.getUser=async(req, res)=>{
  try{
    //get user details
    const result=await t_Adminlogin.find({}).sort({date:-1});
    res.status(200).send(result);
  }catch(error){
    //400 bad request
    res.status(500).send(`error: ${error}`);
}
}

//Edit users
module.exports.editUser=async(req, res)=>{
  const id=req.params.id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(400)
      .send(`No record with given id : ${id}`);
      
      try{
        const update=await t_Adminlogin.findOneAndUpdate({ _id: id },{ $set: req.body },{ new: true });
        res.send(update);

      }catch(error){
        res.send(error);
      }
}

//Delete user
module.exports.deleteUser=async(req, res)=>{
  const id = req.params.id;  
    const valid=mongoose.Types.ObjectId.isValid(id);

    //check if ID is valid?
    if(!valid){
        //400 bad request
        return res.status(400).send('Invalid ID');
    }
     //find by user
     const userExist = await user.findById(id);
    if(id === `${userExist._id}`){
        try{
            const deleteUser=await user.findByIdAndDelete({'_id':id});
            res.send('user deleted!');
        }catch(error){
            // 400 bad request
            res.status(400).send(`error: ${error}`)
        }
    }else{
        return res.status(400).send('user does not exist! ');
    }
}