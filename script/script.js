function showImages(el, height) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        console.log('Position '+thisPos);
        console.log('height '+height);

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - height > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

function setAllItemCards(){
    $('.item-card').each(function(){
        var item = $(this);
        showImages('.'+item.attr('class'), item.data('height'))   
    });
}


// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){  
    setAllItemCards()
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    console.log('scroll running :');
    setAllItemCards();
});

