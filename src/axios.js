import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cp-tinder-backend.herokuapp.com'
})

export default instance