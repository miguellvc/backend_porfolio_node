const Router = require('express'); 

const router = Router(); 

const {
    getBanner,
    getBanners,
    postBanner,
    deleteBanner
} = require('../controllers/banner.controller');

router.get('/:id', getBanner);
router.get('/', getBanners);
router.post('/', postBanner);
router.delete('/', deleteBanner);


module.exports = router;