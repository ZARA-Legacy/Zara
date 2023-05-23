import { Router } from 'express';
import { CartContr } from '../controllers/cartContr';
import { Cart } from '../models/Cart'; // Assuming you have a Cart model defined

const routeCart = Router();
const cartController = new CartController();

routeCart.get('/cart', cartController.allCarts);
routeCart.get('/cart/:id', cartController.cartForUser);
routeCart.post('/cart', cartController.toCart);
routeCart.delete('/cart/:id', cartController.remove);
routeCart.delete('/userCart/:id', cartController.removeCartOfUser);

export default routeCart;
