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

  async login(email, password) {
    const response = await userHttp.get(`/users`);
    const user = response.data.find(u => u.email === email && u.password === password);
    if (user) {
      const token = btoa(`${user.email}:${user.id}`);
      localStorage.setItem('authToken', token);
      localStorage.setItem('userName', user.name);
      localStorage.setItem('userId', user.id);
      return { success: true, token, user };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  }
}