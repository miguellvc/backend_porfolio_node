const { get } = require('../util/request')


const getProjects = (req, resp) => {
    let query = 'SELECT * FROM  project';
    get(req, resp, query);
}


module.exports = {
    getProjects
}