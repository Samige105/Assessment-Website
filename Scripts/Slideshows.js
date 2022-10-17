let slideshow_images = [];
let index = 0;
const slideshow = document.getElementById("slideshowimg");

function slideshow_tintin() {
    if (slideshow_images.length == 0) {
        for (var i = 0; i < 24; i++) {
            slideshow_images.push("Images/Slideshows/Tintin/tintin" + (i + 1) + ".jpg")
        }
    }
    if (index == slideshow_images.length-1) {
        index = 0;
    } else {
        index = index + 1;
    }   
    slideshow.src=slideshow_images[index];
    setTimeout(slideshow_tintin, 1500);
}