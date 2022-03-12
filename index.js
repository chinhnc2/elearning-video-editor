const express = require('express')

const app = express()
const port = 3000

const { db } = require('./config/fb')

const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});


app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})