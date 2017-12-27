//
// Object destructing
//

// const person = {
//   name: 'seba',
//   age: 32,
//   location: {
//     city: 'sedona',
//     temp: 60
//   }
// }
//
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`I'm ${firstName} and I'm ${age}.`)
//
//
// const {city, temp} = person.location;
// console.log(`I live in ${city} were thetemp is ${temp}.`)
//
// const book = {
//   author: 'Seba',
//   title: 'Sebas life',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const {publisher: publisherName = 'Self pub'} = book.publisher
// console.log(`This book was published by: ${publisherName}`)


//
// Array destructing
//


const location = ['30 tourmaline tr', 'sedona', 'AZ']

const [,,state, zip = '12345'] = location;
console.log(`${state} @ ${zip}`)

const coffee = ['Latte', 1.50, 2.00, 2.5]

const [drink, s, m, l] = coffee;
console.log(`the Large ${drink} is $${l}`)
