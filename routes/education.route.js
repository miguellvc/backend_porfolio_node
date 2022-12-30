const Router = require('express');

const router = Router();

const { 
    getEducations
} = require('../controllers/education.controller');

router.get('/', getEducations);

module.exports = router;
