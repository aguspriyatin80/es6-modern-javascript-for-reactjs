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