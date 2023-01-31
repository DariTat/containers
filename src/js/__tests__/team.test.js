import Team from '../team';

test('add player in Team', () => {
  const player = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
  };
  const team = new Team();
  const received = team.add(player);
  const expected = new Set();
  expect(received).toEqual(expected.add(player));
});
test('error method add', () => {
  expect(() => {
    const team = new Team();
    const player = {
      name: 'Hero',
      type: 'Undead',
      health: 100,
      level: 1,
    };
    team.add(player);
    team.add(player);
  }).toThrowError('Персонаж есть в команде');
});
test('addAll test', () => {
  const team = new Team();
  const player1 = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
  };
  const player2 = {
    name: 'Nik',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  const received = team.addAll(player1, player2);
  const expected = new Set();
  expected.add(player1);
  expected.add(player2);
  expect(received).toEqual(expected);
});
test('addAll do not add equal players', () => {
  const team = new Team();
  const player1 = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
  };
  const player2 = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
  };
  const received = team.addAll(player1, player2);
  const expected = new Set();
  expected.add(player1);
  expect(received).toEqual(expected);
});
test('test toArray', () => {
  const team = new Team();
  const player = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1, 
  };
  team.add(player);
  const received = team.toArray();
  const expected = [{
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
  }];
  expect(received).toEqual(expected);
});
