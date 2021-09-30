import axios from "axios";

const instance = axios.create({
    baseURL : 'http://192.168.110.129/'
})


export default {
    instance
}