const Router = require('express'); 

const router = Router(); 

const {
    getUser, 
    getUsers,
    postUser
} = require('../controllers/user.controller')

router.get('/:id', getUser);
router.get('/', getUsers)
router.post('/', postUser)

module.exports = router;