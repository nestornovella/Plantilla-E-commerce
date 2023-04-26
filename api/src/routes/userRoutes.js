const {Router} = require('express')
const { postUser, getUser } = require('../controllers/userController')

const route = Router()

route.post('/', postUser)
route.get('/', getUser)



module.exports = route