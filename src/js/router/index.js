import {routes} from './route';

class Router{
    constructor({initial}){
        this.routes = routes; 
        this.initial = initial;
    }
    init(){
        this.initHash();
        this.listenHashChange();
    }
    initHash(){
        if(!location.hash){
            location.hash = this.initial;
        }
    }
    switch(path){
        location.hash = path;
    }
    refresh(){
        let hash = location.hash;
        if(!this.routes[hash]){
            location.hash = this.initial;
            return false;
        }
        this.routes[hash].render();
        this.switchTab();
    }
    switchTab(){
        // 要求需要根据路由切换而切换active类名的元素，必须加上nav-link类名
        $('.nav-link').each(function (item){
            if ( $(this).attr('href') === location.hash ) {
                $(this).addClass('active');
            }else {
                $(this).removeClass('active');
            }
        })
    }
    listenHashChange () { // 监听hash值变化的
        window.addEventListener('load', this.refresh.bind(this));
        // 当hash值变化的时候此事件会执行
        window.addEventListener('hashchange', this.refresh.bind(this));
    }

}

export default Router;