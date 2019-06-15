const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

// sanity test
server.get('/', (req, res) => {
    res.status(200).json(`It's up and running!`);
})

module.exports = server;
