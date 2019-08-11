import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://agrobot.onrender.com'
});
instance.defaults.baseURL = 'https://lumen.lilycourt.ng'
console.log(instance.defaults.url);
export default instance