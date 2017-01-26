/*Eariler example of Event emitter is borke down
into two files, i.e. libPerson.js and this eventEmitterTwo.js
to demonstrate module.exports */

var Person = require('./libPerson');
var jon = new Person("Jon Show");
var tirion = new Person('Tirion Linester');

jon.on('speak',function(said){
console.log(`${this.name} said, ${said}`);
});
tirion.on('speak',function(said){
console.log(`${this.name} said, ${said}`);
});

jon.emit('speak','my watch is over.');
tirion.emit('speak','beam me up scotty.');

