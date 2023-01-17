const { get, gets } = require('../util/request')

const getSkill = (req, resp) => {
    let query = `SELECT * FROM skill where id = ${req.params.id}`;
    gets(req, resp, query);
}

const getSkills = (req, resp) => {
    let query = 'SELECT * FROM skill';
    gets(req, resp, query);
}

module.exports = {
    getSkill,
    getSkills
}