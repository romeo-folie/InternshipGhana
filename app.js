require('./config/config');
require('./db/dataStore');
const express = require('express')
const {
  mongoose
} = require('./db/mongoose');
const {
  Offer
} = require('./models/offers');


const port = process.env.PORT
const app = express()
app.set('view engine', 'hbs')
app.use(express.static('public'))


app.get('/', async(req, res) => {
  //fetch data from database and pass it to the view
  try {
    var data = await Offer.find({})
    res.render('index', {
      offers: data,
      title: "Home"
    })
    // res.send({data})
  } catch (e) {
    console.log(e)
  }
})

app.listen(port, () => console.log(`Server up and running on port ${port}`))
