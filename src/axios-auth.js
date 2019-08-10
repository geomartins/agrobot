import axios from 'axios';

axios.defaults.baseURL = 'http://agrobot.onrender.com'
const instance = axios.create({
    baseURL: 'https://lumen.lilycourt.ng'
})
instance.defaults.baseURL = 'https://lumen.lilycourt.ng'
export default instance