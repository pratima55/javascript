// console.log('hello')
// let title = document.getElementById('title')
// console.log("before:", title.innerText)
// let message = "HAVE A NICE DAY"
// title.innerText = message;
// console.log("after:", title.innerText)

// title.innerHTML = " <p> HELLO MY LOVE</p>"
// title.innerHTML = message


// title.style.color = "red"
// title.style.backgroundColor = "grey"

//*******red|yellow|green| */
//show color on click
// let redDiv = document.getElementById("red")
// let yellowDiv = document.getElementById("yellow")
// let greenDiv = document.getElementById("green")
// redDiv.onclick = () => console.log("red")
// yellowDiv.onclick = () => console.log("yellow")
// greenDiv.onclick = () => console.log("green")


let redDiv = document.getElementById("red")
let yellowDiv = document.getElementById("yellow")
let greenDiv = document.getElementById("green")

redDiv.onclick = () => console.log("You clicked red")
yellowDiv.onclick = () => console.log("You clicked yellow")
greenDiv.onclick = () => console.log("You clicked green")

const squares = document.querySelectorAll(".colorSquare")
// console.log(squares)

// console.log(squares[0].value)

//foreach loop====The forEach() method of Array instances executes a provided function once for each array element.

// squares.forEach(square => {
//     square.onclick = () => console.log(square.value)
// })


const timesClicked = { "red": 0, "yellow": 0, "green": 0 }
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})


function clearScore() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square => {
        square.innerText = 0
    })
}
const clearGamebtn = document.getElementById("clear-game")
clearGamebtn.onclicked = () => clearScore()