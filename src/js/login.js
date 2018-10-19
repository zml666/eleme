
$('.login').on('blur','input',function(){
    localStorage.setItem('phone',$('#phonenumber').val());
    localStorage.setItem("pwd",$('.password').val());
    var reg=/^1[34578]\d{9}$/;
    var reg1=/^\d{6}$/;
    if((reg.test($('#phonenumber').val()))&&(reg1.test($('.password').val()))){    
        $('.login_btn').on('tap',function(){
            //setTimeout(function(){
                window.location.href='http://localhost:8080/#/profile';
            //},320)    
        })
    }
})