let slideshow_images = [];
let index = 0;
const _slideshow = document.getElementById("slideshowimg");

function slideshow() {
    if (index == slideshow_images.length-1) {
        index = 0;
    } else {
        index = index + 1;
    }   
    _slideshow.src=slideshow_images[index];
    setTimeout(slideshow, 1500);
}