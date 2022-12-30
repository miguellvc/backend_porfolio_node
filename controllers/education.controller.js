const getEducations = (req, resp) => {
    resp.json({
        status: "ok", 
        msg : "se envían todos los datos de educación"
    })
}

module.exports = {
    getEducations
}