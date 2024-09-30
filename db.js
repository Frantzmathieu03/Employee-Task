const { Client } = require('pg');

const client = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'employee-management',
//   password: 'Admin',
  port: 5432,
});

client.connect();

module.exports = client;
