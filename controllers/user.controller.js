const { gets, post } = require('../util/request')


const getUsers = (req, resp) => {
    let query = 'SELECT name, surname, mail, url_img FROM user';
    gets(req, resp, query);
}

const getUser = (req, resp) => {
    const query = `SELECT name, surname, mail, url_img FROM user where id = ${req.params.id}`;
    gets(req, resp, query);

}

const postUser = (req, resp) => {
    const { name, surname, mail, password, url_img } = req.body;
    let query = `INSERT INTO user (name, surname, mail, password, url_img) VALUES ('${name}', '${surname}', '${mail}', '${password}', '${url_img}')`;
    post(req, resp, query);
}
module.exports = {
    getUsers,
    postUser,
    getUser
}