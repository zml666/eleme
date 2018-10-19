import profile_header from '../views/profile_header.html';
import profile_main from '../views/profile_main.html';

const render = () => {
    // 解除事件绑定
    $(document).off("scroll");
    $('#wrapper-top').html("");
    $('#shoplist').html("");
    $('#refresh-backtop').html("");
    $('#header').html(profile_header);
    $('#profile_wrapper').html(profile_main);
    login_after();
}

export default {
    render
}
//登录之后
const login_after=function(){
    if(localStorage.getItem('phone')){
        $('#option_first').addClass('after_center');
        $('#option_second').removeClass('after_center');
        //手机号中间四位为*
        var str=localStorage.getItem('phone');
        var str2=str.substr(0,3)+"****"+str.substr(7);
        $('.enjoy').html(str2);
        $('.resgister').html(str2);
        $('.money').css('display','none');
        $('.money_after').css('display','block');
    }else{
        $('#go').attr('href','http://localhost:8080/#/profile');
    }
}
