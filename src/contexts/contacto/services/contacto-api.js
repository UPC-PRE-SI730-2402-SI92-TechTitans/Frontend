import http from '@/contexts/shared/services/http-common.js'

export class ContactoApiService {
  async getAll() {
    return await http.get('/contactos')
  }
  async get(id) {
    return await http.get(`/contactos/${id}`)
  }
  async save(body) {
    return await http.post('/contactos', body)
  }
  async update(id, body) {
    return await http.put(`/contactos/${id}`, body)
  }
  async delete(id) {
    return await http.delete(`/contactos/${id}`)
  }
}