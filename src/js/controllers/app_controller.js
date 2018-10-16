import home_header from '../views/home_header.html';
import home_footer from '../views/home_footer.html';
const render = () => {
    // 渲染主页的顶部定位
    $("#header").html(home_header);
    // 渲染主页的固定底部
    $("#footer").html(home_footer);
}
export default {
    render
}