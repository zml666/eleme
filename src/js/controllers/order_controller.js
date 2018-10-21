import order_header from '../views/order_header.html'
import order_main from '../views/order_main.html'
const render=function(){
    $('#header').html(order_header);
    $('#profile_wrapper').html(order_main);
    login_after();
}

export default{  
    render
}


const login_after=function(){
    if(localStorage.getItem('phone')){  
        $('.login_before').css('display','none');
        $('.login__after').css('display','block');
        $('._look').on('tap',function(){
            $('#order_data').css('display','block');
            $('._look').css('display','none');
        })
    }else{
        $('.login').on('tap',function(){
            window.location.href='http://localhost:8080/login.html';
        })
        
        
    }
}
