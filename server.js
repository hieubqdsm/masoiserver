const { Socket } = require('engine.io')
const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port)
const io = require('socket.io')(server)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

io.on('connection', (socket) => {
  console.log('a user connected');
});