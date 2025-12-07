let page = document.getElementById("mainpage");
let nav = document.querySelectorAll(".navbar > a");

nav[0].addEventListener("click", function() {
    for (let i = 0; i < nav.length; i++) {
        if (i != 0) {
            nav[i].className = "";
        }
    }
    nav[0].className = "current";
    page.classList.add("hidden");
    setTimeout(() => {
        page.src = "Home.html";
        page.classList.remove('hidden');
    }, 300)
})

nav[1].addEventListener("click", function() {
    for (let i = 0; i < nav.length; i++) {
        if (i != 1) {
            nav[i].className = "";
        }
    }
    nav[1].className = "current";
    page.classList.add("hidden");
    setTimeout(() => {
        page.src = "About.html";
        page.classList.remove('hidden');
    }, 300)
})