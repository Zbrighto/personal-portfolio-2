let hamburger = document.querySelector(".hamb");
let navlist = document.querySelector(".nav-list");
let links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classlist.toggle("click");
    navlist.classList.toggle("open");
});