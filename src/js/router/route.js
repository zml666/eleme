import home_controller from '../controllers/home_controller';
import profile_controller from '../controllers/profile_controllers';
import order_controller from '../controllers/order_controller';

const routes = {
    '#/home':home_controller,
    "#/profile":profile_controller,
    "#/order":order_controller
}

export {routes};