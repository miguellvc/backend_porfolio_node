const getSkills = (req, resp) => {
    resp.json({
        status : "ok",
        msg: "se envían todos los datos de las skills"
    })
}

module.exports = {
    getSkills
}