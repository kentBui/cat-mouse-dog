function Cat(name,age){
	this.name = name;
	this.age = age;
	this.stomatch = [];
}
Cat.prototype.eat = function(mouse){
	this.stomatch.push(mouse);
};
module.exports = Cat;