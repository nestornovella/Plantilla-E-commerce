const {Router} = require('express')
const { postUser, getUser, putUser } = require('../controllers/userController')

const router = Router()

router.get('/', getUser);
router.post('/', postUser);
router.put('/', putUser);

module.exports = router