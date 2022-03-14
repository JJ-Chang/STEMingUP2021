document.querySelector("h1").style.backgroundColor = "grey";
document.querySelectorAll("h2").forEach(i => i.style.backgroundColor = "aqua");
document.querySelector("p").style.backgroundColor = "red";

//let sh = document.querySelector("#specialHeading"); //# signifies ID
document.getElementById("specialHeading").style.backgroundColor = "lightseagreen";

document.querySelectorAll(".myClass").forEach(i => i.style.color = "yellow"); //period signifies class
//document.getElementsByClassName("myClass").forEach(i => i.style.color = "lightcoral"); //"array-like object"

document.getElementById("p2").innerHTML = "<b>Wow</b> I changed the text щ(ʘ╻ʘ)щ"; //innerHTML allows use of embedded HTML
document.getElementById("p3").textContent = "This is actually the 3rd paragraph.";

let h = document.createElement("h1");
h.textContent = "Newly Created h1 element";
document.getElementById("section").appendChild(h);
// let h;
// document.getElementById("section").appendChild(h = document.createElement("h1"));
// h.textContent = "Newly created element";

document.getElementById("user-input").addEventListener("input", function (e){
    console.log(e.target.value);
    document.getElementById("user-input-label").textContent = e.target.value;
});