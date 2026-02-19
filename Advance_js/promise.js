const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('async Task Completed')
        resolve()
    },1000)
}) 

promiseOne.then(function(){
    console.log('Promise Comsumed')
})

promisetwo = new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log('async Task 2 Completed')
    resolve()
   },1000)
})

.then(function(){
    console.log('async Task resolve')

})

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('')
        resolve({user: 'Ram', email:'ram@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = false
        if(!error){
            resolve({username:'ram', password:'123'})
        }
        else
        {
            reject('ERROR:something went wrong')
        }

    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('the promise is either resolve or rejected')
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = false
        if(!error){
            resolve({username:'Javascript', password:'123'})
        }
        else
        {
            reject('Javascript:something went wrong')
        }

    },1000)

})

async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{

})

