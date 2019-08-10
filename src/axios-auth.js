import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://agrobot.onrender.com'
})
instance.defaults.baseURL = 'https://lumen.lilycourt.ng'
export default instance