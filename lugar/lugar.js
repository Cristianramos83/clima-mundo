const axios = require('axios');


const getLugarLatLng= async (dir)=>{
    const encodeUrl=encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': '512f30e841mshebdfc9c4b32fc60p1190a8jsn7609a15622d9'}
    });

    const resp=await instance.get();
    
    if(resp.data.Results.lenght===0)
    {
        throw new Error(`No hay resultados para ${dir}`);
    }
    

    const  data =resp.data.Results[0];
    const {name:direccion,lat,lon:lng}=data;
   /* 
    const direccion=data.name;
    const lat=data.lat;
    const lng=data.lon;  */

    return {
        direccion,
        lat,
        lng
    }

}
module.exports={
    getLugarLatLng
}