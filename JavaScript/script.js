const header = document.getElementById("header");
const list1 = document.getElementById("1");
const list2 = document.getElementById("2");
const list3 = document.getElementById("3");

// about
list1.addEventListener('mouseover', function() {
    document.getElementById("nav").style.backgroundColor = "red";
    document.getElementById("1").style.color = "blue";
})
list1.addEventListener('pointerleave', function() {
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("1").style.color = "white";
})

// resume
list2.addEventListener('mouseover', function() {
    document.getElementById("nav").style.backgroundColor = "red";
    document.getElementById("2").style.color = "blue";
})
list2.addEventListener('pointerleave', function() {
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("2").style.color = "white";
})

// projects
list3.addEventListener('mouseover', function() {
    document.getElementById("nav").style.backgroundColor = "red";
    document.getElementById("3").style.color = "blue";
})
list3.addEventListener('pointerleave', function() {
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("3").style.color = "white";
})

document.addEventListener('scroll', (event) => {
    document.getElementById("nav").style.backgroundColor = "red"
})

document.addEventListener('scrollend', (event) => {
    document.getElementById("nav").style.backgroundColor = "black"
})