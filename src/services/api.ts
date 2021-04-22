import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.6:3333'
});

export default api;

// Dentro da pasta da aplicação
// json-server ./src/services/server.json --host 192.168.15.6 --port 3333 --delay 700