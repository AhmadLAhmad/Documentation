const movies = require('./movies')

exports.createMovie = async(req, res) => {
    if(!req.query.title) return res.status(200).json({ status:403, error:true, message:'you cannot create a movie without providing a title' })
    if(!req.query.year) return res.status(200).json({ status:403, error:true, message:'you cannot create a movie without providing a year' })


    try {
        const data = {
            title: req.query.title,
            year: req.query.year,
            rating: req.query.rating || 4,
            id: ++movies.length
        }
        console.log(data)
        movies.push(data)
        return res.status(200).json({ success: true })

    } catch(error){
        return res.json({ error: error.message })
    }
}


exports.getMovie = async(req, res) => {
    const id = req.params.id
    try {
        const movie = movies.find(function(item){
            return item.id == id
        })
        if(!movie) return res.status(404).json({status:404, error:true, message:`the movie ${id} does not exist`})
        return res.status(200).send(movie)
    } catch(error){
        return res.json({ error: error.message })
    }
}


exports.listMovies = async(req, res) => {
    try {
        return res.status(200).send(movies)
    } catch(error)
    {
        return res.json({ error: error.message })
    }
}

exports.listMoviesByDate = async(req, res) => {
    try {
        movies.sort(function(a,b) {return b.year - a.year});
        return res.status(200).json({status:200 , data: movies})
    } catch(error)
    {
        return res.json({ error: error.message })
    }
}
exports.listMoviesByRating= async(req, res) => {
    try {
        movies.sort(function(a,b) {return b.year - a.year});
        return res.status(200).json({status:200 , data: movies})
    } catch(error)
    {
        return res.json({ error: error.message })
    }
}
exports.listMoviesByTitle = async(req, res) => {
    try {
        movies.sort(function(a,b) {return b.year - a.year});
        return res.status(200).json({status:200 , data: movies})
    } catch(error)
    {
        return res.json({ error: error.message })
    }
}
// exports.updateMovie = async(req, res) => {
//     const id = req.params.id
//     try {
//         await model.updateOne(
//             { _id: id }, 
//             { 
//                 $set: {
//                     title: req.body.title,
//                     description: req.body.description,
//                     updatedDate: Date.now()
//                 }
//             }
//         )
//     } catch(error){
//         return res.json({ error: error.message })
//     }
// }

// exports.deleteMovie = async(req, res) => {
//     const id = req.params.id
//     try {
//         await model.deleteOne({ _id: id })
//         return res.status(200).json({ success: true })
//     } catch(error){
//         return res.json({ error: error.message })
//     }
// }