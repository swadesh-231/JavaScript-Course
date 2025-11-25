// -------------------------------------------------------------
// ASYNC JAVASCRIPT – ONE COMPLETE CODE BASE
// -------------------------------------------------------------

// 1️⃣ CALLBACKS (Old way)
// -------------------------------------------------------------
function getUserCallback(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: "D T (User)" });
  }, 1000);
}

getUserCallback(1, (err, user) => {
  console.log("🔶 Callback User:", user);
});


// 2️⃣ PROMISES (Better)
// -------------------------------------------------------------
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: "Promise User" });
    }, 1000);
  });
}

getUserPromise(2)
  .then(user => console.log("🔵 Promise User:", user))
  .catch(err => console.error(err));


// 3️⃣ ASYNC / AWAIT (Best way)
// -------------------------------------------------------------
async function getUserAsync() {
  const user = await getUserPromise(3);
  console.log("🟢 Async/Await User:", user);
}
getUserAsync();


// 4️⃣ USING FETCH (Real API)
// -------------------------------------------------------------
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("🌐 API Response:", data);
  } catch (error) {
    console.error("❌ Fetch Error:", error);
  }
}
fetchPosts();


// 5️⃣ ERROR HANDLING
// -------------------------------------------------------------
async function fetchWithError() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

    if (!response.ok) {
      throw new Error("Something went wrong! Status: " + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("⚠️ Caught Error:", err.message);
  }
}
fetchWithError();


// 6️⃣ PARALLEL ASYNC TASKS (Promise.all)
// -------------------------------------------------------------
async function getAllData() {
  const [post, user] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/2").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/users/2").then(r => r.json())
  ]);

  console.log("🔰 Post + User Together:", { post, user });
}
getAllData();


// 7️⃣ RACE CONDITION (Fastest response wins)
// -------------------------------------------------------------
async function raceExample() {
  const result = await Promise.race([
    new Promise(res => setTimeout(() => res("⏱ Fast Task"), 500)),
    new Promise(res => setTimeout(() => res("🐢 Slow Task"), 1500))
  ]);

  console.log("🏁 Race Winner:", result);
}
raceExample();


// -------------------------------------------------------------
// END — You now know: callbacks, promises, async/await, fetch,
// error handling, Promise.all, Promise.race
// -------------------------------------------------------------
