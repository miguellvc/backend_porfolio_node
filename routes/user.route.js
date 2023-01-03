const Router = require('express'); 

const router = Router(); 

const { 
    getUsers
} = require('../controllers/user.controller')

router.get('/', getUsers)

module.exports = router;