// const letterCounter =() =>{
//     const phrase = "hey, can you go to grocery store with me?"
//  for (const letter in phrase){
//     console.log(Number(letter)+1)

//  }
// }
// letterCounter()


const howManyLetters = (phrase) =>{
    let result=0;
    for(const index in phrase)
    {
        console.log(Number(index)+1)
        result = Number(index)+1
    }
    return {result: result}
}
const phrase = prompt("write your phrase")
 console.log(howManyLetters(phrase))