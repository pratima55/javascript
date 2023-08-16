// const letterCounter =() =>{
//     const phrase = "hey, can you go to grocery store with me?"
//  for (const letter in phrase){
//     console.log(Number(letter)+1)

//  }
// }
// letterCounter()


// const howManyLetters = (phrase) =>{
//     let result=0;
//     for(const index in phrase)
//     {
//         console.log(Number(index)+1)
//         result = Number(index)+1
//     }
//     return {result: result}
// }
// const phrase = prompt("write your phrase")
//  console.log(howManyLetters(phrase))

//using .length property to calculate length of string

// const howManyLetters = (phrase) => {
//     return { result: phrase.length }
// }
// const phrase = prompt("write your phrase")
// console.log(howManyLetters(phrase))


// sum numebr in array
// const sumArray = (numbers) => {
//     let result = 0;
//     for (const number of numbers) {
//         console.log(number)
//         result = result + number
//     }
//     return { result }
// }
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sumArray(nums))

//finding max number
// const max = (numbers) =>{
//     let result = numbers[0]
//     for(const number of numbers){
//         if(number>result){
//             result = number
//         }
//     }
//     return {result}
// }
// console.log(max([1,4,7,3,9,2,44,5,0,56,3,2]))

// calculate frequency
// const letterFrequency = (phrase) =>
// {let frequency = {}
// for (const letter of phrase){
//     //check if letter exists in frequency
//     if(letter in frequency ){
//         //increment the value by +1
//         frequency[letter] +=1
//     }
//     else {
//         //otherwise, set the value to 1
//         frequency[letter]=1
//     }
// }
//  return frequency  
// }
//  console.log(letterFrequency("haha"))

// word frequency
const wordFrequency = (phrase) => {
    let frequency = {}
    words = phrase.split(' ')
    for (const word of words) {
        console.log(word)
        if (word in frequency) {
            frequency[word] += 1
        }
        else {
            frequency[word] = 1
        }
    }
    console.log(words)
    return frequency
}
const userinput = prompt("write your phrase")
console.log(wordFrequency(userinput))