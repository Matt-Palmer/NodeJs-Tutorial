let square = (x) => x * x;

console.log(square(9));


let user = {
    name: 'Matt',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);

// arrow functions do not work with the 'this' or 'argumants' keywords
