const express=require('express')
const app=express();
app.use(express.json());

require('dotenv').config();

// console.log(process.env.PORT);

//import DB
require('./src/config/db_connection');

const { init } = require('./src/model/t_Merchants');
// import router
const router=require('./src/router/route');
app.use('/api/', router);

app.get('/', (req, res)=>{
  res.send('test');
});
const port=process.env.PORT || 3000;
app.listen(port, err = ()=>{
  console.log(`server listening on port ${port}`);
});


