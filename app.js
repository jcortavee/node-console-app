// Requires
const { argv } = require('./config/yargs');
const { writeFile, listTable } = require('./multiplicar/multiplicator');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limite);
        break;

    case 'create':
        writeFile(argv.base, argv.limite)
            .then((fileName) => console.log(fileName))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
