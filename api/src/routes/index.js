<<<<<<< HEAD
const { Router } = require("express");
const productRouter = require('./productRouter');
=======
const { Router } = require('express')
const { Shoping_cart } = require('../../db')
const userRoutes = require('./userRoutes')
>>>>>>> c44541eb48fed7b7d4aed94e9ce9bc97aadf096c

const router = Router();

<<<<<<< HEAD
router.use("/products", productRouter);

module.exports = router;
=======
router.use('/user', userRoutes)




module.exports = router
>>>>>>> c44541eb48fed7b7d4aed94e9ce9bc97aadf096c
