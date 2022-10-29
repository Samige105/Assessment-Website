table_rows = document.getElementsByTagName("td")
up = document.getElementById("up")
down = document.getElementById("down")
labels = document.getElementsByTagName("label")
ignore = []
use = []

function dark_mode() {
    para = document.getElementsByTagName("p")
    mode_switch = document.getElementById("switcher")
    for (var i = 0; i < para.length; i++) { // Ignore the dropdown headers
        if (para[i].className.indexOf('ignore') >= 0) {
            ignore.push(para[i])
        } else {
            use.push(para[i])
        }
    }
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
        for (let i = 0; i < use.length; i++) {
            use[i].style.color = 'white';
        }
        try {
            document.getElementById('plotelements').style.borderColor = 'white'
        } catch (typeError) {/* Nothing needs to go here, This is catching errors that things don't actually exist*/}
        try {
            for (var i = 0; i < table_rows.length; i++) {
                table_rows[i].style.borderColor = 'white'
            }
            document.getElementById('info-table').style.borderColor = 'white'
            up.style.borderColor = 'white'
            down.style.borderColor = 'white'
        } catch (typeError) {}
        try {
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.color = 'white'
            }
        } catch (typeError) {}
        mode_switch.src='Images/sun.png';
        mode_switch.title='Retina Smelter Mode';
    } else {
        document.body.style.backgroundColor = 'white';
        for (let i = 0; i < use.length; i++) {
            use[i].style.color = 'black'
        }
        try {
            document.getElementById('plotelements').style.borderColor = 'black'
        }catch (typeError) {}
        try {
            for (var i = 0; i < table_rows.length; i++) {
                table_rows[i].style.borderColor = 'black'
            }
            document.getElementById('info-table').style.borderColor = 'black'
            up.style.borderColor = 'black'
            down.style.borderColor = 'black'
        } catch (typeError) {}
        try {
            for (var i = 0; i < labels.length; i++) {
                labels[i].style.color = 'black'
            }
        } catch (typeError) {}
        mode_switch.src='Images/moon.png';
        mode_switch.title='Dark Mode';
    }
}