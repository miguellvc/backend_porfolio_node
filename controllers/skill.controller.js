const { get } = require('../util/request')

const getSkills = (req, resp) => {
    let query = 'SELECT * FROM skill';
    get(req, resp, query);
}

module.exports = {
    getSkills
}