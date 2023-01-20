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

const deleteBanner = (req, resp) => {
    const { id } = req.body;
    let query = `DELETE FROM banner WHERE id = ${id}`;
    console.log("se ejecuta el método delete en banner controller", id);
    post(req, resp, query);
}

module.exports = {
    getBanner,
    getBanners,
    postBanner,
    deleteBanner
}