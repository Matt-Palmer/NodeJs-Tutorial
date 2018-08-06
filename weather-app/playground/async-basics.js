console.log('Starting App');

setTimeout(() => {
    console.log('Callback called')
}, 2000);

setTimeout(() => {
    console.log('No delay');
}, 0);

console.log('Finishing Up');
