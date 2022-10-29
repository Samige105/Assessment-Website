var parent = document.getElementById("comment-section")
function add_comment() {
    let commentName = document.getElementById("comment_name").value
    console.log(commentName)
    let commentText = document.getElementById("comment_text").value
    console.log(commentText)
    let node = document.createElement("p")
    let text = document.createTextNode(commentName + ": " + commentText)
    node.appendChild(text)
    parent.appendChild(node)
    document.getElementById("comment_name").value = ""
    document.getElementById("comment_text").value = ""
}