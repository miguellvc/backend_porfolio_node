const { get } = require('../util/request')


const getBanners = (req, resp) => {
    let query = 'SELECT * FROM banner';
    get(req, resp, query);
}


module.exports = {
    getBanners
}