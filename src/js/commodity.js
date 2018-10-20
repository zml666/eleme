import commodity_controller from './controllers/commidity_controller';

// 获取跳转的商品的id
const ID = GetQueryString("id");
// 从session中取出商品并填充到页面中
let shoplist = JSON.parse(sessionStorage.getItem("shoplist"));
let commodity = null;
shoplist.forEach(item => {
    if(item.id==ID){
        commodity = item;
    }
});
$("title").html(commodity.name);
$("#store-info>.top-bc>img").attr("src",commodity.img_src);
$("#store-info>.top-img").attr("src",commodity.img_src);
$("#store-info>.store-detail>h2>span").html(commodity.name);
$("#store-info>.store-detail>.description .grade").html(commodity.rating);
$("#store-info>.store-detail>.description .number").html(commodity.recent_order_num);
$("#store-info>.store-detail>.description .minutes").html(commodity.order_lead_time);
$("#store-info>.store-detail>.activity>span:eq(1)").html(commodity.discount_remission);
$("#store-info>.store-detail>.notice>span").html("");
$("footer>.bottom-nav>.other>span").html(commodity.delivery_far_price);
$("footer>.submit-btn>span").html(commodity.delivery_base_price);

commodity_controller.render();

$(document).on("scroll", function () {

    if ($("html").scrollTop() >= 680) {
        $("#shoplist-nav").css({
            "position": "fixed",
            "top": "1.0933rem",
            "left": "0"
        })
        $("#shoptab").css("position","fixed");
    } else {
        $("#shoplist-nav").css({
            "position": "",
            "top": "1.0933rem"
        })
        $("#shoptab").css("position","sticky");
    }
})

// hammer手势

let mybody = document.getElementsByTagName("body")[0];
let hammer = new Hammer(mybody);
hammer.on("panleft panright tap press", back);

function back(ev) {
    if(ev.type=="panright"){
        window.location.href = "http://localhost:8080";
    }
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) 
        return unescape(r[2]); 
    return null;
}
