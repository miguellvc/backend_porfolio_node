const { get, gets } = require('../util/request')


const getProject = (req, resp) => {
    let query = `SELECT * FROM  project where id = ${req.params.id}`;
    gets(req, resp, query);
}

const getProjects = (req, resp) => {
    let query = 'SELECT * FROM  project';
    gets(req, resp, query);
}


module.exports = {
    getProject,
    getProjects
}