import axios from "axios";


const apiLocal = "https://localhost:7118/api/"


export const api = axios.create({
    baseURL:apiLocal
})

// api.interceptors.request.use((config ) =>{
//     const token =
// })