const request = require('supertest');
const mysql = require('mysql');
require('dotenv').config();

const connection = require('../lib/db');
const app = require('../index'); // Replace with the path to your application file

describe('Integration Test to Database', () => {

  beforeAll(() => {
    connection.connect();
  });

  afterAll(() => {
    connection.end();
  });

  it('should connect to database', () => {
    expect(connection).toBeDefined();
  });

});

describe('Unit Test /users', () => {
  it('should respond with /users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
});
  
describe('Unit Test /users/add', () => {
  it('should respond with /users/add', async () => {
    const response = await request(app).get('/users/add');
    expect(response.status).toBe(200);
  });
});
