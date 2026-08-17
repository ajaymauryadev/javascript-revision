## 226. 🔥🔥🔥 Predict the output of `var` hoisting

Before solving the output, remember:

> **`var` declarations are hoisted to the top of their function scope, but their value is not assigned until the original line is executed.**

So if we use a `var` variable before its declaration, JavaScript knows about the variable, but its value is initially `undefined`.

### Example 1

```js
console.log(a);

var a = 10;
```

### Output

```text
undefined
```

### Why?

JavaScript treats it roughly like this:

```js
var a;

console.log(a);

a = 10;
```

So:

```text
var a = 10;
     ↓
Declaration is hoisted
     ↓
var a;
     ↓
Initially: undefined
     ↓
console.log(a)
     ↓
undefined
     ↓
a = 10
```

---

### Example 2

```js
console.log(a);

var a = 10;

console.log(a);
```

Output:

```text
undefined
10
```

Why?

Before the assignment:

```js
var a;
```

So the first `console.log()` gets:

```text
undefined
```

Then:

```js
a = 10;
```

assigns the value.

So the second `console.log()` gets:

```text
10
```

---

## 🔥🔥 Important Output Question

```js
console.log(a);

var a = 10;

console.log(a);

var a = 20;

console.log(a);
```

Output:

```text
undefined
10
20
```

Because `var` can be **redeclared** in the same scope:

```js
var a = 10;
var a = 20;
```

The second assignment simply changes the value.

---

## 🔥 Function Scope Example

`var` is function-scoped:

```js
function test() {
  console.log(a);

  var a = 10;

  console.log(a);
}

test();
```

Output:

```text
undefined
10
```

Conceptually:

```js
function test() {
  var a;

  console.log(a);

  a = 10;

  console.log(a);
}
```

---

## 🔥🔥 One Important Trick

Look at this:

```js
console.log(a);

if (true) {
  var a = 10;
}

console.log(a);
```

Output:

```text
undefined
10
```

Why?

Because `var` does **not** have block scope.

The `if` block does not create a separate scope for `var`.

Conceptually:

```js
var a;

console.log(a);

if (true) {
  a = 10;
}

console.log(a);
```

---

## 🧠 Easy Rule for `var` Hoisting

Whenever you see:

```js
console.log(x);

var x = 100;
```

Think:

```js
var x;

console.log(x); // undefined

x = 100;
```

So remember:

```text
var declaration → hoisted
var initialization/assignment → NOT hoisted
```

### 🔥 Interview Answer

**With `var`, the variable declaration is hoisted to the top of its function scope and initialized with `undefined`. The assignment remains at its original position. Therefore, accessing a `var` variable before its declaration returns `undefined` rather than throwing an error.**

<!-- ================================= -->

## 🔥🔥🔥 Predict the output of `let`/`const` + TDZ

`let` aur `const` bhi hoist hote hain, but `var` ki tarah automatically `undefined` nahi milta.

Declaration se pehle variable ko access karne ki koshish karoge to:

```text id="q7m3kx"
ReferenceError
```

aayega.

Is period ko **TDZ (Temporal Dead Zone)** kehte hain.

---

## 1. 🔥 `let` Before Declaration

Consider:

```js id="k8p4nz"
console.log(a);

let a = 10;
```

### Output

```text id="r5x2qm"
ReferenceError
```

JavaScript `let a` ko recognize karta hai, but declaration line se pehle `a` ko access karna allowed nahi hai.

Conceptually:

```text id="m7q3wp"
let a
 ↓
TDZ starts
 ↓
console.log(a) ❌
 ↓
ReferenceError
 ↓
let a = 10
 ↓
TDZ ends
```

---

## 2. 🔥 `let` After Declaration

```js id="v4n8ks"
let a = 10;

console.log(a);
```

Output:

```text id="x6p2wd"
10
```

Because now variable declaration and initialization have already happened.

```text id="c9m5vq"
let a = 10
      ↓
Initialization complete
      ↓
console.log(a)
      ↓
10
```

---

## 3. 🔥 `const` Before Declaration

The same rule applies to `const`.

```js id="j2k7mx"
console.log(name);

const name = "Ajay";
```

Output:

```text id="p8q4zn"
ReferenceError
```

Why?

Because `name` is inside the TDZ until this line executes:

```js id="s6v3wp"
const name = "Ajay";
```

---

## 4. 🔥 `const` After Declaration

```js id="m9x4kv"
const name = "Ajay";

console.log(name);
```

Output:

```text id="d7n2qm"
Ajay
```

---

# 🔥🔥 `var` vs `let` vs `const`

This is extremely important for output-based questions.

### `var`

```js id="q3m8wp"
console.log(a);

var a = 10;
```

Output:

```text id="n6k2vx"
undefined
```

Because `var` is hoisted and initialized with `undefined`.

---

### `let`

```js id="w5p9zn"
console.log(a);

let a = 10;
```

Output:

```text id="r8m3kd"
ReferenceError
```

Because `a` is in the TDZ.

---

### `const`

```js id="f4x7qm"
console.log(a);

const a = 10;
```

Output:

```text id="j9v2wp"
ReferenceError
```

Again, `a` is in the TDZ.

---

# 🔥🔥 What exactly is TDZ?

**TDZ (Temporal Dead Zone) is the time between entering the scope of a `let` or `const` variable and the point where that variable is initialized.**

In simple words:

> **Variable scope mein aa chuka hai, but declaration/initialization se pehle usko use nahi kar sakte.**

### Example

```js id="c8m4qx"
console.log(a); // ❌ TDZ

let a = 10; // TDZ ends here

console.log(a); // ✅ 10
```

Think:

```text id="v7n2ks"
Scope starts
     ↓
┌───────────────┐
│      TDZ      │
│               │
│ a cannot be   │
│ accessed ❌   │
└───────────────┘
     ↓
let a = 10
     ↓
TDZ ends
     ↓
a can be accessed ✅
```

---

# 🔥🔥🔥 Output-Based Question

Now try this:

```js id="m3q8vx"
let a = 10;

{
  console.log(a);

  let a = 20;
}
```

### Output

```text id="p6k2wm"
ReferenceError
```

This is a **very common interview trap**.

You might think:

> "Outer `a` is already `10`, so it should print `10`."

But that's wrong.

Inside the block:

```js id="r8n4kp"
{
  console.log(a);

  let a = 20;
}
```

the inner `a` creates a new variable.

That inner `a` is in the TDZ before:

```js id="y5m7qx"
let a = 20;
```

So:

```text id="c2n9vw"
Outer a = 10

        ↓

Block starts

        ↓

Inner a exists
but is in TDZ

        ↓

console.log(a) ❌

        ↓
ReferenceError
```

The outer `a` is **not used**.

---

# 🔥🔥 Another Important Question

```js id="n7x3qm"
{
  let a = 10;
}

console.log(a);
```

### Output

```text id="k4m8wp"
ReferenceError
```

Why?

Because `let` is **block-scoped**.

```text id="v9q2ks"
{
   let a = 10;
}
      ↓
Block ends
      ↓
a no longer accessible
```

---

# 🔥 `const` Has One More Rule

`const` must be initialized when declared.

This is invalid:

```js id="z5m8qx"
const a;

a = 10;
```

Output:

```text id="p3n7wv"
SyntaxError
```

You must do:

```js id="c8x4mq"
const a = 10;
```

But `let` can be declared first:

```js id="r6m2kp"
let a;

a = 10;
```

This is valid.

---

# 🔥🔥 Important Difference

```text id="x7q3mw"
var
 ↓
Hoisted
 ↓
Initialized with undefined
 ↓
Can access before declaration
 ↓
undefined


let / const
 ↓
Hoisted
 ↓
Not accessible before initialization
 ↓
TDZ
 ↓
ReferenceError
```

---

# 🧠 Easy Memory Trick

Don't think:

> "`let` and `const` are not hoisted."

That's a common but **technically incorrect** interview answer.

Instead remember:

```text id="m4k8zp"
var
→ Hoisted + initialized with undefined


let
→ Hoisted + TDZ


const
→ Hoisted + TDZ
```

And:

```text id="j9p2vx"
TDZ
↓
Declaration se pehle
let/const ko access nahi kar sakte
↓
ReferenceError
```

### 🔥🔥🔥 Interview Answer

**`let` and `const` are hoisted, but they remain in the Temporal Dead Zone (TDZ) from the beginning of their scope until their declaration is initialized. Accessing them during this period results in a `ReferenceError`.**

### One-Line Memory Trick

```text id="q6n3wm"
var   → undefined

let   → TDZ → ReferenceError

const → TDZ → ReferenceError
```

<!-- ============================== -->

## 🔥🔥🔥 Predict output involving Closures

**Closure is created when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.**

Simple words:

> **Inner function apne outer function ke variables ko remember karta hai.**

---

## 1. 🔥 Basic Closure Output

```js
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const fn = outer();

fn();
```

### Output

```text
Hello
```

### Why?

First:

```js
const fn = outer();
```

`outer()` runs.

Inside `outer()`:

```js
let message = "Hello";
```

Then `inner` function is returned.

So:

```text
outer()
  ↓
message = "Hello"
  ↓
inner function remembers message
  ↓
fn = inner function
```

Later:

```js
fn();
```

Even though `outer()` has already finished, `inner()` still remembers:

```text
message = "Hello"
```

Therefore:

```text
Hello
```

---

# 🔥🔥 Important Output Question

```js
function outer() {
  let count = 10;

  return function () {
    console.log(count);
  };
}

const fn = outer();

fn();
```

### Output

```text
10
```

Because the returned function forms a closure over `count`.

Think:

```text
outer()
  ↓
count = 10
  ↓
return function
  ↓
function remembers count
  ↓
outer() finishes
  ↓
fn()
  ↓
10
```

---

# 🔥🔥 Closure Can Remember Updated Values

Look at this carefully:

```js
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn();
fn();
fn();
```

### Output

```text
1
2
3
```

Why?

Because all three calls use the **same `count` variable**.

First:

```text
count = 0
   ↓
count++
   ↓
1
```

Second:

```text
count = 1
   ↓
count++
   ↓
2
```

Third:

```text
count = 2
   ↓
count++
   ↓
3
```

The closure keeps the variable alive.

---

# 🔥🔥🔥 Very Important Output Question

```js
function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
```

### Output

```text
1
2
1
2
```

This is a common interview question.

Why doesn't `counter2()` continue from `2`?

Because:

```js
const counter1 = counter();
```

creates one separate closure.

And:

```js
const counter2 = counter();
```

creates another separate closure.

Think:

```text
counter1
   ↓
count = 0
   ↓
1 → 2


counter2
   ↓
count = 0
   ↓
1 → 2
```

They have **separate copies of the outer function's variable environment**.

---

# 🔥🔥 Output Question with `var`

This is another very common one:

```js
function outer() {
  var count = 10;

  function inner() {
    console.log(count);
  }

  count = 20;

  return inner;
}

const fn = outer();

fn();
```

### Output

```text
20
```

A closure does not remember the **old value**.

It remembers/accesses the **variable itself**.

So:

```text
count = 10
   ↓
count = 20
   ↓
fn()
   ↓
20
```

This is very important.

> **Closure remembers the variable, not a snapshot of its value.**

---

# 🔥🔥 Closure + Loop

Now comes one of the most famous JavaScript interview questions.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

After approximately 1 second:

```text
3
3
3
```

Why?

Because `var` is **function-scoped**, so all three callbacks refer to the same `i`.

After the loop finishes:

```text
i = 3
```

Then the callbacks execute:

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

# 🔥🔥 Same Question with `let`

Now change `var` to `let`:

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

Why?

Because `let` is **block-scoped**, and each loop iteration gets its own `i` binding.

Think:

```text
Iteration 1 → i = 0 → callback remembers 0

Iteration 2 → i = 1 → callback remembers 1

Iteration 3 → i = 2 → callback remembers 2
```

So:

```text
0
1
2
```

---

# 🔥🔥🔥 One More Important Question

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount());
```

### Output

```text
2
```

Both methods:

```js
increment();
getCount();
```

have access to the same `count` variable.

```text
createCounter()
       ↓
   count = 0
       ↓
 ┌─────┴─────┐
 ↓           ↓
increment   getCount
 ↓           ↓
same count variable
```

After two increments:

```text
count = 2
```

So:

```text
2
```

---

# 🧠 How to Solve Closure Output Questions

Whenever you see a closure question, follow these steps:

### Step 1 — Find the outer variable

```js
let count = 0;
```

Ask:

> Which variable is being remembered?

---

### Step 2 — Find the inner function

```js
return function () {
  count++;
};
```

Ask:

> Which outer variables is this function using?

---

### Step 3 — Check how many times the outer function runs

```js
const a = counter();
const b = counter();
```

This means:

```text
Two separate closures
```

But:

```js
const a = counter();

a();
a();
```

means:

```text
Same closure
Same count
```

---

### Step 4 — Track the variable value

Don't think:

```text
Closure → remembers old value
```

Think:

```text
Closure → remembers/accesses the variable
```

So if the variable changes:

```js
count++;
```

the closure sees the updated value.

---

# 🔥🔥🔥 Most Important Patterns

### Pattern 1

```js
function outer() {
  let x = 10;

  return function () {
    console.log(x);
  };
}

const fn = outer();

fn();
```

Output:

```text
10
```

---

### Pattern 2

```js
function outer() {
  let x = 0;

  return function () {
    return ++x;
  };
}

const fn = outer();

console.log(fn());
console.log(fn());
```

Output:

```text
1
2
```

---

### Pattern 3

```js
const a = outer();
const b = outer();
```

Output from each closure starts independently.

```text
a → separate variables
b → separate variables
```

---

### Pattern 4 — `var` Loop

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```text
3
3
3
```

---

### Pattern 5 — `let` Loop

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```text
0
1
2
```

---

## 🧠 Final Memory Trick

```text
Closure
   ↓
Inner function
   ↓
Remembers outer variables
   ↓
Even after outer function finishes
```

And for output questions:

```text
Same outer function call
→ Same closure
→ Same remembered variables


New outer function call
→ New closure
→ New variables
```

### 🔥🔥🔥 Interview Answer

**A closure allows an inner function to remember and access variables from its outer scope even after the outer function has finished executing. In output questions, always check which variables the inner function closes over and whether the same or separate closure is being used.**

<!-- =============================== -->

## 🔥🔥🔥 Predict output involving `this`

**`this` is a special keyword that refers to the object/context associated with the current function call.**

Simple words:

> **`this` ki value mostly is baat se decide hoti hai ki function ko kis tarah call kiya gaya hai.**

---

# 🔥 1. `this` Inside an Object Method

```js id="q7m3kx"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

### Output

```text id="r5x2qm"
Ajay
```

Why?

Function ko humne call kiya:

```js id="m7q3wp"
user.greet();
```

Yahan function `user` object ke through call hua.

So:

```text id="c9n5vq"
this → user
```

Therefore:

```js id="v4k8wp"
this.name;
```

means:

```js id="j2x6qm"
user.name;
```

which is:

```text id="p8m3zn"
Ajay
```

---

# 🔥 2. Simple Function mein `this`

Consider:

```js id="x6n4kp"
function greet() {
  console.log(this);
}

greet();
```

Yahan answer **strict mode/environment par depend karta hai**.

In modern JavaScript modules/strict mode:

```text id="w8q2mv"
undefined
```

In a traditional non-strict browser script:

```text id="f5m7xz"
window
```

So interview mein context check karna important hai.

For example:

```js id="s3k9wp"
"use strict";

function greet() {
  console.log(this);
}

greet();
```

Output:

```text id="n6v2qm"
undefined
```

Because a normal function called without an object has `this === undefined` in strict mode.

---

# 🔥🔥 3. `this` with a Method

```js id="k4m8pz"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text id="c7x3wn"
Ajay
```

Remember:

```text id="p9m4vk"
user.greet()
     ↓
this = user
```

---

# 🔥🔥 4. Function ko Alag Variable mein Store Karna

This is a very common output question.

```js id="r8q2mx"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;

fn();
```

What happens?

Originally:

```js id="j5n7wp"
user.greet();
```

would have:

```text id="a3k9vx"
this → user
```

But now:

```js id="m6q2zn"
fn();
```

The function is called without an object.

So in strict mode:

```text id="v8x4kp"
undefined
```

The important point is:

> **`this` function ke andar permanently attached nahi hota. Call karte waqt decide hota hai.**

---

# 🔥🔥 5. `this` with `call()`

`call()` allows us to explicitly set `this`.

```js id="q3m7xn"
function greet() {
  console.log(this.name);
}

const user = {
  name: "Ajay",
};

greet.call(user);
```

Output:

```text id="p8k4mz"
Ajay
```

Because:

```js id="n5x2qw"
greet.call(user);
```

means:

```text id="c7m9vp"
Run greet()
and make this = user
```

---

# 🔥🔥 6. `this` with `apply()`

`apply()` works similarly to `call()`.

```js id="w4k8qm"
function greet() {
  console.log(this.name);
}

const user = {
  name: "Ajay",
};

greet.apply(user);
```

Output:

```text id="r6n2xz"
Ajay
```

So:

```text id="v9m3kp"
call()  → manually sets this
apply() → manually sets this
```

---

# 🔥🔥 7. `this` with `bind()`

`bind()` creates a **new function with `this` permanently bound to the specified object**.

```js id="j7q4wn"
const user = {
  name: "Ajay",
};

function greet() {
  console.log(this.name);
}

const fn = greet.bind(user);

fn();
```

Output:

```text id="m5x8zp"
Ajay
```

Think:

```text id="n3k6vq"
greet.bind(user)
       ↓
new function
       ↓
this = user
```

---

# 🔥🔥🔥 8. Arrow Function and `this`

This is **very important**.

Arrow functions do **not have their own `this`**.

They take `this` from their surrounding scope.

Example:

```js id="c8m4xp"
const user = {
  name: "Ajay",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

Many people think output will be:

```text id="d7q2wm"
Ajay ❌
```

But that's not how arrow functions work.

The arrow function does not get `this` from:

```js id="v5n9kx"
user.greet();
```

Instead, it takes `this` from its surrounding lexical scope.

In a typical browser script, this may result in:

```text id="a4m8zp"
undefined
```

or in other environments/modules, also commonly:

```text id="k6x3qn"
undefined
```

So the important rule is:

> **Arrow function ka `this` object ke through call hone se change nahi hota.**

---

# 🔥🔥 9. Normal Function vs Arrow Function

Compare these:

### Normal Function

```js id="q8m3vz"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text id="n5x7kp"
Ajay
```

Because:

```text id="m2c9wx"
this → user
```

---

### Arrow Function

```js id="r4k8qm"
const user = {
  name: "Ajay",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

The arrow function doesn't create its own `this`.

```text id="p7n3vx"
this
 ↓
comes from outer scope
```

So don't expect:

```text id="f6m2qw"
this → user ❌
```

---

# 🔥🔥🔥 10. Nested Normal Function

This is another common trap.

```js id="w9k4pn"
const user = {
  name: "Ajay",

  greet() {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

user.greet();
```

What happens?

First:

```js id="c3m7xz"
user.greet();
```

So inside `greet()`:

```text id="q8n5vk"
this → user
```

But then:

```js id="j6p2wm"
inner();
```

`inner()` is called as a normal function.

It does **not automatically inherit** `greet()`'s `this`.

In strict mode:

```text id="r4x9qp"
undefined
```

This is why arrow functions are often useful for nested callbacks.

---

# 🔥🔥 11. Nested Arrow Function

Now change `inner` to an arrow function:

```js id="m7q3xn"
const user = {
  name: "Ajay",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.greet();
```

### Output

```text id="p8k5vz"
Ajay
```

Why?

Outer method:

```text id="v3m9qx"
user.greet()
     ↓
this = user
```

Arrow function:

```text id="c6n2wp"
inner()
     ↓
doesn't create its own this
     ↓
uses outer this
     ↓
user
```

Therefore:

```text id="j4q7mz"
Ajay
```

---

# 🔥🔥🔥 12. `this` in Constructor

Look at this:

```js id="x8m3kp"
function Person(name) {
  this.name = name;
}

const user = new Person("Ajay");

console.log(user.name);
```

Output:

```text id="q5n9vw"
Ajay
```

When using:

```js id="c7m2zx"
new Person("Ajay");
```

`this` inside the constructor refers to the **newly created object**.

Think:

```text id="p4k8qn"
new Person("Ajay")
       ↓
new object created
       ↓
this → new object
       ↓
this.name = "Ajay"
```

---

# 🔥🔥🔥 13. `this` in Class

Same idea applies to classes.

```js id="m6x2wp"
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const user = new User("Ajay");

user.greet();
```

Output:

```text id="r8n4kz"
Ajay
```

Here:

```text id="j3q7vm"
user.greet()
     ↓
this → user
```

---

# 🔥🔥🔥 14. Famous Output Question

```js id="q9m4wp"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

const user2 = {
  name: "Rahul",
};

user2.greet = user.greet;

user2.greet();
```

### Output

```text id="v5k8xn"
Rahul
```

This is very important.

You might think:

> "`greet` originally belongs to `user`, so it should print Ajay."

No.

`this` depends on **how the function is called**.

Here:

```js id="z2n7qm"
user2.greet();
```

So:

```text id="c6m4vx"
this → user2
```

Therefore:

```js id="s8p3kn"
this.name;
```

means:

```js id="n7q2wm"
user2.name;
```

which is:

```text id="x4m9kp"
Rahul
```

---

# 🔥🔥🔥 15. Another Important Output Question

```js id="p7m3xq"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();

const fn = user.greet;

fn();
```

### Output

In strict mode/module:

```text id="k5n8vz"
Ajay
undefined
```

Why?

First:

```js id="q3m7wp"
user.greet();
```

```text id="v8x2nm"
this → user
```

So:

```text id="j6m4kp"
Ajay
```

Second:

```js id="r9q5wx"
fn();
```

No object is calling the function.

So in strict mode:

```text id="c4n7zm"
this → undefined
```

Therefore:

```text id="m8x2qp"
undefined
```

---

# 🧠 How to Solve `this` Output Questions

Whenever you see `this`, **don't immediately look at where the function was written.**

Look at:

> **How is the function being called?**

### Case 1

```js id="b7x3qm"
user.greet();
```

```text id="w4n8kp"
this → user
```

---

### Case 2

```js id="p6m2vz"
const fn = user.greet;

fn();
```

```text id="r9q5wx"
this → undefined (strict mode)
```

---

### Case 3

```js id="j8k4mp"
greet.call(user);
```

```text id="c3n7vq"
this → user
```

---

### Case 4

```js id="x5q9wm"
greet.apply(user);
```

```text id="m7k2zp"
this → user
```

---

### Case 5

```js id="v8n3qx"
const fn = greet.bind(user);

fn();
```

```text id="p4m6wk"
this → user
```

---

### Case 6

Arrow function:

```js id="r2k7mz"
const fn = () => {
  console.log(this);
};
```

```text id="q5x8wp"
Arrow function
     ↓
No own this
     ↓
Uses outer this
```

---

# 🔥🔥🔥 Most Important Rules

```text id="m9q3vx"
Normal function:
this depends on how it is called.


obj.method()
→ this = obj


fn()
→ this = undefined in strict mode


call(obj)
→ this = obj


apply(obj)
→ this = obj


bind(obj)
→ this = obj


new Function()
→ this = newly created object


Arrow function:
→ does NOT have its own this
→ takes this from outer scope
```

### 🧠 One-Line Memory Trick

```text id="x7m4qn"
Normal Function → "Who called me?"

Arrow Function  → "Where was I created?"
```

### 🔥🔥🔥 Interview Answer

**The value of `this` in a regular function is determined mainly by how the function is called. When called as `obj.method()`, `this` refers to `obj`; with `call`, `apply`, or `bind`, it can be explicitly controlled; with `new`, it refers to the newly created object. Arrow functions do not have their own `this` and instead use `this` from their surrounding lexical scope.**

<!-- ============================= -->

Arrow function ka apna this nahi hota. Wo this apne surrounding/outer scope se leta hai.

## 🔥🔥🔥 Predict output involving Arrow Functions

**Arrow functions are functions with shorter syntax that do not have their own `this`, `arguments`, or `prototype`.**

Output questions ke liye sabse important:

```text
Arrow Function
      ↓
Does NOT have its own this
      ↓
Uses this from outer scope
```

---

## 1. 🔥 Basic Arrow Function

```js id="x7m3kp"
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
```

### Output

```text id="p4n8qw"
30
```

Simple function ki tarah hi arguments receive karta hai.

---

## 2. 🔥 Arrow Function with Implicit Return

```js id="m6q2vz"
const add = (a, b) => a + b;

console.log(add(10, 20));
```

### Output

```text id="k8x3wp"
30
```

When the function has only one expression:

```js id="r5n9qm"
(a, b) => a + b;
```

the result is automatically returned.

---

# 🔥🔥🔥 3. Arrow Function Inside an Object

This is a very common interview question.

```js id="q3m7xn"
const user = {
  name: "Ajay",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

### Output

```text id="v8k4zp"
undefined
```

Why?

Because:

```text id="j6m2qx"
user.greet()
      ↓
Arrow function
      ↓
Does NOT create its own this
      ↓
Does NOT get this = user
      ↓
Uses outer this
```

So don't think:

```text id="w5n9km"
user.greet()
     ↓
this = user ❌
```

That's true for a **normal function**, not an arrow function.

---

## 🔥 Compare Normal Function vs Arrow Function

### Normal Function

```js id="c7m4wp"
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text id="p9x2vq"
Ajay
```

Because:

```text id="m4k8zn"
user.greet()
     ↓
this = user
```

### Arrow Function

```js id="r6n3xm"
const user = {
  name: "Ajay",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text id="k7q5wp"
undefined
```

Because the arrow function takes `this` from the surrounding scope.

### Remember

```text id="x8m2qv"
Normal function
→ this depends on how it is called


Arrow function
→ this comes from surrounding scope
```

---

# 🔥🔥 4. Arrow Function Inside a Normal Method

This is where arrow functions become very useful.

```js id="n4q7xm"
const user = {
  name: "Ajay",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.greet();
```

### Output

```text id="p6k3vw"
Ajay
```

Why?

First:

```text id="s9m4qx"
user.greet()
     ↓
this = user
```

Then:

```text id="j7n2kp"
inner()
```

`inner` is an arrow function.

It doesn't create its own `this`.

So it takes `this` from `greet()`:

```text id="c5x8mz"
greet()
  ↓
this = user
  ↓
arrow function
  ↓
uses same this
  ↓
user
```

Therefore:

```text id="w3q6vn"
Ajay
```

---

# 🔥🔥🔥 5. Normal Nested Function vs Arrow Function

Compare these carefully.

### Normal Nested Function

```js id="m8p3xq"
const user = {
  name: "Ajay",

  greet() {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

user.greet();
```

Output in strict mode:

```text id="v4n7kw"
undefined
```

Why?

```text id="a6m2zp"
user.greet()
     ↓
greet's this = user


inner()
     ↓
normal function
     ↓
has its own this
     ↓
called without object
     ↓
this = undefined
```

---

### Arrow Nested Function

```js id="q5k9wm"
const user = {
  name: "Ajay",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

user.greet();
```

Output:

```text id="r8x3vp"
Ajay
```

Because:

```text id="j4m7qn"
arrow function
     ↓
no own this
     ↓
uses greet()'s this
     ↓
user
```

---

# 🔥🔥 6. Arrow Function with `call()`

Very common output question:

```js id="c8n4xm"
const user = {
  name: "Ajay",
};

const greet = () => {
  console.log(this.name);
};

greet.call(user);
```

Will it print:

```text
Ajay
```

❌ **No.**

The arrow function doesn't have its own `this`.

So:

```js id="p6q2vz"
greet.call(user);
```

cannot change its `this`.

Output will typically be:

```text
undefined
```

depending on the surrounding environment.

### Important Rule

```text id="m7x3kp"
Arrow function
   ↓
call()
apply()
bind()
   ↓
Cannot change its this
```

---

# 🔥🔥 7. Arrow Function with `bind()`

```js id="x4m8qn"
const user = {
  name: "Ajay",
};

const greet = () => {
  console.log(this.name);
};

const fn = greet.bind(user);

fn();
```

Output:

```text id="k9p3vw"
undefined
```

Why?

Because `bind()` cannot change the `this` of an arrow function.

Compare:

```text id="q5n8mz"
Normal function + bind()
→ this can be changed


Arrow function + bind()
→ this cannot be changed
```

---

# 🔥🔥🔥 8. Arrow Function in `setTimeout`

This is a very important practical example.

```js id="n6x2mp"
const user = {
  name: "Ajay",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
```

### Output

After approximately 1 second:

```text id="v8q4zn"
Ajay
```

Why?

```text id="j3m7xp"
user.greet()
     ↓
this = user
     ↓
setTimeout callback
     ↓
arrow function
     ↓
uses outer this
     ↓
user
     ↓
Ajay
```

This is one of the most common real-world uses of arrow functions.

---

# 🔥🔥 9. `setTimeout` with Normal Function

Now change the callback:

```js id="r7k3qm"
const user = {
  name: "Ajay",

  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
```

Output in strict mode:

```text id="p4n8vx"
undefined
```

Why?

Because the callback is a normal function:

```text id="c6m2wp"
setTimeout(function () {
  ...
});
```

It doesn't automatically get `greet()`'s `this`.

Compare:

```text id="m9q3zk"
Arrow callback
→ takes outer this


Normal callback
→ has its own this
```

---

# 🔥🔥🔥 10. Arrow Functions Don't Have Their Own `arguments`

This is another possible output question.

```js id="w5k8pn"
function outer() {
  const inner = () => {
    console.log(arguments[0]);
  };

  inner();
}

outer("Ajay");
```

### Output

```text id="r2m7xq"
Ajay
```

Why?

Arrow functions don't have their own `arguments`.

So the arrow function uses the `arguments` from the surrounding normal function:

```text id="j8q4vm"
outer("Ajay")
      ↓
arguments[0] = "Ajay"
      ↓
inner arrow function
      ↓
uses outer arguments
      ↓
Ajay
```

---

# 🔥🔥 11. Arrow Functions Don't Have `prototype`

Normal function:

```js id="q3m7xn"
function Person() {}

console.log(Person.prototype);
```

Output:

```text id="v5k8qm"
{}
```

But:

```js id="m9x4wp"
const Person = () => {};

console.log(Person.prototype);
```

Output:

```text id="p7n2vz"
undefined
```

Arrow functions don't have a `prototype` property because they are not constructor functions.

Therefore this doesn't work:

```js id="c8m5qx"
const Person = () => {};

const user = new Person();
```

It gives:

```text
TypeError
```

because arrow functions cannot be used with `new`.

---

# 🔥🔥🔥 12. Famous Output Question — Loop + Arrow Function

```js id="r6k3wm"
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

```text id="n8q4vp"
0
1
2
```

Why?

Here two concepts are involved:

```text id="j5m7xz"
let
+
arrow function
```

Each loop iteration gets its own `i`.

The arrow callback remembers that iteration's `i`.

```text id="c4n8wp"
Iteration 1 → i = 0 → callback remembers 0
Iteration 2 → i = 1 → callback remembers 1
Iteration 3 → i = 2 → callback remembers 2
```

So:

```text id="v7m3kq"
0
1
2
```

---

# 🔥🔥 Compare with `var`

```js id="x8q4mp"
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```text id="p6n9vz"
3
3
3
```

Why?

`var` creates one shared variable:

```text id="m3k7qx"
i = 0
 ↓
i = 1
 ↓
i = 2
 ↓
i = 3
 ↓
callbacks run
 ↓
3  3  3
```

The arrow functions all reference the same `i`.

---

# 🔥🔥🔥 13. Arrow Function Returning an Object

This is another output/syntax trap.

Look at:

```js id="q9m4wp"
const createUser = () => ({
  name: "Ajay",
});

console.log(createUser());
```

Output:

```text id="k5x8vn"
{ name: "Ajay" }
```

Why are parentheses used?

Because:

```js id="w7n3qm"
() => ({});
```

means:

> **Return this object.**

Without parentheses:

```js id="x4m8kp"
const createUser = () => {
  name: "Ajay";
};
```

This does **not** return the object.

It is treated as a function body.

So:

```js id="p8n2vz"
console.log(createUser());
```

would give:

```text
undefined
```

---

# 🧠 How to Solve Arrow Function Output Questions

Whenever you see an arrow function, check these things:

### Step 1 — Is `this` involved?

If yes:

```text id="r6m3qx"
Arrow → no own this
       ↓
Uses outer this
```

---

### Step 2 — Is `arguments` involved?

If yes:

```text id="k8n4wp"
Arrow → no own arguments
       ↓
Uses outer arguments
```

---

### Step 3 — Is `new` being used?

```js id="v5q2mx"
new MyArrowFunction();
```

Then:

```text id="j7m9zn"
❌ TypeError
```

Arrow functions cannot be constructors.

---

### Step 4 — Is it inside a loop?

Check whether the loop uses:

```text id="c4x8wp"
let → separate binding per iteration


var → shared binding
```

---

### Step 5 — Is the arrow returning an object?

Remember:

```js id="m6p3qz"
() => ({ name: "Ajay" });
```

returns an object.

But:

```js id="n9k4vx"
() => {
  name: "Ajay";
};
```

doesn't return that object.

---

# 🔥🔥🔥 Most Important Rules

```text id="w7m2kp"
Arrow Function
      ↓
No own `this`
      ↓
Uses outer `this`


Arrow Function
      ↓
No own `arguments`
      ↓
Uses outer `arguments`


Arrow Function
      ↓
No `prototype`
      ↓
Cannot be used with `new`


Arrow Function
      ↓
call/apply/bind cannot change its `this`
```

### 🧠 One-Line Memory Trick

```text id="q4n8xm"
Normal Function → "Who called me?"

Arrow Function → "Where was I created?"
```

### 🔥🔥🔥 Interview Answer

**Arrow functions do not have their own `this`, `arguments`, or `prototype`. They inherit `this` and `arguments` from their surrounding lexical scope, cannot be used as constructors with `new`, and their `this` cannot be changed using `call()`, `apply()`, or `bind()`.**

<!-- ============================== -->
