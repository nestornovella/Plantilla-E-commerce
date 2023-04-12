const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./src/routes/index')
const { connection } = require('./db')
const PORT = process.env.PORT || 3001

const server = express()
server.use(morgan('dev'))
server.use(cors())

server.use("/", router)


server.listen(PORT, connection.sync({force:true}).then(()=> console.info(`the port is listen in port ${PORT}, http://localhost:3001`)))