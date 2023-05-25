import express, { Router } from 'express';
import cartController from '../controllers/cartContr';

const  routeCart : Router = express.Router();

routeCart.get('/cart', cartController.allCarts);
routeCart.get('/one/:id', cartController.cartForUser);
routeCart.post('/cart', cartController.toCart);
routeCart.delete('/:user_id/:products_id', cartController.remove);
routeCart.delete('/userCart/:id', cartController.removeCartOfUser);

export default routeCart;
