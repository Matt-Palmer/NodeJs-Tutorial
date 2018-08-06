let axios = require('axios');
let yargs = require('yargs');

let idOptions = {
    describe: 'ID of the post',
    demand: true
}

let argv = yargs
            .command('get-posts', 'Returns a list of posts.')
            .command('get-post', 'Returns a single post', {
                id: idOptions
            })
            .command('get-comments', 'Returns a list of all comments')
            .command('get-post-comments', 'Returns comments for specified post', {
                id: idOptions
            })
            .help()
            .argv;

let url = 'https://jsonplaceholder.typicode.com/'
let command = argv._[0];

let fetchData = (url) => {
    axios.get(url).then((response) => {
        if (response.data.length === 0) {
            console.log('Your search returned no results.');
        } else {
            console.log(response.data);
        }
    }).catch((e) => {
        if (e.response.status === 400) {
            console.log('The URL entered has not been recognised');
        }
    });
}

if (command === 'get-post') {
    fetchData(`${url}posts/${argv.id}`);
} else if (command === 'get-posts') {
    fetchData(`${url}posts`);
} else if (command === 'get-comments') {
    fetchData(`${url}comments`);
} else if (command === 'get-post-comments') {
    fetchData(`${url}posts/${argv.id}/comments`);
}
