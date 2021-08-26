// const postListPromise = new Promise((resolve, reject) => {
//     $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
//         // console.log('GET POST List Response', data)
//         resolve(data)
//     }).fail(err => {
//         reject(new Error(`Call failed for GET POST List Request with status ${err.status}`))
//     })
// })

// postListPromise
//     .then((response) => {
//         // console.log('Call Success')
//         console.log('Then Response => ', response)
//     })
//     .catch((error) => {
//         // console.log('Call Failed')
//         console.log('Catch Error => ', error)
//     })

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