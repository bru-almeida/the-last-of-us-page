let counter = 1;

document.getElementById('btn1').checked = true;

setInterval(function() {
    nextSlide();
}, 5000)

function nextSlide() {
    counter++;

    if(counter > 6) {
        counter = 1;
    }

    document.getElementById('btn'+counter).checked = true;
}