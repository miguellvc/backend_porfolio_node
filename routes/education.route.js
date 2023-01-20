const Router = require('express');

const router = Router();

const { 
    getEducation,
    getEducations,
    postEducation,
    deleteEducation
} = require('../controllers/education.controller');

router.get('/:id', getEducation);
router.get('/', getEducations);
router.post('/', postEducation);
router.delete('/', deleteEducation);


module.exports = router;
