// Using object create for inheritance

const person = {
    name: "",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

var john = Object.create(person);
john.name = 'John';
john.greet();

var jane = Object.create(person);
jane.name = 'Jane';
jane.greet();