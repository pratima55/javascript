//  //person1
//  const person1 = {
//     name: "pratima",
//     age: 23,
//     number: 1234567890,
//     color: "pink",
//     haircolor: "black",

// }
// person1.height= "5ft"
// person1["nationality"]= " Nepali"
// console.log(person1["name"])
// console.log(person1.age)
// console.log(person1.number)
// console.log(person1)

// //person2
// const person2 = {
//     name: "aayesha",
//     age: 23,
//     number: 222222222,
//     color: "blue",
//     haircolor: "black",

// }
// console.log(person2["name"])
// console.log(person2.age)
// console.log(person2.number)

//object using function
// const introducer = (name ,shirt) =>{
//     const person ={
//         name: name,
//         shirt: shirt,
//         assets:1000000,
//         liability:50000
//     }
//     const intro= `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.assets-person.liability}`
//     return intro
// }
// console.log(introducer("Pratima","white"))


// const introducer = (name ,shirt) =>{
//     const person ={
//         name: name,
//         shirt: shirt,
//         assets:1000000,
//         liability:50000,
//         networth: function(){
//             return this.assets-this.liability
//         }
//     }
//     const intro= `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.networth()}USD`
//     return intro
// }
// console.log(introducer("Pratima","white"))

const person = {
    firstname: "Pratima",
    lastname: "Dhakal",
    id: 1234,
    fullname: function () {
        return this.firstname + " " + this.lastname
    }

}
console.log(`Hi, my name is ${person.fullname()} and my id is ${person.id}`)