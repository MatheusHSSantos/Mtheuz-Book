const { getAllBooks, getBooksById, insertBook, modifyBook, deleteBookById } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const book = getBooksById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body
        if (req.body.nome) {
            insertBook(newBook)
            res.status(201)
            res.send("Book inserted successfully")
        } else{
            res.status(422)
            res.send("The name of the book is mandatory!")
        }
    } catch (error) {
        res.status(422)
        res.send("The name of the book is mandatory!")
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body

            modifyBook(body, id)
            res.send("The book has been modified sucessfully!")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteBookById(id)
            res.send("The book has been deleted sucessfully!")
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
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}