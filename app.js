require('./config/config');
const express = require('express')
var {
  mongoose
} = require('./db/mongoose');
const {
  tapwageFetcher
} = require('./fetchers/tapwageFetcher');
const {
  jobListFetcher
} = require('./fetchers/jobListFetcher');
const port = process.env.PORT

const app = express()
app.set('view engine', 'hbs')
app.use(express.static('public'))


const displayFetchedData = async() => {
  try {
    const tapwageData = await tapwageFetcher()
    const joblistData = await jobListFetcher()
    console.log("Tap Wage", tapwageData)
    console.log("Job List", joblistData)
  } catch (e) {
    console.log(e)
  }
}
displayFetchedData();


app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: "Home"
  })
})

app.listen(port, () => console.log(`Server up and running on port ${port}`))
