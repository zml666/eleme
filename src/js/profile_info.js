const info=function(){
    $('#_username').html(localStorage.getItem('phone'));
    $('#telnum').html(localStorage.getItem('phone'));
    $('.exit').on('tap',function(){
        localStorage.clear();
        window.location.href='http://localhost:8080/#/profile';
    })
}
info();