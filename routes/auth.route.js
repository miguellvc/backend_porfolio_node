const Router = require('express'); 
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router(); 

const { 
        loginUser,
        resetPassword,
        newPassword,
        renewToken 
} = require("../controllers/auth.controller");

router.post('/login', loginUser);
router.post('/resetpassword', resetPassword);
router.post('/newpassword', validateJWT, newPassword);
router.get('/renew', validateJWT, renewToken);

module.exports = router; 
