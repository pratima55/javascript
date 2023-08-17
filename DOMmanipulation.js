console.log('hello')
let title = document.getElementById('title')
console.log("before:", title.innerText)
let message = "HAVE A NICE DAY"
title.innerText = message;
console.log("after:", title.innerText)

title.innerHTML = " <p> HELLO MY LOVE</p>"
title.innerHTML = message


title.style.color = "red"
title.style.backgroundColor = "grey"