# 19. 🔥🔥🔥 Implement Your Own `map()`

## What is `map()`?

`map()` ek array method hai jo array ke **har element par ek function chalata hai** aur uske results se **ek new array banata hai**.

Example:

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

Yahan:

```text
1 → 2
2 → 4
3 → 6
```

So:

```text
Original array
      ↓
map()
      ↓
har element par function
      ↓
new array
```

---

# 🔥🔥🔥 What does "Implement your own map()" mean?

Interviewer basically bol raha hai:

> "Built-in `map()` use mat karo. Khud ek function banao jo `map()` ki tarah kaam kare."

For example:

```js
const numbers = [1, 2, 3];

const result = myMap(numbers, (num) => num * 2);

console.log(result);
```

Expected:

```text
[2, 4, 6]
```

---

# 🔥 Step 1 — Simple implementation

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}

const numbers = [1, 2, 3];

const result = myMap(numbers, (num) => num * 2);

console.log(result);
```

### Output

```text
[2, 4, 6]
```

---

# 🧠 Let's understand this very slowly

Suppose:

```js
const numbers = [1, 2, 3];
```

and:

```js
(num) => num * 2;
```

is our callback.

We call:

```js
myMap(numbers, (num) => num * 2);
```

So our function receives:

```text
array    → [1, 2, 3]

callback → num => num * 2
```

Inside:

```js
const result = [];
```

Initially:

```text
result = []
```

---

## First iteration

```js
callback(array[0]);
```

means:

```js
callback(1);
```

Callback:

```js
(num) => num * 2;
```

So:

```text
1 * 2 = 2
```

Then:

```js
result.push(2);
```

Now:

```text
result = [2]
```

---

## Second iteration

```js
callback(array[1]);
```

means:

```js
callback(2);
```

So:

```text
2 * 2 = 4
```

Then:

```js
result.push(4);
```

Now:

```text
result = [2, 4]
```

---

## Third iteration

```js
callback(array[2]);
```

means:

```js
callback(3);
```

So:

```text
3 * 2 = 6
```

Then:

```js
result.push(6);
```

Now:

```text
result = [2, 4, 6]
```

Finally:

```js
return result;
```

So:

```text
[2, 4, 6]
```

---

# 🔥🔥🔥 The most important line

This line:

```js
result.push(callback(array[i]));
```

is basically the entire idea behind our custom `map()`.

It means:

```text
Take current element
        ↓
send it to callback
        ↓
callback gives a new value
        ↓
put that value into result
```

For example:

```text
array[i] = 5

      ↓

callback(5)

      ↓

5 * 2

      ↓

10

      ↓

result.push(10)
```

---

# 🔥🔥 Why do we need a callback?

Because `map()` should be reusable.

Suppose we have:

```js
const numbers = [1, 2, 3];
```

We might want to:

### Double numbers

```js
myMap(numbers, (num) => num * 2);
```

Output:

```text
[2, 4, 6]
```

### Square numbers

```js
myMap(numbers, (num) => num * num);
```

Output:

```text
[1, 4, 9]
```

### Add 10

```js
myMap(numbers, (num) => num + 10);
```

Output:

```text
[11, 12, 13]
```

Our `myMap()` itself doesn't need to change.

Only the callback changes.

That's exactly why `map()` accepts a function.

---

# 🔥🔥🔥 Real `map()` vs Our `myMap()`

Built-in:

```js
numbers.map((num) => num * 2);
```

Our version:

```js
myMap(numbers, (num) => num * 2);
```

Internally, our version is doing:

```text
for each element
    ↓
call callback
    ↓
store returned value
    ↓
return new array
```

That's the core concept.

---

# 🔥🔥🔥 `map()` also passes index

There is one important thing missing from our first implementation.

Real `map()` callback receives:

```text
value
index
array
```

Example:

```js
const numbers = [10, 20, 30];

numbers.map((value, index) => {
  console.log(value, index);
});
```

Output:

```text
10 0
20 1
30 2
```

So a better custom implementation should pass the index too.

---

# 🔥🔥 Better implementation

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }

  return result;
}
```

Now:

```js
const numbers = [10, 20, 30];

const result = myMap(numbers, (value, index) => {
  return value + index;
});

console.log(result);
```

### Output

```text
[10, 21, 32]
```

Because:

```text
10 + 0 = 10
20 + 1 = 21
30 + 2 = 32
```

---

# 🔥🔥🔥 Real `map()` also passes the original array

Real JavaScript `map()` callback can receive:

```text
value
index
array
```

So we can make our implementation even closer:

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

Now:

```js
const numbers = [10, 20, 30];

const result = myMap(numbers, (value, index, array) => {
  console.log(value, index, array);

  return value * 2;
});

console.log(result);
```

Output:

```text
10 0 [10, 20, 30]
20 1 [10, 20, 30]
30 2 [10, 20, 30]

[20, 40, 60]
```

---

# 🔥🔥🔥 Interview Version

If interviewer asks:

> Implement your own `map()`.

A good answer is:

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

Test:

```js
const numbers = [1, 2, 3];

const result = myMap(numbers, (num) => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

# 🔥🔥🔥 Why do we create a new array?

Because `map()` **does not normally modify the original array**.

Example:

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3]
[2, 4, 6]
```

Original:

```text
[1, 2, 3]
```

remains unchanged.

That's why our implementation does:

```js
const result = [];
```

instead of modifying `array`.

---

# 🔥🔥🔥 `map()` vs `forEach()`

This is an important interview question.

### `map()`

Returns a **new array**.

```js
const result = numbers.map((num) => num * 2);
```

Result:

```text
[2, 4, 6]
```

### `forEach()`

Does not create a new transformed array automatically.

```js
numbers.forEach((num) => {
  console.log(num * 2);
});
```

It simply performs an action for each element.

### Memory trick

```text
map()
→ transform → new array

forEach()
→ just do something
```

---

# 🔥🔥🔥 What if callback doesn't return anything?

Consider:

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  console.log(num);
});

console.log(result);
```

Output:

```text
1
2
3

[undefined, undefined, undefined]
```

Why?

Because:

```js
(num) => {
  console.log(num);
};
```

doesn't return anything.

So callback returns:

```text
undefined
```

for every element.

Therefore:

```text
[undefined, undefined, undefined]
```

This is a common tricky interview question.

---

# 🔥🔥🔥 Our `myMap()` behaves the same way

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

const numbers = [1, 2, 3];

console.log(
  myMap(numbers, (num) => {
    console.log(num);
  }),
);
```

Output:

```text
1
2
3

[undefined, undefined, undefined]
```

---

# 🔥🔥🔥 Example with objects

This is very common in real development.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
];

const names = myMap(users, (user) => user.name);

console.log(names);
```

Output:

```text
["Ajay", "Rahul"]
```

Here:

```text
user object
    ↓
user.name
    ↓
string
```

So:

```text
[
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 }
]

        ↓ map

["Ajay", "Rahul"]
```

---

# 🔥🔥🔥 Example — Transform objects

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
];

const result = myMap(users, (user) => {
  return {
    name: user.name,
    isAdult: user.age >= 18,
  };
});

console.log(result);
```

Output:

```text
[
  {
    name: "Ajay",
    isAdult: true
  },
  {
    name: "Rahul",
    isAdult: true
  }
]
```

This is a very common use of `map()` in React.

---

# 🔥🔥🔥 Empty array

What should happen?

```js
myMap([], (num) => num * 2);
```

There are no elements to process.

So:

```text
[]
```

Our implementation automatically handles this:

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

Loop runs zero times.

Therefore:

```text
[]
```

---

# 🔥🔥🔥 Important Interview Trap

The interviewer may ask:

> Should your custom `map()` mutate the original array?

Answer:

> No. `map()` normally returns a new array and does not modify the original array itself.

Example:

```text
Original:
[1, 2, 3]

Result:
[2, 4, 6]
```

---

# 🔥🔥🔥 Another Interview Trap

They may ask:

> What does `map()` return?

Answer:

> `map()` returns a new array containing the values returned by the callback for each element.

Don't say simply:

> "It modifies every element."

That's incomplete.

Better:

```text
map()
→ visits every element
→ callback returns a new value
→ new array contains those values
```

---

# 🔥🔥🔥 Another Tricky Question

What is the output?

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  num * 2;
});

console.log(result);
```

Answer:

```text
[undefined, undefined, undefined]
```

Why?

Because:

```js
{
  num * 2;
}
```

doesn't have:

```js
return;
```

Correct:

```js
const result = numbers.map((num) => {
  return num * 2;
});
```

or:

```js
const result = numbers.map((num) => num * 2);
```

---

# 🔥🔥🔥 One More Tricky Question

What is the output?

```js
const numbers = [1, 2, 3];

const result = numbers.map((num, index) => {
  return num + index;
});

console.log(result);
```

Think:

```text
1 + 0 = 1
2 + 1 = 3
3 + 2 = 5
```

Output:

```text
[1, 3, 5]
```

---

# 🧠 Understand the Complete Internal Flow

When you write:

```js
numbers.map(callback);
```

Conceptually:

```text
        [1, 2, 3]
             ↓
           map()
             ↓
        callback(1)
             ↓
             2
             ↓
        result.push(2)

        callback(2)
             ↓
             4
             ↓
        result.push(4)

        callback(3)
             ↓
             6
             ↓
        result.push(6)

             ↓
        [2, 4, 6]
```

That's basically what `map()` is doing.

---

# 🔥🔥🔥 Final Implementation to Remember

For interviews, remember this:

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

Example:

```js
const numbers = [1, 2, 3];

const result = myMap(numbers, (num) => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

# 🧠 FINAL CHEAT SHEET

```text
map()
→ transform every element
→ callback runs for every element
→ callback's returned value goes into new array
→ original array remains unchanged
```

Callback receives:

```text
value
index
array
```

Basic custom implementation:

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

### 🔥 One-line memory trick

```text
myMap = loop + callback + push + return new array
```

And remember:

```text
map()
→ new transformed array

forEach()
→ perform an action
```

<!-- ========================== -->

Bilkul. filter() ko bhi map() ki tarah andar se samajhna important hai. Difference actually simple hai:

map()
→ har element ko transform karta hai
→ callback ka result new array mein daalta hai

filter()
→ har element ko check karta hai
→ callback true de to element new array mein daalta hai

# 20. 🔥🔥🔥 Implement Your Own `filter()`

## What is `filter()`?

`filter()` array ke **har element ko check karta hai** aur sirf un elements ko ek **new array** mein rakhta hai jinke liye callback `true` return karta hai.

Example:

```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((num) => num > 2);

console.log(result);
```

Output:

```text
[3, 4, 5]
```

Yahan:

```text
1 → 1 > 2 → false → remove

2 → 2 > 2 → false → remove

3 → 3 > 2 → true  → keep

4 → 4 > 2 → true  → keep

5 → 5 > 2 → true  → keep
```

So:

```text
Original array
      ↓
   filter()
      ↓
check every element
      ↓
true  → keep
false → skip
      ↓
new array
```

---

# 🔥🔥🔥 What does "Implement your own filter()" mean?

Interviewer basically bol raha hai:

> "Built-in `filter()` use mat karo. Khud ek function banao jo `filter()` ki tarah kaam kare."

For example:

```js
const numbers = [1, 2, 3, 4, 5];

const result = myFilter(numbers, (num) => num > 2);

console.log(result);
```

Expected:

```text
[3, 4, 5]
```

---

# 🔥 Step 1 — Simple implementation

```js
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];

const result = myFilter(numbers, (num) => num > 2);

console.log(result);
```

### Output

```text
[3, 4, 5]
```

---

# 🧠 Understand this very slowly

Suppose:

```js
const numbers = [1, 2, 3, 4, 5];
```

And:

```js
(num) => num > 2;
```

is our callback.

We call:

```js
myFilter(numbers, (num) => num > 2);
```

Our function receives:

```text
array
→ [1, 2, 3, 4, 5]

callback
→ num => num > 2
```

Inside:

```js
const result = [];
```

Initially:

```text
result = []
```

---

# First iteration

Current value:

```text
1
```

We call:

```js
callback(1);
```

which means:

```js
1 > 2;
```

Result:

```text
false
```

So:

```js
if (false)
```

doesn't run.

Therefore:

```text
result = []
```

---

# Second iteration

Current value:

```text
2
```

Callback:

```js
callback(2);
```

means:

```text
2 > 2
```

Result:

```text
false
```

So we skip `2`.

Still:

```text
result = []
```

---

# Third iteration

Current value:

```text
3
```

Callback:

```js
callback(3);
```

means:

```text
3 > 2
```

Result:

```text
true
```

Now:

```js
result.push(3);
```

So:

```text
result = [3]
```

---

# Fourth iteration

```text
4 > 2
```

Result:

```text
true
```

So:

```text
result = [3, 4]
```

---

# Fifth iteration

```text
5 > 2
```

Result:

```text
true
```

So:

```text
result = [3, 4, 5]
```

Finally:

```js
return result;
```

Output:

```text
[3, 4, 5]
```

---

# 🔥🔥🔥 The most important line

This line:

```js
if (callback(array[i])) {
  result.push(array[i]);
}
```

is basically the entire idea behind our custom `filter()`.

It means:

```text
Take current element
       ↓
send it to callback
       ↓
callback returns true/false
       ↓
true?
       ↓
YES → keep element
NO  → skip element
```

Compare this with our custom `map()`:

```js
result.push(callback(array[i]));
```

`map()` directly pushes the **returned value**.

But `filter()` checks the returned value first.

```text
map:
callback → returned value → push

filter:
callback → true/false → decide whether to push original value
```

---

# 🔥🔥🔥 `map()` vs `filter()`

This difference is extremely important.

## `map()`

```js
const result = numbers.map((num) => num * 2);
```

Input:

```text
[1, 2, 3]
```

Output:

```text
[2, 4, 6]
```

It **changes/transforms** each element.

---

## `filter()`

```js
const result = numbers.filter((num) => num > 1);
```

Input:

```text
[1, 2, 3]
```

Output:

```text
[2, 3]
```

It **selects/removes** elements.

---

# 🧠 Memory Trick

```text
map()
→ "Give me a new value for every element."

filter()
→ "Should I keep this element?"
```

Or even simpler:

```text
map   → TRANSFORM
filter → SELECT
```

---

# 🔥🔥🔥 Why does `filter()` push `array[i]` instead of `callback(array[i])`?

This is a very important difference.

Our `map()`:

```js
result.push(callback(array[i]));
```

Our `filter()`:

```js
if (callback(array[i])) {
  result.push(array[i]);
}
```

Why?

Suppose:

```js
const numbers = [1, 2, 3];
```

and:

```js
(num) => num > 1;
```

The callback returns:

```text
1 → false
2 → true
3 → true
```

We don't want:

```text
[false, true, true]
```

We want the **original elements** for which the condition was true:

```text
[2, 3]
```

That's why we do:

```js
result.push(array[i]);
```

---

# 🔥🔥🔥 Custom filter with `index`

Real `filter()` callback receives:

```text
value
index
array
```

So a better implementation is:

```js
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
```

Now:

```js
const numbers = [10, 20, 30];

const result = myFilter(numbers, (value, index) => {
  return index > 0;
});

console.log(result);
```

Output:

```text
[20, 30]
```

Because:

```text
10 → index 0 → false → skip

20 → index 1 → true  → keep

30 → index 2 → true  → keep
```

---

# 🔥🔥🔥 Real `filter()` also passes the original array

A closer implementation is:

```js
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
```

The callback receives:

```text
value
index
array
```

Example:

```js
const numbers = [10, 20, 30];

const result = myFilter(numbers, (value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);

  return value > 10;
});

console.log(result);
```

Output:

```text
10
0
[10, 20, 30]

20
1
[10, 20, 30]

30
2
[10, 20, 30]

[20, 30]
```

---

# 🔥🔥🔥 What if callback returns `false`?

Example:

```js
const numbers = [1, 2, 3];

const result = myFilter(numbers, (num) => {
  return false;
});

console.log(result);
```

Output:

```text
[]
```

Because no element passes the condition.

---

# 🔥🔥🔥 What if callback returns `true`?

```js
const numbers = [1, 2, 3];

const result = myFilter(numbers, (num) => {
  return true;
});

console.log(result);
```

Output:

```text
[1, 2, 3]
```

Because every element passes.

So:

```text
callback → true
→ keep everything
```

and:

```text
callback → false
→ keep nothing
```

---

# 🔥🔥🔥 What if callback doesn't return anything?

This is a common tricky question.

```js
const numbers = [1, 2, 3];

const result = numbers.filter((num) => {
  console.log(num);
});

console.log(result);
```

Output:

```text
1
2
3

[]
```

Why?

Because the callback doesn't have a `return`.

Therefore it returns:

```text
undefined
```

And:

```text
undefined
```

is falsy.

So every element is removed.

---

# 🔥🔥🔥 Important: Filter checks truthiness

The callback doesn't technically have to return exactly:

```text
true
false
```

It can return any value.

Example:

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num);

console.log(result);
```

Output:

```text
[1, 2, 3, 4]
```

Because all these numbers are truthy.

But:

```js
const numbers = [0, 1, 2, 0, 3];

console.log(numbers.filter((num) => num));
```

Output:

```text
[1, 2, 3]
```

Because:

```text
0 → falsy
1 → truthy
2 → truthy
0 → falsy
3 → truthy
```

So:

```text
filter()
→ truthy → keep
→ falsy  → remove
```

---

# 🔥🔥🔥 Example with objects

This is very common in real JavaScript and React.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 17 },
  { name: "Amit", age: 30 },
];

const adults = myFilter(users, (user) => {
  return user.age >= 18;
});

console.log(adults);
```

Output:

```text
[
  { name: "Ajay", age: 25 },
  { name: "Amit", age: 30 }
]
```

Here:

```text
Ajay  → 25 >= 18 → true  → keep

Rahul → 17 >= 18 → false → skip

Amit  → 30 >= 18 → true  → keep
```

---

# 🔥🔥🔥 Example — Filter active users

```js
const users = [
  { name: "Ajay", active: true },
  { name: "Rahul", active: false },
  { name: "Amit", active: true },
];

const activeUsers = myFilter(users, (user) => user.active);

console.log(activeUsers);
```

Output:

```text
[
  { name: "Ajay", active: true },
  { name: "Amit", active: true }
]
```

---

# 🔥🔥🔥 Example — Filter even numbers

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

Remember:

```text
num % 2 === 0
```

means:

> Number is divisible by 2.

---

# 🔥🔥🔥 Empty array

What happens here?

```js
myFilter([], (num) => num > 2);
```

There are no elements.

So loop runs zero times.

Result:

```text
[]
```

Our implementation automatically handles this.

---

# 🔥🔥🔥 Original array remains unchanged

Like `map()`, `filter()` returns a new array.

Example:

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num > 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3, 4]
[3, 4]
```

Original:

```text
[1, 2, 3, 4]
```

is unchanged.

---

# 🔥🔥🔥 Very Important Interview Question

### What does `filter()` return?

Good answer:

> `filter()` returns a new array containing the original elements for which the callback returns a truthy value.

This is better than saying:

> "It removes elements."

Because `filter()` does **not normally modify the original array**.

---

# 🔥🔥🔥 Another Interview Question

### What is the difference between `map()` and `filter()`?

Answer:

```text
map()
→ transforms every element
→ result can have the same number of elements

filter()
→ selects elements based on a condition
→ result can have fewer elements
```

Example:

```js
[1, 2, 3].map((num) => num * 2);
```

Result:

```text
[2, 4, 6]
```

But:

```js
[1, 2, 3].filter((num) => num > 1);
```

Result:

```text
[2, 3]
```

---

# 🔥🔥🔥 `map()` vs `filter()` Internally

### Our custom `map()`

```js
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

Flow:

```text
element
   ↓
callback
   ↓
new value
   ↓
push
```

---

### Our custom `filter()`

```js
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
```

Flow:

```text
element
   ↓
callback
   ↓
true / false
   ↓
true?
 ↓
push original element
```

---

# 🔥🔥🔥 Predict the Output

```js
const numbers = [1, 2, 3, 4, 5];

const result = myFilter(numbers, (num) => {
  return num % 2 === 0;
});

console.log(result);
```

Think:

```text
1 → odd  → false → skip
2 → even → true  → keep
3 → odd  → false → skip
4 → even → true  → keep
5 → odd  → false → skip
```

Output:

```text
[2, 4]
```

---

# 🔥🔥🔥 Predict This

```js
const numbers = [1, 2, 3];

const result = numbers.filter((num) => {
  num * 2;
});

console.log(result);
```

Output:

```text
[]
```

Why?

There is no `return`.

So:

```text
callback returns undefined
```

and:

```text
undefined → falsy
```

Therefore nothing is kept.

---

# 🔥🔥🔥 Predict This

```js
const numbers = [0, 1, 2, 3];

const result = numbers.filter(Boolean);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

Because:

```text
0 → false
1 → true
2 → true
3 → true
```

This is a common JavaScript trick.

---

# 🔥🔥🔥 Final Interview Implementation

If interviewer asks:

> Implement your own `filter()`.

Use:

```js
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
```

Test:

```js
const numbers = [1, 2, 3, 4, 5];

const result = myFilter(numbers, (num) => num > 2);

console.log(result);
```

Output:

```text
[3, 4, 5]
```

---

# 🧠 FINAL CHEAT SHEET

```text
filter()
→ checks every element
→ callback returns truthy/falsy
→ truthy → keep original element
→ falsy  → skip element
→ returns a new array
```

Basic implementation:

```js
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
```

### 🔥 One-line memory trick

```text
myFilter = loop + callback + condition + push original element
```

And remember the difference:

```text
map()
→ "What should this element become?"

filter()
→ "Should I keep this element?"
```

<!-- ============================== -->
