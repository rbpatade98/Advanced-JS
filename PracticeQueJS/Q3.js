// Promise chain (getNumber → double → square)
// A sequence of Promises where:
// A number is first provided
// Then doubled
// Then squared
// The final transformed value is logged

function getNumber(){
    return new Promise(function(resolve){
        resolve(5)
    })
}

function Double(num){
    return new Promise(function(resolve){
        resolve(num * 2)
    })
}

function Square(num){
    return new Promise(function(resolve){
        resolve(num * num)
    })
}

getNumber().then(function(num){
    console.log('getNumber:' + num)
    return Double(num)
})

.then(function(num){
    console.log('Double:' + num)
    return Square(num)
})

.then(function(num){
    console.log('Result:' + num)
})

.catch(function(err){
    console.log('err')
})