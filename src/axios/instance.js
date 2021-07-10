import axios from 'axios';

const apiurl = `https://api.ravenabot.com`

const rvnAPI = axios.create({
    baseURL: `${apiurl}`
})

rvnAPI.defaults.withCredentials = true

export default rvnAPI
