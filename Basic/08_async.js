


  async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchTodo();
