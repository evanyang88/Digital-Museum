let body = document.body;
let nav = document.querySelectorAll(".nav > a");
let pages = ["Pre-1491.html", "1492-1750.html", "1751-1877.html", "Reflection.html"];

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function() {
        body.classList.add("move");
        setTimeout(() => {
            body.classList.remove("move");
            window.location.href = pages[i];
        }, 500);
    })
}