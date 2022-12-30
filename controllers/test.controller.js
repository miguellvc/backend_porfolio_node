
const getTest = (req, resp) => {

    resp.json(
        {
            ok: true, 
            msg: "test funcionando"
        }
    )
}

module.exports = {
    getTest
}