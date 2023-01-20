const { get, gets, post, deleteData } = require('../util/request')

const getSkill = (req, resp) => {
    let query = `SELECT * FROM skill where id = ${req.params.id}`;
    gets(req, resp, query);
}

const getSkills = (req, resp) => {
    let query = 'SELECT * FROM skill';
    gets(req, resp, query);
}

const postSkill = (req, resp) => {
    const { language, porcentage, background, border, color, rotate } = req.body;
    let query = `INSERT INTO skill (language, porcentage, background, border, color, rotate) VALUES ('${language}', ${porcentage}, '${background}', '${border}', '${color}', '${rotate}' )`;
    // console.log(req.body)
    post(req, resp, query);
}

const deleteSkill = (req, resp) => {
    const { id } = req.body;
    let query = `DELETE FROM skill WHERE id = ${id}`;
    deleteData(req, resp, query);
}

module.exports = {
    getSkill,
    getSkills,
    postSkill,
    deleteSkill
}