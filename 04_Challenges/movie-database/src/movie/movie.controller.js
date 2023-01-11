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
    } 
    catch(error)
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
//         await movies.updateOne(
//             { _id: id }, 
//             { 
//                 $set: {
//                     title: req.query.title,
//                     year: req.query.year,
//                     rating: req.query.rating,
                    
//                 }
//             }
//         )
//         res,json({status: 200 , message:`${id} updated`})
//     } 
//     catch(error){
//         return res.json({ error: error.message })
//     }
// }

exports.updateMovie = async(req, res) => {
    
    const id = parseInt(req.params.id)
    
    try {
        
        const movie = movies.find((item) => 
        item.id === id);
        if(!movie) return res.status(404).json({status:404, error:true, message:`the movie ${id} does not exist`});

    

        movie.title= req.query.title;
        movie.year= req.query.year;
        movie.rating= req.query.rating;
        
     
        return res.status(200).json({status:200 , message: movies})
        
    } 
    catch(error){
        return res.json({ error: error.message })
    }
}




exports.deleteMovie = async(req, res) => {
    
    const n = req.params.id
    try {
        
        if (n <= movies.length)
    {
        movies.splice(n - 1, 1 )
        res.json({ status: 200 , message: movies})
    
    }
        
    

    else 
    {
    return res.status(404).json({status:404, error:true, message:`the movie ${n} does not exist`})
    }
    
    }
     catch(error){
        return res.json({ error: error.message })
    }
}

