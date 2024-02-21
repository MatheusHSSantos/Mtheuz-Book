const { getFavorites, insertFavorite, deleteFavoriteById } = require("../services/favorite")

function getFavorite(req, res) {
    try {
        const books = getFavorites()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        insertFavorite(id)
        res.status(201)
        res.send("Book inserted successfully")
    } catch (error) {
        res.status(422)
        res.send("The name of the book is mandatory!")
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteFavoriteById(id)
            res.send("The favorite has been deleted sucessfully!")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavorite,
    postFavorite,
    deleteFavorite,
}