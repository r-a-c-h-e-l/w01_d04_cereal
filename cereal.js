var list1 = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin","Shredded", "toasted"];
var list2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles","Pops","Puffs"];
var input = process.argv[2];
var num = parseInt(input);


for (var i = 0; i < num; i++) {
//a random index from list 1
var x = list1[Math.floor(Math.random()*(list1.length-1) +1)];
//a random index from list 2
var y = list2[Math.floor(Math.random()*(list2.length-1) +1)];

console.log(x + " " + y);
}
