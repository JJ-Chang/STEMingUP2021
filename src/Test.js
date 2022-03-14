let str = "Hello world"; //let is the var keyword
console.log(str.length); //print to console
console.log(" ");

/*
int and float considered the same type
negative value are not the same as positive values
*/
let a = 5;
let b = 5.0;
console.log(a === b);
b = -5.0;
console.log(a === b);
console.log(" ");

var c = 10;
console.log(c); //prints 10
function testScope(){
    console.log(c); //undefined bc no access to a (declared outside)
    var c = 20;
    console.log(c); //prints 20
}
testScope();
console.log(c); //prints 10 because c was not modified within TestScope
//var is local, let is global
console.log(" ");