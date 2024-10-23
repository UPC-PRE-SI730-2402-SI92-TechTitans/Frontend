export class Contact {
  constructor(
    id = 0,
    name = '',
    email = '',
  ) {
    this.id = id !== null ? id : 0
    this.name = name
    this.email = email
  }
}
