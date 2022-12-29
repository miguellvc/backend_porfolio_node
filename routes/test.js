const Router = require('express'); 

const router = Router(); 

const { 
    getTest
} = require('../controllers/test')

router.get('/', getTest)

module.exports = router; 