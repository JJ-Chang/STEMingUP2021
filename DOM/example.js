console.log(document.URL);
console.log(document.domain);

console.log(document.title);
document.title = "Items";

console.log(document.doctype);
console.log(document.body);
console.log(document.forms);

console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'lister item';
headerTitle.innerText = 'List';

let items = document.querySelectorAll('.list-group-item');
console.log(items);
console.log(items[2]);
items[0].style.fontWeight = "bold";
items[3].style.backgroundColor = "yellow";
items.forEach(x => x.style.backgroundColor = "blue");