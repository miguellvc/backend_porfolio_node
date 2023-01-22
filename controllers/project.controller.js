const { get, gets, post, deleteData, udpadate } = require('../util/request')


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

const deleteProject = (req, resp) => {
    const { id } = req.body; 
    let query = `DELETE FROM project WHERE id = ${id}`;
    deleteData(req, resp, query);
}

const updateProject = (req, resp) => {
    const { id, title, url_Git} = req.body;
    let query = `UPDATE project SET title = '${title}', url_Git = '${url_Git}' WHERE id = ${id}`;
    udpadate(req, resp, query);
}

module.exports = {
    getProject,
    getProjects,
    postProject,
    deleteProject,
    updateProject
}