const Router = require('express'); 
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router(); 

const {
    getBanner,
    getBanners,
    postBanner,
    deleteBanner,
    updateBanner
} = require('../controllers/banner.controller');

router.get('/:id', getBanner);
router.get('/', getBanners);
router.post('/', validateJWT, postBanner);
router.delete('/', deleteBanner);
router.put('/', updateBanner);



module.exports = router;