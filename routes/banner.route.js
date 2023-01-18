const Router = require('express'); 

const router = Router(); 

const {
    getBanner,
    getBanners,
    postBanner
} = require('../controllers/banner.controller');

router.get('/:id', getBanner);
router.get('/', getBanners);
router.post('/', postBanner);


module.exports = router;