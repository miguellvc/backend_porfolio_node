const { get, gets, post } = require('../util/request')



const getEducation = (req, resp) => {
    
    let query = `SELECT * FROM education where id = ${req.params.id}`;
    gets(req, resp, query);
    
}

const getEducations = (req, resp) => {
    
    let query = 'SELECT * FROM education';
    gets(req, resp, query);
    
}

const postEducation = (req, resp) => {
    const {certificate, description, year, color} = req.body; 
    let query = `INSERT INTO education (certificate, description, year, color) VALUES ('${certificate}', '${description}', '${year}', '${color}')`;
    post(req, resp, query);
    
}

module.exports = {
    getEducation,
    getEducations,
    postEducation
}