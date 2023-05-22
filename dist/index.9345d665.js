let toggler = document.querySelector(".toglerbtn");
let menu = document.querySelector(".nav__menu");
const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction();
};
toggler.addEventListener("click", function() {
    if (menu.classList.contains("nav__menu")) menu.classList.replace("nav__menu", "nav__menu--mobile");
    else menu.classList.replace("nav__menu--mobile", "nav__menu");
});
buttonRight.onclick = function() {
    document.getElementById("round").scrollLeft += 300;
};
buttonLeft.onclick = function() {
    document.getElementById("round").scrollLeft -= 300;
};
function scrollFunction() {
    if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 20) mybutton.style.display = "block";
    else mybutton.style.display = "none";
}
function topFunction() {
    document.body.scrollTop -= 3000; // For Safari
    document.documentElement.scrollTop -= 2000; // For Chrome, Firefox, IE and Opera
}

//# sourceMappingURL=index.9345d665.js.map
