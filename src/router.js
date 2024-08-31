const express = require('express')
const helmet = require('helmet');
const cors = require('cors')
const app = express()
const port = 3000

app.use(helmet());
app.use(cors())

app.get('/', (req, res) => {
  res.json({ test: 123 })
})

app.post('/register', (req, res) => {
  /**
   * insert into postgres
   */
});

app.post('/login', (req, res) => {
  /**
   * select from postgres
   */
});

app.get('/cats', (req, res) => {
  /**
   * get from mongodb
   */
});

module.exports.start = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}