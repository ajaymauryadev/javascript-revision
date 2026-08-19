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

Bilkul. setTimeout() ke output questions mein sabse important cheez timing nahi, execution order samajhna hai.

setTimeout() callback ko turant execute nahi karta. Wo callback ko baad mein run karne ke liye schedule karta hai.

Isliye pehle synchronous code complete hota hai, uske baad setTimeout() callback execute hota hai.

## 🔥🔥🔥 Predict output involving `setTimeout()`

**`setTimeout()` is used to schedule a function to run after a minimum delay. The callback does not execute immediately; JavaScript first completes the current synchronous code.**

Simple words:

> **`setTimeout()` bolta hai: "Ye function abhi mat chalao, baad mein chala dena."**

---

# 🔥 1. Basic `setTimeout()`

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");
```

### Output

```text
Start
End
Timeout
```

### Why?

Bahut log sochte hain:

```text
Start
wait 1 second
Timeout
End
```

❌ Aisa nahi hota.

Instead:

```text
console.log("Start")
        ↓
Start


setTimeout(...)
        ↓
Callback schedule


console.log("End")
        ↓
End


Current code finishes
        ↓
Later callback runs
        ↓
Timeout
```

So:

```text
Start
End
Timeout
```

---

# 🔥🔥 Important: `1000` means exactly 1 second nahi

Consider:

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

`1000` means:

> **Callback will not run before approximately 1000 ms.**

It does **not** guarantee:

```text
Exactly after 1 second
```

If JavaScript is busy doing other work, callback can run later.

Think:

```text
1000 ms
   ↓
Minimum delay
   ↓
Callback becomes eligible to run
   ↓
Event loop runs it when possible
```

---

# 🔥🔥 2. `setTimeout(..., 0)`

This is one of the **most important output questions**.

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### Output

```text
A
C
B
```

Many beginners think:

```text
A
B
C
```

❌ Wrong.

Even with `0` delay, the callback does not run immediately.

```text
console.log("A")
      ↓
A


setTimeout(..., 0)
      ↓
Callback scheduled


console.log("C")
      ↓
C


Synchronous code finished
      ↓
Callback runs
      ↓
B
```

Therefore:

```text
A
C
B
```

### 🧠 Remember

```text
setTimeout(..., 0)
        ↓
NOT "run immediately"
        ↓
"run later"
```

---

# 🔥🔥🔥 3. Multiple `setTimeout()`

```js
setTimeout(() => {
  console.log("First");
}, 1000);

setTimeout(() => {
  console.log("Second");
}, 500);

setTimeout(() => {
  console.log("Third");
}, 0);

console.log("Done");
```

### Output

```text
Done
Third
Second
First
```

Why?

First:

```text
Done
```

because it is synchronous.

Then callbacks become eligible according to their delays:

```text
0 ms    → Third
500 ms  → Second
1000 ms → First
```

So:

```text
Done
Third
Second
First
```

---

# 🔥🔥 4. Same Delay

What if all have the same delay?

```js
setTimeout(() => {
  console.log("A");
}, 1000);

setTimeout(() => {
  console.log("B");
}, 1000);

setTimeout(() => {
  console.log("C");
}, 1000);
```

### Output

```text
A
B
C
```

Why?

They were scheduled in this order:

```text
A
↓
B
↓
C
```

All have the same delay, so their callbacks are queued in that order.

---

# 🔥🔥🔥 5. `setTimeout()` Inside a Loop with `var`

This is a **very famous interview question**.

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

Because `var` is **function-scoped**.

There is one shared `i`.

The loop finishes first:

```text
i = 0
 ↓
i = 1
 ↓
i = 2
 ↓
i = 3
```

Then the callbacks execute.

All callbacks access the same `i`:

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

# 🔥🔥🔥 6. `setTimeout()` Inside a Loop with `let`

Now change `var` to `let`.

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

`let` creates a separate binding for each loop iteration.

Think:

```text
Iteration 1
i = 0
 ↓
callback remembers 0


Iteration 2
i = 1
 ↓
callback remembers 1


Iteration 3
i = 2
 ↓
callback remembers 2
```

So:

```text
0
1
2
```

This combines:

```text
setTimeout
+
closure
+
let/var
```

Very important interview pattern.

---

# 🔥🔥 7. `setTimeout()` with a Normal Function

```js
function greet() {
  console.log("Hello");
}

setTimeout(greet, 1000);

console.log("Done");
```

### Output

```text
Done
Hello
```

Because:

```text
setTimeout(greet, 1000)
        ↓
schedule greet
        ↓
console.log("Done")
        ↓
Done
        ↓
later
        ↓
Hello
```

---

# 🔥🔥 8. `setTimeout()` with Arguments

We can pass arguments to the callback:

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 1000, "Ajay");
```

After the delay:

```text
Hello Ajay
```

Think:

```text
setTimeout(
  function,
  delay,
  argument
)
```

---

# 🔥🔥 9. `setTimeout()` and `clearTimeout()`

We can cancel a scheduled timeout.

```js
const timer = setTimeout(() => {
  console.log("Hello");
}, 1000);

clearTimeout(timer);
```

### Output

```text

```

Nothing is printed.

Why?

```text
setTimeout()
    ↓
Timer scheduled
    ↓
clearTimeout()
    ↓
Timer cancelled
    ↓
Callback doesn't run
```

---

# 🔥🔥🔥 10. Important Output Question

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");
```

### Output

```text
A
D
B
C
```

Why?

Synchronous code:

```text
A
D
```

Then the callbacks execute in the order they were scheduled:

```text
B
C
```

Final:

```text
A
D
B
C
```

---

# 🔥🔥🔥 11. Nested `setTimeout()`

This is another common output question.

```js
console.log("A");

setTimeout(() => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);
}, 0);

console.log("D");
```

### Output

```text
A
D
B
C
```

Let's understand:

First:

```text
A
```

Then first timeout is scheduled.

Then:

```text
D
```

After synchronous code:

```text
B
```

While executing the `B` callback, another timeout is scheduled.

That second callback runs later:

```text
C
```

So:

```text
A
D
B
C
```

---

# 🔥🔥🔥 12. `setTimeout()` + Promise

This is **very important** for experienced JavaScript interviews.

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

Why?

First, synchronous code:

```text
A
D
```

Then JavaScript processes the **microtask queue**, where Promise callbacks go:

```text
C
```

Then the timer callback runs:

```text
B
```

So:

```text
A
D
C
B
```

### Important Rule

For this common case:

```text
Synchronous code
      ↓
Microtasks
(Promise callbacks)
      ↓
Timer/task callbacks
(setTimeout)
```

---

# 🔥🔥🔥 13. Multiple Promises and `setTimeout()`

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output

```text
Start
End
Promise
Timeout
```

Remember:

```text
Start
 ↓
End
 ↓
Promise
 ↓
Timeout
```

---

# 🔥🔥🔥 14. `setTimeout()` Doesn't Block JavaScript

Consider:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

`setTimeout()` does not stop JavaScript and wait.

It schedules the callback and allows the rest of the synchronous code to continue.

```text
Start
 ↓
Schedule timer
 ↓
End
 ↓
Timer callback later
 ↓
Timeout
```

That's why output is:

```text
Start
End
Timeout
```

---

# 🔥🔥🔥 15. Famous Interview Question

Predict the output:

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);
```

### Output

```text
1
3
5
2
4
```

Why?

All normal `console.log()` calls execute first:

```text
1
3
5
```

Then timers execute in the order they were scheduled:

```text
2
4
```

Final:

```text
1
3
5
2
4
```

---

# 🧠 How to Solve `setTimeout()` Output Questions

Whenever you see `setTimeout()`, follow these steps.

### Step 1 — Ignore the timer temporarily

```js
setTimeout(() => {
  console.log("A");
}, 0);
```

Think:

```text
"A ko abhi mat chalao.
Baad mein chalao."
```

---

### Step 2 — Run all synchronous code first

Example:

```js
console.log("A");

setTimeout(...);

console.log("B");
```

First:

```text
A
B
```

---

### Step 3 — Then process callbacks

After the current synchronous work:

```text
setTimeout callback
```

runs when the event loop gets to it.

---

### Step 4 — If Promises are present

Remember the common ordering:

```text
Synchronous code
       ↓
Promise microtasks
       ↓
setTimeout callbacks
```

---

# 🔥🔥🔥 Most Important Patterns

### Pattern 1

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

---

### Pattern 2

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

---

### Pattern 3

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Output:

```text
0
1
2
```

---

### Pattern 4

```js
console.log("A");

Promise.resolve().then(() => console.log("B"));

setTimeout(() => console.log("C"), 0);

console.log("D");
```

Output:

```text
A
D
B
C
```

---

# 🧠 Final Memory Trick

```text
setTimeout()
     ↓
"Run this later"
     ↓
Does NOT stop current code
```

For common browser/Node.js output questions:

```text
┌─────────────────────┐
│ Synchronous code    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Microtasks          │
│ Promise.then()      │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Timer callbacks     │
│ setTimeout()        │
└─────────────────────┘
```

### 🔥🔥🔥 Interview Answer

**`setTimeout()` schedules a callback to run after a minimum delay. It does not block the current synchronous code. The current synchronous code executes first, and the timer callback runs later when the event loop processes the timer/task queue.**

<!-- ======================== -->

Bilkul. Promises ke output questions mein 3 cheezein sabse important hain:

1. Synchronous code pehle chalega.
2. Promise callbacks (then/catch/finally) microtask queue mein jaate hain.
3. Microtasks generally setTimeout() callbacks se pehle execute hote hain.

## 🔥🔥🔥 Predict output involving Promises

**A Promise represents the eventual result of an asynchronous operation. Promise callbacks such as `.then()`, `.catch()`, and `.finally()` are handled asynchronously through the microtask queue.**

Simple words:

> **Promise ka `.then()` turant execute nahi hota. Pehle current synchronous code complete hota hai, phir Promise ka callback run hota hai.**

---

# 🔥 1. Basic Promise Output

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output

```text
Start
End
Promise
```

### Why?

First normal code:

```text
Start
End
```

Then Promise callback:

```text
Promise
```

Think:

```text
console.log("Start")
        ↓
Start

Promise.then(...)
        ↓
Microtask queue

console.log("End")
        ↓
End

Synchronous code finished
        ↓
Promise callback
        ↓
Promise
```

So:

```text
Start
End
Promise
```

---

# 🔥🔥 2. Promise vs `setTimeout()`

This is **very important**.

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

Why?

First synchronous code:

```text
A
D
```

Then Promise microtask:

```text
C
```

Then timer callback:

```text
B
```

So:

```text
Synchronous
    ↓
A
D
    ↓
Promise microtask
    ↓
C
    ↓
setTimeout
    ↓
B
```

### 🧠 Remember

```text
Promise.then()
      ↓
Microtask

setTimeout()
      ↓
Task/Timer callback

Microtask generally runs first.
```

---

# 🔥🔥 3. Promise Constructor Runs Immediately

This is an important trick.

Look at:

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

Many people think `B` will also be delayed because it is inside a Promise.

❌ No.

The Promise constructor's executor runs **synchronously**.

So:

```text
A
 ↓
Promise constructor starts
 ↓
B
 ↓
resolve()
 ↓
.then() scheduled as microtask
 ↓
D
 ↓
C
```

Therefore:

```text
A
B
D
C
```

### 🔥 Important Rule

```text
new Promise((resolve) => {
   // This part runs immediately
});
```

But:

```js
promise.then(() => {
  // This runs later as a microtask
});
```

---

# 🔥🔥🔥 4. `resolve()` Does Not Immediately Run `.then()`

```js
console.log("A");

const promise = new Promise((resolve) => {
  console.log("B");
  resolve("Hello");
});

promise.then((value) => {
  console.log(value);
});

console.log("C");
```

### Output

```text
A
B
C
Hello
```

Why?

Promise executor:

```text
B
```

runs immediately.

But:

```js
promise.then(...)
```

runs later.

So:

```text
A
B
C
Hello
```

---

# 🔥🔥 5. Promise Chain

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

First `.then()` receives:

```text
10
```

Then it returns:

```text
20
```

The next `.then()` receives that returned value.

Think:

```text
Promise.resolve(10)
        ↓
.then()
value = 10
        ↓
return 20
        ↓
next .then()
value = 20
```

---

# 🔥🔥🔥 6. Promise Chain + Synchronous Code

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

Why?

Synchronous:

```text
A
B
```

Then Promise microtasks:

```text
10
20
```

---

# 🔥🔥 7. `return` in Promise Chain

```js
Promise.resolve(5)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    console.log(value);
  });
```

### Output

```text
10
```

Because:

```text
5
 ↓
× 2
 ↓
10
 ↓
next then
 ↓
10
```

---

# 🔥🔥 8. Forgetting `return`

This is a common interview trap.

```js
Promise.resolve(5)
  .then((value) => {
    value * 2;
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

The first `.then()` does:

```js
value * 2;
```

but doesn't return it.

So JavaScript effectively gets:

```js
return undefined;
```

Therefore the next `.then()` receives:

```text
undefined
```

---

# 🔥🔥🔥 9. `Promise.resolve()` with a Value

```js
Promise.resolve("Hello").then((value) => {
  console.log(value);
});
```

### Output

```text
Hello
```

`Promise.resolve("Hello")` creates an already fulfilled Promise.

Then `.then()` receives:

```text
Hello
```

---

# 🔥🔥 10. `Promise.reject()` and `catch()`

```js
Promise.reject("Error").catch((error) => {
  console.log(error);
});
```

### Output

```text
Error
```

The rejected Promise goes to `.catch()`.

Think:

```text
Promise.reject()
      ↓
Rejected
      ↓
catch()
      ↓
Error
```

---

# 🔥🔥 11. `then()` vs `catch()`

```js
Promise.resolve("Success")
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Output

```text
Success
```

Why doesn't `catch()` run?

Because the Promise was fulfilled and no error occurred.

---

# 🔥🔥 12. Error Inside `.then()`

```js
Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong");
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### Output

```text
Something went wrong
```

The error thrown inside `.then()` makes the returned Promise rejected.

Then `.catch()` handles it.

```text
.then()
  ↓
throw error
  ↓
Promise rejected
  ↓
.catch()
  ↓
Something went wrong
```

---

# 🔥🔥🔥 13. `finally()`

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

`finally()` runs after the Promise settles, whether it is fulfilled or rejected.

---

# 🔥🔥 14. `Promise.all()`

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

---

# 🔥🔥🔥 15. `Promise.all()` with Rejection

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

If one Promise rejects, `Promise.all()` rejects.

So:

```text
Promise 1 → Success
Promise 2 → ❌ Error
Promise 3 → Success

        ↓

Promise.all()
        ↓
Rejected
        ↓
catch()
```

---

# 🔥🔥🔥 16. Promise + `setTimeout()` Inside `.then()`

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);
});

console.log("D");
```

### Output

```text
A
D
B
C
```

Let's follow it:

```text
A
 ↓
Promise scheduled
 ↓
D
 ↓
Promise callback
 ↓
B
 ↓
setTimeout scheduled
 ↓
C
```

Therefore:

```text
A
D
B
C
```

---

# 🔥🔥🔥 17. Promise Inside `setTimeout()`

Now reverse it:

```js
console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

console.log("D");
```

### Output

```text
A
D
B
C
```

Why?

First:

```text
A
D
```

Then timer callback:

```text
B
```

Inside that callback, Promise creates a microtask:

```text
C
```

The microtask runs after the current timer callback finishes.

So:

```text
A
D
B
C
```

---

# 🔥🔥🔥 18. Multiple Promise Callbacks

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

### Output

```text
A
D
B
C
```

Why?

The two Promise callbacks are added to the microtask queue in this order:

```text
B
C
```

After synchronous code:

```text
A
D
```

they execute:

```text
B
C
```

Final:

```text
A
D
B
C
```

---

# 🔥🔥🔥 19. Promise Chain Creates More Microtasks

This one looks tricky:

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

Initially the queue is:

```text
First Promise → A
Second Promise → C
```

So:

```text
A
```

runs first.

When `A`'s `.then()` finishes, its next `.then()` (`B`) is added to the **end** of the microtask queue.

At that point:

```text
C
B
```

are waiting.

So:

```text
A
C
B
```

This is a **very good interview-level question**.

---

# 🔥🔥🔥 20. Famous Mixed Question

Predict:

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");
```

### Output

```text
1
4
6
3
5
2
```

### Step-by-Step

### Synchronous code

```text
1
4
6
```

Promise callbacks are waiting:

```text
3
5
```

Timer is waiting:

```text
2
```

Then microtasks:

```text
3
5
```

Then timer:

```text
2
```

Final:

```text
1
4
6
3
5
2
```

---

# 🧠 How to Solve Promise Output Questions

Whenever you see Promises, use this process.

### Step 1 — Run synchronous code first

```js
console.log("A");

Promise.resolve().then(...);

console.log("B");
```

First:

```text
A
B
```

---

### Step 2 — Put `.then()` / `.catch()` callbacks in the Microtask Queue

```text
Promise.then()
      ↓
Microtask Queue
```

---

### Step 3 — Execute microtasks in queue order

If:

```text
B
C
D
```

were added in that order:

```text
B
C
D
```

will execute in that order, assuming no additional queueing changes the sequence.

---

### Step 4 — Remember `setTimeout()`

For common browser/Node.js output questions:

```text
Synchronous
    ↓
Microtasks
(Promise)
    ↓
Timer callbacks
(setTimeout)
```

---

# 🔥🔥🔥 Most Important Rules

```text
1. Promise constructor executor
   → runs immediately


2. .then()
   → runs asynchronously as a microtask


3. .catch()
   → runs as a microtask when rejection is handled


4. .finally()
   → runs after the Promise settles


5. Promise callbacks
   → generally run before setTimeout callbacks


6. return value from .then()
   → becomes the value for the next .then()


7. No return
   → next .then() receives undefined


8. Error thrown in .then()
   → next rejection handler/catch can handle it


9. Promise.resolve()
   → creates a fulfilled Promise


10. Promise.reject()
    → creates a rejected Promise
```

## 🧠 Final Memory Trick

```text
JavaScript Output Question

        ↓

1️⃣ Synchronous code
        ↓
2️⃣ Promise microtasks
        ↓
3️⃣ setTimeout / timer callbacks
```

And the **most important distinction**:

```text
new Promise(() => {
   console.log("A");
});
```

`A` → **immediately**

But:

```js
promise.then(() => {
  console.log("B");
});
```

`B` → **later, as a microtask**

### 🔥🔥🔥 Interview Answer

**Promise executors run synchronously when the Promise is created, but `.then()`, `.catch()`, and `.finally()` callbacks run asynchronously as microtasks. Therefore, synchronous code executes first, followed by Promise microtasks, and then timer callbacks such as `setTimeout()` in the common event-loop scenarios used in output questions.**

<!-- ========================= -->

Bilkul. Ye previous Promise + setTimeout() questions ka next level hai. Isme bas ek hierarchy yaad rakho:

Synchronous code → Microtasks → Macrotasks

Aur sabse important:

Microtask queue ko JavaScript ek macrotask ke baad completely drain karta hai, before moving to the next macrotask.

## 🔥🔥🔥 Predict output involving Microtasks and Macrotasks

JavaScript asynchronous code ko different queues mein handle karta hai.

For interview output questions, the important ones are:

```text
Synchronous Code
       ↓
Microtask Queue
       ↓
Macrotask Queue
```

### Microtasks

Common examples:

```js
Promise.then();
Promise.catch();
Promise.finally();
queueMicrotask();
```

### Macrotasks

Common examples:

```js
setTimeout();
setInterval();
```

For basic interview questions, remember:

> **Microtasks run before the next macrotask.**

---

# 🔥 1. Basic Microtask vs Macrotask

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");
```

### Output

```text
A
D
B
C
```

### Why?

First, synchronous code:

```text
A
D
```

Then Promise callback goes to the microtask queue:

```text
B
```

`setTimeout()` goes to the macrotask queue:

```text
C
```

So:

```text
Synchronous
   ↓
A
D

Microtask
   ↓
B

Macrotask
   ↓
C
```

Final:

```text
A
D
B
C
```

---

# 🔥🔥 2. `setTimeout(0)` Does NOT Beat a Promise

```js
setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});
```

### Output

```text
Promise
Timeout
```

Even though both are scheduled immediately:

```text
Promise → Microtask
Timeout → Macrotask
```

Microtask gets processed first.

---

# 🔥🔥 3. Multiple Microtasks

```js
Promise.resolve().then(() => {
  console.log("A");
});

Promise.resolve().then(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});
```

### Output

```text
A
B
C
```

They are added to the microtask queue in this order:

```text
Microtask Queue:

A
B
C
```

JavaScript processes them in queue order.

---

# 🔥🔥 4. Multiple Macrotasks

```js
setTimeout(() => {
  console.log("A");
}, 0);

setTimeout(() => {
  console.log("B");
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

The timers were scheduled in this order, so they normally execute in that order when they become eligible.

---

# 🔥🔥🔥 5. Microtask Created Inside a Macrotask

This is **very important**.

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

First macrotask:

```text
setTimeout 1
     ↓
A
```

Inside that macrotask, we create a Promise microtask:

```text
B
```

JavaScript processes the microtask before moving to the next macrotask.

So:

```text
Macrotask 1
    ↓
A
    ↓
Microtask
    ↓
B
    ↓
Macrotask 2
    ↓
C
```

Final:

```text
A
B
C
```

### 🔥 Important Rule

> **After a macrotask finishes, pending microtasks are processed before the next macrotask.**

---

# 🔥🔥🔥 6. Microtask Created Inside a Microtask

Now look carefully:

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

This is a little tricky.

Initially:

```text
Microtask Queue:

1. First Promise → A
2. Second Promise → C
```

First microtask runs:

```text
A
```

During `A`, another microtask is added:

```text
B
```

But `C` was already waiting.

So the queue becomes:

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

# 🔥🔥🔥 7. Promise + `setTimeout()` + Nested Promise

```js
console.log("1");

Promise.resolve().then(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
});

setTimeout(() => {
  console.log("4");
}, 0);

console.log("5");
```

### Output

```text
1
5
2
3
4
```

Let's follow it.

### Synchronous:

```text
1
5
```

### Microtasks:

First:

```text
2
```

While running `2`, another microtask is created:

```text
3
```

So:

```text
3
```

runs before the timer.

### Macrotask:

Finally:

```text
4
```

So:

```text
1
5
2
3
4
```

---

# 🔥🔥🔥 8. Famous Interview Question

Predict:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);
});

console.log("E");
```

### Output

```text
A
E
C
B
D
```

### Step-by-step

Synchronous:

```text
A
E
```

Microtask:

```text
C
```

While `C` runs, another timer is scheduled:

```text
D
```

But the first timer (`B`) was already scheduled before `D`.

So macrotask order:

```text
B
D
```

Final:

```text
A
E
C
B
D
```

---

# 🔥🔥🔥 9. Microtasks Can Delay Macrotasks

This is an important concept.

```js
setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

Promise.resolve().then(() => {
  console.log("Promise 3");
});
```

### Output

```text
Promise 1
Promise 2
Promise 3
Timeout
```

The timer is ready, but JavaScript processes the microtask queue first.

Think:

```text
Microtasks:
Promise 1
Promise 2
Promise 3
        ↓
then timer
        ↓
Timeout
```

---

# 🔥🔥🔥 10. `queueMicrotask()`

`queueMicrotask()` directly adds a callback to the microtask queue.

```js
console.log("A");

queueMicrotask(() => {
  console.log("B");
});

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");
```

### Output

```text
A
D
B
C
```

Same basic ordering:

```text
Synchronous
    ↓
Microtask
    ↓
Macrotask
```

---

# 🔥🔥🔥 11. `queueMicrotask()` vs Promise

Both are microtasks in the common case:

```js
console.log("A");

queueMicrotask(() => {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

### Output

```text
A
D
B
C
```

Why?

They were added to the microtask queue in this order:

```text
B
C
```

So after synchronous code:

```text
A
D
B
C
```

---

# 🔥🔥🔥 12. Very Important Mixed Question

Predict:

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

Let's carefully track it.

### Step 1 — Synchronous

```text
1
6
```

### Step 2 — Microtask

Promise callback:

```text
4
```

While `4` runs, it schedules:

```text
5
```

### Step 3 — First macrotask

The first timer was already scheduled earlier:

```text
2
```

Inside `2`, another Promise microtask is created:

```text
3
```

That microtask runs immediately after the current macrotask:

```text
3
```

### Step 4 — Next macrotask

Finally:

```text
5
```

So:

```text
1
6
4
2
3
5
```

---

# 🔥🔥🔥 13. The Most Important Pattern

Memorize this:

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

Output:

```text
A
D
C
B
```

Because:

```text
A ───────────────┐
D ───────────────┤ Synchronous
                 ↓
C ──────────────── Microtask
                 ↓
B ──────────────── Macrotask
```

---

# 🔥🔥🔥 14. Another Famous Question

```js
setTimeout(() => {
  console.log("A");
}, 0);

Promise.resolve().then(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
});

Promise.resolve().then(() => {
  console.log("D");
});
```

### Output

```text
B
D
C
A
```

Why?

Initial microtask queue:

```text
B
D
```

First:

```text
B
```

During `B`, another microtask `C` is added.

Queue becomes:

```text
D
C
```

So:

```text
B
D
C
```

Only after all microtasks are finished:

```text
A
```

timer runs.

Final:

```text
B
D
C
A
```

---

# 🧠 How to Solve These Questions

Whenever you see a complicated output question, **don't try to guess the final output directly.**

Make three boxes:

```text
┌─────────────────────┐
│ 1. SYNCHRONOUS      │
└─────────────────────┘

┌─────────────────────┐
│ 2. MICROTASKS       │
│ Promise.then()      │
│ queueMicrotask()    │
└─────────────────────┘

┌─────────────────────┐
│ 3. MACROTASKS       │
│ setTimeout()        │
│ setInterval()       │
└─────────────────────┘
```

Then process them in this order:

```text
Synchronous
     ↓
Microtasks
     ↓
Macrotask
     ↓
Microtasks again
     ↓
Next Macrotask
     ↓
Microtasks again
     ↓
...
```

### 🔥 This last part is VERY important.

Don't think:

```text
All microtasks
     ↓
All macrotasks
```

❌ Not exactly.

Instead think:

```text
Current synchronous code
        ↓
Drain microtasks
        ↓
Run ONE macrotask
        ↓
Drain microtasks
        ↓
Run next macrotask
        ↓
Drain microtasks
        ↓
...
```

---

# 🔥🔥🔥 Final Mental Model

```text
              JavaScript
                   │
                   ↓
          Synchronous Code
                   │
                   ↓
          Microtask Queue
       ┌────────────────────┐
       │ Promise.then()     │
       │ Promise.catch()    │
       │ Promise.finally()  │
       │ queueMicrotask()   │
       └─────────┬──────────┘
                 ↓
          Macrotask Queue
       ┌────────────────────┐
       │ setTimeout()       │
       │ setInterval()      │
       └─────────┬──────────┘
                 ↓
          Microtasks again
                 ↓
          Next Macrotask
                 ↓
              ...
```

## 🧠 Golden Rule

```text
Synchronous
    ↓
Microtasks
    ↓
ONE Macrotask
    ↓
Microtasks
    ↓
ONE Macrotask
    ↓
Microtasks
    ↓
...
```

### 🔥🔥🔥 Interview Answer

**Microtasks, such as Promise callbacks and `queueMicrotask()`, are processed after the current synchronous code finishes and before the event loop moves to the next macrotask. Macrotasks include callbacks such as `setTimeout()` and `setInterval()`. After each macrotask, the JavaScript runtime processes the pending microtasks before moving to the next macrotask.**

### 🧠 One-Line Memory Trick

```text
Microtask → "Do this before the next task."

Macrotask → "Run this as a later task."
```

<!-- ========================== -->
