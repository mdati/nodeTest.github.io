const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const t_Adminlogin=mongoose.Schema({
    f_sno:{
      type:String,
      require:true    
    },
    f_firstname:{
      type:String,
      require:[true,'Firts Name is required'],
      trim:true,
      minLength:[2, 'Length is to short']
    },
    f_lastname:{
      type:String,
      require:[true,'Last Name is required'],
      trim:true,
      minLength:[2, 'Length is to short']
    }, 
    f_email:{
      type:String,
      require:[true,'Name is required'],
      trim:true,
      lowercase: true
    },
    f_password:{
      type:String,
      require:[true,'Password is required'],
      trim:true
    },
    f_companyname:{
      type:String,
      // require:[true,'Name is required'],
      trim:true,
    },
    f_creationdate:{
      type:Date, 
      default:Date.now
    },
    f_status:{
      type:Array,
      default:[0, 1]
    }
});

module.exports=mongoose.model('t_Adminlogins', t_Adminlogin);
