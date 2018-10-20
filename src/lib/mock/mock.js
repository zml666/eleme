

const shoplist = require('./shoplist.json');
const menulist = require('./menulist.json');
const commidity = require('./commidity.json');

module.exports = () => {
    return {
        "shoplist": shoplist,
        "menulist": menulist,
        "commidity":commidity
    }
}