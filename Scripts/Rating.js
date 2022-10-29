let ratings = {like: Math.floor(Math.random()*(1000-1+1))+1, dislike: Math.floor(Math.random()*(1000-1+1))+1} // Random values for the ratings
let votestatus = {like: false, dislike: false}
var votes = document.getElementById("votes")
var likeNum = document.getElementById("likeNum")
var dislikeNum = document.getElementById("dislikeNum")
var upvote = document.getElementById("up")
var downvote = document.getElementById("down")


likeNum.innerHTML = ratings.like
dislikeNum.innerHTML = ratings.dislike

function like() {
    if (votestatus.like == false) {
        likeNum.innerHTML = ratings.like + 1
        upvote.style.backgroundColor = 'lime'
        votestatus.like = true

        if (votestatus.dislike == true) {
            dislikeNum.innerHTML = ratings.dislike
            votestatus.dislike = false
            downvote.style.backgroundColor = "transparent"
        }
    } else {
        likeNum.innerHTML = ratings.like
        upvote.style.backgroundColor = 'transparent'
        votestatus.like = false
    }
}

function dislike() {
    if (votestatus.dislike == false) {
        dislikeNum.innerHTML = ratings.dislike + 1
        downvote.style.backgroundColor = 'red'
        votestatus.dislike = true

        if (votestatus.like == true) {
            likeNum.innerHTML = ratings.like
            votestatus.like = false
            upvote.style.backgroundColor = 'transparent'
        }
    } else {
        dislikeNum.innerHTML = ratings.dislike
        downvote.style.backgroundColor = 'transparent'
        votestatus.dislike = false
    }
}