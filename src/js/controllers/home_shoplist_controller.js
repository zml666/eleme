import home_shoplist_models from '../models/home_shoplist_models';
import home_shoplist from '../views/home_shoplist.html';

// 存放获取到的数据
let datascourse = [];
const getShopList = async ()=> {
    let shoplistdata = await home_shoplist_models.shoplist();
    datascourse = [...shoplistdata.content.data];
    renderShopList();
}
const renderShopList = ()=>{
    let _template = Handlebars.compile(home_shoplist);
    let _template_string = _template({
        "shoplist":datascourse
    })
    // $("#shoplist").html($("#shoplist").html()+_template_string);
    $("#shoplist").append(_template_string);
}

const render = ()=>{
    getShopList();
}

export default{
    render
};