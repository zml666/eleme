import home_shoplist from '../models/home_shoplist_models';

const test = async ()=> {
    let data = await home_shoplist.shoplist();
    console.log(data);
}
test();

export default {
    home_shoplist
};