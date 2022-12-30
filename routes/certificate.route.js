const Router = require('express'); 

const router = Router(); 

const { 
    getCertificates
} = require('../controllers/certificate.controller');

router.get('/', getCertificates)

module.exports = router;