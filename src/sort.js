const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
export default function byField(field) {
  return (a, b) => (a[field] < b[field] ? 1 : -1);
}
characters.sort(byField('health'));