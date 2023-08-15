// const fruit =['apple','mango','banana','pear']
// console.log(fruit[0])
// console.log(fruit[1])
// console.log(fruit[2])
// console.log(fruit[3])

// const fruit =['apple','mango','banana','pear']
// for(i=0 ; i<fruit.length; i++)
// console.log(i,fruit[i])

//example 1
// const fruit = ['apple', 'mango', 'banana', 'pear']
// for (const fruits of fruit) {
//     console.log(fruits)
// }

//example2
// const numbers = [1, 2, 3, 4, 5, 6]
// for (const numeber of numbers) {
//     console.log(numeber)
// }

// example3
// const numbers = [1, 2, 3, 4, 5, 6]
// let result = []
// for (const number of numbers) {
//     result.push(number * 2)
// }
// console.log(result)

// function
const double = (numbers) => {
    let result = []
    for (const number of numbers) {
        result.push(number ** 2) // **for squaring number 
    }
    return result
}
console.log(double([1, 2, 3, 4, 5, 6]))