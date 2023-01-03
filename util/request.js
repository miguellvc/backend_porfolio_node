const { connection } = require('../database/config')

const get = (req, resp, query) => {
    connection.query(query, (error, results) => {
         error ? resp.json({status: "erorr", msg: error }) : resp.json({status: "ok", msg: results });        
    });

}

module.exports = {
    get
}