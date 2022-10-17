const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];
export function byField(characters) {
    return (a, b) => a[characters] < b[characters] ? 1 : -1;
}

characters.sort(byField('health'));
