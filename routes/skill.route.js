const Router = require('express');

const router = Router();

const { 
    getSkill,
    getSkills,
    postSkill
} = require('../controllers/skill.controller')

router.get('/:id', getSkill)
router.get('/', getSkills)
router.post('/', postSkill)

module.exports = router; 