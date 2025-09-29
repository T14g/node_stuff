// Function constructor
function Emitter()  {
    this.events = {};   
}

// Adding methods to the prototype
// When event happens this method will be called
// Many listeners can be added for the same event type, but one at time
Emitter.prototype.on = function(type, listener) {
    // If the event type(prop) does not exist, create an empty array
    // Make sure that prop is an array
   this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// When we want to emit an event
Emitter.prototype.emit = function(type) {
    // If the event type does not exist, return
    // Loop through all the listeners inside the array and call them
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;