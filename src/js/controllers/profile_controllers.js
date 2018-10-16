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
}

export default {
    render
}