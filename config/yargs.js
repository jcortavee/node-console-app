const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('list', 'Print in console the table', opts)
                .command('create', 'Create a file with base sents', opts)
                .help().argv;

module.exports = {
    argv
}