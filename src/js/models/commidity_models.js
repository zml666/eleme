
// 请求商品信息
const commidity = ()=>{
    return $.ajax({
        url: '/api/commidity',
        success : function(data) {
            return data;
        }
    })
}

export default {
    commidity
}