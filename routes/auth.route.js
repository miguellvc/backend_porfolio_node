const Router = require('express'); 

const router = Router(); 

const { loginUser } = require("../controllers/auth.controller");

router.get('/login', loginUser);

module.exports = router; 
