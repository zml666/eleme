



$(document).on("scroll",function() {
    // console.log($("html").scrollTop());
    if($("html").scrollTop()>=680){
        $("#shoplist-nav").css({
            "position":"fixed",
            "top":"1.0933rem",
            "left":"0"
        })
    }else{
        $("#shoplist-nav").css({
            "position":"",
            "top":"1.0933rem"
        })
    }
})