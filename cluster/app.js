process.env.UV_THREADPOOL_SIZE = 1

const cluster = require('cluster')
const crypto = require('crypto')
const express = require('express')
const app = express()

if (cluster.isMaster) {
  cluster.fork()
  cluster.fork()
} else {
  app.get('/', (req, res) => {
    crypto.pbkdf2(
      'secret',
      'salt',
      1000000,
      512,
      'sha512',
      (err, derivedKey) => {
        res.json({ key: derivedKey })
      },
    )
  })

  app.listen(3000, () => {
    console.log('http://localhost:3000')
  })
}
