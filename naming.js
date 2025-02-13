function getSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

let mostValuableClientsSpends = [10000, 20000, 30000];
console.log(getSum(mostValuableClientsSpends));
