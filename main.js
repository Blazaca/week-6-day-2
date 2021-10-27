// The switch case statement

// method to get the current date'

let day = new Date().getDay();

console.log(day)

switch(day){
    case 0:
        console.log('Watch Football!');
        break;
    case 1:
        console.log('Write Codes. Its monday')
        break;
    case 2:
        console.log('Do something please.');
        break;
    case 3:
        console.log('HOLY GUACCMOLAY');
        break;
    case 4:
        console.log('WHAT');
        break;
    case 5:
        console.log('WHO DIS');
        break;
    case 6:
        console.log('SATURDAY WAS YESTERDAY');
        break;
    default:
        console.log('That isnt a day silly.')
    
}

// Getting Literal Day

let literal_day = new Date().toString();
console.log(literal_day)
console.log(literal_day.split(' ')[0])

switch(literal_day.split(' ')[0]){
    case "Sun":
        console.log('Watch Football!')
        break;
    case "Mon":
        console.log('Write codes... its Monday!!!')
        break;
    case "Tue":
        console.log('Learn about switch case statements')
        break;
    case "Wed":
        console.log('Test some code')
        break;
    case "Thu":
        console.log('Thursday! watch more football')
        break;
    case "Fri":
        console.log('Dev team happy hour!')
        break;
    case "Sat":
        console.log('Go to the beach - rest')
        break;
    default:
        console.log('That is not a day! You broke the simulation.')
};

//Creation of Objects
// Simple JS Object
let person = {
    name: 'Johnny',
    age: 28,
    fav_color: 'Green'
};

// Accessing Data in an Object
console.log(person['name']) // Bracket Notation
console.log(person.name) // Dot notation

//Complex JS Object
let person2 = {
    name: 'Max',
    age: 36,
    prog_langs: ['Java', 'Python', 'Javascript', 'C++'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago Cubs',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Bulls'],
            soccer: ['Manchester United', 'Naperville YellowJacks']
        },
        {
            baseball: 'Toronto BlueJays',
            football: 'GB Packers',
            soccer: 'Liverpool'
        }
    ]
};

// Accessing values in a complex JS object
console.log(person2.prog_langs[3])
console.log(person2.teams[0].basketball[0])

// Accessing Data Prototype methods - Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Looping through an object in JS - Looking for keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// Loop to get all values based on key
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(person2[Object.keys(person2)[i]])
}

// List all values from person 2 that are arrays
for(let i = 0; i < Object.values(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }else{
        console.log('Not an array')
    }
}

// Create our own Object Prototype -- with ES5 syntax
// function Car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;

//     // Create methods inside of JS Prototype
//     this.printInfo = (color, wheels = 0) => {
//         console.log(`This is a ${this.year} ${this.make} ${this.model}. It has ${wheels} wheels. The color is ${color}`)

//         return 'Done'
//     }
// }

// // Creating an instance
// let my_car = new Car('BMW', 'X5', 2022).printInfo('White')
// console.log(my_car)
// console.log(my_car.printInfo())

// -- JS Classes -- ES6 Standard //
class Human{
    constructor(name, age, height){
        this.age = age;
        this.name = name;
        this.height = height;
    }

    printInfo(){
        return `Name: ${this.name}\nAge: ${this.age}\nHeight: ${this.height}`
    }
    
    birthday(){
        console.log(`Happy birthday! Hope you had a great year being ${this.age} years old.`)
        this.age++
        return `You are now ${this.age} years old`
    }
}

// Creating a new instance of Human
let jessica = new Human('Jessica', 20, '5ft');
console.log(jessica.printInfo())
console.log(jessica.birthday())
console.log(jessica.age)


// JS Class Inheritance
class Baby extends Human{
    constructor(name, age, height, walking){
        super(name, age, height)
        this.walking = walking
    }
    isBabyWalking(){
        if(this.walking == true){
            return `This baby can walk!`
        }else{
            return `Baby cannot walk just yet...`
        }
    }
}

// Instance of new Baby class
let bob = new Baby('Bob', 1, '1ft6in', true);
console.log(bob.isBabyWalking())
console.log(bob.printInfo())
console.log(bob.birthday())

/*
// Java Script Closure //

A Closure is a self-invoking function that only runs once. 
It can then seta variable(Which in our case will be a counter)
and returns a function expression.

For this example we will add to a number after the initial call
to the closure has been made.

BTW JavaScript Closures are another type of variable that can
be created...

*/

let count_up = (() => {
    let counter = 0;
    console.log('Count')
    return () => {return counter++}
})()

console.log(count_up())

// another example
let addNames = (() => {
    let names = [];
    console.log('Names Array Created')
    return (name) => {
        console.log(`Adding ${name} into array..`)
        names.push(name)
        return names
    }
})()
console.log(addNames('Nate'))
console.log(addNames('George'))
console.log(addNames('Frank'))

//JS Callback Function
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/


// Basic Example

let first = () =>{
    console.log(1)
}

let second = () =>{
    console.log(2)
}
// What if the first call takes awhile...
let first_delay = () =>{
    setTimeout(() =>{
        console.log(1)
    }, 5000)
};

let second_delay = () =>{
    console.log(2)
}

first_delay()
second_delay()

// // CallBack Function Syntax
// let doHomework = (subject, callback) =>{
//     alert(`Starting my ${subject} homework!`)
//     callback()
// }

// doHomework('Javascript', () =>{
//     console.log('Done with homework!')
// })


/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/


// Resolve with a Promise

// Creating a JS Promise
// Resolve and reject can be named anything
const isEvenNumber = (num) =>{
    return new Promise( (resolve, reject) =>{
        if (num % 2 == 0){
            resolve(true)
        }else{
            reject(false)
        }
    })
}
isEvenNumber(10)
// then and catch are REQUIRED to finish the promise
// the returned function from the promises name can be changed 'result', 'number', whatever..
.then((result) => {
    console.log(`${result} is Even`)
})
.catch((error) =>{
    console.log(`Odd number detected: ${error}`)
})

// Another example using async/await syntax

// Base functionality to get a new salary
let increaseSalary = (base, bonus) => {
    const new_salary = base + bonus;
    console.log(`New Salary ${new_salary}`)
};

// funtion to increase salary slowly (meant to simulate getting data slowly)
let slowIncrease = (num1, num2) => {
    return new Promise( (resolve) =>{
        setTimeout( () => resolve(num1+num2), 2000)
    })
}

// This will immediately go the reject route (if applicable) in our Promise..
// we do not allow more than 2 seconds  to get a result
let increase_this_slowly = (base, bonus) => {
    const new_salary = slowIncrease(base, bonus);
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

increase_this_slowly(85000, 15000)

//correct syntax to wait for something to occur
let async_increase_this_slowly = async(base, bonus) =>{
    const new_salary = await slowIncrease(base, bonus)
    console.log(`New Salary is ${new_salary}`)
    return new_salary
}

async_increase_this_slowly()
