var plot_text = document.getElementById("plot_text")
var plot_head = document.getElementById("plot_header")
var switcher = document.getElementById("selector")

let booknames = ["Land Of The Soviets", 
    "Tintin in the Congo", 
    "Tintin in America", 
    "Cigars of the Pharaoh", 
    "The Blue Lotus", 
    "The Broken Ear", 
    "The Black Island", 
    "King Ottokar's Scepter", 
    "The Crab With The Golden Claws", 
    "The Shooting Star", 
    "Secret Of The Unicorn", 
    "Red Rackham's Treasure", 
    "The Seven Crystal Balls", 
    "Prisoners of the sun", 
    "Land of Black Gold", 
    "Destination Moon", 
    "Explorers on the moon", 
    "The Calculus Affair", 
    "The Red Sea Sharks", 
    "Tintin in Tibet", 
    "The Castofiore Emerald", 
    "Flight 714 To Sydney", 
    "Tintin and the Picaros", 
    "Alph-Art"
]

let books = []


for (var i = 0; i < booknames.length; i++) {
    books.push({id: i, title: booknames[i], image_url: "Images/Slideshows/Tintin/tintin" + (i + 1) + ".jpg", description: i})
}

document.getElementById("title").innerHTML = books[0].title;
document.getElementById("cover").src = books[0].image_url;
document.getElementById("description").innerHTML = books[0].description

for (var i = 0; i < books.length; i++) {
    var node = document.createElement("option")
    node.value = books[i].id
    node.textContent = books[i].title
    switcher.appendChild(node)
}

function changebook() {
    var switcher_value = document.getElementById("selector").value
    document.getElementById("title").innerHTML = books[switcher_value].title
    document.getElementById("cover").src = books[switcher_value].image_url
    document.getElementById("description").innerHTML = books[switcher_value].description
}
/*
let books = [{id: 0, title: "The Shawshank Redemption", year: 1994, image_url: "MEDIA/movie0.jpg"},
    {id: 1, title: "The Godfather ", year: 1972, image_url: "MEDIA/movie1.jpg"},
    {id: 2, title: "The Dark Knight", year: 2008, image_url: "MEDIA/movie2.jpg"},
    {id: 3, title: "12 Angry Men", year: 1957, image_url: "MEDIA/movie3.jpg"},
    {id: 4, title: " Schindler's List", year: 1993, image_url: "MEDIA/movie4.jpg"}
];

function change_plot(clicked_id) {
    if (clicked_id == "one") {
        plot_head.textContent = clicked_id;
        plot_text.textContent = "bruh";
    }
    if (clicked_id == "two") {
        plot_head.textContent = clicked_id;
        plot_text.textContent = "The box, you opened it. I came";
    }
    if (clicked_id == "three") {
        plot_head.textContent = clicked_id;
        plot_text.textContent = "One, Two, Freddy's coming for you";
    }
}


for (var i = 0; i < books.length; i++) {
    var node = document.createElement("option")
    node.value = books[i].id
    node.textContent = books[i].title
    switcher.appendChild(node)
}


*/