/*
const sprintf = require('sprintf-js').sprintf;
const groceries = ["apples", "oranges", "milk", "eggs", "cheese"];
console.log(groceries);

//Splice: remove / add at same time
groceries.push("ice cream"); //add to back
groceries.unshift("juice"); //add to front
groceries.pop(); //remove from back
groceries.shift(); //remove from front
groceries.splice(1, 2, "potatoes", "cookies", "bananas"); //items = items to add

console.log(sprintf("Please buy %s items", groceries.length));
console.log(sprintf("You must buy %s and %s.", groceries[groceries.length - 1], groceries[groceries.length - 2]));
*/

/* Array Methods
   These are not lambdas or streams apparently: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
/*
const items = [
    {name: 'Bike', price: 100},
    {name: 'Book', price: 10},
    {name: 'Toy', price: 20},
    {name: 'Album', price: 7},
    {name: 'CD', price: 4},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1400}
]
console.log(items);

const filteredItems = items.filter((item) => { //Filter method
    return item.price <= 100;
})
console.log(filteredItems);
console.log(items); //remains unchanged

const itemNames = items.map((item) => { //Map method
    return item.name;
})
console.log(itemNames);

const foundItem = items.find((item) => {//Find: look for specific value or elem in array
    return item.name = "Computer";
})
console.log("found item = " + foundItem);

items.forEach((item) => { //forEach: works same as java for each
    console.log(item.price);
})

const hasInexpensive = items.some((item) => { //Some: returns T/F based on condition (some exists)
    return item.price <= 100;
})
console.log(hasInexpensive);

const allInexpensive = items.every((item) => { //Every: returns T/F based on condition (all meet condition)
    return item.price <= 100;
})
console.log(allInexpensive);

const total = items.reduce((sum, item) => { //Reduce: does math on array
    return item.price += sum;
}, 0) //0 is sum initialization
console.log("The total value of all the items is $%d.", total);
*/

/* Arrays II slide 10*/
//https://www.w3schools.com/jsref/jsref_findindex.asp
let groceryList = [{ // use curly brackets and key/value pairs syntax to make array of objects
    item: "milk", purchased: false
}, {
    item: "salad", purchased: false
}, {
    item: "cereal", purchased: false
}, {
    item: "juice", purchased: false
}, {
    item: "bread", purchased: false
}];

console.log(groceryList);
bought0("juice");
bought1("cereal");
console.log(groceryList);

//bought0 and bought1 do the same thing

function bought0(item) { //getting keys method
    let keys = groceryList.map((groceryList) => {
        return groceryList.item;
    }); //make a new array of all the items in groceryList
    let i = keys.indexOf(item); //get the index of item attribute from keys
    console.log(i); //check index
    groceryList.splice(i, 1); //delete item
}

function bought1(item) {
    let i = groceryList.findIndex(function (groceryList) { //"iterating" through groceryList
        //return the element of groceryList if item attribute is equal to item argument
        return groceryList.item === item; //using === to prevent type coercion
    }); //i = index of element of groceryList with item attribute equal to item argument
    console.log(i); //check index
    groceryList.splice(i, 1); //delete item
}