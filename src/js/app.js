import app_controller from './controllers/app_controller';
import Router from './router';

app_controller.render();

const router = new Router({
    initial:"#/home"
})
window.router = router;
router.init();