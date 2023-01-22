const Router = require('express');

const router = Router();

const { 
    getEducation,
    getEducations,
    postEducation,
    deleteEducation,
    updateEducation
} = require('../controllers/education.controller');

router.get('/:id', getEducation);
router.get('/', getEducations);
router.post('/', postEducation);
router.delete('/', deleteEducation);
router.put('/', updateEducation);



module.exports = router;
