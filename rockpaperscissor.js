const randomEmoji = (emoji) => {
    const randomNumber = Math.floor(Math.random() * emoji.length)
    return emoji[randomNumber]
}

// emoji  = ["🍎", "🍌", "🍒", "🍓"]
emoji = ["✋", "✌", "👊"]
console.log(randomEmoji(emoji))