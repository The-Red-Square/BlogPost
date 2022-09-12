let postParse = []
const title = document.getElementById("title")
const body = document.getElementById("body")

function renderPosts() {
    let html = ""   
    for(let post of postParse) {
        html += `
            <h2>${post.title}</h2>
            <h4>${post.body}</h4>
            <hr />`
    }
    document.getElementById("posts").innerHTML = html
    
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postParse = data.slice(0, 5)    
 
    renderPosts()
    })

document.getElementById("article").addEventListener("submit", function(event) {
    event.preventDefault()
    let data = {
        title: title.value,
        body: body.value
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(post => {

        postParse.unshift(post)
        renderPosts()
        })
    title.value = ""
    body.value = ""

})

