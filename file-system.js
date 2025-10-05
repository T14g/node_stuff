var fs = require('fs');

var greeting = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greeting);

// Its better to use the async version
// error-first callback pattern, first parameter is an error object
// asynchronous version
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    if(err) {
        console.log('Error: ', err);
    } else {    
        console.log(data);
    }
});

console.log('Done!'); // this will execute before the asynchronous file read is complete