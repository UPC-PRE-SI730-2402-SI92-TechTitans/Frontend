export class User {
  constructor(id = 0, name = '', lastname = '', email = '', password = '') {
    this.id = id !== null ? id : 0
    this.name = name
    this.lastname = lastname
    this.email = email
    this.password = password
  }
}
