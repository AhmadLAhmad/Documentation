const mongoose = require('mongoose')

const database = async(req, res) => {
    try {
        console.log("here")
        await mongoose.connect('mongodb+srv://ahmad:monacool123@cluster0.knujx0o.mongodb.net/?retryWrites=true&w=majority')
            // .then('connected to database')
        } catch(error) {
            console.log('error', error)
        }
    }

    module.exports = database