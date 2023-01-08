const express = require('express') //import
const app = express() //initialize
const port = 2297;
const database = require('./src/config/database.config')
// database()
app.use(express.json()) // to make the rquest body readable (jason file)

app.get('/test', (req, res) => { return res.status(200).json({ message: "ok" }) })
app.get('/time', (req,res) => { return res.status(200).json({ message: new Date()}) })

app.get('/hello/:id',(req, res) => {
    return res.status(200).json({ message: `Hello ${req.params.id}`})
  });

  app.get('/search',(req, res) => {
    if(!req.query.s)
        return res.status(500).json({ error: true , message:`you have to provide a search`})
        
    return res.status(200).json({ message: `Ok data: ${req.query.s}`})
  });



app.use('/movies', require('./src/movie/movie.route'))
app.use('*', (req, res) => { res.send('API doesnot exist , go away!') })

// function listening on this port 
app.listen(port, () => { console.log(`OK ${port}`) })


