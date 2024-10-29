import http from '@/contexts/shared/services/http-common.js';

export class GroupApiService {
  async getAll() {
    return await http.get('/groups');
  }

  async get(id) {
    return await http.get(`/groups/${id}`);
  }

  async save(body) {
    return await http.post('/groups', body);
  }

  async update(id, body) {
    return await http.put(`/groups/${id}`, body);
  }

  async delete(id) {
    return await http.delete(`/groups/${id}`);
  }
}

export class ContactApiService {
  async getAll() {
    return await http.get('/contacts');
  }
}
