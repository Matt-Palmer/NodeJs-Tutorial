module.exports.add = (a, b) => {
    return a + b;
}

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

module.exports.squared = (x) => {
    return x * x;
}

module.exports.asyncSquared = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1000);
}

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');

    user.firstName = names[0];
    user.lastName = names[1];

    return user;
}
