const Router = require('express'); 
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router(); 

const { 
        loginUser,
        resetPassword,
        newPassword 
} = require("../controllers/auth.controller");

router.post('/login', loginUser);
router.post('/resetpassword', resetPassword);
router.post('/newpassword', validateJWT, newPassword);



module.exports = router; 
