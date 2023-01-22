const { get, gets, post, deleteData, udpadate } = require('../util/request')

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

const updateSkill = (req, resp) => {
    const { id, language, porcentage, background, border, color, rotate } = req.body;
    let query = `UPDATE skill SET language = '${language}', porcentage = ${porcentage}, background = '${background}', border = '${border}', color = '${color}', rotate = '${rotate}' WHERE id = ${id}`;
    // let query = `UPDATE banner SET title = '${title}', sub_title = '${sub_title}', content = '${content}' WHERE id = ${id}`;
    
    // console.log(req.body)
    udpadate(req, resp, query);
}
module.exports = {
    getSkill,
    getSkills,
    postSkill,
    deleteSkill,
    updateSkill
}