// A Promise-based function that checks a number:
// Resolves if the number is even
// Rejects if the number is odd

function EvenOdd(num){
    return new Promise(function(resolve,reject){
        if(num % 2 == 0){
            resolve('Even No')
        }
        else{
            reject('Odd No')
        }
    })

    }

    EvenOdd(8).then(function(Even){
        console.log(Even)
    })
    .catch(function(Odd){
        console.log(Odd)
    })


