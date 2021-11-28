class HomeController {

    async index(req, res) {
        res.send("APP EXPRESS - Template!")
    }
}

module.exports = new HomeController();