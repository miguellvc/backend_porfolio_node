const { get } = require('../util/request')

const getEducations = (req, resp) => {
    
    let query = 'SELECT * FROM education';
    get(req, resp, query);
    
    // resp.json({
    //     status: "ok", 
    //     msg : "se envían todos los datos de educación"
    // })
}

module.exports = {
    getEducations
}