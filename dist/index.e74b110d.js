(function() {
    let burg = document.querySelectorAll(".header__burger, .header__menu");
    for(let i = 0; i < burg.length; i++)burg[i].addEventListener("click", (event)=>{
        let nav = document.querySelectorAll(".header__burger,.header__menu");
        for(let j = 0; j < nav.length; j++)nav[j].classList.toggle("active");
    // document.body.classList.toggle("lock");
    });
})();

//# sourceMappingURL=index.e74b110d.js.map
