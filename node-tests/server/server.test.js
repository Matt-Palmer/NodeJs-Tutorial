const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('Server', () => {

    describe('GET /', () => {
        it('Should return Hello World', (done) => {
            request(app)
                .get('/')
                .expect(400)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Bad Request'
                    })
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('Should return a list of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Matt',
                        age: 30
                    });
                })
                .end(done);
        });
    });

});
