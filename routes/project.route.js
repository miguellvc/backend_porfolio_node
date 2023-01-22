const Router = require('express'); 

const router = Router(); 

const { 
    getProject,
    getProjects,
    postProject,
    deleteProject,
    updateProject
} = require('../controllers/project.controller');

router.get('/:id', getProject);
router.get('/', getProjects);
router.post('/', postProject);
router.delete('/', deleteProject);
router.put('/', updateProject);


module.exports = router;