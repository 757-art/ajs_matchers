import  { byField } from '../src/sort.js';
test.each ([
    {a: 100, expected: 100},
    {a: 80, expected: 80},
    {a: 10, expected: 10}
])('', ({a, expected}) => {
    expect(a).toEqual(expected);
});