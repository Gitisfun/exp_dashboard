import axios from "axios";

const httpClient = axios.create({
    // TODO: baseURL: "https://comagex-api.herokuapp.com/api/",
    baseURL: "http://localhost:5000/api/", 
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    }
});

httpClient.defaults.headers.common['authorization'] = `Bearer ${JSON.parse(localStorage.getItem("authtokenws"))}`

export default httpClient;