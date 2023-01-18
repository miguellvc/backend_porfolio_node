const { get, gets, post } = require('../util/request')


const getProject = (req, resp) => {
    let query = `SELECT * FROM  project where id = ${req.params.id}`;
    gets(req, resp, query);
}

const getProjects = (req, resp) => {
    let query = 'SELECT * FROM  project';
    gets(req, resp, query);
}

const postProject = (req, resp) => {
    const { title, url_Img, url_Git} = req.body;
    let query = `INSERT INTO project (title, url_Img, url_Git) VALUES ('${title}', '${url_Img}', '${url_Git}')`;
    post(req, resp, query);
}

module.exports = {
    getProject,
    getProjects,
    postProject,
}