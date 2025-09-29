// Emitter allow to dont use many if...else statements
// Instead of that we can use event names as properties of an object
// And functions as values of those properties

var emitter = require('./emitter');

var emtr = new emitter();   

emtr.on('event1', function() {
    console.log('Event 1 triggered');
});

emtr.on('event2', function() {
    console.log('Event 2 triggered');
});

emtr.emit('event1');
emtr.emit('event');

// var obj = {
//     greet: 'hello'
// };

// var prop = 'greet';

// console.log(obj[prop]); // Accessing property using bracket notation


// // Array of functions
// var arr = [];

// arr.push(function () {
//     console.log('Function in array');
// });

// arr.push(function () {
//     console.log('Function in array');
// });

// arr.push(function () {
//     console.log('Function in array');
// });

// arr.forEach(function (fn) {
//     fn();
// });