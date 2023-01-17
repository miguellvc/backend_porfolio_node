const Router = require('express'); 

const router = Router(); 

const { 
    getProject,
    getProjects
} = require('../controllers/project.controller');

router.get('/:id', getProject);
router.get('/', getProjects);

module.exports = router;