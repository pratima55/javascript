//higher order function
//1.map= loops and return an array
//2.filter = loops and return an array with matching condition
//3.reduce

//map
// let result = [1, 2, 3, 4].map(number => (number))
// console.log(result)

//doubling number
// const doubleMap = (number) => {
//     return number.map(number => number * 2)
// }
// console.log(doubleMap([1, 2, 3]))

//filter {([1,2,3,4,5,6],3)} =>[4,5,6]
const filter = (numbers, greaterThan) => {
    let result = []
    for (number of numbers) {
        if (number > greaterThan) {
            result.push(number)
        }
    }
    return result
}
//console.log(filter([1,2,3,4,5,6],3))
//taking imput from user
// const nums = prompt("give some number")
// console.log(filter(nums, 3))

// const num = [1, 2, 3, 4, 5, 6, 7]
// console.log(num.filter(num => num > 3))

//or
// const num = [1, 2, 3, 4, 5, 6, 7]
//  console.log(num.filter(num => num > 3 || num< 2))

//and
//  const num = [1, 2, 3, 4, 5, 6, 7]
//  console.log(num.filter(num => num > 3 && num<5))

// const actor = [
//     { name: "serkan", networth: 200000 },
//     { name: "Eda", networth: 10000000 },
//     { name: "celin", networth: 10 }
// ]
// const result = actor.filter(actor => actor.networth > 10)
// console.log(result)
// //console.log(actor.filter(actor => actor.networth>10)) 
// let names = result.map(actor => actor.name).join(",")
// playgroung.innerHTML = <h1>${name}</h1>

//reduce()
//sum all of the net worth
// reduce is use for suming
// reducfe takes in a function as an argument
//reduce loops and gives you back the accumulator

//example
const nums = [1, 2, 3]
nums.reduce(function (prev, nex) {
    console.log(nex)
})