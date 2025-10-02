const EventEmitter = require('events');
const util = require('util');

// Superclass
function Greetr() {
    this.greeting = 'Hello world!';
}       

// Inherit from EventEmitter
util.inherits(Greetr, EventEmitter);

// Custom method,also have acess to EventEmitter methods because of inheritance
Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
};

const greetr1 = new Greetr();

// Method inherited from EventEmitter
greetr1.on('greet', function() {
    console.log('Greet event triggered!');
});

greetr1.greet(); 