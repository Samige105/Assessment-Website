var plot_text = document.getElementById("plot_text")
var plot_head = document.getElementById("plot_header")
var switcher = document.getElementById("selector")

let booknames = []
let books = []
let plot = []

function createPlotswitch() {
    document.getElementById("title").innerHTML = books[0].title;
    document.getElementById("cover").src = books[0].image_url;
    document.getElementById("description").innerHTML = books[0].description

    for (var i = 0; i < books.length; i++) {
        var node = document.createElement("option")
        node.value = books[i].id
        node.textContent = books[i].title
        switcher.appendChild(node)
    }
}

function changebook() {
    var switcher_value = document.getElementById("selector").value
    document.getElementById("title").innerHTML = books[switcher_value].title
    document.getElementById("cover").src = books[switcher_value].image_url
    document.getElementById("description").innerHTML = books[switcher_value].description
}