var chalk = require('chalk');
function Dog(){
	this.stomatch = [];
}
Dog.prototype.eat = function(cat){
	this.stomatch.push(cat);
};
Dog.prototype.sayHi = function(){
	console.log('Hi everyone, i eat'+ chalk.red(' cat!!!!'));
};
module.exports = Dog;