import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '36ef323f998443f18993927fb5c208cb'
    }
})