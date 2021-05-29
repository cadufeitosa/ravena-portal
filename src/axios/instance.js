import axios from 'axios';

const apiurl = "http://localhost:5000"

const rvnAPI = axios.create({
    baseURL: `${apiurl}`
})

rvnAPI.defaults.withCredentials = true

export default rvnAPI
