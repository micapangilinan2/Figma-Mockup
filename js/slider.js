const slider = document.querySelector('.slider-container');
let drag = false;
let start, left;

slider.onmousedown = function(e) {
    if (window.innerWidth > 1023) {
        drag = true;
        start = e.clientX;
        left = slider.scrollLeft;
    }
};

slider.onmouseup = function() { drag = false; };
slider.onmouseleave = function() { drag = false; };

slider.onmousemove = function(e) {
    if (drag === true && window.innerWidth > 1023) {
        slider.scrollLeft = left - (e.clientX - start);
    }
};

slider.onwheel = function(e) {
    if (window.innerWidth > 1023) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
    }
};

