import {DATABASE_URL} from "../constants/urls.js"
class Service {
    constructor(){}
    getData = async () =>{
        const apiRequest = await fetch(`${DATABASE_URL}`);
        const dataReponse = await apiRequest.json();
        return dataReponse;
    }
}

export default Service