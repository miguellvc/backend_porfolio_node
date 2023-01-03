const { get } = require('../util/request')


const getUsers = (req, resp) => {
    let query = 'SELECT * FROM user';
    get(req, resp, query);
}


module.exports = {
    getUsers
}