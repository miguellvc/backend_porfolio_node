const Router = require('express');

const router = Router();

const { 
    getSkill,
    getSkills,
    postSkill,
    deleteSkill,
    updateSkill
} = require('../controllers/skill.controller');

router.get('/:id', getSkill);
router.get('/', getSkills);
router.post('/', postSkill);
router.delete('/', deleteSkill);
router.put('/', updateSkill);


module.exports = router; 