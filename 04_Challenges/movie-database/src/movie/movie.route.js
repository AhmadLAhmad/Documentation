const express = require('express')
const router = express.Router()

const controller = require('./movie.controller')

router.get('/read', controller.listMovies) //get all movie
router.get('/read/by-date', controller.listMoviesByDate) //get all movie
router.get('/read/by-rating', controller.listMoviesByRating) //get all movie
router.get('/read/by-title', controller.listMoviesByTitle) //get all movie
router.get('/get/id/:id', controller.getMovie) // get specific movie
// router.post('/add', controller.createMovie) // create a movie
// router.put('/edit', controller.updateMovie) // update a specific movie
router.delete('/delete/:id', controller.deleteMovie) //delete a specific movie

module.exports = router
