// Emitter allow to dont use many if...else statements
// Instead of that we can use event names as properties of an object
// And functions as values of those properties

var emitter = require('events');
var config = require('./config').events;

var emtr = new emitter();

emtr.on(config.GREET, function () {
    console.log('GREET event triggered');
});


emtr.emit(config.GREET);


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