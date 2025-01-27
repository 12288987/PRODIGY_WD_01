const header = document.getElementById("header");
header.addEventListener('mouseover', function() {
    document.getElementById("nav").style.backgroundColor = "red";
    document.getElementById("1").style.color = "blue";
    document.getElementById("2").style.color = "blue";
    document.getElementById("3").style.color = "blue";
})
header.addEventListener('pointerleave', function() {
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";
})