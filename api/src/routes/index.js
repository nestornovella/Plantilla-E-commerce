const { Router } = require('express');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const messageRoutes = require('./messageRoutes');
const productRoutes = require('./productRouter');
const reviewRoutes = require('./reviewRoutes');
const transactionRoutes = require('./transactionRoutes'); 
const shoppingRoutes = require('./shopingCartRoutes');

const router = Router();

router.use('/user', userRoutes);
router.use('/transaction', transactionRoutes);
router.use('/category', categoryRoutes);
router.use('/message', messageRoutes);
router.use('/product', productRoutes);
router.use('/review', reviewRoutes);
router.use('/shoping', shoppingRoutes);

module.exports = router
