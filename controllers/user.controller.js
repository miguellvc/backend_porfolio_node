const { gets } = require('../util/request')


const getUsers = (req, resp) => {
    let query = 'SELECT * FROM user';
    gets(req, resp, query);
}


module.exports = {
    getUsers
}