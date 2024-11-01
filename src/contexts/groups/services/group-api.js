import { http } from '@/contexts/shared/services/http-common.js'

export class GroupApiService {
  async getAll() {
    const userId = localStorage.getItem('userId')
    const response = await http.get('/groups')
    return { data: response.data.filter((group) => group.userId === userId) }
  }

  async get(id) {
    return await http.get(`/groups/${id}`)
  }

  async save(body) {
    const userId = localStorage.getItem('userId')
    return await http.post('/groups', { ...body, userId })
  }

  async update(id, body) {
    return await http.put(`/groups/${id}`, body)
  }

  async delete(id) {
    return await http.delete(`/groups/${id}`)
  }
}

export class ContactApiService {
  async getAll() {
    return await http.get('/contacts')
  }
}
