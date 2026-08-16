# 7. Asynchronous JavaScript ⭐⭐⭐

## 🔥🔥🔥 What is Synchronous JavaScript?

Synchronous JavaScript executes code **one line at a time**.

JavaScript waits for the current task to finish before moving to the next task.

### Simple Example

```js
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

Here, each line runs one after another.

**Remember:**

**Synchronous → one task finishes → then the next task starts.**

---

## 🔥🔥🔥 What is Asynchronous JavaScript?

Asynchronous JavaScript allows JavaScript to **start a task and continue executing other code without waiting for that task to finish**.

It is commonly used for tasks such as API requests, timers, and file operations.

### Simple Example

```js
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("Third");
```

Output:

```text
First
Third
Second
```

Here, JavaScript does not wait for the `setTimeout()` task to finish. It continues with `"Third"` and `"Second"` runs later.

**Remember:**

**Asynchronous → start a task → don't wait → continue other code → handle the result later.**

<!-- ======================= -->

### 1. 🔥🔥🔥 Is JavaScript synchronous or asynchronous?

JavaScript is **synchronous by default**, but it can handle **asynchronous operations** using features like callbacks, Promises, `async/await`, and the Web APIs provided by the environment.

### Simple Example

```js
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");
```

Output:

```text
First
Third
Second
```

Here, the normal JavaScript code runs synchronously, while `setTimeout()` allows the delayed task to be handled asynchronously.

**Remember:**

**JavaScript → synchronous by default + supports asynchronous operations.**

---

### 2. 🔥🔥🔥 Is JavaScript Single-Threaded?

Yes, JavaScript is **single-threaded**, meaning it has **one main thread** that executes JavaScript code using one call stack.

Asynchronous operations are handled by the **JavaScript runtime environment**, such as the browser or Node.js, which allows JavaScript to continue running other code.

### Simple Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Timer
```

JavaScript does not create another JavaScript thread for the timer. The runtime handles the timer, and its callback is executed later by the main JavaScript thread.

**Remember:**

**JavaScript → single-threaded → one main thread executes JavaScript code.**

<!-- ======================== -->

### 2. 🔥🔥🔥 What is the Event Loop?

The **Event Loop** is a mechanism that allows JavaScript to handle **asynchronous tasks** while JavaScript runs on a single thread.

It checks whether the **Call Stack is empty** and then moves waiting callbacks to the Call Stack so they can be executed.

### Simple Example

```js id="k2q7xm"
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```text id="n7k3px"
Start
End
Timer
```

Here:

1. `"Start"` runs first.
2. `setTimeout()` is handled by the runtime.
3. `"End"` runs next.
4. When the Call Stack becomes empty, the Event Loop allows the timer callback to run.

```text id="r8f2kd"
Call Stack
    ↓
Event Loop
    ↓
Waiting Callback
    ↓
Call Stack
```

**Remember:**

**Event Loop → checks the Call Stack and moves waiting callbacks to it when it is free.**

<!-- =============================== -->

### 🔥🔥🔥 What is the Call Stack?

The **Call Stack** is a mechanism JavaScript uses to keep track of **which function is currently running**.

It follows **LIFO (Last In, First Out)** — the last function added to the stack is the first one to finish.

### Simple Example

```js
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

Execution:

```text
Global
  ↓
first()
  ↓
second()
```

Here, `second()` is added to the Call Stack after `first()`, so `second()` finishes first. Then `first()` finishes.

**Remember:**

**Call Stack → keeps track of function execution → LIFO → last in, first out.**

<!-- =========================== -->

### 🔥🔥🔥 What is the Callback/Task Queue?

The **Callback Queue (Task Queue)** is a queue where **callbacks of completed asynchronous tasks wait until the Call Stack is empty**.

The Event Loop checks the Call Stack and moves a callback from the queue to the Call Stack when it is free.

### Simple Example

```js id="p4q7vz"
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```text id="k2v8mx"
Start
End
Timer
```

Here, the `setTimeout()` callback waits in the **Callback Queue** until the Call Stack becomes empty.

```text
setTimeout()
     ↓
Callback / Task Queue
     ↓
Event Loop
     ↓
Call Stack
```

**Remember:**

**Callback Queue → stores callbacks waiting to be executed when the Call Stack is free.**

<!-- ========================= -->

### 🔥🔥🔥 What is the Microtask Queue?

The **Microtask Queue** is a queue where **microtasks wait to be executed after the current code finishes and before the Callback/Task Queue is processed**.

Promises and `queueMicrotask()` use the Microtask Queue.

### Simple Example

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Promise
Timer
```

Here, the Promise callback runs before the `setTimeout()` callback because **microtasks are processed before tasks from the Callback/Task Queue**.

```text
Call Stack
    ↓
Microtask Queue
    ↓
Callback / Task Queue
```

**Remember:**

**Microtask Queue → stores Promise callbacks and runs them before the Callback/Task Queue.**

<!-- ===================== -->

### 🔥🔥🔥 Microtask vs Macrotask?

Both are types of asynchronous tasks, but **microtasks are executed before macrotasks**.

- **Microtask** → Promise callbacks, `queueMicrotask()`
- **Macrotask** → `setTimeout()`, `setInterval()`, DOM events

### Simple Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
```

Output:

```text
Start
End
Microtask
Macrotask
```

Here, after the synchronous code finishes, JavaScript processes the **Microtask Queue first**, then the **Macrotask/Task Queue**.

| Microtask          | Macrotask             |
| ------------------ | --------------------- |
| Promise callbacks  | `setTimeout()`        |
| `queueMicrotask()` | `setInterval()`       |
| Runs first         | Runs after microtasks |

**Remember:**

**Microtask → runs first**

**Macrotask → runs after microtasks**

<!-- ======================= -->

### 🔥🔥🔥 What is the execution order of synchronous code, Promise callbacks, and `setTimeout()`?

The execution order is:

**1. Synchronous code → 2. Promise callbacks (Microtasks) → 3. `setTimeout()` callbacks (Tasks/Macrotasks)**

JavaScript first finishes all synchronous code. Then it processes the **Microtask Queue**, and after that it processes the **Task/Macrotask Queue**.

### Simple Example

```js
console.log("1");

setTimeout(() => {
  console.log("3");
}, 0);

Promise.resolve().then(() => {
  console.log("2");
});

console.log("4");
```

Output:

```text
1
4
2
3
```

### Execution Order

```text
Synchronous Code
      ↓
Microtask Queue
(Promise callbacks)
      ↓
Task Queue
(setTimeout)
```

**Remember:**

**Synchronous → Promise → setTimeout**

<!-- ============================ -->

## What is a Promise?

A Promise is an object that represents the **future result of an asynchronous operation**.

### 1. 🔥🔥🔥 What is a Promise?

A Promise represents a value that may be **available now, later, or may fail**.

### Simple Example

```js
const promise = new Promise((resolve, reject) => {
  resolve("Data received");
});

promise.then((result) => {
  console.log(result); // Data received
});
```

Here, `resolve()` means the operation was successful, and `.then()` handles the successful result.

**Remember:**

**Promise → represents the future result of an asynchronous operation.**

---

### 2. 🔥🔥🔥 What are the States of a Promise?

A Promise has **3 states**:

1. **Pending** → operation is still in progress.
2. **Fulfilled** → operation completed successfully.
3. **Rejected** → operation failed.

### Simple Example

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

Here, the Promise changes from:

```text
Pending → Fulfilled
```

If `reject()` is called:

```text
Pending → Rejected
```

A Promise can move from **Pending** to **Fulfilled** or **Rejected**, but once it is settled, its state cannot change again.

**Remember:**

**Pending → still running**

**Fulfilled → successful**

**Rejected → failed**

<!-- ============================== -->

### 🔥🔥🔥 What is Promise Chaining?

Promise chaining means **using multiple `.then()` methods one after another** to perform asynchronous operations in sequence.

The value returned from one `.then()` is passed to the next `.then()`.

### Simple Example

```js
const promise = Promise.resolve(10);

promise
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 5;
  })
  .then((value) => {
    console.log(value); // 25
  });
```

Here:

```text
10 → 20 → 25
```

The result returned by each `.then()` is passed to the next `.then()`.

**Remember:**

**Promise Chaining → multiple `.then()` calls → result of one goes to the next.**

<!-- =========================== -->

### 🔥🔥🔥 `then()` vs `catch()` vs `finally()`?

These methods are used to **handle the result of a Promise**.

- **`then()`** → handles a **successful** Promise.
- **`catch()`** → handles a **failed** Promise.
- **`finally()`** → runs **whether the Promise succeeds or fails**.

### Simple Example

```js
const promise = fetch("/api/data");

promise
  .then((response) => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error");
  })
  .finally(() => {
    console.log("Done");
  });
```

Here:

- `then()` runs when the Promise is fulfilled.
- `catch()` runs when the Promise is rejected.
- `finally()` runs in both cases.

**Remember:**

**`then()` → success**

**`catch()` → error**

**`finally()` → always runs**

<!-- ========================= -->

### 1. 🔥🔥🔥 What is `async/await`?

`async/await` is a way to work with **Promises using simpler and more readable syntax**.

- `async` → makes a function return a Promise.
- `await` → waits for a Promise to settle before continuing inside the `async` function.

### Simple Example

```js
async function getData() {
  const response = await fetch("/api/data");

  console.log(response);
}

getData();
```

Here, `await` waits for the Promise returned by `fetch()` to settle before moving to the next line inside the function.

**Remember:**

**`async` → function returns a Promise**

**`await` → waits for the Promise result inside an `async` function**

---

### 2. 🔥🔥🔥 Promise vs `async/await`?

`Promise` and `async/await` are **not two different asynchronous mechanisms**.

`async/await` is a **cleaner way to work with Promises**.

### Promise Example

```js
fetch("/api/data")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### `async/await` Example

```js
async function getData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

| Promise                                    | `async/await`                                     |
| ------------------------------------------ | ------------------------------------------------- |
| Uses `.then()`, `.catch()`                 | Uses `await` and `try/catch`                      |
| Can become harder to read with many chains | Usually easier to read                            |
| `async/await` works on top of Promises     | `async/await` is syntax for working with Promises |

**Remember:**

**Promise → handles asynchronous results**

**`async/await` → cleaner syntax for working with Promises**

<!-- ========================== -->

### 1. 🔥🔥🔥 What happens when an `async` function returns a value?

An `async` function **always returns a Promise**.

If the function returns a normal value, JavaScript automatically wraps that value in a **fulfilled Promise**.

### Simple Example

```js
async function getValue() {
  return 10;
}

getValue().then((value) => {
  console.log(value); // 10
});
```

Here, `return 10` does not directly return `10`. The `async` function returns a Promise that is fulfilled with `10`.

**Remember:**

**`async` function → always returns a Promise**

**`return value` → fulfilled Promise with that value**

---

### 2. 🔥🔥🔥 What happens when an `async` function throws an error?

When an `async` function throws an error, the function returns a **rejected Promise**.

The error can be handled using `.catch()` or `try...catch`.

### Simple Example

```js
async function getData() {
  throw new Error("Something went wrong");
}

getData().catch((error) => {
  console.log(error.message); // Something went wrong
});
```

Here, `throw` causes the Promise returned by `getData()` to become rejected.

**Remember:**

**`async` function + `throw` → rejected Promise**

<!-- ======================== -->

### 1. 🔥🔥🔥 How do you handle errors with `async/await`?

Errors in `async/await` are commonly handled using **`try...catch`**.

Put the code that may fail inside `try`, and handle the error inside `catch`.

### Simple Example

```js
async function getData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getData();
```

Here, if the Promise is rejected, the error is caught by the `catch` block.

**Remember:**

**`async/await` error handling → `try...catch`**

---

### 2. 🔥🔥🔥 What happens if you don't `await` a Promise?

If you don't use `await`, JavaScript **does not wait for the Promise to settle**.

Instead, you immediately get the **Promise object**, and the next line continues executing.

### Simple Example

```js
async function getData() {
  const promise = fetch("/api/data");

  console.log("Next line");

  const response = await promise;
}
```

Here, `promise` contains the Promise returned by `fetch()`. JavaScript continues to the next line without waiting.

### Simple Difference

```js
// With await
const data = await getData();
// data → resolved value

// Without await
const data = getData();
// data → Promise
```

**Remember:**

**With `await` → wait for the Promise result**

**Without `await` → get the Promise immediately and continue**

<!-- =========================== -->

### 1. 🔥🔥🔥 What is `Promise.all()`?

`Promise.all()` is used to **run multiple Promises together and wait for all of them to fulfill**.

It returns a Promise with an array of all results.

If **any one Promise rejects, `Promise.all()` rejects immediately**.

### Simple Example

```js
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Products");
const p3 = Promise.resolve("Orders");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
    // ["User", "Products", "Orders"]
  })
  .catch((error) => {
    console.log(error);
  });
```

**Remember:**

**`Promise.all()` → all must succeed → one failure → whole Promise rejects.**

---

### 2. 🔥🔥🔥 What is `Promise.allSettled()`?

`Promise.allSettled()` is used to **wait for all Promises to finish**, whether they are fulfilled or rejected.

It returns the result of **every Promise**, including its status.

### Simple Example

```js
const p1 = Promise.resolve("User");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Orders");

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});
```

Result:

```js
[
  { status: "fulfilled", value: "User" },
  { status: "rejected", reason: "Failed" },
  { status: "fulfilled", value: "Orders" },
];
```

Even though `p2` failed, `allSettled()` waits for the other Promises and gives the result of all three.

**Remember:**

**`Promise.allSettled()` → wait for all → success or failure → give every result.**

---

### 3. 🔥🔥🔥 `Promise.all()` vs `Promise.allSettled()`?

| `Promise.all()`                       | `Promise.allSettled()`                            |
| ------------------------------------- | ------------------------------------------------- |
| Waits for all Promises to fulfill     | Waits for all Promises to finish                  |
| One rejection → whole Promise rejects | Rejection does not stop the result                |
| Returns values if all succeed         | Returns status of every Promise                   |
| Used when all results are required    | Used when every result is required, even failures |

### Simple Example

```js
Promise.all([Promise.resolve("A"), Promise.reject("B"), Promise.resolve("C")]);

// ❌ Rejected because B failed
```

```js
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C"),
]);

// ✅ Gives the result of A, B, and C
```

**Remember:**

**`Promise.all()` → one failure = failure**

**`Promise.allSettled()` → one failure = still get all results**

<!-- ============================== -->

### 🔥🔥 How do you run multiple API calls in parallel?

You can use **`Promise.all()`** to start multiple API calls at the same time and wait for all of them to complete.

### Simple Example

```js
async function getData() {
  const [users, products, orders] = await Promise.all([
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders"),
  ]);

  console.log(users);
  console.log(products);
  console.log(orders);
}
```

Here, all three API calls start together instead of waiting for one call to finish before starting the next.

**Remember:**

**Multiple API calls in parallel → `Promise.all()`**

<!-- ============================ -->

### 🔥🔥 How do you run asynchronous operations sequentially?

You can use `async/await` to run asynchronous operations **one after another**.

The next operation starts only after the previous operation finishes.

### Simple Example

```js
async function getData() {
  const users = await fetch("/api/users");

  const products = await fetch("/api/products");

  const orders = await fetch("/api/orders");
}
```

Here:

```text
fetch users
    ↓
wait for users
    ↓
fetch products
    ↓
wait for products
    ↓
fetch orders
```

Each operation waits for the previous one to complete.

**Remember:**

**Sequential async operations → use `await` one after another.**

<!-- =========================== -->

### 🔥🔥 What is Callback Hell?

Callback Hell happens when **multiple callbacks are nested inside each other**, making the code difficult to read, understand, and maintain.

It usually occurs when multiple asynchronous operations need to run one after another.

### Simple Example

```js
getUser((user) => {
  getProducts(user, (products) => {
    getOrders(products, (orders) => {
      getPayment(orders, (payment) => {
        console.log(payment);
      });
    });
  });
});
```

Here, callbacks are deeply nested inside each other, creating a difficult-to-maintain structure.

Promises and `async/await` are commonly used to avoid callback hell.

**Remember:**

**Callback Hell → deeply nested callbacks → difficult to read and maintain.**

<!-- ====================== -->

### 🔥🔥 How do Promises solve Callback Hell?

Promises solve callback hell by allowing asynchronous operations to be written using **`.then()` chaining** instead of deeply nested callbacks.

### Simple Example

```js
getUser()
  .then((user) => {
    return getProducts(user);
  })
  .then((products) => {
    return getOrders(products);
  })
  .then((orders) => {
    return getPayment(orders);
  })
  .then((payment) => {
    console.log(payment);
  })
  .catch((error) => {
    console.log(error);
  });
```

Here, each asynchronous operation is handled in a **flat chain** instead of nesting one callback inside another.

### Callback Hell

```js
getUser((user) => {
  getProducts(user, (products) => {
    getOrders(products, (orders) => {
      getPayment(orders, (payment) => {
        console.log(payment);
      });
    });
  });
});
```

### Promise Chain

```text
getUser()
   ↓
getProducts()
   ↓
getOrders()
   ↓
getPayment()
```

**Remember:**

**Promises → `.then()` chaining → less nesting → easier to read and maintain.**

<!-- =============================== -->

### 1. 🔥🔥 What is `Promise.resolve()`?

`Promise.resolve()` creates a **fulfilled Promise** with the given value.

### Simple Example

```js
const promise = Promise.resolve("Success");

promise.then((value) => {
  console.log(value); // Success
});
```

Here, `Promise.resolve()` creates a Promise that is already fulfilled with `"Success"`.

**Remember:**

**`Promise.resolve()` → creates a fulfilled Promise.**

---

### 2. 🔥🔥 What is `Promise.reject()`?

`Promise.reject()` creates a **rejected Promise** with the given error or reason.

### Simple Example

```js
const promise = Promise.reject("Something went wrong");

promise.catch((error) => {
  console.log(error); // Something went wrong
});
```

Here, `Promise.reject()` creates a Promise that is already rejected.

**Remember:**

**`Promise.reject()` → creates a rejected Promise.**

<!-- =========================== -->
