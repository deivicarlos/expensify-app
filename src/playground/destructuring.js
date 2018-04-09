/* const person = {
    //name: 'Carlos',
    age: 30,
    location: {
        city: 'Santo Domingo',
        temp: 32
    }
};

const { name: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log(`Hi, my name is ${firstName}, I am ${age} years old, I live in ${city} and the temp is ${temperature}`); */

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: undefined
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //Penguin, Self-Published

// const address = ['1293 W Juniper St', 'Philadelphia', 'Pennsylvania', '19042'];

// const [street, city, state, zio] = address;

// console.log(`Hi, I'am writing this code from ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , medium] = item;

console.log(`A medium ${name} cost ${medium}`);

