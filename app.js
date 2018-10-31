const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearTabla, listarabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarabla(argv.base, argv.limite)
            .then(data => {
                console.log(colors.green('==========================================================='));
                console.log(colors.green(`tabla de multiplicar del ${argv.base} hasta ${argv.limite}:`));
                console.log(colors.green('==========================================================='));
                console.log(`${data}`);
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}