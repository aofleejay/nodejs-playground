const cluster = require('cluster')
const express = require('express')
const app = express()

if (cluster.isMaster) {
  cluster.fork()
  cluster.fork()
} else {
  app.get('/', (req, res) => {
    res.json({ hello: 'world' })
  })

  app.listen(3000, () => {
    console.log('http://localhost:3000')
  })
}
