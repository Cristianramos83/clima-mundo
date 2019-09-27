const axios = require('axios');


const getClima= async (lat,lon)=>{
    const encodeUrllat=encodeURI(lat);
    const encodeUrllon=encodeURI(lon);


    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeUrllat}&lon=${encodeUrllon}&appid=eb93ae488fd6c9d9e71b9a95b8a96a2a`)
   
    return resp.data.main.temp;

}
module.exports={
    getClima
}