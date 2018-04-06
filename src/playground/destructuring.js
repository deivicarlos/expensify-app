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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: undefined
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); //Penguin, Self-Published