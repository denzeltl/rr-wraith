function myFunction() {
    var x = document.getElementById("burger-menu");
    if (x.className === "navbar-start") {
        x.className += " responsive";
    } else {
        x.className = "navbar-start";
    }
}