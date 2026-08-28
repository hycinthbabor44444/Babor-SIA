// Package imports
const express = require('express')

// Server setup
const server = express()
const PORT = 1007
const HOSTNAME = '0.0.0.0'
server.listen(1007, () => {
    console.log(`Server is running: ${HOSTNAME}:${PORT}`)
})

    