const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const t_Merchants=mongoose.Schema({
    f_sno:{
      type:Number,
      require:true    
    },
    f_name:{
      type:String,
      require:[true,'Firts Name is required'],
      trim:true,
      minLength:[2, 'Length is to short']
    },
    f_email:{
      type:String,
      require:[true,'Name is required'],
      trim:true,
      lowercase: true
    },
    f_mobileno:{
      type:Number,
      require:[true,'Number is required'],
      trim:true,
      minLength:[10, 'please insert valid number']
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
    f_address:{
      type:String,
      // require:[true,'Name is required'],
      trim:true,
    },
    f_pincode:{
      type:String,
      // require:[true,'Name is required'],
      trim:true,
    },
    f_city:{
      type:String,
      // require:[true,'Name is required'],
      trim:true,
    },
    f_state:{
      type:String,
      // require:[true,'Name is required'],
      trim:true,
    },
    f_country:{
      type:String,
      // require:[true,'Name is required'],
      trim:true,
    },
    f_status:{
      type:Array,
      default:[0, 1]
    },
    f_creationdate:{
      type:Date,
      default:new Date().toDateString()
      // ,default:new Date()
    },

    //ToDO
    f_MerchantsUniqueID:{
      // type:Schema.Types.f_sno,
      type:Schema.Types.ObjectId,
      ref:'t_Adminlogin'
    }
});

module.exports=mongoose.model('t_Merchants', t_Merchants);
