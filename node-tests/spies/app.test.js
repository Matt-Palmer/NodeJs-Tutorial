const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {

    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy();

        spy('Matt', 30);

        expect(spy).toHaveBeenCalledWith('Matt', 30);
    });

    it('Should call save user', () => {
        let email = 'test@email.com';
        let password = '123';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({
            email: email,
            password: password
        });
    });
});
