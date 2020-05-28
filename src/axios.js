import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export default instance;