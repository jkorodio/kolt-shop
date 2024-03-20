import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @decs Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }
})

// @decs Get logged in user order
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
})

// @decs Get order by Id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
})

// @decs Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    // const order = await Order.find({});
    // res.json(order);
    res.send('update order to paid');
})

// @decs Update to delivered
// @route GET /api/orders/:id/deliver
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    // const order = await Order.find({});
    // res.json(order);
    res.send('update order to delivered');
})

// @decs Get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    // const order = await Order.find({});
    // res.json(order);
    res.send('get all orders');
})

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};
