const fs = require('fs');

let listarabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida (${base}) no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido (${base}) no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
};

let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida (${base}) no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido (${base}) no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

module.exports = {
    crearTabla: crearTabla,
    listarabla: listarabla
};