// document.getElementById("output").style.visibility = "hidden";
// document.getElementById("input").style.visibility = "hidden";

function calculate() {
    document.getElementById("output").style.visibility = "visible";
    document.getElementById('input').style.visibility = "visible";

    let x = document.getElementById("input").value;
    let units = document.getElementById("units").value;

    if (units == "lbs") {  //**replace weight placeholder with correct unit
        document.getElementById("lbsOutput").innerHTML = x;
        document.getElementById("gramsOutput").innerHTML = Math.round(x * 453.59237 * 100) / 100;
        document.getElementById("kgOutput").innerHTML = Math.round(x / 2.2046 * 100) / 100;
        document.getElementById("ozOutput").innerHTML = Math.round(x * 16 * 100) / 100;
    } else if (units == "g") {
        document.getElementById("lbsOutput").innerHTML = Math.round(x / 453.59237 * 100) / 100;
        document.getElementById("gramsOutput").innerHTML = x;
        document.getElementById("kgOutput").innerHTML = Math.round(x / 1000.0 * 100) / 100;
        document.getElementById("ozOutput").innerHTML = Math.round(x / 28.3495 * 100) / 100;
    } else if (units === "kg") {
        document.getElementById("lbsOutput").innerHTML = Math.round(x / 2.20462 * 100) / 100;
        document.getElementById("gramsOutput").innerHTML = Math.round(x * 1000.0 * 100) / 100;
        document.getElementById("kgOutput").innerHTML = x;
        document.getElementById("ozOutput").innerHTML = Math.round(x * 35.274 * 100) / 100;
    } else if (units == "oz") {
        document.getElementById("lbsOutput").innerHTML = Math.round(x / 16 * 100) / 100;
        document.getElementById("gramsOutput").innerHTML = Math.round(x * 28.3495 * 100) / 100;
        document.getElementById("kgOutput").innerHTML = Math.round(x / 35.274 * 100) / 100;
        document.getElementById("ozOutput").innerHTML = x;
    }
}