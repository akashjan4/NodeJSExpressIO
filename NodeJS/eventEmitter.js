/*
Event Emitters are base on Pub/Sub design pattern 
.Allow use to create listener for an emit custome events.
Every time we've already been using an implementation of the EventEmitter
 */
var event = require('events');
var eventEmitter = require('events').EventEmitter;
var util = require('util');

//Change 1
var emitter = new event.EventEmitter();//Event emitter itself is a constructor
emitter.on('customeEvent', function (message, status) {
    console.log(`[${status}]\n${message}`);
});
emitter.emit('customeEvent', 'Hello Event', '200:OK');


//Chamge 2 
var Person = function (name)//constructor function
{
    this.name = name;
};

util.inherits(Person,eventEmitter);


var doe = new Person("Jone Doe");
doe.on('speak',function(said){
console.log(`${this.name} said, ${said}`);
});

doe.emit('speak','brace your self, Winter is coming.');

