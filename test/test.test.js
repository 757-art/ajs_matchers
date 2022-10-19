import byField from '../src/sort';

test('compare', () => {
  const etalonCharacters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortCharacters = characters.sort(byField('health'));
  expect(sortCharacters).toEqual(etalonCharacters);
});
// const sortArr = characters.sort(byField('health'));
// const isEqual = JSON.stringify(sortArr) === JSON.stringify(characters);
// expect(isEqual).toBe(true)