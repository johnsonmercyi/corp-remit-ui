import axios from 'axios';

const server = {
    // url: "http://localhost:8080",
    url: "https://coore.herokuapp.com",
    api_base_path: "/api/coore/v1"
}

const controllerPath = {
    userLogin: "/user_login",
    login: "/login",
    signup: "/signup",
    users: "/users"
}

const instance = axios.create({
    baseURL: server.url + server.api_base_path,
    timeout: 3600000,
    withCredentials: true,
    responseType: 'json',
    headers:{
        // "Authorization": "AUTH_TOKEN",
        'Content-Type': "application/json",
        "Accept":"application/json"
    }
});


export default instance;
export {
    server,
    controllerPath
}