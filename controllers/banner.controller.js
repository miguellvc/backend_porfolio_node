
const getBanners = (req, resp) => {
    resp.json(
        {
            status : "ok",
            msg: "Se envian todos los datos del banner"
        }
    )
}


module.exports = {
    getBanners
}