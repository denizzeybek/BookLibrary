import axios from "axios"; 

const instance = axios.create({
    baseURL: "http://localhost:3000", // TODO: read from ENV
    headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
    },
});

export default instance;
