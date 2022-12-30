const Router = require('express'); 

const router = Router(); 

const { 
    getTest
} = require('../controllers/test.controller')

router.get('/', getTest)

module.exports = router; 