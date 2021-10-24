const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');



// console.log(argv.l);


console.clear();


// console.log(process.argv);
// console.log(argv);

console.log('base: yargs', argv.base);
console.log('base: yargs', argv.b);


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// // console.log(arg3);

// console.log(base);




crearArchivo(argv.base, argv.hasta, argv.listar).then((fileName) => {
    console.log(fileName);
});