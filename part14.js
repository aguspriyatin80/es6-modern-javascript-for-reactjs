// SIMPLE CALLBACK
function main(param1, param2, cb) {
    console.log(param1, param2)
    cb()
}

function cb() {
    console.log('hai callback')
}

main(1, 2, cb)

// SIMPLE PROMISES  
const postListPromise = new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
        resolve(data)
    }).fail(err => {
        reject(new Error(`${err.status}`))
    })
})

postListPromise
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })