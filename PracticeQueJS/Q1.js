// A function that returns a Promise which completes after a specified number of milliseconds. 
// It’s commonly used to pause execution in async workflows

function delay(ms){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        },ms)
    })
}

delay(5000).then(function(){
    console.log('Print After 5 SEC.')
})

