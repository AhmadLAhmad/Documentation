// const mongoose = require('mongoose')
// const { stringify } = require('querystring')

// const MovieSchema = mongoose.Schema({
//     id:{
//         type:Number
//     },

// title:{
//             type:String,
//             required:true

//         },

//         year:{
//             type:Number,
//             required:true

//         },
//         rating:{
//             type:Number,

//         },

// })



const movies = [
    { id: 1, title: 'Jaws', year: 1975, rating: 8 },
    { id: 2, title: 'Avatar', year: 2009, rating: 7.8 },
    { id: 3, title: 'Brazil', year: 1985, rating: 8 },
    { id: 4, title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

module.exports = movies //bt5lya tbyen bara l file
// module.exports = mongoose.model(`movies`, MovieSchema);