class Service {
    constructor(){}
    getData = async () =>{
        const apiRequest = await fetch(`${DATABASE_URL}`);
        const dataReponse = await apiRequest.json();
        return dataReponse;
    }
}

const test = new Service()
console.log(test.getData())