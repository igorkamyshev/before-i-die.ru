import axios from 'axios'

const API_BASE = 'https://api.before-i-die.ru'

export const getFeatured = () => axios
    .get(`${API_BASE}/featured`)
    .then(res => res.data)

export const publishPost = message => axios
    .post(`${API_BASE}/new`, { message })
    .then(() => true)
