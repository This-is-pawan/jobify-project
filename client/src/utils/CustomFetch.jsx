import axios from "axios";

const customFetch=axios.create({
 baseURL:'/api/test'
})

export default customFetch