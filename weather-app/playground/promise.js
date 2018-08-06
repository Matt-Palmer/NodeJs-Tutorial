let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(1, 2).then((res) => {
    console.log(res);
    return asyncAdd(res, 33)
}).then((res) => {
    console.log(res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// let somePromise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         // resolve('it worked');
//         reject('Failed');
//     }, 2500);
//
// });
//
// somePromise.then((message) => {
//     console.log(message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });
