const db = require('../database/dbConfig');

module.exports = {
  addUser,
  getUsers,
  getUserByFilter,
  getUserById,
};

function getUsers() {
  return db('users');
}

function getUserById(id) {
    return db('users')
      .where({ id })
      .first();
}

function getUserByFilter(filter) {
  return db('users').where(filter);
}

async function addUser(user) {
  const [id] = await db('users').insert(user);

  return getUserById(id);
}