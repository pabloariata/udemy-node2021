const fs = require('fs');

require('colors');



const crearArchivo = async(base = 5, hasta, listar = false) => {
    // return new Promise((resolve, reject) => {

    try {
        console.log('arranco');
        let salida = '';




        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.red} ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log('===================='.blue);
            console.log(` Tabla del: ${base}`.rainbow);
            console.log('===================='.blue);
            console.log(salida.green);
        }



        const fileName = `tabladel${base}.txt`;

        console.log(`Tabla-${base}.txt creado`);

        fs.writeFileSync(`./salida/'${fileName}`, salida);

        // resolve(fileName);

        return fileName;

    } catch (error) {
        throw error;
    }


    // })

}


module.exports = {
    crearArchivo
}