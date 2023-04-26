const { Router } = require('express')
//const shopingRoutes = require('./shopingCartRoutes') 
const userRoutes = require('./userRoutes')

const router = Router();

router.use('/user', userRoutes)
//router.use('shoping', shopingRoutes)


module.exports = router
