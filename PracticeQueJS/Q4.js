// Converting .then() to async/await
// Rewriting Promise chaining into a cleaner, 
// synchronous-looking style using async and await for better readability.


async function fetchData() {
    return { value: 10 }; 
}

async function process(data) {
    return data.value * 2; 
}

//  fetchData().then(data => process(data)).then(result => console.log(result));
async function run() {
    try {
        const data = await fetchData();    
        const result = await process(data); 
        console.log(result);  
    } catch (err) {
        console.log("Error:", err);        
    }
}

run();
