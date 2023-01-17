const Router = require('express');

const router = Router();

const { 
    getEducation,
    getEducations
} = require('../controllers/education.controller');

router.get('/:id', getEducation);
router.get('/', getEducations);

module.exports = router;
