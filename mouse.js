function Mouse(name){
	this.death = false;
	this.name = name;
}
Mouse.prototype.death = true;
module.exports = Mouse;