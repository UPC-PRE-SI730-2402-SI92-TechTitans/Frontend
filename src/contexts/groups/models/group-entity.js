export class Group {
  constructor(id = 0, name = '', creationDate = '', participants = {}) {
    this.id = id !== null ? id : 0
    this.name = name
    this.creationDate = creationDate
    this.participants = participants
  }
}
