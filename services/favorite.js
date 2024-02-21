const fs = require("fs")

function getFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function deleteFavoriteById(id) {
    const books = JSON.parse(fs.readFileSync("favorites.json"))

    const filteredBook = books.filter(book => book.id !== id)
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBook))
}

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const favorites = JSON.parse(fs.readFileSync("favorites.json"))

    const insertedBook = books.find( book => book.id === id)
    const newFavoritesBooksList = [...favorites, insertedBook]
    fs.writeFileSync("favorites.json", JSON.stringify(newFavoritesBooksList))
}

module.exports = {
    getFavorites,
    deleteFavoriteById,
    insertFavorite,
}