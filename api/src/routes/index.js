const { Router } = require('express')
const { Shoping_cart } = require('../../db')
const userRoutes = require('./userRoutes')

const router = Router()

router.use('/user', userRoutes)




module.exports = router