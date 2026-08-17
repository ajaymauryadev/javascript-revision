## 🔥🔥🔥 What are the important features introduced in ES6?

**ES6 (ECMAScript 2015)** was a major update to JavaScript that introduced many new features to make JavaScript code **cleaner, shorter, and easier to write and maintain**.

Here are the most important ES6 features you should know for interviews:

### 1. `let` and `const`

ES6 introduced `let` and `const` for declaring variables.

```js
let age = 25;
age = 26;

const name = "Ajay";
```

- `let` → value can be reassigned.
- `const` → variable cannot be reassigned.

---

### 2. Arrow Functions

ES6 introduced a shorter syntax for writing functions.

```js
const add = (a, b) => {
  return a + b;
};
```

Shorter version:

```js
const add = (a, b) => a + b;
```

---

### 3. Template Literals

Template literals make it easier to create strings with variables.

```js
const name = "Ajay";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Instead of:

```js
console.log("My name is " + name + " and I am " + age + " years old.");
```

They use **backticks**:

```js
`Hello ${name}`;
```

---

### 4. Default Parameters

We can provide a default value for a function parameter.

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
```

Output:

```text
Hello Guest
```

---

### 5. Destructuring

Destructuring allows us to **extract values from arrays or objects into variables**.

#### Object Destructuring

```js
const user = {
  name: "Ajay",
  age: 25,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

#### Array Destructuring

```js
const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log(first);
console.log(second);
```

---

### 6. Spread Operator (`...`)

The spread operator allows us to **expand the values of an array or object**.

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
```

Output:

```text
[1, 2, 3, 4, 5]
```

It is also commonly used to copy or combine objects:

```js
const user = {
  name: "Ajay",
  age: 25,
};

const updatedUser = {
  ...user,
  city: "Delhi",
};
```

---

### 7. Rest Parameter (`...`)

The rest parameter collects multiple arguments into an array.

```js
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(add(10, 20, 30));
```

Output:

```text
60
```

### Spread vs Rest

The same `...` syntax is used, but the purpose is different:

```text
Spread → expands values
Rest   → collects values
```

---

### 8. Classes

ES6 introduced the `class` syntax for creating objects using a class-based structure.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User("Ajay");

user.greet();
```

---

### 9. Modules

ES6 introduced `import` and `export` for working with modules.

```js
// math.js

export const add = (a, b) => a + b;
```

Then:

```js
// app.js

import { add } from "./math.js";

console.log(add(10, 20));
```

This allows us to split a large application into **multiple files/modules**.

---

### 10. Promises

ES6 introduced **Promises** for handling asynchronous operations.

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then((result) => {
  console.log(result);
});
```

Promises help us handle operations such as:

```text
API calls
Database operations
Timers
Other asynchronous tasks
```

---

### 11. `Map` and `Set`

ES6 introduced new collection types.

#### `Set`

A `Set` stores **unique values**.

```js
const numbers = new Set([1, 2, 2, 3]);

console.log(numbers);
```

The duplicate `2` is removed.

```text
1, 2, 3
```

#### `Map`

A `Map` stores **key-value pairs**.

```js
const user = new Map();

user.set("name", "Ajay");
user.set("age", 25);

console.log(user.get("name"));
```

Output:

```text
Ajay
```

---

### 12. `for...of` Loop

ES6 introduced `for...of` for iterating over iterable values such as arrays and strings.

```js
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

Output:

```text
10
20
30
```

---

### 13. Symbol

ES6 introduced the `Symbol` primitive type.

A Symbol creates a **unique value**.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Output:

```text
false
```

Even though both have the same description, they are different unique values.

---

### 14. Generators

ES6 introduced **generator functions**, which can pause and resume their execution.

They are written using `function*` and `yield`.

```js
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numbers();

console.log(generator.next().value);
console.log(generator.next().value);
```

Output:

```text
1
2
```

Generators are useful when we need more control over how values are produced.

---

## 🔥🔥 Most Important for Interviews

You don't need to memorize every ES6 feature equally.

For a **MERN/Full Stack Developer**, focus especially on:

```text
🔥 let / const
🔥 Arrow Functions
🔥 Template Literals
🔥 Destructuring
🔥 Spread / Rest Operators
🔥 Default Parameters
🔥 Classes
🔥 Modules (import / export)
🔥 Promises
🔥 Map / Set
🔥 for...of
```

### Interview Answer

**ES6, also called ECMAScript 2015, introduced many important JavaScript features such as `let` and `const`, arrow functions, template literals, destructuring, spread/rest operators, default parameters, classes, modules, Promises, Map, Set, and `for...of` loops. These features made JavaScript code more concise, readable, and easier to maintain.**

### Easy Memory Trick

```text
ES6 =
let/const
+ Arrow Functions
+ Template Literals
+ Destructuring
+ Spread/Rest
+ Default Parameters
+ Classes
+ Modules
+ Promises
+ Map/Set
+ for...of
```

<!-- ======================== -->

## 1. 🔥🔥🔥 What is Destructuring?

**Destructuring is a JavaScript feature that allows us to extract values from an array or properties from an object and store them in variables easily.**

In simple words:

> **Object/array ke andar se values nikal kar directly variables mein store karna = Destructuring.**

### Object Destructuring

Without destructuring:

```js
const user = {
  name: "Ajay",
  age: 25,
};

const name = user.name;
const age = user.age;

console.log(name);
console.log(age);
```

With destructuring:

```js
const user = {
  name: "Ajay",
  age: 25,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output:

```text
Ajay
25
```

Here:

```js
const { name, age } = user;
```

means:

```text
user.name → name
user.age  → age
```

---

### Array Destructuring

We can also extract values from an array:

```js
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
10
20
30
```

Here:

```text
first  → 10
second → 20
third  → 30
```

### Easy Way to Remember

```text
Destructuring
      ↓
Take values OUT of an array/object
      ↓
Store them in variables
```

---

# 2. 🔥🔥🔥 What is the Spread Operator?

The **Spread Operator (`...`)** is used to **expand the values of an array or the properties of an object**.

In simple words:

> **`...` kisi array/object ke andar ki values ko bahar expand karta hai.**

### Spread with Array

Suppose:

```js
const numbers = [10, 20, 30];
```

We can expand its values:

```js
console.log(...numbers);
```

Output:

```text
10 20 30
```

The array:

```text
[10, 20, 30]
```

becomes:

```text
10 20 30
```

---

### Copy an Array

```js
const numbers = [10, 20, 30];

const newNumbers = [...numbers];

console.log(newNumbers);
```

Output:

```text
[10, 20, 30]
```

Here `...numbers` expands the values into the new array.

---

### Combine Arrays

```js
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];

console.log(combined);
```

Output:

```text
[1, 2, 3, 4]
```

---

### Spread with Objects

```js
const user = {
  name: "Ajay",
  age: 25,
};

const updatedUser = {
  ...user,
  city: "Delhi",
};

console.log(updatedUser);
```

Output:

```text
{
  name: "Ajay",
  age: 25,
  city: "Delhi"
}
```

Here:

```js
...user
```

expands the properties of `user` into the new object.

### Easy Way to Remember

```text
Spread
   ↓
Expand values
   ↓
...array
...object
```

---

# 3. 🔥🔥🔥 What is the Rest Operator?

The **Rest Operator (`...`)** is used to **collect multiple values into a single array or object**.

In simple words:

> **Multiple values ko collect karke ek variable mein rakhna = Rest Operator.**

### Rest in Function Parameters

Suppose we don't know how many arguments a function will receive:

```js
function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30, 40);
```

Output:

```text
[10, 20, 30, 40]
```

Here:

```js
...numbers
```

collects all arguments into the `numbers` array.

We can then use it:

```js
function add(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(add(10, 20, 30));
```

Output:

```text
60
```

---

### Rest with Array Destructuring

Rest can also collect the remaining values:

```js
const numbers = [10, 20, 30, 40];

const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);
```

Output:

```text
10
20
[30, 40]
```

Here:

```text
first  → 10
second → 20
rest   → [30, 40]
```

So `...rest` collects all the **remaining values**.

---

# 🔥🔥 Spread vs Rest

This is a **very important interview question** because both use the same `...` syntax.

The difference depends on **what the `...` is doing**.

### Spread

**Spread expands values.**

```js
const numbers = [10, 20, 30];

const newNumbers = [...numbers];
```

Think:

```text
[10, 20, 30]
      ↓
    Expand
      ↓
10, 20, 30
```

### Rest

**Rest collects values.**

```js
function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30);
```

Think:

```text
10, 20, 30
      ↓
    Collect
      ↓
[10, 20, 30]
```

---

## 🔥 Easy Memory Trick

```text
Destructuring
     ↓
Take OUT values
     ↓
Object/Array → Variables


Spread
     ↓
EXPAND values
     ↓
... → individual values


Rest
     ↓
COLLECT values
     ↓
individual values → array/object
```

### One-Line Interview Difference

**Destructuring extracts values, Spread expands values, and Rest collects multiple values into one variable.**

```text
Destructuring → Extract
Spread        → Expand
Rest          → Collect
```

<!-- ============================= -->

## 1. 🔥🔥 What are Template Literals?

**Template literals are a way to create strings using backticks (`) that make it easy to insert variables and expressions directly inside the string.**

In simple words:

> **String ke andar variables ko easily use karna ho, to template literals use karte hain.**

Template literals use **backticks** instead of single or double quotes:

```js id="k8m3pz"
const name = "Ajay";

console.log(`Hello ${name}`);
```

Output:

```text id="x4n7qa"
Hello Ajay
```

Here:

```js id="z6p2md"
${name}
```

means:

> `name` variable ki value yahan insert karo.

---

### Without Template Literals

Normally, we would write:

```js id="v3q9ws"
const name = "Ajay";
const age = 25;

console.log("My name is " + name + " and I am " + age + " years old.");
```

This can become difficult to read when the string gets bigger.

### With Template Literals

```js id="c7m4kn"
const name = "Ajay";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Much cleaner:

```text id="p9x2vl"
My name is Ajay and I am 25 years old.
```

---

### We Can Also Use Expressions

We can put JavaScript expressions inside `${}`:

```js id="q5n8rd"
const a = 10;
const b = 20;

console.log(`Sum = ${a + b}`);
```

Output:

```text id="s2k6wp"
Sum = 30
```

---

### Multi-line Strings

Template literals also make multi-line strings easy:

```js id="h4m7zc"
const message = `Hello Ajay,
Welcome to JavaScript.
Keep learning!`;

console.log(message);
```

Output:

```text id="v8q3mx"
Hello Ajay,
Welcome to JavaScript.
Keep learning!
```

### Easy Way to Remember

```text id="n6p4ks"
Template Literal
      ↓
Backticks `
      ↓
${variable}
      ↓
Easy string + variable
```

### Interview Answer

**Template literals are strings written using backticks that allow us to easily insert variables and expressions using `${}` and also support multi-line strings.**

---

## 2. 🔥🔥 What are Default Parameters?

**Default parameters allow us to give a parameter a default value when no value is provided for that parameter.**

In simple words:

> **Agar function call karte time argument nahi diya, to parameter automatically ek default value use karega.**

### Simple Example

```js id="r8k2xm"
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet("Ajay");
greet();
```

Output:

```text id="w3m7qp"
Hello Ajay
Hello Guest
```

When we call:

```js id="z4n9cs"
greet("Ajay");
```

`name` gets:

```text id="h7p2vx"
Ajay
```

But when we call:

```js id="j5k8md"
greet();
```

No argument is provided, so JavaScript uses:

```text id="f2q6wn"
Guest
```

---

### Without Default Parameter

Without a default value:

```js id="b9m3kr"
function greet(name) {
  console.log(`Hello ${name}`);
}

greet();
```

Output:

```text id="c6v8ps"
Hello undefined
```

Because no argument was provided.

---

### With Default Parameter

```js id="d4x7qm"
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();
```

Output:

```text id="y8n2vf"
Hello Guest
```

The default value is used.

---

### Default Parameters with Multiple Parameters

We can have multiple default parameters:

```js id="m7k4dz"
function calculatePrice(price, tax = 18) {
  return price + (price * tax) / 100;
}

console.log(calculatePrice(1000));
```

Output:

```text id="p3x9kw"
1180
```

Here:

```text id="s5q2nc"
price → 1000
tax   → 18
```

Because we didn't provide `tax`, the default value `18` is used.

If we provide a value:

```js id="v6m8qa"
console.log(calculatePrice(1000, 10));
```

Output:

```text id="r2n5xd"
1100
```

Now `tax = 10`, so the default value `18` is not used.

---

### Important Point

The default value is used when the argument is **`undefined`**.

```js id="e7p3mz"
function greet(name = "Guest") {
  console.log(name);
}

greet(undefined);
```

Output:

```text id="k4x8qn"
Guest
```

But:

```js id="u5m2rw"
greet(null);
```

outputs:

```text id="a9q6vd"
null
```

Because `null` is an actual value, so the default parameter is not used.

### Easy Way to Remember

```text id="n8c4ps"
Default Parameter
       ↓
No argument provided
       ↓
Use default value
```

### Interview Answer

**Default parameters allow a function parameter to have a predefined value that is used when the caller does not provide a value or provides `undefined`.**

<!-- ======================== -->

## 1. 🔥🔥 What are Modules?

**Modules are separate JavaScript files that contain related code and can be imported and used in other JavaScript files.**

In simple words:

> **Large application ke code ko chhote, separate files mein divide karna aur zarurat ke according un files ka code use karna = Modules.**

Suppose we have a large application:

```text id="w7k3pm"
project/
│
├── math.js
├── user.js
├── product.js
└── app.js
```

Instead of putting everything inside `app.js`, we can keep related code in separate files.

### Example

`math.js`:

```js id="x5n8qd"
export function add(a, b) {
  return a + b;
}
```

`app.js`:

```js id="m2r7kc"
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:

```text id="p8v4zn"
30
```

Here:

```text id="j6q3ws"
math.js
   ↓
exports add()
   ↓
app.js
   ↓
imports add()
```

So `math.js` is a **module**, and `app.js` uses that module.

---

### Why do we use Modules?

Modules help us:

```text id="r4m9vx"
Organize code
      ↓
Separate responsibilities
      ↓
Reuse code
      ↓
Make large applications easier to maintain
```

For example:

```text id="a7k2pd"
auth.js      → Login/authentication logic
user.js      → User-related logic
product.js   → Product-related logic
database.js  → Database logic
app.js       → Main application
```

This is much easier to manage than putting everything in one huge file.

### Interview Answer

**Modules are separate JavaScript files that encapsulate related code and allow that code to be exported and imported between files.**

---

# 2. 🔥🔥🔥 CommonJS vs ES Modules?

**CommonJS and ES Modules (ESM) are two module systems used in JavaScript to organize and share code between files.**

The main difference is their **syntax** and the environments where they are commonly used.

---

## CommonJS

CommonJS uses:

```js id="e4m7qk"
require();
```

to import code and:

```js id="z8p3wd"
module.exports;
```

to export code.

### Example

`math.js`:

```js id="n5k2vx"
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

`app.js`:

```js id="q7m4zn"
const { add } = require("./math");

console.log(add(10, 20));
```

Output:

```text id="c9x6wp"
30
```

CommonJS has traditionally been very common in **Node.js** applications.

---

# ES Modules (ESM)

ES Modules are the **standard JavaScript module system** introduced with ES6.

They use:

```js id="j3r8mq"
export
```

and:

```js id="v6p2ks"
import
```

### Example

`math.js`:

```js id="h4n9xz"
export function add(a, b) {
  return a + b;
}
```

`app.js`:

```js id="s7k5wd"
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:

```text id="b2m8qp"
30
```

ES Modules are widely used in **modern JavaScript, React, and modern Node.js applications**.

---

# 🔥🔥 Main Difference

| CommonJS                                         | ES Modules                             |
| ------------------------------------------------ | -------------------------------------- |
| Uses `require()`                                 | Uses `import`                          |
| Uses `module.exports`                            | Uses `export`                          |
| Traditionally common in Node.js                  | Standard JavaScript module system      |
| Common in older Node.js codebases                | Common in modern JS/React/Node.js      |
| `require()` is commonly used for loading modules | `import`/`export` are used for modules |
| Example: `const x = require("./x")`              | Example: `import x from "./x.js"`      |

---

## Side-by-Side Example

### CommonJS

```js id="r5x9km"
// math.js

function add(a, b) {
  return a + b;
}

module.exports = { add };
```

```js id="t7n3pq"
// app.js

const { add } = require("./math");

console.log(add(10, 20));
```

### ES Modules

```js id="w4k8vd"
// math.js

export function add(a, b) {
  return a + b;
}
```

```js id="m6q2zx"
// app.js

import { add } from "./math.js";

console.log(add(10, 20));
```

---

## 🔥 Important for MERN Developers

You will commonly see both styles.

### Older/Traditional Node.js code

```js id="d9p4sx"
const express = require("express");
```

### Modern Node.js / React

```js id="c3v7nk"
import express from "express";
```

React projects commonly use ES Modules:

```js id="k8m2qa"
import React from "react";
import { useState } from "react";
```

So you should be comfortable reading **both CommonJS and ES Modules**.

### Easy Way to Remember

```text id="x6r3mp"
CommonJS
   ↓
require()
module.exports


ES Modules
   ↓
import
export
```

### 🔥🔥🔥 Interview Answer

**CommonJS and ES Modules are JavaScript module systems. CommonJS uses `require()` and `module.exports`, while ES Modules use `import` and `export`. CommonJS is commonly seen in older Node.js code, while ES Modules are the standard modern JavaScript module system and are widely used in React and modern Node.js applications.**

<!-- ============================ -->

## 1. 🔥🔥 What is Optional Chaining (`?.`)?

**Optional chaining (`?.`) allows us to safely access a property, method, or array element without getting an error when the value before it is `null` or `undefined`.**

In simple words:

> **Agar beech mein koi value `null` ya `undefined` ho sakti hai, to `?.` error aane se bachata hai.**

### Without Optional Chaining

Suppose we have:

```js
const user = {
  name: "Ajay",
};

console.log(user.address.city);
```

Here, `user.address` does not exist.

So JavaScript gives an error:

```text
Cannot read properties of undefined
```

Because JavaScript tries to do:

```text
user
 ↓
address
 ↓
undefined
 ↓
city ❌
```

### With Optional Chaining

We can write:

```js
const user = {
  name: "Ajay",
};

console.log(user.address?.city);
```

Output:

```text
undefined
```

No error occurs.

Why?

```text
user.address
      ↓
undefined
      ↓
?. checks it
      ↓
Returns undefined
      ↓
Doesn't continue to .city
```

---

### Optional Chaining with Objects

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

console.log(user.address?.city);
```

Output:

```text
Delhi
```

Because `user.address` exists.

---

### Optional Chaining with Functions

It can also be used when a function may not exist:

```js
const user = {
  greet() {
    console.log("Hello");
  },
};

user.greet?.();
```

If `greet` exists → it runs.

If `greet` doesn't exist → no error.

---

### Optional Chaining with Arrays

We can also safely access an array element:

```js
const users = [];

console.log(users?.[0]);
```

Output:

```text
undefined
```

### Easy Way to Remember

```text
?.
 ↓
"Check first.
If value exists → continue.
If null/undefined → return undefined."
```

### Interview Answer

**Optional chaining (`?.`) allows us to safely access nested properties, methods, or array elements without throwing an error when a value in the chain is `null` or `undefined`.**

---

# 2. 🔥🔥🔥 What is Nullish Coalescing (`??`)?

**Nullish coalescing (`??`) is an operator used to provide a default value when the value on the left is `null` or `undefined`.**

In simple words:

> **Agar value `null` ya `undefined` hai, to default value use karo. Otherwise original value use karo.**

### Simple Example

```js
const username = null;

const name = username ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

Because:

```text
username
   ↓
null
   ↓
??
   ↓
"Guest"
```

---

### If Value Exists

```js
const username = "Ajay";

const name = username ?? "Guest";

console.log(name);
```

Output:

```text
Ajay
```

Because `username` is not `null` or `undefined`.

```text
"Ajay"
   ↓
not null/undefined
   ↓
use "Ajay"
```

---

## 🔥 Important Difference Between `??` and `||`

This is a **very important interview question**.

`||` considers many values as falsy:

```text
false
0
""
null
undefined
NaN
```

But `??` only checks:

```text
null
undefined
```

### Example

```js
const age = 0;

console.log(age || 18);
console.log(age ?? 18);
```

Output:

```text
18
0
```

Why?

With `||`:

```text
0 → falsy → use 18
```

With `??`:

```text
0 → not null/undefined → keep 0
```

This is why `??` is useful when `0`, `false`, or `""` are **valid values**.

---

### Another Example

```js
const isAdmin = false;

console.log(isAdmin || true);
console.log(isAdmin ?? true);
```

Output:

```text
true
false
```

`||` replaces `false` because `false` is falsy.

`??` keeps `false` because `false` is not `null` or `undefined`.

---

# 🔥🔥 Optional Chaining vs Nullish Coalescing

These two are often used together.

### Optional Chaining

```js
user?.address?.city;
```

Means:

> **"Safely access this value."**

### Nullish Coalescing

```js
user?.address?.city ?? "Unknown";
```

Means:

> **"Safely access this value, and if it is `null` or `undefined`, use `Unknown`."**

### Real Example

```js
const user = {
  name: "Ajay",
};

const city = user.address?.city ?? "Unknown";

console.log(city);
```

Output:

```text
Unknown
```

Here:

```text
user.address?.city
        ↓
undefined
        ↓
?? "Unknown"
        ↓
"Unknown"
```

---

## 🔥 Easy Way to Remember

```text
?.
 ↓
"Can I safely access this?"
 ↓
Avoid error


??
 ↓
"Is this null/undefined?"
 ↓
If yes → use default value
```

### One-Line Difference

**Optional chaining (`?.`) safely accesses a value, while nullish coalescing (`??`) provides a fallback value when the result is `null` or `undefined`.**

### Interview Answers

**Optional chaining:**
`?.` safely accesses nested properties, methods, or array elements without throwing an error when a value is `null` or `undefined`.

**Nullish coalescing:**
`??` returns the right-side default value only when the left-side value is `null` or `undefined`.

<!-- =============================== -->

## 🔥🔥 Difference between `||` and `??`

Both `||` and `??` can be used to provide a **fallback/default value**, but they check different things.

The main difference is:

```text
|| → checks for any falsy value

?? → checks only for null or undefined
```

---

## 1. 🔥 `||` — Logical OR

`||` returns the right-side value when the left-side value is **falsy**.

Falsy values in JavaScript include:

```text
false
0
""
null
undefined
NaN
```

### Example

```js
const age = 0;

const result = age || 18;

console.log(result);
```

Output:

```text
18
```

Why?

Because:

```text
age = 0
     ↓
0 is falsy
     ↓
use 18
```

---

## 2. 🔥 `??` — Nullish Coalescing

`??` returns the right-side value **only when the left-side value is `null` or `undefined`**.

### Example

```js
const age = 0;

const result = age ?? 18;

console.log(result);
```

Output:

```text
0
```

Why?

Because:

```text
age = 0
     ↓
0 is NOT null or undefined
     ↓
keep 0
```

---

# 🔥🔥 Main Difference

Look at these examples:

```js
console.log(0 || 100);
console.log(0 ?? 100);
```

Output:

```text
100
0
```

Because:

```text
0 || 100
↓
0 is falsy
↓
100
```

But:

```text
0 ?? 100
↓
0 is not null/undefined
↓
0
```

---

## More Examples

### `false`

```js
console.log(false || "Default");
console.log(false ?? "Default");
```

Output:

```text
Default
false
```

---

### Empty String

```js
console.log("" || "Guest");
console.log("" ?? "Guest");
```

Output:

```text
Guest
""
```

---

### `null`

```js
console.log(null || "Default");
console.log(null ?? "Default");
```

Output:

```text
Default
Default
```

Both use the fallback because `null` is checked by both operators.

---

### `undefined`

```js
console.log(undefined || "Default");
console.log(undefined ?? "Default");
```

Output:

```text
Default
Default
```

Again, both use the fallback.

---

# 🔥🔥 Comparison Table

| Value       | `value         |             | "Default"` | `value ?? "Default"` |
| ----------- | -------------- | ----------- | ---------- | -------------------- |
| `0`         | `"Default"` ❌ | `0` ✅      |
| `false`     | `"Default"` ❌ | `false` ✅  |
| `""`        | `"Default"` ❌ | `""` ✅     |
| `null`      | `"Default"`    | `"Default"` |
| `undefined` | `"Default"`    | `"Default"` |
| `"Ajay"`    | `"Ajay"`       | `"Ajay"`    |
| `25`        | `25`           | `25`        |

---

# 🔥 Real-World Example

Suppose we get a user's age from an API.

```js
const age = 0;
```

`0` can be a valid value.

If we use:

```js
const userAge = age || 18;
```

we get:

```text
18 ❌
```

Because `0` is falsy.

But:

```js
const userAge = age ?? 18;
```

gives:

```text
0 ✅
```

because `0` is a valid value and is not `null` or `undefined`.

---

# 🔥 When Should We Use Which?

### Use `||` when:

You want a fallback for **any falsy value**.

```js
const name = userInput || "Guest";
```

Here, an empty string can reasonably mean "no name provided."

---

### Use `??` when:

You want a fallback **only when the value is missing (`null` or `undefined`)**.

```js
const count = apiResponse.count ?? 0;
```

Here, `0` is a meaningful value, so we don't want to replace it.

---

## 🔥🔥 Easy Way to Remember

```text
||
↓
"Is the value falsy?"
↓
Yes → use fallback


??
↓
"Is the value null or undefined?"
↓
Yes → use fallback
```

### One-Line Memory Trick

```text
|| → Falsy check

?? → Null/Undefined check
```

### Interview Answer

**`||` returns the fallback when the left value is any falsy value such as `0`, `false`, `""`, `null`, or `undefined`, while `??` returns the fallback only when the left value is `null` or `undefined`.**

<!-- ============================== -->

## 1. 🔥 What are Symbols?

**Symbol is a primitive data type in JavaScript that creates a unique value.**

In simple words:

> **Har baar `Symbol()` call karne par ek unique value milti hai, even if the description is same.**

### Simple Example

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Output:

```text
false
```

Why?

Because both Symbols are **different unique values**:

```text
Symbol("id") → unique value
Symbol("id") → another unique value
```

Even though `"id"` is the same, the Symbols are not equal.

### Why are Symbols Useful?

Symbols are commonly used when we want to create **unique object property keys**.

```js
const id = Symbol("id");

const user = {
  name: "Ajay",
  [id]: 101,
};

console.log(user[id]);
```

Output:

```text
101
```

Here, the Symbol creates a property key that is unique.

### Easy Way to Remember

```text
Symbol()
   ↓
Creates a unique value
   ↓
Useful for unique object keys
```

### Interview Answer

**A Symbol is a primitive data type that creates a unique value and is commonly used for creating unique object property keys.**

---

## 2. 🔥 What are Iterators?

**An iterator is an object that allows us to access values from a collection one value at a time.**

In simple words:

> **Iterator collection ke values ko ek-ek karke dene ka mechanism hai.**

An iterator has a `next()` method.

Each time we call `next()`, it returns an object like:

```js
{
  value: ...,
  done: ...
}
```

### Simple Example

```js
const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Output:

```text
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

Let's understand this:

```text
First next()
→ 10
→ done: false

Second next()
→ 20
→ done: false

Third next()
→ 30
→ done: false

Fourth next()
→ no value
→ done: true
```

So the iterator tells us:

> **"Here is the next value. Are we finished?"**

### What is `Symbol.iterator`?

Objects that can be iterated using mechanisms such as `for...of` are called **iterables**.

For example, arrays have:

```js
numbers[Symbol.iterator];
```

which gives us an iterator.

That's why we can do:

```js
for (const number of numbers) {
  console.log(number);
}
```

Behind the scenes, JavaScript uses the iterable's iterator to get values one by one.

### Easy Way to Remember

```text
Iterable
   ↓
Can be iterated

Iterator
   ↓
Gives values one by one

next()
   ↓
{ value, done }
```

### Interview Answer

**An iterator is an object that provides a `next()` method to access values one at a time, returning an object containing the current `value` and whether iteration is `done`.**

---

## 3. 🔥 What are Generators?

**Generators are special JavaScript functions that can pause their execution and resume it later.**

In simple words:

> **Generator function value dene ke baad ruk sakta hai, aur baad mein wahi se continue ho sakta hai.**

A generator function is written using:

```js
function*
```

and uses:

```js
yield;
```

to pause execution.

### Simple Example

```js
function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}

const generator = numbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```

Output:

```text
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

### Let's Understand What Happens

When we create the generator:

```js
const generator = numbers();
```

The function does **not immediately execute everything**.

When we call:

```js
generator.next();
```

it starts/resumes the function and runs until the first `yield`:

```text
yield 10
   ↓
pause
```

Next call:

```js
generator.next();
```

continues from where it stopped:

```text
yield 20
   ↓
pause
```

Then:

```text
yield 30
   ↓
pause
```

Finally, there is nothing left:

```text
done: true
```

### Visual Flow

```text
generator.next()
      ↓
yield 10
      ↓
PAUSE


generator.next()
      ↓
yield 20
      ↓
PAUSE


generator.next()
      ↓
yield 30
      ↓
PAUSE


generator.next()
      ↓
DONE
```

---

# 🔥 Iterator vs Generator

These two are related, so interviewers may ask their difference.

### Iterator

An iterator is an **object** that provides values using `next()`.

```js
const iterator = numbers[Symbol.iterator]();

iterator.next();
```

### Generator

A generator is a **special function** that automatically creates an iterator when called.

```js
function* numbers() {
  yield 10;
  yield 20;
}

const generator = numbers();
```

So:

```text
Generator Function
       ↓
Calling it
       ↓
Generator Object
       ↓
Iterator
       ↓
next()
       ↓
Values one by one
```

### Easy Way to Remember

```text
Symbol
   ↓
Creates unique values


Iterator
   ↓
Gives values one by one


Generator
   ↓
Function that can pause/resume
   ↓
Automatically provides an iterator
```

### Interview Answers

**Symbol:**
A Symbol is a primitive data type that creates a unique value and is commonly used as a unique object property key.

**Iterator:**
An iterator is an object with a `next()` method that returns values one at a time along with a `done` status.

**Generator:**
A generator is a special function that can pause and resume its execution using `yield` and automatically produces an iterator when called.

<!-- ============================== -->

## 🔥 What are Getters and Setters?

**Getters and setters are special methods used to read and update object properties in a controlled way.**

In simple words:

> **Getter → property ki value read/get karta hai.**
> **Setter → property ki value set/update karta hai.**

They are mainly used when we want to **control how a property is accessed or changed**.

---

## Getter

A **getter** is a method that runs automatically when we **read a property**.

We use the `get` keyword.

### Simple Example

```js
const user = {
  firstName: "Ajay",
  lastName: "Maurya",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.fullName);
```

Output:

```text
Ajay Maurya
```

Notice that we didn't call it like a normal function:

```js
user.fullName();
```

Instead, we used:

```js
user.fullName;
```

Because `fullName` is a **getter**.

When JavaScript sees:

```js
user.fullName;
```

the getter automatically runs:

```text
user.fullName
      ↓
getter runs
      ↓
returns "Ajay Maurya"
```

---

## Setter

A **setter** is a method that runs automatically when we **assign a value to a property**.

We use the `set` keyword.

### Simple Example

```js
const user = {
  firstName: "Ajay",

  set name(value) {
    this.firstName = value;
  },
};

user.name = "Rahul";

console.log(user.firstName);
```

Output:

```text
Rahul
```

When we write:

```js
user.name = "Rahul";
```

the setter automatically runs:

```text
user.name = "Rahul"
       ↓
setter runs
       ↓
this.firstName = "Rahul"
```

We don't call the setter like a normal function.

---

## 🔥 Why are Getters and Setters Useful?

They allow us to **control property access and modification**.

For example, suppose we don't want an age below `0`.

```js
const user = {
  _age: 25,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value >= 0) {
      this._age = value;
    }
  },
};

console.log(user.age);
```

Output:

```text
25
```

Now:

```js
user.age = 30;

console.log(user.age);
```

Output:

```text
30
```

But:

```js
user.age = -10;

console.log(user.age);
```

Output:

```text
30
```

Why?

Because the setter contains validation:

```js
set age(value) {
  if (value >= 0) {
    this._age = value;
  }
}
```

The value `-10` is rejected.

---

## 🔥 Getter vs Setter

| Getter                     | Setter                         |
| -------------------------- | ------------------------------ |
| Used to read a value       | Used to set/update a value     |
| Uses `get`                 | Uses `set`                     |
| Runs when property is read | Runs when property is assigned |
| Must return a value        | Receives the new value         |
| Example: `user.age`        | Example: `user.age = 30`       |

### Easy Way to Remember

```text
Getter
  ↓
GET value
  ↓
user.age


Setter
  ↓
SET value
  ↓
user.age = 30
```

### One-Line Memory Trick

```text
Getter → Read
Setter → Update
```

### Interview Answer

**Getters and setters are special methods that allow us to control how object properties are read and modified. A getter runs when a property is accessed, while a setter runs when a property is assigned a new value.**

<!-- =========================== -->

## 🔥 What are Private Class Fields?

**Private class fields are class properties that can only be accessed from inside the class.**

They are declared using the `#` symbol.

In simple words:

> **`#` lagane se class ka field private ho jata hai, aur usse class ke bahar directly access nahi kar sakte.**

### Simple Example

```js
class User {
  #password = "12345";

  checkPassword() {
    console.log(this.#password);
  }
}

const user = new User();

user.checkPassword();
```

Output:

```text
12345
```

Here:

```js
#password
```

is a **private class field**.

It can be accessed from inside the class:

```js
this.#password;
```

but not from outside:

```js
console.log(user.#password);
```

This gives an error because `#password` is private.

---

## 🔥 Why do we use Private Class Fields?

Private fields are useful when we have data that should **not be directly accessed or modified from outside the class**.

For example, suppose we have a bank account:

```js
class BankAccount {
  #balance = 1000;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Output:

```text
1500
```

The balance is private:

```js
#balance
```

We cannot directly do:

```js
account.#balance = 1000000;
```

Instead, we control how the balance changes through methods:

```js
account.deposit(500);
```

So the class can apply its own rules before changing the data.

---

## 🔥 Private vs Normal Class Field

Normal field:

```js
class User {
  name = "Ajay";
}

const user = new User();

console.log(user.name);
```

Output:

```text
Ajay
```

It can be accessed from outside.

Private field:

```js
class User {
  #name = "Ajay";
}

const user = new User();

console.log(user.#name); // Error
```

It cannot be accessed from outside.

### Visual Difference

```text
Normal field

class
  ↓
name
  ↓
Outside code can access it ✅


Private field

class
  ↓
#name
  ↓
Only class can access it ✅
Outside code ❌
```

### Important Point

`#` is not just a naming convention.

This:

```js
_name;
```

does **not** make a field private. It is only a convention that developers may use to indicate an internal field.

But this:

```js
#name
```

is a **real JavaScript private field**.

---

## 🔥 Easy Way to Remember

```text
#field
   ↓
Private
   ↓
Can be accessed only inside the class
```

### Interview Answer

**Private class fields are class properties declared with `#` that cannot be directly accessed from outside the class. They are used to hide internal data and control how that data is accessed or modified.**

<!-- =========================== -->

## 🔥 What is Dynamic Import?

**Dynamic import is a way to load a JavaScript module only when it is needed, instead of loading it when the application starts.**

It uses:

```js
import()
```

In simple words:

> **Module ko pehle se load mat karo. Jab zarurat pade tab load karo.**

---

### Normal Import

With a normal `import`, the module is loaded as part of the module's initial dependency graph.

```js
import { calculate } from "./math.js";

console.log(calculate(10, 20));
```

Even if `calculate()` is needed much later, the module is part of the initial module loading process.

---

### Dynamic Import

With dynamic import:

```js
const math = await import("./math.js");

console.log(math.calculate(10, 20));
```

The module is loaded **when this code runs**.

```text
Application starts
       ↓
math.js is NOT loaded yet
       ↓
Code needs math.js
       ↓
import("./math.js")
       ↓
Module loads
       ↓
Use the module
```

---

## 🔥 Dynamic Import Returns a Promise

This is important.

`import()` returns a **Promise**.

So we can use `.then()`:

```js
import("./math.js").then((math) => {
  console.log(math.calculate(10, 20));
});
```

Or, more commonly, `async/await`:

```js
async function calculate() {
  const math = await import("./math.js");

  console.log(math.calculate(10, 20));
}
```

---

## 🔥 Real-World Example

Suppose a website has an admin dashboard.

Normal import:

```js
import { generateReport } from "./report.js";
```

The report module may be loaded even if the user never opens the report section.

Instead, we can load it only when the user clicks **Generate Report**:

```js
button.addEventListener("click", async () => {
  const report = await import("./report.js");

  report.generateReport();
});
```

Now:

```text
Page loads
   ↓
User does not click Report
   ↓
report.js is not loaded


User clicks "Generate Report"
   ↓
import("./report.js")
   ↓
report.js loads
   ↓
generateReport()
```

This can help reduce the **initial JavaScript that needs to be loaded and parsed**, especially in larger applications.

---

## 🔥 Where is Dynamic Import Useful?

### 1. Load Code Only When Needed

```js
const module = await import("./admin.js");
```

Useful when a feature is not needed immediately.

### 2. Code Splitting

Bundlers such as Webpack and Vite can use dynamic imports to create separate chunks.

```text
Main application
      ↓
      ├── main.js
      ├── admin chunk
      └── report chunk
```

The browser can load those additional chunks when required.

### 3. Conditional Loading

We can load different modules depending on a condition:

```js
if (isAdmin) {
  const admin = await import("./admin.js");

  admin.showDashboard();
}
```

If `isAdmin` is false, the admin module doesn't need to be loaded.

---

## 🔥 Normal Import vs Dynamic Import

| Normal `import`                | Dynamic `import()`                           |
| ------------------------------ | -------------------------------------------- |
| Declared statically            | Called when needed                           |
| Part of initial module graph   | Can load later                               |
| Uses `import ... from`         | Uses `import()`                              |
| Does not return a Promise      | Returns a Promise                            |
| Good for always-needed modules | Good for conditionally/lazily needed modules |

### Example

Normal:

```js
import { add } from "./math.js";
```

Dynamic:

```js
const math = await import("./math.js");
```

---

### Easy Way to Remember

```text
Normal Import
     ↓
"Load this module as part of my application."


Dynamic Import
     ↓
"Load this module when I actually need it."
```

### Interview Answer

**Dynamic import is a way to load a JavaScript module asynchronously at runtime using `import()`. It returns a Promise and is commonly used for lazy loading, conditional loading, and code splitting.**

<!-- ============================== -->

## 🔥 What is Tree Shaking?

**Tree shaking is a build optimization technique that removes unused JavaScript code from the final bundle.**

In simple words:

> **Jo code application mein use nahi ho raha, bundler us unused code ko final JavaScript bundle se remove kar deta hai.**

Imagine a module has 3 functions:

```js id="p7m3xq"
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}
```

But our application only uses `add`:

```js id="k9w4vz"
import { add } from "./math.js";

console.log(add(10, 20));
```

We don't use:

```text id="n5c8qd"
subtract()
multiply()
```

A bundler can identify that these functions are unused and remove them from the production bundle.

```text id="z3r6wp"
Original code
     ↓
add()
subtract()
multiply()
     ↓
Tree Shaking
     ↓
Final bundle
     ↓
add() ✅
subtract() ❌
multiply() ❌
```

### Why is it called "Tree Shaking"?

Think of JavaScript code as a tree:

```text id="w8k2ms"
Application
    │
    ├── add()        ✅ Used
    │
    ├── subtract()   ❌ Unused
    │
    └── multiply()   ❌ Unused
```

The bundler "shakes" the tree and removes the unused branches.

---

## 🔥 Why is Tree Shaking Useful?

It can make the final JavaScript bundle **smaller**.

Smaller bundle means:

```text id="v4m7nx"
Less JavaScript
     ↓
Less data to download
     ↓
Less code to parse/execute
     ↓
Potentially faster application loading
```

This is especially useful in large applications with many modules and dependencies.

---

## 🔥 Example with Multiple Exports

`math.js`:

```js id="r6p9cw"
export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => a / b;
```

`app.js`:

```js id="m2x7ka"
import { add } from "./math.js";

console.log(add(10, 20));
```

The application only needs:

```text id="q8v3wd"
add()
```

So a bundler such as **Vite/Webpack** can remove the unused exports from the production bundle when the code is structured in a tree-shakeable way.

---

## 🔥 Tree Shaking vs Dynamic Import

These two are different concepts.

### Tree Shaking

Removes **unused code**.

```text id="s6n4pk"
Unused code
    ↓
Remove it ❌
```

### Dynamic Import

Loads code **only when it is needed**.

```text id="c9w2xm"
Code needed later
    ↓
Load later
```

So:

```text id="j5k8vq"
Tree Shaking  → Remove unused code

Dynamic Import → Load needed code later
```

They can also work together in the same application.

---

## 🔥 Important Point

Tree shaking works best with **ES Modules (`import` / `export`)** because their dependencies can be analyzed statically by build tools.

For example:

```js id="x3m7qn"
import { add } from "./math.js";
```

The bundler can understand which exports are being used.

### Interview Answer

**Tree shaking is a build-time optimization technique that removes unused JavaScript code from the final bundle, reducing bundle size and potentially improving application loading performance.**

### One-Line Memory Trick

```text id="b7q2mz"
Tree Shaking
     ↓
Unused code → Remove it
     ↓
Smaller bundle
```

<!-- ======================== -->
