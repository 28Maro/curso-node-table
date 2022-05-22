const colors = require('colors')
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += (`${i} x ${base} = ${i*base} \n`);
        }
        if (listar) {
            console.log(colors.rainbow(salida));   
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}
