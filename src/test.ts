let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b = []
for (const number of numbers) {
    if(number > 2 && number < 7){
        b.push(number)
    }
}
console.log(b);

let result = numbers.filter(num => num > 6)
console.log(result);
