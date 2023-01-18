const { gets, get, post } = require('../util/request')

const getBanner = (req, resp) => {
    let query = `SELECT * FROM banner where id = ${req.params.id}`;
    get(req, resp, query);
}

const getBanners = (req, resp) => {
    let query = 'SELECT * FROM banner';
    gets(req, resp, query);
}

const postBanner = (req, resp) => {
    const { title, sub_title, content, url_img } = req.body;
    let query = `INSERT INTO banner (title, sub_title, content, url_img) VALUES ('${title}', '${sub_title}', '${content}', '${url_img}')`;
    post(req, resp, query);
}

module.exports = {
    getBanner,
    getBanners,
    postBanner
}