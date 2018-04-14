var buttonTop = $("#button__top-return");


var top = window.addEventListener("scroll", function () {

    var position = window.scrollY;


    if (position > 600) {

        buttonTop.fadeIn(500);

    }

    else if (position < 600) {

        buttonTop.fadeOut(500);

    }

});


