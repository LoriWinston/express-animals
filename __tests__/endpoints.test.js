const { app } = require('../app.js')
const { animals } = require('../data.js');
const supertest = require('supertest')
const request = supertest(app)


it('gets the test endpoint', 
    async(done) => {
        const expectation = {
            results: animals
        }

  const response = await request.get('/animals');

  expect(response.status).toBe(200)
  expect(response.body).toEqual(expectation)
  done();
})
