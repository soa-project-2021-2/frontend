import axios from "axios";
import UseUserStore from "../../stories/userStore";

const api = axios.create({
    baseURL: 'http://localhost:3200/'
})

// const { token } = UseUserStore();

// if (token) {
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

export default api;