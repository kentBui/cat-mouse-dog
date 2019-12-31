var chalk = require('chalk');
var Dog = require('./dog.js');
var Cat = require('./cat.js');
var tom = new Cat('tom',2);
var milu = new Dog();
milu.eat(tom);
console.log(milu);
milu.sayHi();