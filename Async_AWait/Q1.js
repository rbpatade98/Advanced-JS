function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
    }) 
    .catch(function(err) {
      console.log(err);
    });
}


async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();
