const router = require('express').Router();

const {userLogin, getUser, deleteUser, editUser}=require('../modal/userCredential');


//localhost:5000/api/login
router.post('/login',userLogin);
//localhost:5000/api/getUser/:id
router.delete('/getuser/:id',deleteUser);
//localhost:5000/api/getUser
router.get('/getuser',getUser);

//localhost:5000/api/edituser/id
router.patch('/edituser/:id',editUser);

module.exports = router;