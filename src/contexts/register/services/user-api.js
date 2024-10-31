import http from '@/contexts/shared/services/http-common.js'

export class UserApiService {
  async get(id) {
    return await http.get(`/users/${id}`)
  }

  async save(body) {
    return await http.post('/users', body)
  }

  async update(id, body) {
    return await http.put(`/users/${id}`, body)
  }
}
