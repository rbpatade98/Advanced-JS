// Promise.all() usage
// Runs multiple async operations in parallel and:
// Resolves only when all of them succeed
// Logs all results together
// Fails if any one Promise fails

async function fetchUser(){
    return {id:1, name:'Ram'}
}

async function fetchPosts() {
    return [
            {id:101, title: "post 1"},
            {id:102, title: "post 2"}
        ]
}

async function fetchComments() {
    return [
        {id:201,text: "nice post"},
        {id:202,text: "thanks for sharing"}
    ]
}

async function fetchAllData() {
    try {
        const [user, posts, comments] = await Promise.all([fetchUser(),fetchPosts(),fetchComments()])
        console.log(user)
        console.log(posts)
        console.log(comments)
    } catch (error) {
        console.log('error')
    }
}

fetchAllData()