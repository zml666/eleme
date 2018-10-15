
// 请求商品信息
const shoplist = ()=>{
    return $.ajax({
        url: '/api/menulist',
        success : function(data) {
            return data;
        }
    })
}

export default {
    shoplist
}