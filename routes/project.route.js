const Router = require('express'); 

const router = Router(); 

const { 
    getProject,
    getProjects,
    postProject
} = require('../controllers/project.controller');

router.get('/:id', getProject);
router.get('/', getProjects);
router.post('/', postProject);

module.exports = router;