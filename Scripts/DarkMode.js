function dark_mode() {
    para = document.getElementsByTagName("p")
    mode_switch = document.getElementById("switcher")
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
        for (let i = 0; i < para.length; i++) {
            para[i].style.color = 'white';
        }
        mode_switch.src='Images/sun-outline-md.png';
        mode_switch.title='Retina Smelter Mode';
    } else {
        document.body.style.backgroundColor = 'white';
        for (let i = 0; i < para.length; i++) {
            para[i].style.color = 'black';
        }
        mode_switch.src='Images/Moon-clipart-outline-free-images.png';
        mode_switch.title='Dark Mode';
    }
}