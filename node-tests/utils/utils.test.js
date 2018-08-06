const utils = require('./utils.js');
const expect = require('expect');

describe('utils', () => {

    describe('#add', () => {
        it('should add 2 numbers', () => {
            let result = utils.add(2, 5);

            expect(result).toBe(7).toBeA('number');
        });

        it('Should add 2 numbers', (done) => {
            utils.asyncAdd(2, 3, (value) => {
                expect(value).toBe(5).toBeA('number');
                done();
            });
        })
    });

    describe('#squared', () => {
        it('Should return the value squared', () => {
            let result = utils.squared(5);

            expect(result).toBe(25).toBeA('number');
        });

        it('Should return the value squared', (done) => {
            utils.asyncSquared(3, (value) => {
                expect(value).toBe(9).toBeA('number');
                done();
            });
        })
    });

});

it('Should equal', () => {
    // expect(12).toNotBe(13);
    // expect({name: 'Matt'}).toEqual({name: 'Matt'});
    // expect([2, 3, 4]).toExclude(5);
    expect({
        name: 'Matt',
        age: 30,
        location: 'Luton'
    }).toInclude({
        age: 30
    })
});

it('Should verify first and last names are set', () => {
    let result = utils.setName({}, 'Matt Palmer');

    expect(result).toInclude({
        firstName: 'Matt',
        lastName: 'Palmer'
    });
})
