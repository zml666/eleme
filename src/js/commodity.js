import commodity_controller from './controllers/commidity_controller';

// 获取跳转的商品的id
const ID = GetQueryString("id");
// 从session中取出商品并填充到页面中
let shoplist = JSON.parse(sessionStorage.getItem("shoplist"));
let commodity = null;
shoplist.forEach(item => {
    if (item.id == ID) {
        commodity = item;
    }
});
$("title").html(commodity.name);
$("#store-info>.top-bc>img").attr("src", commodity.img_src);
$("#store-info>.top-img").attr("src", commodity.img_src);
$("#store-info>.store-detail>h2>span").html(commodity.name);
$("#store-info>.store-detail>.description .grade").html(commodity.rating);
$("#store-info>.store-detail>.description .number").html(commodity.recent_order_num);
$("#store-info>.store-detail>.description .minutes").html(commodity.order_lead_time);
$("#store-info>.store-detail>.activity>span:eq(1)").html(commodity.discount_remission);
$("#store-info>.store-detail>.notice>span").html("");
$("footer>.bottom-nav>.other>span").html(commodity.delivery_far_price);
$("footer>.submit-btn>span").html(commodity.delivery_base_price);

commodity_controller.render();

// 获取html的font-size大小,页面导航滑动时实现响应式 在ipone6/7/8下 660/75得出rem然后乘实际设备下的font-size
let fontSize = parseFloat($("html").css("font-size"));

// hammer手势
let mybody = document.getElementsByTagName("body")[0];
let hammer = new Hammer(mybody);
hammer.on("swiperight", back);
function back(ev) {
    window.location.href = "http://localhost:8080";
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

$.fn.scrollTo = function (options) {
    var defaults = {
        toT: 0,    //滚动目标位置
        durTime: 300,  //过渡动画时间
        delay: 30,     //定时器时间
        callback: null   //回调函数
    };
    var opts = $.extend(defaults, options),
        timer = null,
        _this = this,
        curTop = _this.scrollTop(),//滚动条当前的位置
        subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
        index = 0,
        dur = Math.round(opts.durTime / opts.delay),
        smoothScroll = function (t) {
            index++;
            var per = Math.round(subTop / dur);
            if (index >= dur) {
                _this.scrollTop(t);
                window.clearInterval(timer);
                if (opts.callback && typeof opts.callback == 'function') {
                    opts.callback();
                }
                return;
            } else {
                _this.scrollTop(curTop + index * per);
            }
        };
    timer = window.setInterval(function () {
        smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
};


$("#shoplist-nav ul").on("tap", "li", function () {
    let classname = $(this).attr("class").split(" ")[0];
    $(this).addClass("active").siblings().removeClass("active");
    if ($("html").scrollTop() < 650 / 75 * fontSize) {
        $("html").scrollTop(650 / 75 * fontSize + 10);
    }
    switch (classname) {
        case 'hot-sale': {
            let height = 660 / 75 * fontSize;
            $("html").scrollTo({ toT: height })
            break;
        }
        case 'dicount': {
            let height = (660 - 70) / 75 * fontSize + $("#hot-sale").height();
            $("html").scrollTo({ toT: height });
            break;
        }
        case 'store-special': {
            let height = (660 - 70) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height();
            $("html").scrollTo({ toT: height });
            break;
        }
        case 'staple-food': {
            let height = (660 - 70) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height() + $("#store-special").height();
            $("html").scrollTo({ toT: height });
            break;
        }
        case 'drinks': {
            let height = (660 - 70) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height() + $("#store-special").height() + $("#staple-food").height();
            $("html").scrollTo({ toT: height });
            break;
        }
        case 'dessert': {
            let height = (660 - 70) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height() + $("#store-special").height() + $("#staple-food").height() + $("#drinks").height();
            $("html").scrollTo({ toT: height });
            break;
        }
    }
})

$(document).on("scroll", function () {
    // 左侧导航栏的效果
    let scrollTop = $("html").scrollTop();
    if (scrollTop >= 680 / 75 * fontSize) {
        $("#shoplist-nav").css({
            "position": "fixed",
            "top": "1.0933rem",
            "left": "0"
        })
        $("#shoptab").css("position", "fixed");
    } else {
        $("#shoplist-nav").css({
            "position": "",
            "top": "1.0933rem"
        })
        $("#shoptab").css("position", "sticky");
    }

    let dicount = (660 - 170) / 75 * fontSize + $("#hot-sale").height();
    let storeSpecial = (660 - 170) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height();
    let stapleFood = (660 - 170) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height() + $("#store-special").height();
    let drinks = (660 - 170) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height() + $("#store-special").height() + $("#staple-food").height();
    let dessert = (660 - 170) / 75 * fontSize + $("#hot-sale").height() + $("#dicount").height() + $("#store-special").height() + $("#staple-food").height() + $("#drinks").height();

    if(scrollTop <= dicount){
        $(".hot-sale").addClass('active').siblings().removeClass("active");
    }else if (scrollTop >= dicount && scrollTop < storeSpecial) {
        $(".dicount").addClass('active').siblings().removeClass("active");
    } else if (scrollTop >= storeSpecial && scrollTop < stapleFood) {
        $(".store-special").addClass('active').siblings().removeClass("active");
    } else if (scrollTop >= stapleFood && scrollTop < drinks) {
        $(".staple-food").addClass('active').siblings().removeClass("active");
    } else if (scrollTop >= drinks && scrollTop < dessert) {
        $(".drinks").addClass('active').siblings().removeClass("active");
    } else {
        $(".dessert").addClass('active').siblings().removeClass("active");
    }
})