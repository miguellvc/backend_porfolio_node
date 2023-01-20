const Router = require('express'); 

const router = Router(); 

const { 
    getProject,
    getProjects,
    postProject,
    deleteProject
} = require('../controllers/project.controller');

router.get('/:id', getProject);
router.get('/', getProjects);
router.post('/', postProject);
router.delete('/', deleteProject);

module.exports = router;