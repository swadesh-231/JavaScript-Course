fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network error");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
