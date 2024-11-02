import { http } from '@/contexts/shared/services/http-common.js'

export class ContactApiService {
  async getAll() {
    const userId = localStorage.getItem('userId')
    const response = await http.get('/contacts')
    return { data: response.data.filter((contact) => contact.userId === userId) }
  }

  async get(id) {
    return await http.get(`/contacts/${id}`)
  }

  async save(body) {
    const userId = localStorage.getItem('userId')
    return await http.post('/contacts', { ...body, userId })
  }

  async update(id, body) {
    const userId = localStorage.getItem('userId')
    return await http.put(`/contacts/${id}`, { ...body, userId })
  }

  async delete(id) {
    return await http.delete(`/contacts/${id}`)
  }
}
