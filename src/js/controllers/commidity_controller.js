import commidity_info from '../views/commidity_info.html';
import commidity_models from '../models/commidity_models';

// 存放获取到的数据
let datascourse = {};
const getCommodity = async ()=>{
    let commiditydata = await commidity_models.commidity();
    datascourse = commiditydata.content;
    renderCommodity();
}

const renderCommodity = ()=>{
    let _template = Handlebars.compile(commidity_info);
    let _template_string = "";

    // 热销
    _template_string = _template({
        "commidity":datascourse["hot-sale"]
    })
    $("#hot-sale").append(_template_string);

    // 优惠
    _template_string = _template({
        "commidity":datascourse["dicount"]
    })
    $("#dicount").append(_template_string);

    // 本店特色
    _template_string = _template({
        "commidity":datascourse["store-special"]
    })
    $("#store-special").append(_template_string);

    // 主食
    _template_string = _template({
        "commidity":datascourse["staple-food"]
    })
    $("#staple-food").append(_template_string);

    // 饮料
    _template_string = _template({
        "commidity":datascourse["drinks"]
    })
    $("#drinks").append(_template_string);

    // 甜品
    _template_string = _template({
        "commidity":datascourse["dessert"]
    })
    $("#dessert").append(_template_string);
}

const render = ()=>{
    getCommodity();
}

export default{
    render
};