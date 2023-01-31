export default class Team {
  constructor() {
    this.members = new Set();
  }
  
  add(character) {
    if (this.members.has(character) === true) {
      throw new Error('Персонаж есть в команде');
    }
    this.members.add(character);
    return this.members;
  }

  addAll(...character) {
    let player = { };
    character.forEach((item) => {
      if (item.name === player.name && item.type === player.type) {
        return false;
      }
      this.members.add(item);
      player = item;
    });
    return this.members;
  }

  toArray() {
    const array = [];
    this.members.forEach((item) => array.push(item));
    return array;
  }
}
