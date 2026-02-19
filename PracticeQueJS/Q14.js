// Error handling with async/await
// Uses try/catch to:
// Safely fetch API data
// Log "Failed to load" if an error occurs

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) { 
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); 
    console.log("Data loaded:", data);
    return data;
  } catch (error) {
    console.error("Failed to load"); 
  }
}
fetchData("https://jsonplaceholder.typicode.com/todos/1"); 
