// CALLBACK HELL
$.get(`https://jsonplaceholder.typicode.com/posts`, (response) => {
    console.log(response)
    const id = 1
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
        console.log(response)
        $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, (response) => {
            console.log(response)
        }).fail(err => {
            console.log(err)
        })
    }).fail(err => {
        console.log(err)
    })

}).fail(err => {
    console.log(err)
})

