var event = require('events');
var eventEmitter = require('events').EventEmitter;
var util = require('util');
 
var Person = function (name)//constructor function
{
    this.name = name;
};
util.inherits(Person,eventEmitter);

module.exports = Person;
//After exporting module it can be called using require() with file path( see eventEmitterTwo.js)