//https://github.com/alexei/sprintf.js
var sprintf = require('sprintf-js').sprintf;
//vsprintf = require('sprintf-js').vsprintf;

function MadLibsPrint(noun, adj, verb, adv) {
    console.log(sprintf('The %s %s %s to the store %s.', adj, noun, verb, adv));
    console.log(`The ${adj} ${noun} ${verb} to the store ${adv}`); //built in by using backtick
} //return is not required

function MadLibsFormat(noun, adj, verb, adv) {
    return sprintf('The %s %s %s to the store %s.', adj, noun, verb, adv);
}

MadLibsPrint("cat", "happy", "jumped", "aggressively");
console.log(MadLibsFormat("dog", "sad", "flipped", "daringly"));