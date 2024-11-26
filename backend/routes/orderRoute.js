import express from 'express';
import auth from '../middleware/auth.js'
import { listOrders, placeOrder,updateStatus,userOrder,verifyOrder } from '../controllers/orderController.js';


const orderRouter = express.Router();


orderRouter.post('/place', auth,placeOrder);
orderRouter.post('/verify',auth, verifyOrder);
orderRouter.post('/userorders', auth,userOrder);
orderRouter.get('/list', listOrders);
orderRouter.post('/status', updateStatus);

export default orderRouter;
