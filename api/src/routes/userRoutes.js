const {Router} = require('express')
const { postUser, getUsers, putUser, getUserId, deleteUser } = require('../controllers/userController')

const router = Router()

router.get('/', getUsers);
router.post('/', postUser);
router.put('/:id', putUser);
router.get('/:id', getUserId);
router.delete('/:id', deleteUser);

module.exports = router