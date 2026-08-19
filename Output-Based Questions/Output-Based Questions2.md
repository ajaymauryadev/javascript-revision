## 🔥🔥🔥 Predict output involving Promises

**Promises are used to handle asynchronous operations in JavaScript. For output questions, the most important thing is understanding when the Promise callbacks run.**

Simple language:

> **Promise ka executor immediately run hota hai, but `.then()`, `.catch()` aur `.finally()` baad mein microtask ke roop mein run hote hain.**

---

## 🔥 1. Basic Promise

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

### Output

```text
A
C
B
```

Why?

```text
console.log("A")
      ↓
A

Promise.then()
      ↓
Microtask queue

console.log("C")
      ↓
C

Synchronous code finished
      ↓
Promise callback
      ↓
B
```

So:

```text
A
C
B
```

---

## 🔥🔥 2. Promise Executor Runs Immediately

This is a very important interview trap.

```js
console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
}).then(() => {
  console.log("C");
});

console.log("D");
```

### Output

```text
A
B
D
C
```

Why?

This part:

```js
new Promise((resolve) => {
  console.log("B");
});
```

runs **immediately**.

But:

```js
.then(() => {
  console.log("C");
})
```

runs later as a microtask.

Think:

```text
A
 ↓
Promise executor
 ↓
B
 ↓
D
 ↓
.then()
 ↓
C
```

---

## 🔥🔥 3. `Promise.resolve()` + `setTimeout()`

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

### Output

```text
A
D
C
B
```

Remember:

```text
Synchronous
    ↓
A
D

Promise microtask
    ↓
C

setTimeout
    ↓
B
```

### 🧠 Rule

```text
Promise.then()
      ↓
Microtask

setTimeout()
      ↓
Macrotask
```

Microtask runs first.

---

## 🔥🔥 4. Promise Chaining

```js
Promise.resolve(10)
  .then((value) => {
    console.log(value);

    return value + 10;
  })
  .then((value) => {
    console.log(value);
  });
```

### Output

```text
10
20
```

Why?

First `.then()` gets:

```text
10
```

It returns:

```text
20
```

The next `.then()` receives that returned value.

```text
10
 ↓
first then
 ↓
return 20
 ↓
second then
 ↓
20
```

---

## 🔥🔥 5. Promise Chain + Synchronous Code

```js
console.log("A");

Promise.resolve(10)
  .then((value) => {
    console.log(value);

    return value + 10;
  })
  .then((value) => {
    console.log(value);
  });

console.log("B");
```

### Output

```text
A
B
10
20
```

First synchronous code:

```text
A
B
```

Then Promise callbacks:

```text
10
20
```

---

## 🔥🔥🔥 6. Missing `return`

Very important output question:

```js
Promise.resolve(10)
  .then((value) => {
    value + 10;
  })
  .then((value) => {
    console.log(value);
  });
```

### Output

```text
undefined
```

Why?

This:

```js
value + 10;
```

calculates the value but does **not return it**.

So JavaScript effectively gets:

```js
return undefined;
```

Therefore the next `.then()` receives:

```text
undefined
```

---

## 🔥🔥 7. Returning a Value

Compare:

```js
Promise.resolve(10)
  .then((value) => {
    return value + 10;
  })
  .then((value) => {
    console.log(value);
  });
```

Output:

```text
20
```

Because:

```text
10
 ↓
return 20
 ↓
next then
 ↓
20
```

---

## 🔥🔥 8. `Promise.reject()` + `catch()`

```js
Promise.reject("Something went wrong").catch((error) => {
  console.log(error);
});
```

### Output

```text
Something went wrong
```

Flow:

```text
Promise.reject()
      ↓
Rejected Promise
      ↓
catch()
      ↓
error
```

---

## 🔥🔥 9. Error Inside `.then()`

```js
Promise.resolve()
  .then(() => {
    throw new Error("Failed");
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### Output

```text
Failed
```

An error thrown inside `.then()` causes the returned Promise to become rejected.

```text
then()
 ↓
throw Error
 ↓
Rejected Promise
 ↓
catch()
 ↓
Failed
```

---

## 🔥🔥 10. `finally()`

```js
Promise.resolve("Success")
  .then((value) => {
    console.log(value);
  })
  .finally(() => {
    console.log("Finally");
  });
```

### Output

```text
Success
Finally
```

`finally()` runs after the Promise settles.

---

## 🔥🔥 11. `finally()` Also Runs After Rejection

```js
Promise.reject("Error")
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });
```

### Output

```text
Error
Finally
```

So:

```text
Success → finally()
Error   → finally()
```

---

## 🔥🔥🔥 12. Multiple `.then()` Calls

```js
Promise.resolve().then(() => {
  console.log("A");
});

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

### Output

```text
C
A
B
```

Synchronous code:

```text
C
```

Microtask queue:

```text
A
B
```

So:

```text
C
A
B
```

---

## 🔥🔥🔥 13. Promise Chain Creates Another Microtask

This is a good interview question.

```js
Promise.resolve()
  .then(() => {
    console.log("A");
  })
  .then(() => {
    console.log("B");
  });

Promise.resolve().then(() => {
  console.log("C");
});
```

### Output

```text
A
C
B
```

Why?

Initially:

```text
Microtask Queue:

A
C
```

`A` runs first.

After `A` finishes, its next `.then()` is added to the queue:

```text
C
B
```

So:

```text
A
C
B
```

---

## 🔥🔥🔥 14. Promise Inside `setTimeout()`

```js
setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
}, 0);

setTimeout(() => {
  console.log("C");
}, 0);
```

### Output

```text
A
B
C
```

Why?

First timer:

```text
A
```

During that timer, Promise creates a microtask:

```text
B
```

Microtasks are processed before the next timer:

```text
C
```

So:

```text
A
B
C
```

---

## 🔥🔥🔥 15. Promise + `setTimeout()` + Multiple Promises

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");
```

### Output

```text
1
5
3
4
2
```

Step-by-step:

### Synchronous:

```text
1
5
```

### Microtasks:

```text
3
4
```

### Timer:

```text
2
```

Final:

```text
1
5
3
4
2
```

---

# 🔥🔥🔥 16. Promise + Nested Promise

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
});

Promise.resolve().then(() => {
  console.log("C");
});
```

### Output

```text
A
C
B
```

Why?

Initial queue:

```text
A
C
```

Run `A`:

```text
A
```

During `A`, `B` is added.

Queue becomes:

```text
C
B
```

Therefore:

```text
A
C
B
```

---

# 🔥🔥🔥 17. `Promise.all()`

```js
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30),
]).then((values) => {
  console.log(values);
});
```

### Output

```text
[10, 20, 30]
```

`Promise.all()` waits for all Promises to fulfill.

Important:

> **Result order follows the input order, not necessarily the completion order.**

---

## 🔥🔥 18. `Promise.all()` with Rejection

```js
Promise.all([Promise.resolve(10), Promise.reject("Error"), Promise.resolve(30)])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Output

```text
Error
```

Because one Promise rejected.

```text
10 → success
Error → ❌ rejected
30 → success

Promise.all()
     ↓
rejected
     ↓
catch()
```

---

# 🔥🔥🔥 19. Very Important Mixed Question

Predict:

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");
```

### Output

```text
A
E
B
D
C
```

Remember:

```text
Synchronous
→ A E

Microtasks
→ B D

Macrotask
→ C
```

---

# 🔥🔥🔥 20. The Interview-Level Question

```js
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");

  setTimeout(() => {
    console.log("5");
  }, 0);
});

console.log("6");
```

### Output

```text
1
6
4
2
3
5
```

Let's break it down.

### Step 1 — Synchronous

```text
1
6
```

### Step 2 — Promise microtask

```text
4
```

During `4`, timer `5` gets scheduled.

### Step 3 — First timer

The first timer was scheduled before timer `5`:

```text
2
```

Inside it, Promise `3` is created.

### Step 4 — Microtask

```text
3
```

### Step 5 — Next timer

```text
5
```

Final:

```text
1
6
4
2
3
5
```

---

# 🧠 How to Solve Promise Output Questions

Whenever you see a Promise question, follow these steps.

### Step 1 — Find synchronous code

Run normal statements first:

```js
console.log("A");
console.log("B");
```

These execute immediately.

---

### Step 2 — Find Promise callbacks

Look for:

```js
.then()
.catch()
.finally()
```

Put them into the **microtask queue**.

---

### Step 3 — Check `return`

This is very important in Promise chains:

```js
.then(() => {
  return 10;
})
```

Next `.then()` receives:

```text
10
```

But:

```js
.then(() => {
  10;
})
```

Next `.then()` receives:

```text
undefined
```

---

### Step 4 — Check errors

```js
throw new Error();
```

inside `.then()` means the next rejection handler can handle it:

```text
then()
 ↓
error
 ↓
catch()
```

---

### Step 5 — Check `setTimeout()`

For common interview questions:

```text
Synchronous
    ↓
Promise microtasks
    ↓
setTimeout callbacks
```

---

# 🔥🔥🔥 Most Important Promise Rules

```text
Promise executor
→ runs immediately


.then()
→ runs as a microtask


.catch()
→ runs as a microtask


.finally()
→ runs as a microtask


return value from .then()
→ goes to next .then()


No return
→ next .then() gets undefined


throw inside .then()
→ creates rejection


Promise.resolve()
→ fulfilled Promise


Promise.reject()
→ rejected Promise
```

## 🧠 Final Memory Trick

```text
new Promise()
     ↓
Executor runs NOW

.then()
.catch()
.finally()
     ↓
Run LATER
     ↓
Microtask Queue
```

And for mixed questions:

```text
Synchronous
     ↓
Microtasks
(Promises)
     ↓
Macrotasks
(setTimeout)
```

### 🔥🔥🔥 Interview Answer

**Promise executors run synchronously when the Promise is created, while `.then()`, `.catch()`, and `.finally()` callbacks are executed asynchronously as microtasks. In output questions, synchronous code runs first, then Promise microtasks are processed, followed by timer callbacks such as `setTimeout()`.**

<!-- ========================== -->
