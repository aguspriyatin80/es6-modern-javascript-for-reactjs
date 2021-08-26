const postListPromise = new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
        resolve(data)
    }).fail(err => {
        reject(new Error(`GET POST LIST FAILED and status ${err.status}`))
    })
})

const postDetailsPromise = (data) => new Promise((resolve, reject) => {
    $.get(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`, (data) => {
        resolve(data)
    }).fail(err => {
        reject(new Error(`DETAILS CALL FAILED and status ${err.status}`))
    })
})
postListPromise
    .then(postDetailsPromise)
    .then(response => {
        console.log('RESPONSE:', response)
    })
    .catch(err => {
        console.log(err)
    })

