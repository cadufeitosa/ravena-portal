import axios from 'axios';

const apiurl = "https://ravena-api.herokuapp.com"

const rvnAPI = axios.create({
    baseURL: `${apiurl}`
})

rvnAPI.defaults.withCredentials = true

export default rvnAPI
