const {Router} = require('express')
const { postUser, getUsers, putUser, getUserId } = require('../controllers/userController')

const router = Router()

router.get('/', getUsers);
router.post('/', postUser);
router.put('/:id', putUser);
router.get('/:id', getUserId);

module.exports = router