const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eb93ae488fd6c9d9e71b9a95b8a96a2a&units=metric`)

    return resp.data.main.temp;

}
module.exports = {
    getClima
}