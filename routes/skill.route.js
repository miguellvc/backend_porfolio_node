const Router = require('express');

const router = Router();

const { 
    getSkills
} = require('../controllers/skill.controller')

router.get('/', getSkills)

module.exports = router; 