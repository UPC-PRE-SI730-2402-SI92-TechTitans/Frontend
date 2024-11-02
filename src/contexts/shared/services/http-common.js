import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const USER_API_BASE_URL = import.meta.env.VITE_USER_API_BASE_URL

const http = axios.create({
  baseURL: API_BASE_URL
})

const userHttp = axios.create({
  baseURL: USER_API_BASE_URL
})

http.defaults.headers.common['Content-type'] = 'application/json'
userHttp.defaults.headers.common['Content-type'] = 'application/json'

export { http, userHttp }
