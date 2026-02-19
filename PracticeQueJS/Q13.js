
function firstResolved(promises) {
    return Promise.any(promises);
}


let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("fail 1");
    }, 1000);
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("success 1");
    }, 5000);
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("success 2"); 
    }, 3000);
});

firstResolved([p1, p2, p3])
    .then(function(result) {
        console.log("First resolved:", result);
    })
    .catch(function(err) {
        console.log("All promises failed!");
    });
