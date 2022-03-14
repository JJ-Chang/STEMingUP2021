//document.getElementById("submit").addEventListener()

function checkLogin() {
    let loggedIn = false;
    let users = [{user: "bob", pass: "123"}, {user: "sam", pass: "234"}];
    users.filter(function (u) {
        if (u.user == document.getElementById("username").value && u.pass == document.getElementById("password").value) {
            loggedIn = true;
            console.log("found match");
        }
    });
    if (loggedIn)
        alert("You are signed in.");
    else
        alert("Incorrect username or password.");
}