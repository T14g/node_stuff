var obj = {
    greet: 'hello'
};

var prop = 'greet';

console.log(obj[prop]); // Accessing property using bracket notation


// Array of functions
var arr = [];

arr.push(function () {
    console.log('Function in array');
});

arr.push(function () {
    console.log('Function in array');
});

arr.push(function () {
    console.log('Function in array');
});

arr.forEach(function (fn) {
    fn();
});