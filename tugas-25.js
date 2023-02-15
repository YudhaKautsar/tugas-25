const numbers = [ 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];

console.log(`Sebelumnya : ${numbers}`);
console.log(`Ascending ${numbers.sort()}`);
console.log(`Descending : ${numbers.reverse()}`);
console.log(`Filter > 10 : ${numbers.filter( number => {
    return number > 10;
})}`);