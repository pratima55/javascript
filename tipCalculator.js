function sum(a, b) {
    return a + b
}

function calculateFoodTotal(food, tip) {
    tipPercentage = tip / 100
    tipAmount = food * tipPercentage
    total = sum(food, tipAmount)
    return total
}
console.log(calculateFoodTotal(200, 20))