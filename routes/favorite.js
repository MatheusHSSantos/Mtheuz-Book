const { Router } = require("express")
const { getFavorite, postFavorite, deleteFavorite } = require("../controlers/favorite")

const router = Router()

router.get('/', getFavorite)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router
