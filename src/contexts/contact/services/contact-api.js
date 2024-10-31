import http from '@/contexts/shared/services/http-common.js'

export class ContactApiService {
  async getAll() {
    return await http.get('/contacts')
  }
  async get(id) {
    return await http.get(`/contacts/${id}`)
  }
  async save(body) {
    return await http.post('/contacts', body)
  }
  async update(id, body) {
    return await http.put(`/contacts/${id}`, body)
  }
  async delete(id) {
    return await http.delete(`/contacts/${id}`)
  }
}
