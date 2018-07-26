require('./config/config');
const express = require('express')
const {fetcher} = require('./fetchers/tapwageFetcher');
const port = process.env.PORT;

const app = express()
app.set('view engine', 'hbs')
app.use(express.static('public'))

//fetch data from tapwage
//this is for function with async tag
//since fetcher is an async function, see if using await here will work
var results = fetcher()
results
.then(dt => console.log(dt))
.catch(e => console.log(e))

app.get('/', (req, res) => {
  res.render('index.hbs',{title: "Home" })
})

app.listen(port, () => console.log(`Server up and running on port ${port}`))
