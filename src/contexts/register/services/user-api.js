import { userHttp } from '@/contexts/shared/services/http-common.js';

export class UserApiService {
  async get(id) {
    return await userHttp.get(`/users/${id}`);
  }

  async save(body) {
    return await userHttp.post('/users', body);
  }

  async update(id, body) {
    return await userHttp.put(`/users/${id}`, body);
  }
}