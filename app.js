const express = require("express")
const bookRoute = require("./routes/book")
const favoriteRoute = require("./routes/favorite")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/books', bookRoute)
app.use('/favorites', favoriteRoute )

const port = 8000

app.listen(port, () => {
    console.log(`Listening the port ${port}`)
})