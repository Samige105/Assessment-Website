const pages = [
    "amulet.html",
    "harry_potter.html",
    "no_game_no_life.html",
    "ronin.html",
    "the_green_mile.html",
    "the_mask.html",
    "tintin.html"
]

let random = Math.floor(Math.random()*(7-0+1))

function random_page() {
    window.location.href = pages[random]
}
