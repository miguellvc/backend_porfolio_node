const Router = require('express'); 

const router = Router(); 

const { 
    getProjects
} = require('../controllers/project.controller')

router.get('/', getProjects)

module.exports = router;