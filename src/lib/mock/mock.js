

const shoplist = require('./shoplist.json');
const menulist = require('./menulist.json');

module.exports = () => {
    return {
        "shoplist": shoplist,
        "menulist": menulist
    }
}