const getCertificates = (req, resp) => {
    resp.json({
        status: "ok",
        msg: "se envían todos los certificados"
    })
}

module.exports = {
    getCertificates
}