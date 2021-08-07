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


/* MOSTRAR/OCULTAR MENÚ */
$(function(){
    $('.main-nav__toggle').click(function () {
        $(this).next().toggleClass('active');
        $('.main-header .item').toggleClass('active');
        $(this).next('.main-menu').slideToggle(300);
    });
});


/* OCULTAR MODAL ACTUAL AL MOSTRAR OTRA*/
$(document).on('show.bs.modal', function (event) {
    if (!event.relatedTarget) {
        $('.modal').not(event.target).modal('hide');
    };
    if ($(event.relatedTarget).parents('.modal').length > 0) {
        $(event.relatedTarget).parents('.modal').modal('hide');
    };
});
$(document).on('shown.bs.modal', function (event) {
    if ($('body').hasClass('modal-open') == false) {
        $('body').addClass('modal-open');
    };
});


/* FORM STEP - DONACIÓN */
let mainForm = document.querySelector(".form-donation");
let firstButton = document.querySelector(".form-donation .first-button");
let nextButton = document.querySelector(".form-donation .next-button");
let prevButton = document.querySelector(".form-donation .prev-button");
let submitButton = document.querySelector(".form-donation .submit-button");
let fieldCount = document.querySelectorAll(".form-donation .step").length - 1;
let fieldStep = document.querySelectorAll(".form-donation .step");

let currentStep = 0;
let validate = true;

mainForm.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        if (currentStep < fieldCount) {
            e.preventDefault();
            if (validate == true) {
                next();
            }
        }
    }
});

if (currentStep < 1) {
    prevButton.classList.add("d-none");
    nextButton.classList.add("d-none");
}

function first() {
    if (currentStep <= fieldCount) {
        fieldStep[currentStep].classList.add("d-none");
        fieldStep[currentStep].classList.remove("active");

        if ((validate = true)) {
            currentStep++;
            fieldStep[currentStep].classList.remove("d-none");
            fieldStep[currentStep].classList.add("active");

            if (currentStep > 0) {
                prevButton.classList.remove("d-none");
            }
            if (currentStep < 1) {
                prevButton.classList.add("d-none");
            }
            if (currentStep == fieldCount) {
                firstButton.classList.add("d-none");
                submitButton.classList.remove("d-none");
            } else {
                firstButton.classList.add("d-none");
                nextButton.classList.remove("d-none");
                submitButton.classList.add("d-none");
            }
        }
    }
}
function next() {
    if (currentStep <= fieldCount) {
        fieldStep[currentStep].classList.add("d-none");
        fieldStep[currentStep].classList.remove("active");

        if ((validate = true)) {
            currentStep++;
            fieldStep[currentStep].classList.remove("d-none");
            fieldStep[currentStep].classList.add("active");

            if (currentStep > 0) {
                prevButton.classList.remove("d-none");
            }
            if (currentStep < 1) {
                prevButton.classList.add("d-none");
            }
            if (currentStep == fieldCount) {
                nextButton.classList.add("d-none");
                submitButton.classList.remove("d-none");
            } else {
                nextButton.classList.remove("d-none");
                submitButton.classList.add("d-none");
            }
        }
    }
}

function prev() {
    if (currentStep >= 0) {
        fieldStep[currentStep].classList.add("d-none");
        fieldStep[currentStep].classList.remove("active");

        if ((validate = true)) {
            currentStep--;
            fieldStep[currentStep].classList.remove("d-none");
            fieldStep[currentStep].classList.add("active");

            if (currentStep == 0) {
                prevButton.classList.add("d-none");
                nextButton.classList.add("d-none");
                firstButton.classList.remove("d-none");
            } else {
                prevButton.classList.remove("d-none");
                nextButton.classList.remove("d-none");
            }
            if (currentStep == fieldCount) {
                submitButton.classList.remove("d-none");
            } else {
                submitButton.classList.add("d-none");
            }
        }
    }
}

firstButton.addEventListener("click", function () {
    first();
});
nextButton.addEventListener("click", function () {
    next();
});
prevButton.addEventListener("click", function () {
    prev();
});
