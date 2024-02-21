const fs = require("fs")

function getAllBooks() {
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBooksById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBook = books.filter( book => book.id === id )[0]
    return filteredBook
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    
    const newBooksList = [...books, newBook ]

    fs.writeFileSync("books.json", JSON.stringify(newBooksList))
}

function modifyBook(modification, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))
    const modifiedIndex = currentBooks.findIndex(book => book.id === id)

    const changedContent =  { ...currentBooks[modifiedIndex], ...modification }

    currentBooks[modifiedIndex] = changedContent

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

function deleteBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBooks = books.filter( book => book.id !== id )
    fs.writeFileSync("books.json", JSON.stringify(filteredBooks))
}

module.exports = {
    getAllBooks,
    getBooksById,
    insertBook,
    modifyBook,
    deleteBookById
}