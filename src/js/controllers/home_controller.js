
import home_menu_nav from '../views/home_menu_nav.html';
import home_shoplist from './home_shoplist_controller';
import home_refresh_backtop from '../views/home_refresh_backtop.html';
import home_header from '../views/home_header.html';

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

    // 清空profile中内容
    $("#profile_wrapper").html("");
    
    // 渲染主页的菜单导航筛选商家
    $("#wrapper-top").html(home_menu_nav);

    // 渲染刷新和回到顶部
    $("#refresh-backtop").html(home_refresh_backtop);

    // 渲染商品列表
    home_shoplist.render();

    let timer = null;

    // 回到顶部按钮的出现与消失  
    $(document).on("scroll",function() {
        // console.log($("html").scrollTop(),$(document).height(),$(window).height());
        if($("html").scrollTop()>850){
            $(".back-to-top").css("display","flex");
        }else{
            $(".back-to-top").css("display",'none');
        }

        //滑到底部获取数据
        if($("html").scrollTop()+$(window).height()+1>=$(document).height()){
            $(".refresh").css("display","flex");
            if(timer==null){
                timer = setTimeout(() => {
                    home_shoplist.render();
                    $("html").scrollTop($("html").scrollTop()+100);
                    $(".refresh").css("display",'none');
                    clearTimeout(timer);
                    timer=null;
               }, 1000);
            }
        }
         // 修改顶部搜索框的定位
         if($("html").scrollTop()>800){
             $(".search").css({
                "position":"fixed"
             });
         }else{
            $(".search").css("position","sticky");
         }
    })

    //事件代理 为所有的商品添加单击事件
    $("#shoplist").on("tap",".shoplist-item",function() {
        let url = "http://localhost:8080/commodity.html?id="+$(this).attr("data-id");
        window.location.href = url;
    })


    // 回到顶部按钮
    $(".back-to-top").tap(function() {
        $("html").scrollTop(0);
    })

   
}

export default {
    render
}