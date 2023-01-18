const Router = require('express');

const router = Router();

const { 
    getEducation,
    getEducations,
    postEducation
} = require('../controllers/education.controller');

router.get('/:id', getEducation);
router.get('/', getEducations);
router.post('/', postEducation);

module.exports = router;
