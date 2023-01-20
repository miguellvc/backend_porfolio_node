const { connection } = require('../database/config')

const get = (req, resp, query) => {
    connection.query(query, (error, results) => {
         error ? resp.json({status: "erorr", msg: error }) : resp.json({status: "ok", msg: results });        
    });

}

const gets = (req, resp, query) => {
    connection.query(query, (error, results) => {
         error ? resp.json({status: "erorr", msg: error }) : resp.json({status: "ok", msg: results });        
    });

}

const post = (req, resp, query) => {
    connection.query(query, (error, results) => {
         error ? resp.json({status: "erorr", msg: error }) : 
         resp.json({status: "ok", msg: results });        
    });
}

const deleteData = (req, resp, query) => {
    connection.query(query, (error, results) => {
         error ? resp.json({status: "erorr", msg: error }) : 
         resp.json({status: "ok", msg: results });        
    });
}

module.exports = {
    get,
    gets,
    post, 
    deleteData
}