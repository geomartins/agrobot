import axios from 'axios';

axios.defaults.baseURL = 'https://agrobot.onrender.com'
const instance = axios.create({
    baseURL: 'https://agrobot.onrender.com'
})
instance.defaults.baseURL = 'https://agrobot.onrender.com'
export default instance