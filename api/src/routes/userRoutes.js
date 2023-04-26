const {Router} = require('express')
const { postUser, getUser } = require('../controllers/userController')

const router = Router()

router.post('/', postUser)
router.get('/', getUser)

module.exports = router