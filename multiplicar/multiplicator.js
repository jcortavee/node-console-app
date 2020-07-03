const fs = require('fs');
const colors = require('colors');

let writeFile = (base, limit) => {
    
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor no es un numero');
            return;
        }

        let content = "";
        let fileName = `table-${base}.txt`;

        for (let i = 1; i <= limit; i++) {
            content += `${base} x ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(content));


        fs.writeFile(`tablas/${fileName}`, data, (err) => {
        if (err) 
            reject(err);
        else
            resolve(fileName);

    });

    });

}

let listTable = (base, limit) => {
    for (let i = 1; i <= limit; i++) {
        console.log(colors.cyan(`${base} x ${i} = ${base * i}`));
    }
}

module.exports = {
    writeFile,
    listTable
}