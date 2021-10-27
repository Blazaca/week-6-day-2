//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.

Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...

Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...

*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let personSearch1 = ((person) => {
    for(let i = 0; i < Object.keys(person).length; i++){
        if(typeof Object.values(person)[i] === 'string' || typeof Object.values(person)[i][0] === 'string'){
            console.log(`This persons favorite ${Object.keys(person)[i]} are ${Object.values(person)[i]}`)
        }
        else{
            let food_list = Object.values(person)[i][0]
            for(let j = 0; j < Object.values(food_list).length; j++){
                console.log(`This persons favorite ${Object.keys(food_list)[j]} shake is ${Object.values(food_list)[j]}`)
            }
        }
        // let shakey = Object.values(person)[4][0]
        // console.log(Object.values(shakey)[0])
    }
})

personSearch1(person3)

//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/

// Create our Person Class here


// Create the printInfo method

// Create another function for the addHobbies method that takes one parameter

// Adding to the hbbies array...

class Person{
    constructor(name, age, hobbies){
        this.name = name,
        this.age = age,
        this.hobbies = hobbies
    }
    printInfo(){
        return `Name: ${this.name}\nAge: ${this.age}`
    }
    createHobbies(hobby){
        this.hobbies = hobby
        console.log(`This is a list of ${this.name}'s hobbies:\n`)
        this.hobbies.forEach(hobbie => console.log(`${hobbie}\n`))
    }
}

let george = new Person('George', 25)
console.log(george.printInfo())
george.createHobbies(['Basketball', 'Mixology', 'Golf'])

let mark = new Person('Mark', 31)
console.log(mark.printInfo())
mark.createHobbies(['Music Production', 'Yoga', 'Athletics'])
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isBigNum = (num) => {
    return new Promise( (bigger, smaller) =>{
        if (num > 10){
            bigger(num)
        }else{
            smaller(num)
        }
    })
}
isBigNum(9)
.then((result) => {
    console.log(`${result} is bigger than ten.`)
})
.catch((error) => {
    console.log(`${error} is ten or smaller.`)
})
isBigNum(15)
.then((result) => {
    console.log(`${result} is bigger than ten.`)
})
.catch((error) => {
    console.log(`${error} is ten or smaller.`)
})



// CODE WARS ANSWERS

// #1
// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
function XO(str) {
    let x = 0
    let o = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] == 'x' || str[i] == 'X'){
        x++
      }else if(str[i] == 'o'|| str[i] == 'O'){
        o++
      }
    }
    if(x === o){
      return true
    }
    else{
      return false
    }
}

// #2
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript
function validatePIN (pin) {
    if(pin.length == 4 || pin.length == 6){
      if(pin.match(/^[0-9]+$/)){
        return true
      }else{
        return false
      }
    }
    else{
      return false
    }
  }