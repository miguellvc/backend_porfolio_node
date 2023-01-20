const Router = require('express');

const router = Router();

const { 
    getSkill,
    getSkills,
    postSkill,
    deleteSkill
} = require('../controllers/skill.controller')

router.get('/:id', getSkill)
router.get('/', getSkills)
router.post('/', postSkill)
router.delete('/', deleteSkill)


module.exports = router; 