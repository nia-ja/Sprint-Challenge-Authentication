const axios = require('axios');
const bcrypt = require('bcryptjs');

const { addUser, getUserByFilter } = require('../helpers');
const { authenticate, generateToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};


function register(req, res) {
  let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    addUser(user)
      .then(saved => {
          const token = generateToken(saved);
          res.status(200).json({
          message: `Welcome ${saved.username}!, have a token...`,
          token });
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
    });
}

function login(req, res) {
  let { username, password } = req.body;

  getUserByFilter({ username })
      .first()
      .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token });
      } else {
          res.status(401).json({ message: 'Invalid Credentials' });
      }
      })
      .catch(error => {
      res.status(500).json(error);
      });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}