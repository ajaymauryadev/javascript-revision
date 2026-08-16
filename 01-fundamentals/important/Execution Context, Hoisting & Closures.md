## What is an Execution Context?

An execution context is the **environment created by JavaScript to run and manage code**.

It contains the information JavaScript needs to execute the code, such as variables, functions, and the value of `this`.

### 🔥🔥🔥 What is an Execution Context?

An execution context is the environment in which JavaScript **executes a piece of code**.

Whenever JavaScript runs code, it creates an execution context for that code.

### Simple Example

```js
let name = "Ajay";

function greet() {
  let message = "Hello";
  console.log(message, name);
}

greet();
```

Here, JavaScript creates:

- **Global Execution Context** → for the global code
- **Function Execution Context** → when `greet()` is called

**Remember:**

**Execution Context → environment created by JavaScript to execute code.**

<!-- ================= -->

### 1. 🔥🔥🔥 What is the Global Execution Context?

The **Global Execution Context (GEC)** is the execution context created by JavaScript to run the **global code**.

It is created when the JavaScript program starts running.

### Simple Example

```js
let name = "Ajay";

console.log(name);
```

Here, the global code runs inside the **Global Execution Context**.

**Remember:**

**Global Execution Context → created to run global code.**

---

### 2. 🔥🔥🔥 What is a Function Execution Context?

A **Function Execution Context** is the execution context created by JavaScript **every time a function is called**.

It contains the information needed to execute that function.

### Simple Example

```js
function greet() {
  let message = "Hello";
  console.log(message);
}

greet();
```

When `greet()` is called, JavaScript creates a **Function Execution Context** for `greet()` and executes its code inside it.

**Remember:**

**Function Execution Context → created every time a function is called.**

<!-- ================== -->

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

`second()` finishes first, then `first()` finishes.

**Remember:**

**Call Stack → keeps track of function execution → LIFO → last in, first out.**

<!-- ======================== -->

### 🔥🔥🔥 How does JavaScript execute code?

JavaScript executes code **from top to bottom**, while using the **Execution Context** and **Call Stack** to manage the execution.

The basic process is:

1. JavaScript creates the **Global Execution Context**.
2. It sets up variables and functions.
3. The global code starts executing.
4. When a function is called, a **Function Execution Context** is created and added to the **Call Stack**.
5. The function executes.
6. When the function finishes, its execution context is removed from the Call Stack.

### Simple Example

```js
let name = "Ajay";

function greet() {
  console.log("Hello " + name);
}

greet();
```

Execution:

```text
Global Execution Context
        ↓
     greet()
        ↓
Function Execution Context
        ↓
   console.log()
        ↓
Function finishes
        ↓
Removed from Call Stack
```

**Remember:**

**JavaScript → creates execution context → executes code → uses call stack to manage function calls.**

<!-- =========================== -->

### 1. 🔥🔥🔥 What happens during the Creation Phase?

During the **Creation Phase**, JavaScript prepares the execution context before running the code.

It creates space for **variables and functions** and sets up their initial values.

### Simple Example

```js
console.log(name); // undefined

var name = "Ajay";

function greet() {
  console.log("Hello");
}
```

During the Creation Phase:

- `name` is created and initialized with `undefined`.
- `greet` is created and its function is stored.

**Remember:**

**Creation Phase → JavaScript prepares variables and functions before execution.**

---

### 2. 🔥🔥 What happens during the Execution Phase?

During the **Execution Phase**, JavaScript runs the code **line by line** and assigns values to variables.

### Simple Example

```js
var name = "Ajay";

function greet() {
  console.log("Hello");
}

greet();
```

During the Execution Phase:

- `"Ajay"` is assigned to `name`.
- `greet()` is called.
- The function code is executed.

**Remember:**

**Execution Phase → JavaScript runs the code and assigns values.**

<!-- ========================= -->

### 🔥🔥🔥 How does Hoisting actually work?

Hoisting happens during the **Creation Phase** of an execution context.

Before JavaScript executes the code, it creates memory for variables and functions. This is why some declarations can be accessed before their line of code is reached.

### Simple Example

```js
console.log(a); // undefined

var a = 10;
```

During the Creation Phase, JavaScript prepares `a` and gives it the initial value `undefined`.

During the Execution Phase, JavaScript reaches:

```js
a = 10;
```

and assigns `10` to `a`.

### With `let` and `const`

```js
console.log(a); // ReferenceError

let a = 10;
```

`let` and `const` are also hoisted, but they are **not initialized** during the Creation Phase. They remain in the **Temporal Dead Zone (TDZ)** until their declaration is reached.

### Function Declaration

```js
greet(); // Hello

function greet() {
  console.log("Hello");
}
```

Function declarations are fully available during the Creation Phase, so they can be called before their declaration.

**Remember:**

**Hoisting → declarations are prepared during the Creation Phase before code execution.**

`var` → initialized as `undefined`

`let` / `const` → hoisted but stay in TDZ

`function declaration` → fully available

<!-- ====================== -->

### 🔥🔥🔥 What is the Lexical Environment?

A **Lexical Environment** is the environment JavaScript creates to keep track of **variables, functions, and their outer scope** based on where the code is written.

It helps JavaScript know **which variables are available at a particular place in the code**.

### Simple Example

```js
let name = "Ajay";

function outer() {
  let age = 25;

  function inner() {
    console.log(name);
    console.log(age);
  }

  inner();
}
```

Here, `inner()` can access:

- `age` from the `outer` function
- `name` from the global scope

This is possible because each scope has its own **Lexical Environment** and a connection to its outer environment.

**Remember:**

**Lexical Environment → keeps variables/functions + connection to the outer scope.**

<!-- ======================== -->

### 🔥🔥🔥 What is the Environment Record?

An **Environment Record** is the part of a Lexical Environment that **stores variables and functions** created in that scope.

It keeps track of the identifiers and their values so JavaScript can access them during execution.

### Simple Example

```js
let name = "Ajay";

function greet() {
  let message = "Hello";

  console.log(message);
}
```

Here, the Environment Record keeps track of variables like `name` and `message` and their values.

**Remember:**

**Environment Record → stores variables and functions of a scope.**

<!-- ======================= -->

### 🔥🔥🔥 What is the Scope Chain?

The **Scope Chain** is the chain JavaScript follows to find a variable when it is not found in the current scope.

JavaScript first looks in the **current scope**, then moves to the **outer scope**, and continues until it finds the variable or reaches the global scope.

### Simple Example

```js
let name = "Ajay";

function outer() {
  let age = 25;

  function inner() {
    console.log(name);
    console.log(age);
  }

  inner();
}

outer();
```

Here, `inner()` looks for variables like this:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

`age` is found in the `outer` scope, and `name` is found in the global scope.

**Remember:**

**Scope Chain → Current Scope → Outer Scope → Global Scope**

<!-- ========================= -->

### 🔥🔥🔥 How does Closure work internally?

When an inner function uses a variable from its outer function, JavaScript keeps the **outer variable available** even after the outer function has finished executing.

The inner function keeps a reference to its **outer lexical environment**, which allows it to access those variables later.

### Simple Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
```

### How it works

1. `outer()` is called.
2. `count` is created inside `outer()`.
3. `outer()` returns the `inner` function.
4. Normally, `outer()` finishes executing.
5. But `inner()` still needs `count`.
6. JavaScript keeps the required outer environment available.
7. `counter()` can therefore access and update `count`.

```text
outer()
  ↓
count = 0
  ↓
returns inner()
  ↓
inner remembers outer environment
  ↓
counter() → count
```

**Remember:**

**Closure → inner function keeps access to its outer variables even after the outer function finishes.**

<!-- ======================= -->

### 🔥🔥🔥 How does Closure work internally?

When an inner function uses a variable from its outer function, JavaScript keeps the **outer variable available** even after the outer function has finished executing.

The inner function keeps a reference to its **outer lexical environment**, which allows it to access those variables later.

### Simple Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
```

### How it works

1. `outer()` is called.
2. `count` is created inside `outer()`.
3. `outer()` returns the `inner` function.
4. Normally, `outer()` finishes executing.
5. But `inner()` still needs `count`.
6. JavaScript keeps the required outer environment available.
7. `counter()` can therefore access and update `count`.

```text
outer()
  ↓
count = 0
  ↓
returns inner()
  ↓
inner remembers outer environment
  ↓
counter() → count
```

**Remember:**

**Closure → inner function keeps access to its outer variables even after the outer function finishes.**

<!-- ======================== -->

### 🔥🔥 What happens to variables after a function finishes?

When a function finishes executing, its **local variables are normally no longer accessible**.

If nothing references them anymore, they can eventually be **removed from memory by garbage collection**.

However, if a closure still references those variables, JavaScript keeps them available.

### Simple Example

```js
function greet() {
  let name = "Ajay";

  console.log(name);
}

greet();

// After greet() finishes,
// name is no longer accessible.
```

Here, `name` belongs to the function's scope. After `greet()` finishes, it is no longer accessible from outside the function.

### With Closure

```js
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
```

Here, `outer()` has finished, but `count` is still available because the returned function has a reference to it.

**Remember:**

**Function finishes → local variables become inaccessible → if nothing references them, they can be garbage collected.**

**Closure → keeps required outer variables alive.**

<!-- ================================== -->

### 🔥🔥 What is Garbage Collection?

Garbage collection is the process by which JavaScript **automatically removes data from memory that is no longer reachable or needed**.

### Simple Example

```js
function createUser() {
  let user = {
    name: "Ajay",
  };
}

createUser();
```

After `createUser()` finishes, the `user` object is no longer reachable.

JavaScript's garbage collector can then remove it from memory.

**Remember:**

**Garbage Collection → automatically removes unreachable data from memory.**

<!-- ==================== -->

### 🔥🔥 What can cause Memory Leaks in JavaScript?

A **memory leak** happens when JavaScript keeps data in memory even though the data is no longer needed.

Common causes include:

- Unremoved **event listeners**
- Unfinished **timers**
- Unnecessary **global variables**
- Closures that keep unnecessary data alive
- References to objects that are no longer needed

### Simple Example

```js
const button = document.querySelector("button");

function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);

// If the listener is no longer needed,
// it should be removed.
button.removeEventListener("click", handleClick);
```

If unnecessary references or event listeners are kept for a long time, they can prevent data from being garbage collected.

**Remember:**

**Memory Leak → unnecessary data stays in memory because something still references it.**

<!-- ============================ -->
