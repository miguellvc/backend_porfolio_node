const { connection } = require('../database/configDB')

const get = async (req, resp, query) => {
    const [row] = await connection.query(query)
    resp.json({
        row
    })

}

const gets = async (req, resp, query) => {
   const [rows] = await connection.query(query)
   resp.json({
    rows
   })
}

const post = async (req, resp, query) => {
    const respuesta = await connection.query(query)
    resp.json({
        respuesta
    })
}

const deleteData = async (req, resp, query) => {
    // connection.query(query, (error, results) => {
    //      error ? resp.json({status: "erorr", msg: error }) : 
    //      resp.json({status: "ok", msg: results });        
    // });

    const respuesta = await connection.query(query)
    resp.json({
        respuesta
    })
}

const udpadate = async (req, resp, query) => {
    // connection.query(query, (error, results) => {
    //      error ? resp.json({status: "erorr", msg: error }) : 
    //      resp.json({status: "ok", msg: results });        
    // });

    const respuesta = await connection.query(query)
    resp.json({
        respuesta
    })
}

module.exports = {
    get,
    gets,
    post, 
    deleteData,
    udpadate
}