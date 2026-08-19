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

## 🔥🔥🔥 Predict output involving `async/await`

**`async/await` is a cleaner way to work with Promises. An `async` function always returns a Promise, and `await` pauses that async function until the Promise settles.**

Simple language:

> **`await` poore JavaScript ko pause nahi karta. Sirf current `async` function ka execution temporarily pause hota hai.**

Ye line sabse important hai:

```text id="p7x3km"
await
 ↓
Pause current async function
 ↓
Continue later as a microtask
```

---

# 🔥 1. Basic `async` Function

```js id="m4q8vz"
async function greet() {
  return "Hello";
}

console.log(greet());
```

### Output

```text id="x6n2wp"
Promise { "Hello" }
```

Why?

Because:

> **Every `async` function always returns a Promise.**

Even though we wrote:

```js id="r8k3qm"
return "Hello";
```

JavaScript effectively gives us:

```js id="q5m7xn"
Promise.resolve("Hello");
```

So:

```text id="v9p4kw"
async function
      ↓
always returns Promise
```

---

# 🔥🔥 2. `await` with `Promise.resolve()`

```js id="c7m2qx"
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");
```

### Output

```text id="j8q4vn"
A
C
B
```

This is very important.

Let's execute:

```text id="s3m7kp"
test()
 ↓
"A"
 ↓
A
 ↓
await Promise.resolve()
 ↓
test() pauses
 ↓
C
 ↓
C
 ↓
Promise settles
 ↓
test() continues
 ↓
B
```

Final:

```text id="w6x2qm"
A
C
B
```

---

# 🔥🔥🔥 3. `await` Does NOT Block the Whole JavaScript

This is one of the biggest misconceptions.

```js id="p9k4vz"
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

console.log("C");

test();

console.log("D");
```

### Output

```text id="n5m8wp"
C
A
D
B
```

Why?

First:

```text id="x4q7mz"
console.log("C")
→ C
```

Then:

```text id="j6p3vn"
test()
```

Inside:

```text id="c8m2qx"
console.log("A")
→ A
```

Then:

```js id="w7n4kp"
await Promise.resolve();
```

`test()` pauses.

JavaScript continues with:

```text id="r3q9xm"
console.log("D")
→ D
```

Later:

```text id="v5k8wp"
await finishes
 ↓
B
```

So:

```text id="a2m6zn"
C
A
D
B
```

---

# 🔥🔥 4. Code Before `await` Runs Immediately

```js id="q8m3xp"
async function test() {
  console.log("A");
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

console.log("D");
```

### Output

```text id="k4n7vz"
A
B
D
C
```

Why?

Before `await`:

```text id="w6p2qm"
A
B
```

runs immediately.

After `await`:

```text id="j9x5kp"
C
```

runs later.

So:

```text id="c3m8vn"
A
B
D
C
```

---

# 🔥🔥🔥 5. `await` with a Value

You don't necessarily need to await a Promise.

```js id="m7q2wx"
async function test() {
  console.log("A");

  const value = await 10;

  console.log(value);
}

test();

console.log("B");
```

### Output

```text id="p5k8zn"
A
B
10
```

Why?

`await 10` effectively treats the value like a resolved Promise:

```text id="v3n6qm"
await 10
   ↓
Promise.resolve(10)
   ↓
pause
   ↓
continue later
```

So:

```text id="x8m4wp"
A
B
10
```

---

# 🔥🔥 6. `await` with a Delay

```js id="r9k3vx"
function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

async function test() {
  console.log("A");

  await delay();

  console.log("B");
}

test();

console.log("C");
```

### Output

Immediately:

```text id="j6q2wm"
A
C
```

After approximately 1 second:

```text id="p8m5zn"
B
```

Final order:

```text id="v4k7qx"
A
C
B
```

Remember:

```text id="n3m8wp"
await delay()
      ↓
async function pauses
      ↓
other JavaScript continues
      ↓
timer finishes
      ↓
async function continues
```

---

# 🔥🔥🔥 7. `async/await` vs `setTimeout()`

```js id="q5n9xm"
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

setTimeout(() => {
  console.log("C");
}, 0);

test();

console.log("D");
```

### Output

```text id="w7k3vp"
A
D
B
C
```

Why?

Synchronous:

```text id="m8q4zn"
A
D
```

Then `await` continuation is a microtask:

```text id="r6x2wp"
B
```

Then timer:

```text id="j9m5vk"
C
```

So:

```text id="c3n7qx"
A
D
B
C
```

---

# 🔥🔥🔥 8. `async/await` + Promise

```js id="x4q8wm"
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

Promise.resolve().then(() => {
  console.log("C");
});

test();

console.log("D");
```

### Output

```text id="p7m2vz"
A
D
C
B
```

This one is important.

Initially:

```text id="k5n8qx"
Promise.then()
→ C
```

Then `test()` runs:

```text id="v3q6wm"
A
```

At `await`, `test()` pauses.

Then:

```text id="j8m4kp"
D
```

Now microtasks:

```text id="r2n7vz"
C
B
```

So:

```text id="w6q3xm"
A
D
C
B
```

---

# 🔥🔥🔥 9. Multiple `await`s

```js id="m9x4qp"
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

console.log("D");
```

### Output

```text id="k7p3wn"
A
D
B
C
```

Think:

```text id="s4m8vx"
A
 ↓
await
 ↓
pause
 ↓
D
 ↓
continue
 ↓
B
 ↓
await
 ↓
pause again
 ↓
continue
 ↓
C
```

---

# 🔥🔥🔥 10. `await` Splits the Function

This is a very useful way to solve output questions.

Consider:

```js id="q6n2wm"
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}
```

Think of it approximately as:

```text id="v8m3kp"
Part 1:
A
 ↓
await


Part 2:
B
 ↓
await


Part 3:
C
```

Each `await` can cause the remaining part of the async function to continue later.

---

# 🔥🔥🔥 11. `async` Function + `return`

```js id="p4x7qn"
async function test() {
  return 10;
}

test().then((value) => {
  console.log(value);
});
```

### Output

```text id="m8k3vz"
10
```

Because:

```text id="j6q9wp"
async function
     ↓
return 10
     ↓
Promise resolved with 10
     ↓
then()
     ↓
10
```

---

# 🔥🔥 12. `await` + Returned Value

```js id="w5m2qx"
async function test() {
  const value = await Promise.resolve(10);

  return value * 2;
}

test().then((value) => {
  console.log(value);
});
```

### Output

```text id="r7n4vp"
20
```

Flow:

```text id="c9m3wx"
Promise.resolve(10)
       ↓
await
       ↓
10
       ↓
10 × 2
       ↓
20
       ↓
async function returns Promise<20>
```

---

# 🔥🔥🔥 13. `await` + `throw`

```js id="k8q3mz"
async function test() {
  throw new Error("Failed");
}

test().catch((error) => {
  console.log(error.message);
});
```

### Output

```text id="p5x9wn"
Failed
```

An error thrown inside an `async` function causes the returned Promise to reject.

So:

```text id="v7m2qp"
throw Error
    ↓
async function's Promise rejects
    ↓
catch()
    ↓
Failed
```

---

# 🔥🔥 14. `try/catch` with `await`

```js id="x3n8wm"
async function test() {
  try {
    await Promise.reject("Error");
  } catch (error) {
    console.log(error);
  }
}

test();
```

### Output

```text id="q6m4vp"
Error
```

`await` sees the rejected Promise and throws the rejection inside the async function.

The `catch` handles it.

```text id="j8p2zn"
Promise.reject()
      ↓
await
      ↓
throws
      ↓
catch
      ↓
Error
```

---

# 🔥🔥🔥 15. `await` + `setTimeout()`

```js id="m4q7wx"
async function test() {
  console.log("A");

  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

  console.log("B");
}

test();

console.log("C");
```

### Output

```text id="r8k3vp"
A
C
B
```

Why?

```text id="n6m2qw"
A
 ↓
await timer
 ↓
test pauses
 ↓
C
 ↓
timer finishes
 ↓
Promise resolves
 ↓
test continues
 ↓
B
```

---

# 🔥🔥🔥 16. Famous Interview Question

```js id="q9m3xn"
console.log("1");

async function test() {
  console.log("2");

  await Promise.resolve();

  console.log("3");
}

test();

console.log("4");
```

### Output

```text id="w6k8vp"
1
2
4
3
```

Step-by-step:

```text id="j3m7qx"
1
 ↓
test()
 ↓
2
 ↓
await
 ↓
pause
 ↓
4
 ↓
3
```

Final:

```text id="c5n9wm"
1
2
4
3
```

---

# 🔥🔥🔥 17. `async/await` + Promise + Timer

```js id="v8q4mp"
console.log("A");

async function test() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

setTimeout(() => {
  console.log("D");
}, 0);

test();

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");
```

### Output

```text id="p3m7zn"
A
B
F
C
E
D
```

Let's carefully track it.

### Synchronous:

```text id="r8x2qv"
A
B
F
```

At `await`, `C` is scheduled as a microtask.

Promise `.then()` schedules `E` as another microtask.

So:

```text id="m4n9wp"
Microtask Queue:

C
E
```

Therefore:

```text id="j7k3xm"
C
E
```

Then timer:

```text id="v5q8zn"
D
```

Final:

```text id="c2m6wp"
A
B
F
C
E
D
```

---

# 🔥🔥🔥 18. Multiple Async Functions

```js id="x7n3qm"
async function one() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

async function two() {
  console.log("C");

  await Promise.resolve();

  console.log("D");
}

one();
two();

console.log("E");
```

### Output

```text id="m8q4vp"
A
C
E
B
D
```

Why?

First `one()`:

```text id="j5x2zn"
A
await → continuation scheduled
```

Then `two()`:

```text id="v7m3qw"
C
await → continuation scheduled
```

Then:

```text id="k9p4xm"
E
```

Microtask queue:

```text id="r6n8vp"
B
D
```

So:

```text id="c3m7qz"
A
C
E
B
D
```

---

# 🔥🔥🔥 19. `await` with a Normal Value

```js id="n4x8wp"
async function test() {
  console.log("A");

  const value = await 100;

  console.log(value);
}

test();

console.log("B");
```

### Output

```text id="p7m2vq"
A
B
100
```

Even though `100` is not a Promise, `await` still causes the async function to continue later.

Think:

```text id="s5k9xn"
await 100
   ↓
Promise.resolve(100)
   ↓
pause
   ↓
B
   ↓
100
```

---

# 🔥🔥🔥 20. Very Important Mixed Question

Predict:

```js id="m8q3wx"
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

async function test() {
  console.log("3");

  await Promise.resolve();

  console.log("4");
}

test();

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");
```

### Output

```text id="q7n4vp"
1
3
6
4
5
2
```

### Step 1 — Synchronous

```text id="c6m2xq"
1
3
6
```

### Step 2 — Microtasks

When `test()` reached `await`:

```text id="v8k3wp"
4
```

was scheduled.

Then:

```js id="s5m9xn"
Promise.resolve().then(...)
```

scheduled:

```text id="j2q7mv"
5
```

So:

```text id="r4n8xp"
4
5
```

### Step 3 — Timer

Finally:

```text id="m6k3qz"
2
```

Final:

```text id="x9p4wn"
1
3
6
4
5
2
```

---

# 🧠 How to Solve `async/await` Output Questions

Whenever you see `async/await`, follow these rules.

### Rule 1 — `async` function starts synchronously

```js id="c7m2qx"
async function test() {
  console.log("A");

  await something;

  console.log("B");
}
```

`A` runs immediately when `test()` is called.

---

### Rule 2 — `await` pauses only the async function

```text id="v8n4wp"
await
 ↓
Current async function pauses
 ↓
JavaScript can continue other work
```

It does **not** freeze the whole program.

---

### Rule 3 — Code after `await` continues later

```js id="q3m7xn"
await Promise.resolve();

console.log("B");
```

Think:

```text id="j6k2vp"
await
 ↓
pause
 ↓
microtask
 ↓
B
```

---

### Rule 4 — `async` always returns a Promise

```js id="w5m8qx"
async function test() {
  return 10;
}
```

means the caller gets a Promise that fulfills with `10`.

---

### Rule 5 — Rejection behaves like an error

```js id="p7n3zm"
async function test() {
  await Promise.reject("Error");
}
```

The async function's returned Promise becomes rejected.

---

# 🔥🔥🔥 The Most Important Mental Model

Don't think:

```text id="z8m4qx"
await = stop JavaScript ❌
```

Think:

```text id="k5n7wp"
await
  ↓
pause THIS async function
  ↓
continue later
```

And for output questions:

```text id="q3m9vx"
Synchronous part of async function
          ↓
        await
          ↓
Other synchronous code
          ↓
Promise microtasks / async continuation
          ↓
setTimeout macrotasks
```

### 🧠 One-Line Memory Trick

```text id="v7m2qz"
async → always returns Promise

await → pauses only async function

code after await → runs later as a microtask
```

### 🔥🔥🔥 Interview Answer

**`async` functions always return Promises. When execution reaches `await`, the current async function pauses and the code after `await` continues later as a microtask when the awaited Promise settles. `await` does not block the entire JavaScript thread; other synchronous code can continue executing.**

<!-- =========================== -->

Bilkul. Nested Promises mein main confusion ye hota hai ki ek .then() ke andar doosra Promise ban raha hai, aur uske callbacks microtask queue mein kis order mein ja rahe hain.

Sabse important rule:

Ek Promise callback ke andar agar doosra Promise callback schedule hota hai, to wo queue mein add hota hai. Pehle se queue mein waiting microtasks usse pehle run kar sakte hain.

## 🔥🔥🔥 Predict output involving nested Promises

**Nested Promises mean that one Promise or Promise callback creates, returns, or waits for another Promise.**

Simple language:

> **Ek Promise ke andar agar hum doosra Promise use karte hain, to hume dekhna hota hai ki inner Promise kab create/run hoga aur uska callback microtask queue mein kis position par jayega.**

---

## 🔥 1. Basic Nested Promise

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
});
```

### Output

```text
A
B
```

Why?

First Promise callback runs:

```text
A
```

Then inside `A`, another Promise callback is created:

```text
B
```

So:

```text
First Promise
     ↓
A
     ↓
Inner Promise
     ↓
B
```

Final:

```text
A
B
```

---

# 🔥🔥 2. Nested Promise + Another Promise

Now this becomes interesting:

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

### Why?

Initially microtask queue:

```text
A
C
```

First `A` runs:

```text
A
```

During `A`, inner Promise `B` is added to the queue.

Queue becomes:

```text
C
B
```

So:

```text
C
```

runs first.

Then:

```text
B
```

Therefore:

```text
A
C
B
```

### 🧠 Important

> **New microtasks are added to the end of the existing microtask queue.**

---

# 🔥🔥🔥 3. Three Levels of Nested Promises

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");

    Promise.resolve().then(() => {
      console.log("C");
    });
  });
});
```

### Output

```text
A
B
C
```

Because each inner Promise is created by the previous callback:

```text
A
 ↓
create B
 ↓
B
 ↓
create C
 ↓
C
```

---

# 🔥🔥🔥 4. Nested Promise with a Sibling Promise

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });

  console.log("C");
});

Promise.resolve().then(() => {
  console.log("D");
});
```

### Output

```text
A
C
D
B
```

This is a very good interview question.

### Step-by-step

Initially:

```text
Microtask Queue:

1. First Promise → A
2. Second Promise → D
```

First microtask runs:

```text
A
C
```

During `A`, inner Promise `B` is added.

Queue now:

```text
D
B
```

So:

```text
D
B
```

Final:

```text
A
C
D
B
```

---

# 🔥🔥 5. Nested Promise with `return`

Now look carefully:

```js
Promise.resolve()
  .then(() => {
    console.log("A");

    return Promise.resolve("B");
  })
  .then((value) => {
    console.log(value);
  });
```

### Output

```text
A
B
```

Why?

First `.then()`:

```text
A
```

returns:

```js
Promise.resolve("B");
```

The next `.then()` waits for that returned Promise.

Then:

```text
B
```

is received.

Think:

```text
Promise
  ↓
then()
  ↓
A
  ↓
return Promise("B")
  ↓
next then
  ↓
B
```

---

# 🔥🔥🔥 6. Returned Promise vs Separate Promise

Compare these two carefully.

### Case 1 — Returning the Promise

```js
Promise.resolve()
  .then(() => {
    console.log("A");

    return Promise.resolve("B");
  })
  .then((value) => {
    console.log(value);
  });
```

Output:

```text
A
B
```

---

### Case 2 — Not Returning the Promise

```js
Promise.resolve()
  .then(() => {
    console.log("A");

    Promise.resolve("B").then((value) => {
      console.log(value);
    });
  })
  .then(() => {
    console.log("C");
  });
```

### Output

```text
A
B
C
```

This looks simple, but the important difference is:

```text
return Promise
→ chain waits for it


No return
→ outer chain doesn't wait for it
```

---

# 🔥🔥🔥 7. The Important Output Trap

Look at this:

```js
Promise.resolve()
  .then(() => {
    console.log("A");

    Promise.resolve().then(() => {
      console.log("B");
    });

    return Promise.resolve();
  })
  .then(() => {
    console.log("C");
  });
```

### Output

```text
A
B
C
```

But internally, there are multiple Promise reactions being scheduled.

The important thing is:

```text
A
 ↓
inner B gets scheduled
 ↓
returned Promise is adopted
 ↓
B runs
 ↓
outer chain continues
 ↓
C
```

---

# 🔥🔥🔥 8. Nested Promise + `setTimeout()`

```js
Promise.resolve().then(() => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

  Promise.resolve().then(() => {
    console.log("C");
  });
});

console.log("D");
```

### Output

```text
D
A
C
B
```

Why?

### Synchronous:

```text
D
```

### First Promise:

```text
A
```

During `A`:

```text
setTimeout → B
Promise → C
```

`C` is a microtask, so it runs before the timer:

```text
C
```

Then:

```text
B
```

Final:

```text
D
A
C
B
```

---

# 🔥🔥🔥 9. Nested Promise Inside `setTimeout()`

Now reverse it:

```js
setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});
```

### Output

```text
C
A
B
```

Why?

Initially:

```text
Microtask:
C

Macrotask:
A
```

Microtask runs first:

```text
C
```

Then timer:

```text
A
```

During `A`, Promise `B` is created.

Microtask queue now contains:

```text
B
```

So:

```text
B
```

runs before another macrotask.

Final:

```text
C
A
B
```

---

# 🔥🔥🔥 10. Nested Promise + Two Sibling Promises

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
});

Promise.resolve().then(() => {
  console.log("C");

  Promise.resolve().then(() => {
    console.log("D");
  });
});
```

### Output

```text
A
C
B
D
```

Let's track the queue.

Initially:

```text
A
C
```

Run `A`:

```text
A
```

`B` gets added:

```text
C
B
```

Run `C`:

```text
C
```

`D` gets added:

```text
B
D
```

Then:

```text
B
D
```

Final:

```text
A
C
B
D
```

---

# 🔥🔥🔥 11. Nested Promise Chain

```js
Promise.resolve()
  .then(() => {
    console.log("A");

    return Promise.resolve();
  })
  .then(() => {
    console.log("B");

    return Promise.resolve();
  })
  .then(() => {
    console.log("C");
  });
```

### Output

```text
A
B
C
```

Each returned Promise allows the next `.then()` to continue.

Think:

```text
A
 ↓
return Promise
 ↓
B
 ↓
return Promise
 ↓
C
```

---

# 🔥🔥🔥 12. Nested Promise + Existing Microtask

This is one of the best interview questions:

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

Promise.resolve().then(() => {
  console.log("D");
});
```

### Output

```text
A
C
D
B
```

### Queue tracking

Initially:

```text
A
C
D
```

After `A` runs:

```text
C
D
B
```

Then:

```text
C
D
B
```

So final:

```text
A
C
D
B
```

### 🧠 Key idea

The inner `B` does **not jump ahead** of `C` and `D`.

It is added to the end of the queue.

---

# 🔥🔥🔥 13. Nested Promise + `await`

Since `await` works with Promises, you can also see this:

```js
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");

  await Promise.resolve();

  console.log("C");
}

test();

console.log("D");
```

### Output

```text
A
D
B
C
```

Think of `await` as:

```text
await
 ↓
pause current async function
 ↓
continue later
```

So:

```text
A
 ↓
await
 ↓
D
 ↓
B
 ↓
await
 ↓
C
```

---

# 🔥🔥🔥 14. Nested Promise + `async/await`

```js
async function test() {
  console.log("A");

  await Promise.resolve();

  Promise.resolve().then(() => {
    console.log("B");
  });

  console.log("C");
}

test();

console.log("D");
```

### Output

```text
A
D
C
B
```

Why?

`test()` reaches `await` and pauses.

So:

```text
A
D
```

Then async function continues:

```text
C
```

Inside that continuation, Promise `B` is scheduled.

Therefore:

```text
B
```

runs after `C`.

Final:

```text
A
D
C
B
```

---

# 🔥🔥🔥 15. Famous Complex Nested Promise Question

Predict:

```js
console.log("1");

Promise.resolve().then(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

  console.log("4");
});

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");
```

### Output

```text
1
6
2
4
5
3
```

### Step-by-step

### Synchronous code

```text
1
6
```

Initial microtask queue:

```text
2
5
```

First microtask:

```text
2
4
```

During `2`, inner Promise `3` is added.

Queue becomes:

```text
5
3
```

So:

```text
5
3
```

Final:

```text
1
6
2
4
5
3
```

---

# 🔥🔥🔥 16. The Most Important Nested Promise Pattern

Whenever you see:

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

Don't think:

```text
A
B
C
```

Instead track the queue:

```text
Initial:

A
C


After A runs:

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

# 🧠 How to Solve Nested Promise Questions

Don't try to memorize outputs.

Use this method.

### Step 1 — Find the initial microtasks

Example:

```js
Promise.resolve().then(A);

Promise.resolve().then(C);
```

Initial queue:

```text
A
C
```

---

### Step 2 — Run the first microtask

If `A` creates:

```js
Promise.resolve().then(B);
```

then `B` is added to the **end**.

Queue:

```text
C
B
```

---

### Step 3 — Continue until the queue is empty

```text
C
 ↓
B
```

---

### Step 4 — If `setTimeout()` exists

After the current microtask queue is drained, the timer can run.

Remember:

```text
Microtasks
    ↓
Macrotask
    ↓
Microtasks again
```

---

# 🔥🔥🔥 Most Important Rules

```text
Nested Promise
      ↓
Creates another Promise/callback
      ↓
Its callback becomes another microtask
```

```text
New microtask
      ↓
Added to the end of the current microtask queue
```

```text
return Promise
      ↓
Next .then() waits for/adopts that Promise
```

```text
No return
      ↓
Outer chain doesn't wait for that Promise
```

```text
Promise inside setTimeout
      ↓
Promise microtask runs before the next macrotask
```

---

# 🧠 Final Mental Model

Imagine the microtask queue as a **line of people**:

```text
Queue:

[A] [C] [D]
```

`A` comes forward:

```text
A runs
```

During `A`, a new person `B` joins:

```text
[C] [D] [B]
```

So `B` does **not** go directly next.

It waits behind the people who were already in the queue.

That's why:

```text
A
C
D
B
```

### 🔥🔥🔥 Interview Answer

**Nested Promises create additional Promise callbacks that are placed into the microtask queue. When a new microtask is created while another microtask is running, it is normally added to the end of the current microtask queue. Therefore, existing microtasks can execute before the newly created nested Promise callback.**

<!-- =========================== -->

Bilkul. Ye JavaScript interviews ka bahut famous output question hai, especially var + loop + setTimeout().

Sabse important rule:

var function-scoped hota hai, isliye loop ke saare callbacks same i variable ko refer karte hain.

## 🔥🔥🔥 Predict output involving `var` inside a loop

`var` is **function-scoped**, not block-scoped.

Jab `var` ko loop ke andar use karte hain, to loop ki har iteration ke liye normally **same variable** use hota hai.

Ye especially important hota hai jab loop ke andar callback, `setTimeout()`, Promise, ya closure use ho.

---

## 🔥 1. Basic `var` Loop

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}
```

### Output

```text
0
1
2
```

Yahan koi asynchronous code nahi hai.

Har iteration mein `console.log(i)` immediately execute hota hai:

```text
i = 0 → print 0
i = 1 → print 1
i = 2 → print 2
i = 3 → loop ends
```

So:

```text
0
1
2
```

---

# 🔥🔥 2. `var` + `setTimeout()`

Ab famous question:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

Approximately 1 second later:

```text
3
3
3
```

### Why?

Ye samajhna **bahut important** hai.

Loop immediately complete ho jata hai:

```text
i = 0
 ↓
i = 1
 ↓
i = 2
 ↓
i = 3
 ↓
loop ends
```

`setTimeout()` ke callbacks tab tak execute nahi hue.

Jab callbacks finally execute hote hain:

```text
i = 3
```

Aur teeno callbacks **same `i` variable** ko refer kar rahe hain.

So:

```text
Callback 1 → i → 3
Callback 2 → i → 3
Callback 3 → i → 3
```

Therefore:

```text
3
3
3
```

---

# 🔥🔥🔥 3. Why Does `var` Cause This?

Because:

```js
for (var i = 0; i < 3; i++) {
  ...
}
```

`var` **block-scoped nahi hai**.

Loop ki har iteration ke liye:

```text
❌ New i
❌ New i
❌ New i
```

nahi banta.

Instead:

```text
✅ One shared i
```

hota hai.

Think:

```text
            ┌─────────────┐
            │  same i     │
            └──────┬──────┘
                   │
          ┌────────┼────────┐
          ↓        ↓        ↓
      Callback  Callback  Callback
          1        2        3
```

Teeno callbacks same variable ko access karte hain.

---

# 🔥🔥 4. `var` vs `let`

Same code ko `let` ke saath dekho:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

```text
0
1
2
```

Difference:

```text
var
 ↓
one shared i
 ↓
3 3 3
```

Whereas:

```text
let
 ↓
separate i for each iteration
 ↓
0 1 2
```

### 🧠 Remember

```text
var → shared variable

let → separate binding for each loop iteration
```

---

# 🔥🔥🔥 5. `var` + Closure

`setTimeout()` example actually involves a **closure**.

```js
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}

test();
```

### Output

```text
3
3
3
```

Why?

Each arrow function remembers/accesses the outer `i`.

But there is only **one `i`**:

```text
test()
 ↓
i = 0
 ↓
i = 1
 ↓
i = 2
 ↓
i = 3
 ↓
callbacks execute
```

So every callback gets:

```text
3
```

---

# 🔥🔥🔥 6. Important Trap — Callback Doesn't Save the Value

Many beginners think:

```text
First iteration → i = 0 → callback saves 0
Second iteration → i = 1 → callback saves 1
Third iteration → i = 2 → callback saves 2
```

❌ With `var`, this is not what happens.

The callback closes over the **variable**, not a snapshot of its value.

Think:

```text
Callback
   ↓
"Give me the current value of i"
   ↓
When callback runs:
i = 3
   ↓
3
```

All three callbacks ask for the same `i`.

---

# 🔥🔥🔥 7. `var` + `setTimeout()` with Different Delays

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

### Output

Approximately:

```text
3
3
3
```

The delays are different:

```text
i = 0 → delay 0 ms
i = 1 → delay 1000 ms
i = 2 → delay 2000 ms
```

But when each callback executes, they all use the same `i`.

The loop has already finished:

```text
i = 3
```

So approximately:

```text
0 sec → 3
1 sec → 3
2 sec → 3
```

---

# 🔥🔥🔥 8. `var` + `setTimeout()` + Immediate Log

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Timeout:", i);
  }, 0);

  console.log("Loop:", i);
}
```

### Output

```text
Loop: 0
Loop: 1
Loop: 2
Timeout: 3
Timeout: 3
Timeout: 3
```

Why?

The loop's normal `console.log()` is synchronous:

```text
Loop: 0
Loop: 1
Loop: 2
```

Then the loop finishes:

```text
i = 3
```

After that, the timers run:

```text
Timeout: 3
Timeout: 3
Timeout: 3
```

---

# 🔥🔥🔥 9. `var` + Function Inside Loop

```js
var functions = [];

for (var i = 0; i < 3; i++) {
  functions.push(function () {
    console.log(i);
  });
}

functions[0]();
functions[1]();
functions[2]();
```

### Output

```text
3
3
3
```

Why?

Again, all functions close over the **same `i`**.

After the loop:

```text
i = 3
```

Then:

```text
functions[0]() → 3
functions[1]() → 3
functions[2]() → 3
```

---

# 🔥🔥🔥 10. `var` + IIFE Fix

Before `let` became common, developers often used an **IIFE** to create a separate scope.

```js
for (var i = 0; i < 3; i++) {
  (function (value) {
    setTimeout(() => {
      console.log(value);
    }, 0);
  })(i);
}
```

### Output

```text
0
1
2
```

Why?

Each IIFE gets a separate parameter:

```text
First call  → value = 0
Second call → value = 1
Third call  → value = 2
```

So each callback remembers its own `value`.

```text
i = 0 → value = 0 → callback → 0

i = 1 → value = 1 → callback → 1

i = 2 → value = 2 → callback → 2
```

---

# 🔥🔥 11. Another Way to Fix It — `let`

Modern JavaScript mein simply:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```text
0
1
2
```

This is generally the cleaner solution.

---

# 🔥🔥🔥 12. `var` Inside a Block

Remember, `var` is not block-scoped.

```js
{
  var a = 10;
}

console.log(a);
```

### Output

```text
10
```

The block:

```js
{
  ...
}
```

doesn't create a separate scope for `var`.

---

# 🔥🔥🔥 13. `var` Inside `if`

```js
if (true) {
  var name = "Ajay";
}

console.log(name);
```

### Output

```text
Ajay
```

Again:

```text
if block
   ↓
var does not get block scope
   ↓
name is accessible outside
```

---

# 🔥🔥🔥 14. `var` Loop + Promise

Now combine `var` with Promise:

```js
for (var i = 0; i < 3; i++) {
  Promise.resolve().then(() => {
    console.log(i);
  });
}
```

### Output

```text
3
3
3
```

Why?

The loop completes synchronously:

```text
i = 3
```

Then the Promise callbacks run as microtasks.

All callbacks access the same `i`.

Therefore:

```text
3
3
3
```

---

# 🔥🔥🔥 15. `var` + Promise + `setTimeout()`

```js
for (var i = 0; i < 3; i++) {
  Promise.resolve().then(() => {
    console.log("Promise:", i);
  });

  setTimeout(() => {
    console.log("Timeout:", i);
  }, 0);
}
```

### Output

```text
Promise: 3
Promise: 3
Promise: 3
Timeout: 3
Timeout: 3
Timeout: 3
```

Why?

First loop completes:

```text
i = 3
```

Then microtasks:

```text
Promise: 3
Promise: 3
Promise: 3
```

Then timers:

```text
Timeout: 3
Timeout: 3
Timeout: 3
```

---

# 🔥🔥🔥 16. Important Output Question

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}

console.log("End");
```

### Output

Immediately:

```text
End
```

Then approximately:

```text
3
3
3
```

So overall:

```text
End
3
3
3
```

The important point is that **the delay changes when callbacks become eligible, but it does not create separate `i` variables.**

---

# 🧠 How to Solve `var` + Loop Questions

Whenever you see:

```js
for (var i = 0; ...)
```

and there is a callback inside, immediately ask:

### Question 1

**Is the callback running immediately?**

If yes:

```js
console.log(i);
```

then you'll see:

```text
0
1
2
```

---

### Question 2

**Is the callback running later?**

For example:

```js
setTimeout(...)
```

or:

```js
Promise.then(...)
```

Then the loop may finish first.

With `var`:

```text
i = 3
```

So callbacks usually print:

```text
3
3
3
```

---

# 🔥🔥🔥 Golden Pattern

### Synchronous callback

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:

```text
0
1
2
```

### Asynchronous callback

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Output:

```text
3
3
3
```

This difference is **extremely important**.

---

# 🧠 Final Memory Trick

```text
var + loop + immediate execution
        ↓
0 1 2


var + loop + delayed callback
        ↓
same shared i
        ↓
loop finishes
        ↓
i = 3
        ↓
3 3 3
```

And compare:

```text
let + loop + delayed callback
        ↓
separate i per iteration
        ↓
0 1 2
```

### 🔥🔥🔥 Interview Answer

**`var` is function-scoped, so a loop using `var` normally creates one shared loop variable. If callbacks execute after the loop finishes, all callbacks reference that same variable, whose final value is usually `3` for a loop running from `0` to `2`. This is why `var` with `setTimeout()` commonly prints `3 3 3`, while `let` prints `0 1 2`.**

<!-- =========================== -->

Bilkul. Ye var wale question ka exact opposite pattern hai. Yahan sabse important rule hai:

let is block-scoped, and in a for loop JavaScript creates a separate binding of i for each iteration.

Isliye setTimeout() ya closure ke saath let use karne par har callback apni iteration ka value remember karta hai.

## 🔥🔥🔥 Predict output involving `let` inside a loop

`let` is **block-scoped**.

When `let` is used in a `for` loop, each iteration gets its own binding of the loop variable.

This becomes very important when the loop contains:

```text
setTimeout()
Promise
callbacks
closures
```

Simple rule:

```text
var
→ one shared variable

let
→ separate variable for each iteration
```

---

# 🔥 1. Basic `let` Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### Output

```text
0
1
2
```

This is straightforward.

Each iteration:

```text
i = 0 → print 0
i = 1 → print 1
i = 2 → print 2
```

---

# 🔥🔥 2. `let` + `setTimeout()`

This is the most important example.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

After approximately 1 second:

```text
0
1
2
```

Why?

Unlike `var`, `let` creates a separate binding for each iteration.

Think:

```text
Iteration 1
i = 0
   ↓
Callback remembers this i


Iteration 2
i = 1
   ↓
Callback remembers this i


Iteration 3
i = 2
   ↓
Callback remembers this i
```

So:

```text
Callback 1 → 0
Callback 2 → 1
Callback 3 → 2
```

Final:

```text
0
1
2
```

---

# 🔥🔥🔥 3. Compare `var` and `let`

### `var`

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```text
3
3
3
```

### `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```text
0
1
2
```

### 🧠 Main Difference

```text
var
 ↓
same i
 ↓
3 3 3


let
 ↓
separate i
 ↓
0 1 2
```

---

# 🔥🔥🔥 4. Why Does `let` Work Differently?

Consider:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

You can mentally think of it like this:

```text
Iteration 1
┌──────────────┐
│ i = 0        │
│ callback → 0 │
└──────────────┘

Iteration 2
┌──────────────┐
│ i = 1        │
│ callback → 1 │
└──────────────┘

Iteration 3
┌──────────────┐
│ i = 2        │
│ callback → 2 │
└──────────────┘
```

Each callback has access to the `i` belonging to its iteration.

---

# 🔥🔥 5. `let` + Closure

```js
const functions = [];

for (let i = 0; i < 3; i++) {
  functions.push(() => {
    console.log(i);
  });
}

functions[0]();
functions[1]();
functions[2]();
```

### Output

```text
0
1
2
```

Why?

Each iteration has its own `i`.

```text
Iteration 1 → i = 0 → function remembers 0

Iteration 2 → i = 1 → function remembers 1

Iteration 3 → i = 2 → function remembers 2
```

So:

```text
functions[0]() → 0
functions[1]() → 1
functions[2]() → 2
```

---

# 🔥🔥🔥 6. `let` + Promise

The same behavior happens with Promises.

```js
for (let i = 0; i < 3; i++) {
  Promise.resolve().then(() => {
    console.log(i);
  });
}
```

### Output

```text
0
1
2
```

Why?

The loop finishes first:

```text
i = 0
i = 1
i = 2
```

But each Promise callback has access to its own iteration's `i`.

So when microtasks execute:

```text
Callback 1 → 0
Callback 2 → 1
Callback 3 → 2
```

Output:

```text
0
1
2
```

---

# 🔥🔥🔥 7. `let` + `setTimeout()` + Immediate Log

```js
for (let i = 0; i < 3; i++) {
  console.log("Loop:", i);

  setTimeout(() => {
    console.log("Timeout:", i);
  }, 0);
}
```

### Output

```text
Loop: 0
Loop: 1
Loop: 2
Timeout: 0
Timeout: 1
Timeout: 2
```

Why?

The synchronous logs execute first:

```text
Loop: 0
Loop: 1
Loop: 2
```

Then the timer callbacks execute:

```text
Timeout: 0
Timeout: 1
Timeout: 2
```

Each callback has its own `i`.

---

# 🔥🔥 8. Different Delays with `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

### Output

Approximately:

```text
0 seconds → 0
1 second  → 1
2 seconds → 2
```

So:

```text
0
1
2
```

The important point is that each callback has its own `i`.

---

# 🔥🔥🔥 9. `let` + `setTimeout()` + Different Values

```js
for (let i = 0; i < 3; i++) {
  setTimeout(
    () => {
      console.log("Value:", i);
    },
    (2 - i) * 1000,
  );
}
```

Let's calculate the delays:

```text
i = 0 → 2000 ms
i = 1 → 1000 ms
i = 2 → 0 ms
```

### Output order

Approximately:

```text
Value: 2
Value: 1
Value: 0
```

Notice something important:

> `let` controls **which value** each callback sees. It does not control **when** the callback runs.

The delays decide the order here.

---

# 🔥🔥🔥 10. `let` + Multiple Functions

```js
const functions = [];

for (let i = 0; i < 3; i++) {
  functions.push(() => i);
}

console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
```

### Output

```text
0
1
2
```

Each function closes over its own iteration's variable.

```text
functions[0] → i = 0
functions[1] → i = 1
functions[2] → i = 2
```

---

# 🔥🔥🔥 11. `let` Inside a Block

Remember that `let` is block-scoped.

```js
{
  let i = 10;

  console.log(i);
}

console.log(i);
```

### Output

First:

```text
10
```

Then:

```text
ReferenceError
```

Because `i` only exists inside the block.

```text
{
   let i = 10;
}
     ↓
block ends
     ↓
i is not accessible here
```

---

# 🔥🔥 12. `let` in `for` Loop Is Block-Scoped

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

### Output

```text
0
1
2
ReferenceError
```

The loop variable `i` is not accessible outside the loop.

---

# 🔥🔥🔥 13. `let` + Nested Function

```js
for (let i = 0; i < 3; i++) {
  function print() {
    console.log(i);
  }

  print();
}
```

### Output

```text
0
1
2
```

Each iteration has its own `i`.

---

# 🔥🔥🔥 14. `let` + Nested Promise + `setTimeout()`

```js
for (let i = 0; i < 3; i++) {
  Promise.resolve().then(() => {
    console.log("Promise:", i);
  });

  setTimeout(() => {
    console.log("Timeout:", i);
  }, 0);
}
```

### Output

```text
Promise: 0
Promise: 1
Promise: 2
Timeout: 0
Timeout: 1
Timeout: 2
```

Why?

First, the loop finishes.

Then:

```text
Microtasks:
Promise: 0
Promise: 1
Promise: 2
```

Then timers:

```text
Timeout: 0
Timeout: 1
Timeout: 2
```

And because `let` creates a separate binding for each iteration, each callback gets its own value.

---

# 🔥🔥🔥 15. Important Trap — `let` Doesn't Always Mean 0, 1, 2

Look at this:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(
    () => {
      console.log(i);
    },
    (2 - i) * 1000,
  );
}
```

Output:

```text
2
1
0
```

Why?

Not because `let` changed the values.

The values are still:

```text
Callback 1 → 0
Callback 2 → 1
Callback 3 → 2
```

But delays are:

```text
0 → 2000ms
1 → 1000ms
2 → 0ms
```

So execution order becomes:

```text
2
1
0
```

### 🧠 Important

```text
let → controls which value callback remembers

delay → controls when callback executes
```

---

# 🔥🔥🔥 16. Famous Interview Question

Predict:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log("Done");
```

### Output

Immediately:

```text
Done
```

Then approximately one second later:

```text
0
1
2
```

Overall:

```text
Done
0
1
2
```

Why?

Synchronous code:

```text
Done
```

Then timer callbacks:

```text
0
1
2
```

---

# 🔥🔥🔥 17. `let` + Closure + Changing Variable

This is an important concept.

```js
let fn;

for (let i = 0; i < 3; i++) {
  fn = () => {
    console.log(i);
  };
}

fn();
```

### Output

```text
2
```

Why?

`fn` is assigned on every iteration:

```text
Iteration 1 → fn remembers i = 0

Iteration 2 → fn remembers i = 1

Iteration 3 → fn remembers i = 2
```

After the loop, `fn` refers to the function created during the last iteration.

That function remembers:

```text
i = 2
```

So:

```text
2
```

---

# 🔥🔥🔥 18. `let` + `var` Together

```js
for (var i = 0; i < 3; i++) {
  let value = i;

  setTimeout(() => {
    console.log(value);
  }, 0);
}
```

### Output

```text
0
1
2
```

Why?

Even though the loop uses:

```js
var i;
```

we create a new:

```js
let value = i;
```

inside every iteration.

So:

```text
Iteration 1 → value = 0
Iteration 2 → value = 1
Iteration 3 → value = 2
```

The callbacks close over `value`, not directly over `i`.

---

# 🧠 `var` vs `let` — Final Comparison

### `var`

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```text
3
3
3
```

Because:

```text
One shared i
```

---

### `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

Output:

```text
0
1
2
```

Because:

```text
Separate i for each iteration
```

---

# 🧠 How to Solve `let` Loop Questions

Whenever you see:

```js
for (let i = 0; ...)
```

and a callback is involved, remember:

### Step 1

Ask:

> Does the callback execute later?

If yes, don't worry that the loop will change `i` to `3`.

### Step 2

Remember:

```text
let
 ↓
separate binding per iteration
```

### Step 3

Match each callback with its iteration:

```text
Callback 1 → i = 0
Callback 2 → i = 1
Callback 3 → i = 2
```

### Step 4

Then check the timing.

```text
let
→ decides the value


setTimeout delay
→ decides when it executes
```

---

# 🔥🔥🔥 Golden Pattern

### `var`

```text
for (var i = 0; i < 3; i++)
        ↓
one shared i
        ↓
callbacks run later
        ↓
i = 3
        ↓
3 3 3
```

### `let`

```text
for (let i = 0; i < 3; i++)
        ↓
separate i per iteration
        ↓
callbacks run later
        ↓
0 1 2
```

### 🧠 One-Line Memory Trick

```text
var + async callback → final/shared value

let + async callback → iteration-specific value
```

### 🔥🔥🔥 Interview Answer

**When `let` is used in a `for` loop, JavaScript creates a separate binding for the loop variable for each iteration. Therefore, callbacks such as `setTimeout()` or Promise callbacks can access the value from their specific iteration. This is why `for (let i = 0; i < 3; i++)` with delayed callbacks typically prints `0 1 2`, unlike `var`, which typically prints `3 3 3`.**

<!-- =========================== -->

Bilkul. Object references ke output questions mein sabse important concept hai:

Objects ko variable mein directly store nahi kiya jata; variable object ka reference hold karta hai.

Isliye agar do variables same object ko refer kar rahe hain, ek variable se object change karne par doosre variable se bhi changed value dikhegi.

## 🔥🔥 Predict output involving object references

**Objects in JavaScript are reference values. When an object is assigned to another variable, both variables can refer to the same object in memory.**

Simple language:

> **Object copy karne par hamesha naya object nahi banta. Kabhi-kabhi dono variables same object ko point kar rahe hote hain.**

---

# 🔥 1. Basic Object Reference

```js
const user1 = {
  name: "Ajay",
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);
```

### Output

```text
Rahul
Rahul
```

Why?

Ye line:

```js
const user2 = user1;
```

**new object nahi banati.**

Instead:

```text
user1 ──────┐
            ↓
        { name: "Ajay" }
            ↑
user2 ──────┘
```

Both variables same object ko refer kar rahe hain.

Then:

```js
user2.name = "Rahul";
```

same object change hota hai.

So:

```text
user1.name → Rahul
user2.name → Rahul
```

---

# 🔥🔥 2. Primitive vs Object

Ye difference bahut important hai.

### Primitive

```js
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

### Output

```text
10
20
```

Because `b = a` ke baad `b` ko separate value milti hai.

---

### Object

```js
let a = {
  value: 10,
};

let b = a;

b.value = 20;

console.log(a.value);
console.log(b.value);
```

### Output

```text
20
20
```

Because both variables same object ko refer karte hain.

### 🧠 Remember

```text
Primitive
→ value

Object
→ reference
```

---

# 🔥🔥 3. Changing the Object

```js
const user = {
  name: "Ajay",
  age: 25,
};

const copy = user;

copy.age = 30;

console.log(user);
```

### Output

```text
{
  name: "Ajay",
  age: 30
}
```

Why?

`copy` koi independent copy nahi hai.

```text
user ────┐
         ↓
      Object
         ↑
copy ────┘
```

---

# 🔥🔥 4. Changing the Variable vs Changing the Object

This is a very important distinction.

```js
let user1 = {
  name: "Ajay",
};

let user2 = user1;

user2 = {
  name: "Rahul",
};

console.log(user1.name);
console.log(user2.name);
```

### Output

```text
Ajay
Rahul
```

Why?

Initially:

```text
user1 ────┐
          ↓
      { Ajay }
          ↑
user2 ────┘
```

Then:

```js
user2 = {
  name: "Rahul",
};
```

Now `user2` ko **new object** mil gaya.

```text
user1 ─────→ { name: "Ajay" }

user2 ─────→ { name: "Rahul" }
```

So changing the variable's reference is different from changing the object.

---

# 🔥🔥🔥 5. Same Object or Different Object?

```js
const user1 = {
  name: "Ajay",
};

const user2 = user1;

console.log(user1 === user2);
```

### Output

```text
true
```

Because both refer to the same object.

---

Now:

```js
const user1 = {
  name: "Ajay",
};

const user2 = {
  name: "Ajay",
};

console.log(user1 === user2);
```

### Output

```text
false
```

Even though their contents are identical.

Why?

They are two different objects.

```text
user1 → Object A

user2 → Object B
```

So:

```text
Object A !== Object B
```

---

# 🔥🔥🔥 6. Same Content Doesn't Mean Same Object

```js
const a = {
  value: 10,
};

const b = {
  value: 10,
};

console.log(a === b);
```

### Output

```text
false
```

JavaScript compares object references, not their contents.

```text
a → Object 1

b → Object 2
```

Even though:

```text
Object 1 = { value: 10 }
Object 2 = { value: 10 }
```

they are different objects.

---

# 🔥🔥 7. Function Parameter with Object

This is a common interview question.

```js
function changeUser(user) {
  user.name = "Rahul";
}

const user = {
  name: "Ajay",
};

changeUser(user);

console.log(user.name);
```

### Output

```text
Rahul
```

Why?

The function receives a reference to the same object.

```text
user outside
     ↓
   Object
     ↑
user inside function
```

So:

```js
user.name = "Rahul";
```

changes the original object.

---

# 🔥🔥 8. Reassigning Function Parameter

Now look carefully:

```js
function changeUser(user) {
  user = {
    name: "Rahul",
  };
}

const user = {
  name: "Ajay",
};

changeUser(user);

console.log(user.name);
```

### Output

```text
Ajay
```

Why?

Inside the function:

```js
user = {
  name: "Rahul",
};
```

doesn't change the original object.

It makes the **local parameter** point to a new object.

Think:

```text
Before:

outside user ───→ Object A
                    Ajay


Inside function:

local user ──────→ Object A

then:

local user ──────→ Object B
                    Rahul
```

The outside variable still points to Object A.

So:

```text
Ajay
```

### 🧠 Important Difference

```text
user.name = "Rahul"
→ changes object


user = { name: "Rahul" }
→ changes local reference
```

---

# 🔥🔥🔥 9. Nested Object Reference

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const user2 = user1;

user2.address.city = "Mumbai";

console.log(user1.address.city);
```

### Output

```text
Mumbai
```

Because the nested object is also shared.

```text
user1 ─────┐
           ↓
        User Object
           ↓
       address Object
           ↑
user2 ─────┘
```

Both ultimately access the same `address` object.

---

# 🔥🔥🔥 10. Spread Operator and Object Reference

Now:

```js
const user1 = {
  name: "Ajay",
};

const user2 = {
  ...user1,
};

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);
```

### Output

```text
Ajay
Rahul
```

Why?

Spread creates a **new outer object**.

```text
user1 → Object A

user2 → Object B
```

So changing `user2.name` doesn't affect `user1.name`.

---

# 🔥🔥🔥 11. But Spread Is Shallow Copy

This is very important.

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const user2 = {
  ...user1,
};

user2.address.city = "Mumbai";

console.log(user1.address.city);
```

### Output

```text
Mumbai
```

Why?

The outer object is copied:

```text
user1 → Object A
user2 → Object B
```

But the nested `address` object is still shared:

```text
user1.address ───┐
                 ↓
            Address Object
                 ↑
user2.address ───┘
```

So:

```js
user2.address.city = "Mumbai";
```

changes the shared nested object.

### 🧠 Remember

```text
Spread
→ shallow copy
→ nested objects may still be shared
```

---

# 🔥🔥🔥 12. Array References

Same rule applies to arrays because arrays are objects.

```js
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

### Output

```text
[1, 2, 3, 4]
```

Both variables refer to the same array.

```text
arr1 ───┐
        ↓
     [1,2,3]
        ↑
arr2 ───┘
```

---

# 🔥🔥 13. Array Copy with Spread

```js
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

### Output

```text
[1, 2, 3]
[1, 2, 3, 4]
```

Because:

```js
[...arr1];
```

creates a new array.

---

# 🔥🔥🔥 14. Nested Array Reference

Spread is still shallow:

```js
const arr1 = [[1, 2]];

const arr2 = [...arr1];

arr2[0].push(3);

console.log(arr1);
```

### Output

```text
[[1, 2, 3]]
```

Why?

The outer array is copied, but the inner array is still shared.

```text
arr1
 ↓
[ ─────→ Inner Array [1,2]
]

arr2
 ↓
[ ─────→ Same Inner Array [1,2]
]
```

So:

```js
arr2[0].push(3);
```

also affects `arr1[0]`.

---

# 🔥🔥🔥 15. Object Reference + `const`

A common confusion:

```js
const user = {
  name: "Ajay",
};

user.name = "Rahul";

console.log(user.name);
```

### Output

```text
Rahul
```

`const` does **not** make the object immutable.

It means the variable cannot be reassigned to another object.

This is allowed:

```js
user.name = "Rahul";
```

But this is not:

```js
user = {
  name: "Rahul",
};
```

The second one gives:

```text
TypeError
```

### 🧠 Remember

```text
const object
→ object properties can change

const object
→ variable cannot point to another object
```

---

# 🔥🔥🔥 16. Function Returns an Object Reference

```js
function createUser() {
  return {
    name: "Ajay",
  };
}

const user1 = createUser();
const user2 = createUser();

console.log(user1 === user2);
```

### Output

```text
false
```

Why?

Every function call creates a new object:

```text
createUser() → Object A
createUser() → Object B
```

So:

```text
user1 → Object A
user2 → Object B
```

Therefore:

```text
false
```

---

# 🔥🔥🔥 17. Function Returning the Same Object

Now compare:

```js
const user = {
  name: "Ajay",
};

function getUser() {
  return user;
}

const user1 = getUser();
const user2 = getUser();

console.log(user1 === user2);
```

### Output

```text
true
```

Both function calls return the same object:

```text
user
 ↓
Object
 ↑
user1
 ↑
user2
```

---

# 🔥🔥🔥 18. Object Reference Inside a Closure

```js
function createUser() {
  const user = {
    name: "Ajay",
  };

  return function () {
    console.log(user.name);
  };
}

const fn = createUser();

fn();
```

### Output

```text
Ajay
```

The closure keeps access to the same object.

Think:

```text
createUser()
     ↓
user object
     ↓
inner function remembers user
     ↓
createUser finishes
     ↓
fn()
     ↓
Ajay
```

---

# 🔥🔥🔥 19. Changing Object Through Closure

```js
function createUser() {
  const user = {
    name: "Ajay",
  };

  return {
    changeName() {
      user.name = "Rahul";
    },

    getName() {
      return user.name;
    },
  };
}

const user = createUser();

user.changeName();

console.log(user.getName());
```

### Output

```text
Rahul
```

Both methods close over the same `user` object.

```text
changeName()
      ↓
same object
      ↓
name = Rahul

getName()
      ↓
same object
      ↓
Rahul
```

---

# 🔥🔥🔥 20. Famous Interview Question

Predict:

```js
const a = {
  value: 10,
};

const b = a;

const c = {
  value: 10,
};

b.value = 20;

console.log(a.value);
console.log(b.value);
console.log(c.value);
console.log(a === b);
console.log(a === c);
```

### Output

```text
20
20
10
true
false
```

Why?

```text
a ───┐
     ↓
 Object A { value: 10 }
     ↑
b ───┘


c ───→ Object B { value: 10 }
```

`b.value = 20` changes Object A.

So:

```text
a.value → 20
b.value → 20
c.value → 10
```

And:

```text
a === b → true
a === c → false
```

---

# 🧠 How to Solve Object Reference Questions

Whenever you see object assignment:

```js
const b = a;
```

ask:

> **Did JavaScript create a new object?**

Usually:

```text
No ❌
```

Both variables refer to the same object.

---

### If you see:

```js
const b = {
  ...a,
};
```

then:

```text
New outer object ✅
```

But remember:

```text
Nested objects → still shared
```

---

### If you see:

```js
b.property = value;
```

then you're changing the object.

---

### If you see:

```js
b = anotherObject;
```

then you're changing what `b` refers to.

The original object is not changed just because `b` changed its reference.

---

# 🔥🔥🔥 Golden Pattern

### Same reference

```js
const a = { value: 10 };
const b = a;

b.value = 20;
```

```text
a.value → 20
b.value → 20
```

---

### Different objects

```js
const a = { value: 10 };
const b = { value: 10 };

b.value = 20;
```

```text
a.value → 10
b.value → 20
```

---

### Shallow copy

```js
const a = {
  nested: {
    value: 10,
  },
};

const b = { ...a };

b.nested.value = 20;
```

```text
a.nested.value → 20
b.nested.value → 20
```

---

# 🧠 One-Line Memory Trick

```text
b = a
→ same object


b = { ...a }
→ new outer object


b.nested = ...
→ nested reference may still be shared


b = newObject
→ b now points somewhere else
```

### 🔥🔥 Interview Answer

**Objects are reference values in JavaScript. Assigning one object variable to another copies the reference, so both variables can point to the same object. Mutating the object through one reference is visible through the other. Creating a new object with spread or another copying technique creates a new outer object, but spread performs only a shallow copy, so nested objects can still share references.**

<!-- =============================== -->

Bilkul. Ye object references ke baad bahut important topic hai. Isme bas ek main idea pakad lo:

Shallow copy outer object ko copy karta hai, but nested objects/arrays ke references copy hote hain.

Isliye top-level change safe hota hai, lekin nested change original ko bhi affect kar sakta hai.

## 🔥🔥 Predict output involving shallow copies

**A shallow copy creates a new outer object or array, but nested objects and arrays are still shared by reference.**

Simple language:

> **Shallow copy = bahar se new object, andar ke nested objects same.**

Common ways to create a shallow copy:

```js
const copy = { ...original };

const copy = Object.assign({}, original);

const copy = [...original];
```

For arrays:

```js
const copy = [...arr];
```

---

# 🔥 1. Basic Shallow Copy

```js
const user1 = {
  name: "Ajay",
  age: 25,
};

const user2 = {
  ...user1,
};

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);
```

### Output

```text
Ajay
Rahul
```

Why?

Spread creates a **new outer object**.

```text
user1 → Object A

user2 → Object B
```

So changing:

```js
user2.name = "Rahul";
```

doesn't affect `user1`.

---

# 🔥🔥 2. Shallow Copy with Nested Object

Now the important part:

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const user2 = {
  ...user1,
};

user2.address.city = "Mumbai";

console.log(user1.address.city);
console.log(user2.address.city);
```

### Output

```text
Mumbai
Mumbai
```

Why?

Outer objects are different:

```text
user1 → Object A
user2 → Object B
```

But `address` is still the **same nested object**:

```text
user1.address ───┐
                 ↓
          Address Object
                 ↑
user2.address ───┘
```

Therefore:

```js
user2.address.city = "Mumbai";
```

changes the same nested object.

---

# 🔥🔥🔥 3. Top-Level vs Nested Property

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const user2 = {
  ...user1,
};

user2.name = "Rahul";
user2.address.city = "Mumbai";

console.log(user1);
```

### Output

```text
{
  name: "Ajay",
  address: {
    city: "Mumbai"
  }
}
```

Notice:

```text
name
→ NOT changed

address.city
→ changed
```

Because:

```text
Top-level property
→ copied

Nested object
→ reference shared
```

---

# 🔥🔥 4. `===` with Shallow Copy

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const user2 = {
  ...user1,
};

console.log(user1 === user2);
console.log(user1.address === user2.address);
```

### Output

```text
false
true
```

This is **very important**.

Outer object:

```text
user1 !== user2
```

But nested object:

```text
user1.address === user2.address
```

because both point to the same nested object.

---

# 🔥🔥🔥 5. Shallow Copy with Array

```js
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

### Output

```text
[1, 2, 3]
[1, 2, 3, 4]
```

Because:

```js
const arr2 = [...arr1];
```

creates a new array.

```text
arr1 → Array A

arr2 → Array B
```

So `push()` only changes `arr2`.

---

# 🔥🔥🔥 6. Shallow Copy with Nested Array

Now:

```js
const arr1 = [
  [1, 2],
  [3, 4],
];

const arr2 = [...arr1];

arr2[0].push(5);

console.log(arr1);
console.log(arr2);
```

### Output

```text
[[1, 2, 5], [3, 4]]

[[1, 2, 5], [3, 4]]
```

Why?

Outer arrays are different:

```text
arr1 !== arr2
```

But the inner arrays are shared:

```text
arr1[0] === arr2[0]
```

So:

```js
arr2[0].push(5);
```

changes the shared inner array.

---

# 🔥🔥 7. Shallow Copy with `Object.assign()`

`Object.assign()` also creates a shallow copy.

```js
const user1 = {
  name: "Ajay",
  age: 25,
};

const user2 = Object.assign({}, user1);

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);
```

### Output

```text
Ajay
Rahul
```

Because a new outer object was created.

---

# 🔥🔥 8. `Object.assign()` with Nested Object

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const user2 = Object.assign({}, user1);

user2.address.city = "Mumbai";

console.log(user1.address.city);
```

### Output

```text
Mumbai
```

Same reason:

```text
Object.assign()
→ shallow copy
→ nested object reference is shared
```

---

# 🔥🔥🔥 9. Spread Does NOT Deep Copy

```js
const user1 = {
  name: "Ajay",
  details: {
    age: 25,
  },
};

const user2 = {
  ...user1,
};

user2.details.age = 30;

console.log(user1.details.age);
```

### Output

```text
30
```

Some beginners think:

```js
{
  ...user1
}
```

means everything inside is copied.

❌ Not exactly.

It only copies the **first level**.

```text
user1
 ↓
Outer Object
 ├── name → "Ajay"
 └── details ──────┐
                   ↓
                Object
```

`user2` gets a new outer object, but `details` still points to the same object.

---

# 🔥🔥🔥 10. One Level vs Two Levels

Look at this:

```js
const user1 = {
  name: "Ajay",
  address: {
    city: "Delhi",
    location: {
      country: "India",
    },
  },
};

const user2 = {
  ...user1,
};

user2.name = "Rahul";
user2.address.city = "Mumbai";
user2.address.location.country = "USA";

console.log(user1);
```

### Output

```text
{
  name: "Ajay",
  address: {
    city: "Mumbai",
    location: {
      country: "USA"
    }
  }
}
```

Why?

`name` is a primitive top-level value:

```text
name
→ copied
```

But:

```text
address
→ shared reference

address.location
→ also shared reference
```

So nested changes affect the original.

---

# 🔥🔥🔥 11. Changing Top-Level Object Property

```js
const obj1 = {
  user: {
    name: "Ajay",
  },
  age: 25,
};

const obj2 = {
  ...obj1,
};

obj2.age = 30;

console.log(obj1.age);
console.log(obj2.age);
```

### Output

```text
25
30
```

`age` is a top-level property.

So it was copied into the new outer object.

---

# 🔥🔥🔥 12. Changing Nested Property

Same object:

```js
const obj1 = {
  user: {
    name: "Ajay",
  },
  age: 25,
};

const obj2 = {
  ...obj1,
};

obj2.user.name = "Rahul";

console.log(obj1.user.name);
console.log(obj2.user.name);
```

### Output

```text
Rahul
Rahul
```

Because:

```text
obj1.user === obj2.user
```

---

# 🔥🔥🔥 13. Replacing the Nested Object

This is a very important difference.

```js
const obj1 = {
  user: {
    name: "Ajay",
  },
};

const obj2 = {
  ...obj1,
};

obj2.user = {
  name: "Rahul",
};

console.log(obj1.user.name);
console.log(obj2.user.name);
```

### Output

```text
Ajay
Rahul
```

Why?

This time we are **replacing the nested reference**:

```js
obj2.user = {
  name: "Rahul",
};
```

We are not modifying the shared object.

Before:

```text
obj1.user ───┐
             ↓
         User Object
             ↑
obj2.user ───┘
```

After:

```text
obj1.user ───→ Object A
               Ajay

obj2.user ───→ Object B
               Rahul
```

So original stays unchanged.

---

# 🔥🔥🔥 14. Very Important Difference

### Mutation

```js
obj2.user.name = "Rahul";
```

Output:

```text
obj1.user.name → Rahul
```

### Replacement

```js
obj2.user = {
  name: "Rahul",
};
```

Output:

```text
obj1.user.name → Ajay
```

### 🧠 Remember

```text
obj2.user.name = ...
→ modifies shared object


obj2.user = ...
→ replaces obj2's reference
```

---

# 🔥🔥🔥 15. Shallow Copy + Function

```js
const obj1 = {
  value: 10,
};

const obj2 = {
  ...obj1,
};

function change(obj) {
  obj.value = 20;
}

change(obj2);

console.log(obj1.value);
console.log(obj2.value);
```

### Output

```text
10
20
```

Why?

`obj1` and `obj2` are different outer objects.

```text
obj1 → Object A

obj2 → Object B
```

Changing `obj2.value` doesn't affect `obj1`.

---

# 🔥🔥🔥 16. Shallow Copy + Nested Function

```js
const obj1 = {
  user: {
    name: "Ajay",
  },
};

const obj2 = {
  ...obj1,
};

function change(obj) {
  obj.user.name = "Rahul";
}

change(obj2);

console.log(obj1.user.name);
```

### Output

```text
Rahul
```

Because:

```text
obj1.user === obj2.user
```

The nested object is shared.

---

# 🔥🔥🔥 17. Shallow Copy + `===`

```js
const a = {
  x: 10,
  nested: {
    y: 20,
  },
};

const b = { ...a };

console.log(a === b);
console.log(a.nested === b.nested);
```

### Output

```text
false
true
```

This is probably the **most important shallow-copy comparison**.

```text
Outer:
a !== b

Nested:
a.nested === b.nested
```

---

# 🔥🔥🔥 18. Shallow Copy + Multiple Nested References

```js
const address = {
  city: "Delhi",
};

const user1 = {
  name: "Ajay",
  address: address,
};

const user2 = {
  ...user1,
};

user2.address.city = "Mumbai";

console.log(address.city);
console.log(user1.address.city);
console.log(user2.address.city);
```

### Output

```text
Mumbai
Mumbai
Mumbai
```

Why?

All three references point to the same address object:

```text
address ───────┐
               ↓
          Address Object
               ↑
user1.address ─┤
               ↑
user2.address ─┘
```

---

# 🔥🔥🔥 19. Shallow Copy + Array of Objects

Very common in real applications:

```js
const users1 = [{ name: "Ajay" }, { name: "Rahul" }];

const users2 = [...users1];

users2[0].name = "Amit";

console.log(users1[0].name);
console.log(users2[0].name);
```

### Output

```text
Amit
Amit
```

Why?

The outer array is copied:

```text
users1 !== users2
```

But the objects inside are shared:

```text
users1[0] === users2[0]
```

So:

```js
users2[0].name = "Amit";
```

changes the same object.

---

# 🔥🔥🔥 20. Array of Objects — Push vs Mutation

This is a very useful interview question:

```js
const users1 = [{ name: "Ajay" }];

const users2 = [...users1];

users2.push({ name: "Rahul" });

console.log(users1.length);
console.log(users2.length);
```

### Output

```text
1
2
```

Because `users2` is a new outer array.

But:

```js
users2[0].name = "Amit";
```

would affect `users1[0]`.

So:

```text
push()
→ affects only new array

nested object mutation
→ can affect both arrays
```

---

# 🔥🔥🔥 21. Famous Interview Question

Predict:

```js
const original = {
  name: "Ajay",
  skills: ["JavaScript", "React"],
};

const copy = {
  ...original,
};

copy.name = "Rahul";
copy.skills.push("Node.js");

console.log(original.name);
console.log(original.skills);
```

### Output

```text
Ajay
["JavaScript", "React", "Node.js"]
```

Why?

`name`:

```text
top-level primitive
→ copied
→ independent
```

`skills`:

```text
nested array
→ reference copied
→ shared
```

So:

```text
original.name
→ Ajay

original.skills
→ changed
```

---

# 🧠 How to Solve Shallow Copy Questions

Whenever you see:

```js
const copy = { ...original };
```

immediately draw:

```text
original → NEW outer object
copy     → NEW outer object
```

Then inspect every property.

### Primitive property

```js
name: "Ajay";
age: 25;
active: true;
```

Usually:

```text
Copied value
→ independent
```

### Object/Array property

```js
address: {
}
skills: [];
```

Usually:

```text
Reference copied
→ shared
```

---

# 🔥🔥🔥 Golden Pattern

```js
const copy = {
  ...original,
};
```

means:

```text
┌──────────────────────────────┐
│       NEW OUTER OBJECT       │
│                              │
│ name → copied                │
│ age  → copied                │
│                              │
│ address ────────────┐        │
│                     │        │
└─────────────────────│────────┘
                      ↓
                SAME OBJECT
```

So:

```text
Top-level primitive
→ independent

Top-level object/array
→ reference shared
```

---

# 🧠 Shallow Copy vs Deep Copy

### Shallow Copy

```js
const copy = { ...original };
```

```text
Outer object → new
Nested object → shared
```

### Deep Copy

Conceptually:

```text
Outer object → new
Nested object → new
Nested nested object → new
...
```

One modern option is:

```js
const copy = structuredClone(original);
```

For supported data types, this creates independent nested objects rather than sharing those references.

---

# 🔥🔥🔥 Final Memory Trick

```text
Shallow Copy
     ↓
New outside
     ↓
Same inside
```

Or simply:

```text
{ ...obj }
   ↓
Outer → NEW
Inner → SAME reference
```

### 🔥🔥🔥 Interview Answer

**A shallow copy creates a new outer object or array, but nested objects and arrays are still copied by reference. Therefore, changing a top-level property usually does not affect the original, while mutating a nested object or array can affect both the original and the copy.**

<!-- ========================== -->

# 12. Important Output-Based Questions ⭐⭐⭐

## 1. 🔥🔥 Predict output involving `==` and `===`

JavaScript mein `==` aur `===` dono comparison operators hain, but dono ka comparison karne ka tarika different hai.

```text
==  → value compare karta hai, zarurat padne par type convert karta hai

=== → value + type dono compare karta hai
```

### 🔥 Basic Example

```js
console.log(5 == "5");
console.log(5 === "5");
```

### Output

```text
true
false
```

Why?

`==`:

```text
5 == "5"
 ↓
"5" ko number mein convert kiya
 ↓
5 == 5
 ↓
true
```

`===`:

```text
5 === "5"
 ↓
number !== string
 ↓
false
```

### 🧠 Golden Rule

```text
==  → loose equality → type coercion ho sakti hai

=== → strict equality → type conversion nahi hota
```

---

# 🔥🔥 2. Predict output

```js
console.log(10 == 10);
console.log(10 === 10);
```

### Output

```text
true
true
```

Dono mein:

```text
value = 10
type = number
```

So both are true.

---

# 🔥🔥 3. Predict output

```js
console.log(10 == "10");
console.log(10 === "10");
```

### Output

```text
true
false
```

Because:

```text
10       → number
"10"     → string
```

`==` type conversion kar sakta hai.

`===` nahi karta.

---

# 🔥🔥 4. Predict output involving booleans

```js
console.log(true == 1);
console.log(true === 1);

console.log(false == 0);
console.log(false === 0);
```

### Output

```text
true
false
true
false
```

Because with `==`:

```text
true  → 1
false → 0
```

But `===` type bhi check karta hai.

```text
true === 1
boolean !== number
```

So false.

---

# 🔥🔥 5. Predict output

```js
console.log(null == undefined);
console.log(null === undefined);
```

### Output

```text
true
false
```

This is a very important special case.

```text
null == undefined
→ true
```

But:

```text
null === undefined
→ false
```

because:

```text
null      → null
undefined → undefined
```

They are different types/values.

### 🧠 Remember

```text
null == undefined   → true
null === undefined  → false
```

---

# 🔥🔥 6. Predict output

```js
console.log(0 == false);
console.log(0 === false);
```

### Output

```text
true
false
```

With `==`:

```text
false → 0
```

So:

```text
0 == 0
→ true
```

With `===`:

```text
number !== boolean
→ false
```

---

# 🔥🔥 7. Predict output involving objects

```js
const a = {};
const b = {};

console.log(a == b);
console.log(a === b);
```

### Output

```text
false
false
```

Why?

Both are different objects.

```text
a → Object A

b → Object B
```

Even if objects look exactly the same, they are different references.

---

# 🔥🔥 8. Same Object Reference

```js
const a = {};
const b = a;

console.log(a == b);
console.log(a === b);
```

### Output

```text
true
true
```

Because:

```text
a ───┐
     ↓
  Object
     ↑
b ───┘
```

Both refer to the same object.

---

# 🔥🔥🔥 9. `==` vs `===` — Interview Pattern

```js
console.log(1 == "1");
console.log(1 === "1");

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);
```

### Output

```text
true
false

true
false

true
false
```

### 🧠 Easy Memory

```text
==  → "Can these values become equal?"

=== → "Are value AND type already the same?"
```

---

# 2. 🔥🔥 Predict output involving type coercion

**Type coercion means JavaScript automatically converts one type into another when needed.**

For example:

```js
console.log("5" + 2);
```

### Output

```text
52
```

Why?

With `+`, if one side is a string, JavaScript commonly performs string concatenation:

```text
"5" + 2
 ↓
"5" + "2"
 ↓
"52"
```

---

# 🔥🔥 10. String + Number

```js
console.log("10" + 5);
```

### Output

```text
105
```

Because:

```text
"10" + 5
 ↓
"10" + "5"
 ↓
"105"
```

---

# 🔥🔥 11. String - Number

Now:

```js
console.log("10" - 5);
```

### Output

```text
5
```

Why?

`-` doesn't concatenate strings.

JavaScript converts `"10"` to number:

```text
"10" - 5
 ↓
10 - 5
 ↓
5
```

### 🧠 Important

```text
+ → string concatenation can happen

- * / → numeric conversion commonly happens
```

---

# 🔥🔥 12. Multiplication

```js
console.log("5" * 2);
console.log("10" / 2);
```

### Output

```text
10
5
```

Strings are converted to numbers.

---

# 🔥🔥 13. Boolean Coercion

```js
console.log(Number(true));
console.log(Number(false));
```

### Output

```text
1
0
```

So:

```text
true  → 1
false → 0
```

---

# 🔥🔥 14. String Conversion

```js
console.log(String(100));
console.log(String(true));
console.log(String(null));
```

### Output

```text
"100"
"true"
"null"
```

---

# 🔥🔥🔥 15. Boolean Conversion

```js
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
```

### Output

```text
false
true
false
true
```

Important falsy values include:

```text
false
0
-0
""
null
undefined
NaN
```

Most other values are truthy.

---

# 🔥🔥🔥 16. Famous `+` Question

```js
console.log(1 + "2" + 3);
```

### Output

```text
123
```

Step-by-step:

```text
1 + "2"
 ↓
"12"

"12" + 3
 ↓
"123"
```

---

# 🔥🔥🔥 17. Another Famous Question

```js
console.log(1 + 2 + "3");
```

### Output

```text
33
```

Step-by-step:

```text
1 + 2
 ↓
3

3 + "3"
 ↓
"33"
```

### 🧠 Order matters!

```text
1 + "2" + 3 → "123"

1 + 2 + "3" → "33"
```

---

# 🔥🔥🔥 18. `-` with Strings

```js
console.log("10" - "5");
console.log("10" * "2");
console.log("10" / "2");
```

### Output

```text
5
20
5
```

JavaScript converts the strings into numbers.

---

# 🔥🔥 19. Empty String

```js
console.log("" == 0);
console.log("" === 0);
```

### Output

```text
true
false
```

With `==`, the empty string can be converted to `0`.

With `===`:

```text
string !== number
```

---

# 🔥🔥🔥 20. `null` with Number

```js
console.log(null == 0);
console.log(null === 0);
```

### Output

```text
false
false
```

This is a common trap.

Although:

```text
null == undefined → true
```

it does **not** mean:

```text
null == 0 → true
```

It is false.

---

# 🔥🔥🔥 21. `null` with String

```js
console.log(null == "null");
console.log(null === "null");
```

### Output

```text
false
false
```

`null` is not the string `"null"`.

---

# 🔥🔥🔥 22. `undefined` with 0

```js
console.log(undefined == 0);
console.log(undefined === 0);
```

### Output

```text
false
false
```

---

# 🔥🔥🔥 23. `NaN`

`NaN` means:

> **Not-a-Number**

It represents an invalid numeric result.

```js
console.log("hello" * 2);
```

### Output

```text
NaN
```

Because `"hello"` cannot be converted into a valid number.

---

# 🔥🔥🔥 24. `NaN === NaN`

Very important:

```js
console.log(NaN === NaN);
console.log(NaN == NaN);
```

### Output

```text
false
false
```

`NaN` is not equal to itself.

To check whether something is `NaN`, use:

```js
Number.isNaN(value);
```

Example:

```js
console.log(Number.isNaN(NaN));
```

Output:

```text
true
```

---

# 🔥🔥🔥 25. `NaN` with Other Values

```js
console.log(NaN == 5);
console.log(NaN === 5);
console.log(NaN == "hello");
```

### Output

```text
false
false
false
```

Any equality comparison involving `NaN` is false.

---

# 🔥🔥🔥 26. `typeof null`

```js
console.log(typeof null);
```

### Output

```text
object
```

This is a **historical JavaScript behavior**.

Even though `null` represents the intentional absence of a value,:

```text
typeof null
→ "object"
```

### 🧠 Interview Trap

```text
typeof null → "object"
```

---

# 🔥🔥 27. `typeof undefined`

```js
console.log(typeof undefined);
```

### Output

```text
undefined
```

So:

```text
typeof null
→ "object"

typeof undefined
→ "undefined"
```

---

# 🔥🔥🔥 28. `null`, `undefined`, and `NaN`

```js
console.log(null == undefined);
console.log(null === undefined);

console.log(NaN == NaN);
console.log(NaN === NaN);
```

### Output

```text
true
false

false
false
```

### 🧠 Remember

```text
null == undefined
→ true

null === undefined
→ false

NaN == NaN
→ false

NaN === NaN
→ false
```

---

# 🔥🔥 29. `isNaN()` vs `Number.isNaN()`

```js
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));
```

### Output

```text
true
false
```

Why?

Global `isNaN()` performs coercion:

```text
"hello"
 ↓
NaN
 ↓
true
```

`Number.isNaN()` does not perform that coercion and checks whether the value is actually the number `NaN`.

---

# 🔥🔥🔥 30. `Number.isNaN()`

```js
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(10));
```

### Output

```text
true
false
false
```

---

# 4. 🔥🔥 Predict output involving `map()`, `filter()`, and `reduce()`

These three array methods are extremely important for interviews.

```text
map()
→ transforms every element

filter()
→ keeps elements that satisfy a condition

reduce()
→ combines elements into one final value
```

---

# 🔥🔥 31. Basic `map()`

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  return num * 2;
});

console.log(result);
```

### Output

```text
[2, 4, 6]
```

`map()` runs on every element:

```text
1 → 2
2 → 4
3 → 6
```

---

# 🔥🔥 32. `map()` Without `return`

Very important:

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  num * 2;
});

console.log(result);
```

### Output

```text
[undefined, undefined, undefined]
```

Why?

The callback doesn't return anything.

So:

```text
1 → undefined
2 → undefined
3 → undefined
```

---

# 🔥🔥 33. Arrow Function Implicit Return

Compare:

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

### Output

```text
[2, 4, 6]
```

Because:

```js
(num) => num * 2;
```

implicitly returns the result.

---

# 🔥🔥 34. Basic `filter()`

```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((num) => {
  return num > 2;
});

console.log(result);
```

### Output

```text
[3, 4, 5]
```

`filter()` keeps elements for which the callback returns `true`.

```text
1 > 2 → false
2 > 2 → false
3 > 2 → true
4 > 2 → true
5 > 2 → true
```

---

# 🔥🔥 35. `filter()` Returns Boolean

```js
const numbers = [1, 2, 3];

const result = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(result);
```

### Output

```text
[2]
```

Because:

```text
1 → false
2 → true
3 → false
```

Only `2` survives.

---

# 🔥🔥 36. `filter()` Without Return

```js
const numbers = [1, 2, 3];

const result = numbers.filter((num) => {
  num > 1;
});

console.log(result);
```

### Output

```text
[]
```

Why?

The callback returns `undefined`.

`undefined` is falsy.

So no elements pass the filter.

---

# 🔥🔥 37. Basic `reduce()`

```js
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(result);
```

### Output

```text
10
```

Step-by-step:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

Final:

```text
10
```

---

# 🔥🔥🔥 38. `reduce()` Without Initial Value

```js
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((sum, num) => {
  return sum + num;
});

console.log(result);
```

### Output

```text
10
```

Without an initial value:

```text
First element → initial accumulator
```

So:

```text
sum = 1
```

Then:

```text
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

---

# 🔥🔥🔥 39. `map()` + `filter()`

```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((num) => num % 2 === 0).map((num) => num * 10);

console.log(result);
```

### Output

```text
[20, 40]
```

First:

```text
filter()
→ [2, 4]
```

Then:

```text
map()
→ [20, 40]
```

Think:

```text
[1,2,3,4,5]
       ↓
filter even
       ↓
[2,4]
       ↓
map × 10
       ↓
[20,40]
```

---

# 🔥🔥🔥 40. `filter()` + `reduce()`

```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((num) => num > 2)
  .reduce((sum, num) => sum + num, 0);

console.log(result);
```

### Output

```text
12
```

First:

```text
filter()
→ [3,4,5]
```

Then:

```text
reduce()
→ 3 + 4 + 5
→ 12
```

---

# 🔥🔥🔥 41. `map()` + `reduce()`

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2).reduce((sum, num) => sum + num, 0);

console.log(result);
```

### Output

```text
12
```

Step 1:

```text
map()
→ [2,4,6]
```

Step 2:

```text
reduce()
→ 2 + 4 + 6
→ 12
```

---

# 🔥🔥🔥 42. Important `map()` Output Question

```js
const numbers = [1, 2, 3];

const result = numbers.map((num, index) => {
  return num + index;
});

console.log(result);
```

### Output

```text
[1, 3, 5]
```

Why?

```text
num = 1, index = 0 → 1 + 0 = 1

num = 2, index = 1 → 2 + 1 = 3

num = 3, index = 2 → 3 + 2 = 5
```

---

# 🔥🔥🔥 43. `filter()` with Index

```js
const numbers = [10, 20, 30, 40];

const result = numbers.filter((num, index) => {
  return index % 2 === 0;
});

console.log(result);
```

### Output

```text
[10, 30]
```

Indexes:

```text
10 → index 0 → keep
20 → index 1 → remove
30 → index 2 → keep
40 → index 3 → remove
```

---

# 🔥🔥🔥 44. `reduce()` with Index

```js
const numbers = [10, 20, 30];

const result = numbers.reduce((sum, num, index) => {
  return sum + num + index;
}, 0);

console.log(result);
```

### Output

```text
63
```

Step-by-step:

```text
sum = 0

0 + 10 + 0 = 10

10 + 20 + 1 = 31

31 + 30 + 2 = 63
```

Final:

```text
63
```

---

# 🔥🔥🔥 45. `map()` Does Not Change Original Array

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(numbers);
console.log(result);
```

### Output

```text
[1, 2, 3]
[2, 4, 6]
```

`map()` returns a new array.

---

# 🔥🔥 46. `filter()` Does Not Change Original Array

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num > 2);

console.log(numbers);
console.log(result);
```

### Output

```text
[1, 2, 3, 4]
[3, 4]
```

---

# 🔥🔥 47. `reduce()` Returns a Value

```js
const numbers = [1, 2, 3];

const result = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(typeof result);
console.log(result);
```

### Output

```text
number
6
```

Unlike `map()` and `filter()`, `reduce()` doesn't necessarily return an array.

It can return:

```text
number
string
object
array
anything
```

depending on what you return as the accumulator.

---

# 🔥🔥🔥 48. `reduce()` Can Create an Object

```js
const numbers = [1, 2, 3];

const result = numbers.reduce((obj, num) => {
  obj[num] = num * 10;
  return obj;
}, {});

console.log(result);
```

### Output

```text
{
  1: 10,
  2: 20,
  3: 30
}
```

This is one reason `reduce()` is powerful.

---

# 🔥🔥🔥 49. Famous Combined Question

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((sum, num) => sum + num, 0);

console.log(result);
```

### Output

```text
24
```

Step-by-step:

### `filter()`

```text
[1,2,3,4,5,6]
       ↓
[2,4,6]
```

### `map()`

```text
[2,4,6]
   ↓
[4,8,12]
```

### `reduce()`

```text
4 + 8 + 12
   ↓
24
```

---

# 🔥🔥🔥 50. Important Trap — `map()` vs `filter()`

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num > 1);

console.log(result);
```

### Output

```text
[false, true, true]
```

`map()` doesn't remove anything.

It transforms every element:

```text
1 → false
2 → true
3 → true
```

If you wanted only the matching values:

```js
const result = numbers.filter((num) => num > 1);
```

Output:

```text
[2, 3]
```

### 🧠 Remember

```text
map()
→ same number of elements

filter()
→ same or fewer elements

reduce()
→ one final accumulated value (in typical use)
```

---

# 🔥🔥🔥 51. `map()` + Object Reference

```js
const users = [{ name: "Ajay" }, { name: "Rahul" }];

const result = users.map((user) => user);

result[0].name = "Amit";

console.log(users[0].name);
```

### Output

```text
Amit
```

Why?

This:

```js
.map((user) => user)
```

does **not clone the objects**.

It returns the same object references.

```text
users[0] === result[0]
→ true
```

So changing `result[0]` changes the original object too.

---

# 🔥🔥🔥 52. `map()` with Object Spread

Compare:

```js
const users = [{ name: "Ajay" }, { name: "Rahul" }];

const result = users.map((user) => ({
  ...user,
}));

result[0].name = "Amit";

console.log(users[0].name);
console.log(result[0].name);
```

### Output

```text
Ajay
Amit
```

Because:

```js
{
  ...user
}
```

creates a new object for each element.

---

# 🧠 Final Memory Table

```text
map()
→ transforms every element
→ returns new array
→ usually same length


filter()
→ keeps matching elements
→ returns new array
→ length can decrease


reduce()
→ combines elements
→ returns accumulator/final result
```

---

# 🔥🔥🔥 Final Output Rules to Remember

### `==` vs `===`

```text
==  → type coercion can happen

=== → type + value must match
```

### Type coercion

```text
"5" + 2 → "52"

"5" - 2 → 3

"5" * 2 → 10
```

### Special values

```text
null == undefined   → true

null === undefined  → false

NaN == NaN          → false

NaN === NaN         → false

typeof null         → "object"
```

### Array methods

```text
map()
→ transform

filter()
→ select

reduce()
→ combine
```

### 🧠 One-Line Memory Trick

```text
map     → "Change every item"

filter  → "Keep some items"

reduce  → "Make one result"
```

### 🔥🔥🔥 Interview Answer

**`==` allows type coercion while `===` performs strict equality without coercing the types. Type coercion means JavaScript automatically converts values between types when required. `null`, `undefined`, and `NaN` have special comparison behavior, especially `null == undefined` being true and `NaN` not being equal to itself. `map()` transforms every element, `filter()` keeps elements that satisfy a condition, and `reduce()` combines elements into an accumulated result.**

<!-- ========================== -->
