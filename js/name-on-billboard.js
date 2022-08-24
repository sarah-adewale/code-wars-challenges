// You can print your name on a billboard ad. Find out how much it will cost you. 
// Each character has a default price of £30, but that can be different if you are 
// given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
// 20 leters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30){
    // return name.length * price
    let oldPrice = 0
    let i = 0
    while(i < name.length){
        oldPrice += price 
        i++
    }
    
    return oldPrice
} 

console.log(billboard("Jeong-Ho Aristotelis")) //600
console.log(billboard("Hadufuns John",20)) //260

//first time using a while loop in a while and not even looking it up 