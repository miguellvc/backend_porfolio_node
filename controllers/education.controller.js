const { get, gets } = require('../util/request')



const getEducation = (req, resp) => {
    
    let query = `SELECT * FROM education where id = ${req.params.id}`;
    gets(req, resp, query);
    
}

const getEducations = (req, resp) => {
    
    let query = 'SELECT * FROM education';
    gets(req, resp, query);
    
}

module.exports = {
    getEducation,
    getEducations
}