const Router = require('express'); 

const router = Router(); 

const { 
        loginUser,
        resetPassword,
        newPassword 
} = require("../controllers/auth.controller");

router.post('/login', loginUser);
router.post('/resetpassword', resetPassword);
router.post('/newpassword', newPassword);



module.exports = router; 
