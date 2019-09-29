const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;
//console.log(argv.direccion);

lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

/* clima.getClima(40.750000,-74,000000)
.then(console.log)
.catch(console.log) */

const getInfo = async(direccion) => {

    try {
        const dir = await lugar.getLugarLatLng(direccion);
        const cli = await clima.getClima(dir.lat, dir.lng);
        return `El clima para la cuidad ${direccion} es de ${cli}`;

    } catch (error) {
        return `No hay clima para la cuidad ${direccion}+ ${error}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)