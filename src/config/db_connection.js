const mongoose=require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//import secret code
require('dotenv').config();

//DataBase connection
mongoose.connect(process.env.DB_CONNECTION,  (error)=>{
  if(!error) 
      return console.log(' DataBase connected \n');
  //else return DataBase error!
  console.log(' DataBase error ');
}); 