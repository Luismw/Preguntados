// HAMBURGER
var forEach = function (e, t, r) {
    if ("[object Object]" === Object.prototype.toString.call(e))
        for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && t.call(r, e[c], c, e);
    else
        for (var a = 0, l = e.length; l > a; a++) t.call(r, e[a], a, e)
},
    hamburgers = document.querySelectorAll(".hamburger");
    hamburgers.length > 0 && forEach(hamburgers, function (e) {
    e.addEventListener("click", function () {
        this.classList.toggle("is-active");
    }, !1)
});

/* Toggle menu */
$(function(){
    $('.main-nav__toggle').click(function () {
        $(this).next().toggleClass('active');
        $('.main-header .item').toggleClass('active');
        $(this).next('.main-menu').slideToggle(300);
    });
})