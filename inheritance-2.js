var util = require('util');

function Person() {
    this.firstname = '';
    this.lastname = '';
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
};

function Policeman() {
    Person.call(this);
    this.badgeNumber = '123';
}

util.inherits(Policeman, Person);

var policeman = new Policeman();
policeman.firstname = 'John';
policeman.lastname = 'Doe';
policeman.greet();