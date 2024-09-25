export class Payment {
  constructor(
    id = 0,
    groupName = '',
    participants = [],
    amount = 0,
    date = new Date(),
    description = ''
  ) {
    this.id = id !== null ? id : 0;
    this.groupName = groupName;
    this.participants = participants;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }

  addParticipant(participant) {
    if (!this.participants.includes(participant)) {
      this.participants.push(participant);
    }
  }

  getParticipants() {
    return this.participants.join(', ');
  }
}
