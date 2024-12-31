// Fetch data from the specified URL
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // Convert the response to JSON format
  .then((res) => res.json())
  // Log the JSON data to the console
  .then((data) => console.log(data));

// Log a message indicating that data is being loaded
console.log("DATA LOADING...");

// Define an asynchronous function to get todos
async function getTodos() {
  // Await the fetch call to get the response from the URL
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // Await the conversion of the response to JSON format
  const data = await response.json();
  // Log the JSON data to the console
  console.log(data);

  // Return the fetched data
  return data;
}

// Call the getTodos function and store the returned promise in the todos variable
const todos = getTodos();
// Log the todos variable, which is a promise at this point
console.log(todos);
console.log(todos);