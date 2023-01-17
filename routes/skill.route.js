const Router = require('express');

const router = Router();

const { 
    getSkill,
    getSkills
} = require('../controllers/skill.controller')

router.get('/:id', getSkill)
router.get('/', getSkills)

module.exports = router; 