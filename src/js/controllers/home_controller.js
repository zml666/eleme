
import home_header from '../views/home_header.html';
import home_footer from '../views/home_footer.html';
import home_menu_nav from '../views/home_menu_nav.html';
import home_shoplist from './home_shoplist_controller';

const render = () => {

    // swiper轮播图初始化
    $(document).ready(function () {
        var myTopSwiper = new Swiper('.top-swiper', {
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
        })
        var myBottomSwiper = new Swiper('.bottom-swiper', {
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
            autoplay: true,
        })
    })

    // 渲染主页的顶部定位
    $("#header").html(home_header);
    // 渲染主页的固定底部
    $("#footer").html(home_footer);
    // 渲染主页的菜单导航筛选商家
    $("#wrapper-top").html(home_menu_nav);

    // 回到顶部按钮的出现与消失
    $(document).on("scroll",function() {
        if(document.documentElement.scrollTop>850){
            $(".back-to-top").css("display","flex");
        }else{
            $(".back-to-top").css("display",'none');
        }
    })

    // 商品列表
    $("#shoplist").html(home_shoplist.render());
}

export default {
    render
}