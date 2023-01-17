const Router = require('express'); 

const router = Router(); 

const {
    getBanner,
    getBanners
} = require('../controllers/banner.controller');

router.get('/:id', getBanner);
// router.get('/', getBanners);

module.exports = router;