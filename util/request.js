const { connection } = require('../database/configDB')

const get = async (req, resp, query) => {

    try {
        
        const [rows] = await connection.query(query);
        resp.json({
            status : "ok",
            message : rows, 
            code : 200
        })
    } catch (error) {
        
        const { message, code } = error; 
        
        resp.json({
            status : "error",
            message : message, 
            code : code
        }); 
        
    }


}

const gets = async (req, resp, query) => {
    try {
        
        const [rows] = await connection.query(query);
        resp.json({
            status : "ok",
            message : rows, 
            code : 200
        })
    } catch (error) {
        
        const { message, code } = error; 
        
        resp.json({
            status : "error",
            message : message, 
            code : code
        }); 
        
    }
}

const post = async (req, resp, query) => {
    try {
        
        const [rows] = await connection.query(query);
        resp.json({
            status : "ok",
            message : rows, 
            code : 200
        })
    } catch (error) {
        
        const { message, code } = error; 
        
        resp.json({
            status : "error",
            message : message, 
            code : code
        }); 
        
    }
}

const deleteData = async (req, resp, query) => {
    // connection.query(query, (error, results) => {
    //      error ? resp.json({status: "erorr", msg: error }) : 
    //      resp.json({status: "ok", msg: results });        
    // });

    try {
        
        const [rows] = await connection.query(query);
        resp.json({
            status : "ok",
            message : rows, 
            code : 200
        })
    } catch (error) {
        
        const { message, code } = error; 
        
        resp.json({
            status : "error",
            message : message, 
            code : code
        }); 
        
    }
}

const udpadate = async (req, resp, query) => {
    // connection.query(query, (error, results) => {
    //      error ? resp.json({status: "erorr", msg: error }) : 
    //      resp.json({status: "ok", msg: results });        
    // });

    try {
        
        const [rows] = await connection.query(query);
        
        resp.json({
            status : "ok",
            message : rows, 
            code : 200
        })
    } catch (error) {
        
        const { message, code } = error; 
        
        resp.json({
            status : "error",
            message : message, 
            code : code
        }); 
        
    }
}

module.exports = {
    get,
    gets,
    post, 
    deleteData,
    udpadate
}