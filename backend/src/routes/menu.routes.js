import Express from 'express';
import { getAllMenuItems, updateMenuItem, deleteMenuItem, getMenuItemById, createMenuItem, createOrder, updateOrder, getAllOrders } from '../controllers/menu';

const menuRoute = Express.Router();

menuRoute.get('/', getAllMenuItems);
menuRoute.get("/order", getAllOrders)
menuRoute.get('/:id', getMenuItemById);
menuRoute.post('/', createMenuItem);
menuRoute.patch('/:id', updateMenuItem);
menuRoute.delete('/:id', deleteMenuItem);
menuRoute.post('/order',createOrder);
menuRoute.patch('/order/:id', updateOrder);

export default menuRoute;
