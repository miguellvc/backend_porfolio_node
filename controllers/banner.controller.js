const { gets, get } = require('../util/request')

const getBanner = (req, resp) => {
    let query = `SELECT * FROM banner where id = ${req.params.id}`;
    
    get(req, resp, query);
}

const getBanners = (req, resp) => {
    let query = 'SELECT * FROM banner';
    gets(req, resp, query);
}


module.exports = {
    getBanner,
    getBanners
}