const Router = require('express'); 

const router = Router(); 

const { 
    getBanners
} = require('../controllers/banner.controller')

router.get('/', getBanners)

module.exports = router;