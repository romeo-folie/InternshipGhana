const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.hbs',{title: "Home"})
})

app.listen(port, () => console.log(`Server up and running on port ${port}`))
