let nav = document.getElementById('hum');
let navlog = document.querySelector(".nav-log");
let navitem = document.querySelectorAll(".nav-item");
let div = document.querySelector(".nav");
nav.addEventListener("click", navclick);
console.log(nav);
console.log(navlog);
console.log(navitem);

function navclick() {
    if (navitem[0].style.display === "block") {
        for (let i = 0; i < 4; i++) {
            navitem[i].style.display = "none";
            div.style.height = "10vh";
        }
        navlog.style.display = "inline-block";
    } else {
        for (let index = 0; index < 4; index++) {
            navitem[index].style.display = "block";
            navitem[index].style.width = "100%";
            div.style.height = "50vh";
            navitem[index].style.margin = "auto";
            navitem[index].style.margin_top = "0px";
        }
        navlog.style.display = "none";
    }
}