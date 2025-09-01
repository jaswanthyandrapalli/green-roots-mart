const express = require('express');
const { createOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/myorders', protect, getUserOrders);
router.get('/', protect, admin, getAllOrders);

module.exports = router;
