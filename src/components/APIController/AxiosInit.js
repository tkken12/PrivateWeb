import axios from "axios";
import { axiosConf } from "common/Const";

const APIInstance = axios.create( {
    baseURL: process.env.REACT_BASE_URL,
    timeout: axiosConf["timeOut"]
})

export {
            APIInstance
}