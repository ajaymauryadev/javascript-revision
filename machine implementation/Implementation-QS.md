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

# 21. 🔥🔥🔥 Implement Your Own `reduce()`

## What is `reduce()`?

`reduce()` array ke elements ko **one by one process karke ek single final result** banata hai.

Example:

```js
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(result);
```

Output:

```text
10
```

Because:

```text
1 + 2 + 3 + 4 = 10
```

---

# 🔥🔥 First understand the main idea

`reduce()` mein sabse important concept hai:

```text
accumulator
```

Short form:

```text
acc
```

`acc` ka matlab simple language mein:

> **Abhi tak jo result bana hai, woh `acc` mein store hota hai.**

Example:

```text
numbers = [1, 2, 3, 4]
```

Agar hum sum kar rahe hain:

```text
Start:

acc = 0

1 → acc = 1

2 → acc = 3

3 → acc = 6

4 → acc = 10
```

Final:

```text
10
```

So:

```text
acc
↓
running result
```

---

# 🔥🔥🔥 What does "Implement your own reduce()" mean?

Interviewer bol raha hai:

> "Built-in `reduce()` use mat karo. Khud ek function banao jo `reduce()` ki tarah kaam kare."

For example:

```js
const numbers = [1, 2, 3, 4];

const result = myReduce(numbers, (acc, num) => acc + num, 0);

console.log(result);
```

Expected output:

```text
10
```

---

# 🔥 Step 1 — Basic implementation

```js
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

const numbers = [1, 2, 3, 4];

const result = myReduce(numbers, (acc, num) => acc + num, 0);

console.log(result);
```

Output:

```text
10
```

---

# 🧠 Understand this very slowly

Our array:

```text
[1, 2, 3, 4]
```

Initial value:

```text
0
```

So:

```text
accumulator = 0
```

---

## First element — `1`

Callback:

```js
(acc, num) => acc + num;
```

gets:

```text
acc = 0
num = 1
```

So:

```text
0 + 1 = 1
```

We store:

```text
accumulator = 1
```

---

## Second element — `2`

Now:

```text
acc = 1
num = 2
```

Therefore:

```text
1 + 2 = 3
```

Now:

```text
accumulator = 3
```

---

## Third element — `3`

```text
acc = 3
num = 3
```

So:

```text
3 + 3 = 6
```

Now:

```text
accumulator = 6
```

---

## Fourth element — `4`

```text
acc = 6
num = 4
```

So:

```text
6 + 4 = 10
```

Final:

```text
accumulator = 10
```

Then:

```js
return accumulator;
```

returns:

```text
10
```

---

# 🔥🔥🔥 The most important line

This line is basically the heart of `reduce()`:

```js
accumulator = callback(accumulator, array[i]);
```

Think:

```text
old result
    ↓
  callback
    ↓
new result
    ↓
store back in acc
```

Example:

```text
acc = 3
current = 4

      ↓

callback(3, 4)

      ↓

3 + 4

      ↓

7

      ↓

acc = 7
```

Then next element uses that `7`.

---

# 🔥🔥🔥 Why is it called `reduce()`?

Because multiple values:

```text
1
2
3
4
```

are being reduced into:

```text
10
```

So:

```text
many values
     ↓
 reduce
     ↓
one result
```

But remember:

> `reduce()` doesn't always have to return a number.

It can build:

```text
number
string
array
object
Map
anything
```

That's why `reduce()` is so powerful.

---

# 🔥🔥🔥 `map()` vs `filter()` vs `reduce()`

This is extremely important.

### `map()`

```text
Every element
    ↓
transform it
    ↓
new array
```

Example:

```js
[1, 2, 3].map((num) => num * 2);
```

Output:

```text
[2, 4, 6]
```

---

### `filter()`

```text
Every element
    ↓
check condition
    ↓
keep / skip
    ↓
new array
```

Example:

```js
[1, 2, 3].filter((num) => num > 1);
```

Output:

```text
[2, 3]
```

---

### `reduce()`

```text
Every element
    ↓
combine/process with accumulator
    ↓
one final result
```

Example:

```js
[1, 2, 3].reduce((acc, num) => acc + num, 0);
```

Output:

```text
6
```

---

# 🧠 Memory Trick

```text
map()
→ What should each element become?

filter()
→ Should I keep this element?

reduce()
→ How can I combine/process everything into one result?
```

---

# 🔥🔥🔥 Reduce can also create an object

This is where `reduce()` becomes very useful.

Example:

```js
const numbers = [1, 2, 2, 3, 3, 3];
```

We want:

```text
{
  1: 1,
  2: 2,
  3: 3
}
```

We can use our custom `myReduce()`:

```js
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

const numbers = [1, 2, 2, 3, 3, 3];

const frequency = myReduce(
  numbers,
  (acc, num) => {
    acc[num] = (acc[num] || 0) + 1;

    return acc;
  },
  {},
);

console.log(frequency);
```

Output:

```text
{
  1: 1,
  2: 2,
  3: 3
}
```

---

# 🧠 Why is initial value `{}` here?

Because our final result is supposed to be an object.

So:

```js
{
}
```

is the initial accumulator.

Think:

```text
acc = {}

1 → { 1: 1 }

2 → { 1: 1, 2: 1 }

2 → { 1: 1, 2: 2 }

3 → { 1: 1, 2: 2, 3: 1 }

3 → { 1: 1, 2: 2, 3: 2 }

3 → { 1: 1, 2: 2, 3: 3 }
```

Final:

```text
{
  1: 1,
  2: 2,
  3: 3
}
```

This is exactly the same frequency pattern you learned earlier.

---

# 🔥🔥🔥 Reduce can create an array too

Suppose:

```text
[1, 2, 3, 4]
```

We want only even numbers.

Normally:

```js
[1, 2, 3, 4].filter((num) => num % 2 === 0);
```

But `reduce()` can also do it:

```js
const result = myReduce(
  [1, 2, 3, 4],
  (acc, num) => {
    if (num % 2 === 0) {
      acc.push(num);
    }

    return acc;
  },
  [],
);

console.log(result);
```

Output:

```text
[2, 4]
```

Here initial accumulator is:

```text
[]
```

because the final result should be an array.

---

# 🔥🔥🔥 This is the key idea

The **initial value tells you what kind of result you're building**.

```text
initialValue = 0
→ probably building a number

initialValue = ""
→ probably building a string

initialValue = []
→ building an array

initialValue = {}
→ building an object

initialValue = new Map()
→ building a Map
```

This is extremely useful when reading `reduce()` code.

---

# 🔥🔥🔥 Reduce with strings

Example:

```js
const words = ["Hello", " ", "World"];

const result = myReduce(words, (acc, word) => acc + word, "");

console.log(result);
```

Output:

```text
Hello World
```

Dry run:

```text
acc = ""

"Hello" → "Hello"

" " → "Hello "

"World" → "Hello World"
```

---

# 🔥🔥🔥 Reduce with multiplication

```js
const numbers = [2, 3, 4];

const result = myReduce(numbers, (acc, num) => acc * num, 1);

console.log(result);
```

Output:

```text
24
```

Because:

```text
1 × 2 = 2

2 × 3 = 6

6 × 4 = 24
```

Notice we used:

```text
initialValue = 1
```

not `0`.

Because:

```text
0 × anything = 0
```

---

# 🔥🔥🔥 Real `reduce()` also passes index and array

Real `reduce()` callback receives:

```text
accumulator
currentValue
currentIndex
array
```

So a better custom implementation is:

```js
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
```

Now:

```js
const numbers = [10, 20, 30];

const result = myReduce(
  numbers,
  (acc, value, index) => {
    console.log(acc, value, index);

    return acc + value;
  },
  0,
);

console.log(result);
```

Output:

```text
0 10 0
10 20 1
30 30 2

60
```

---

# 🔥🔥🔥 The tricky part — No initial value

This is where custom `reduce()` becomes more difficult.

JavaScript allows:

```js
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, num) => acc + num);

console.log(result);
```

Output:

```text
10
```

But we didn't give:

```text
0
```

as initial value.

So what happens?

JavaScript uses the **first element as the initial accumulator**.

Conceptually:

```text
acc = 1
```

Then it starts from the second element:

```text
2
3
4
```

So:

```text
1 + 2 = 3

3 + 3 = 6

6 + 4 = 10
```

---

# 🔥🔥🔥 Our first implementation does NOT support this

We wrote:

```js
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}
```

If we don't provide `initialValue`:

```js
myReduce([1, 2, 3], (acc, num) => acc + num);
```

then:

```text
accumulator = undefined
```

which is wrong.

So we need a more complete implementation.

---

# 🔥🔥🔥 Better implementation

```js
function myReduce(array, callback, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
```

Now:

```js
const numbers = [1, 2, 3, 4];

const result = myReduce(numbers, (acc, num) => acc + num);

console.log(result);
```

Output:

```text
10
```

---

# 🧠 Understand what happened

Because no initial value was provided:

```text
array = [1, 2, 3, 4]
```

We take:

```text
accumulator = 1
```

Then start loop from:

```text
index = 1
```

So we process:

```text
2
3
4
```

Flow:

```text
acc = 1

1 + 2 = 3

3 + 3 = 6

6 + 4 = 10
```

---

# 🔥🔥🔥 Why does the loop start at `1`?

Because:

```text
array[0]
```

has already become the accumulator.

If we started from `0` again:

```text
acc = array[0] = 1
```

and then processed `array[0]` again:

```text
1 + 1
```

we would get the wrong answer.

So:

```text
initial value provided
→ start from index 0

initial value not provided
→ first element becomes accumulator
→ start from index 1
```

---

# 🔥🔥🔥 Important Edge Case — Empty Array

What happens here?

```js
[].reduce((acc, num) => acc + num);
```

JavaScript throws an error because:

> There is no first element to use as the initial accumulator.

Our custom implementation should handle that too.

```js
function myReduce(array, callback, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
```

Now:

```js
myReduce([], (acc, num) => acc + num);
```

throws an error.

But:

```js
myReduce([], (acc, num) => acc + num, 0);
```

returns:

```text
0
```

Because we explicitly provided the initial value.

---

# 🔥🔥🔥 One subtle issue

This check:

```js
if (initialValue !== undefined)
```

is fine for many interview implementations, but it is **not a perfect reproduction of native `reduce()`**.

Why?

Because someone could intentionally pass:

```js
undefined;
```

as the initial value.

A truly native-like implementation should check whether the third argument was actually provided, rather than checking whether its value is `undefined`.

For interview purposes, you can mention:

> "For a fully native-compatible polyfill, I would detect whether the initial argument was supplied."

The important concept to understand first is the accumulator behavior.

---

# 🔥🔥🔥 Interview-Friendly Version

For most interviews, this version demonstrates the main concept clearly:

```js
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
```

Example:

```js
const numbers = [1, 2, 3, 4];

const result = myReduce(numbers, (acc, num) => acc + num, 0);

console.log(result);
```

Output:

```text
10
```

If interviewer specifically asks:

> "What if initial value is not provided?"

then explain and extend it with the no-initial-value logic.

---

# 🔥🔥🔥 Very Important Tricky Question

Predict:

```js
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => acc + num, 10);

console.log(result);
```

Don't start from `1`.

Start from:

```text
acc = 10
```

Then:

```text
10 + 1 = 11

11 + 2 = 13

13 + 3 = 16
```

Output:

```text
16
```

---

# 🔥🔥🔥 Another Tricky Question

```js
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => acc + num);

console.log(result);
```

No initial value.

So:

```text
acc = 1
```

Then:

```text
1 + 2 = 3
3 + 3 = 6
```

Output:

```text
6
```

---

# 🔥🔥🔥 Another Tricky Question

```js
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => acc * num, 2);

console.log(result);
```

Dry run:

```text
2 × 1 = 2

2 × 2 = 4

4 × 3 = 12
```

Output:

```text
12
```

---

# 🔥🔥🔥 Reduce to Find Maximum

`reduce()` can also find the largest number.

```js
const numbers = [10, 5, 20, 8];

const largest = numbers.reduce((max, num) => {
  return num > max ? num : max;
}, numbers[0]);

console.log(largest);
```

Output:

```text
20
```

Think:

```text
max = 10

5  > 10 → no  → 10

20 > 10 → yes → 20

8  > 20 → no  → 20
```

Final:

```text
20
```

---

# 🔥🔥🔥 Reduce to Group Objects

This is the same pattern you learned in the previous question.

```js
const users = [
  { name: "Ajay", role: "developer" },
  { name: "Rahul", role: "designer" },
  { name: "Amit", role: "developer" },
];

const grouped = myReduce(
  users,
  (acc, user) => {
    const key = user.role;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(user);

    return acc;
  },
  {},
);

console.log(grouped);
```

Output:

```text
{
  developer: [
    { name: "Ajay", role: "developer" },
    { name: "Amit", role: "developer" }
  ],

  designer: [
    { name: "Rahul", role: "designer" }
  ]
}
```

Notice something very important:

```js
return acc;
```

We **must return the accumulator**.

---

# 🔥🔥🔥 Why must we return `acc`?

Suppose:

```js
const result = numbers.reduce((acc, num) => {
  acc += num;
}, 0);
```

There is no:

```js
return acc;
```

So the callback returns:

```text
undefined
```

Then the next iteration receives:

```text
acc = undefined
```

and things break.

Correct:

```js
const result = numbers.reduce((acc, num) => {
  acc += num;

  return acc;
}, 0);
```

### 🔥 Very important rule

In `reduce()`:

```text
callback must return the next accumulator value.
```

---

# 🔥🔥🔥 `reduce()` Mental Model

Think of this:

```text
accumulator = starting result

        ↓
     element 1
        ↓
   callback(acc, element)
        ↓
   new accumulator

        ↓
     element 2
        ↓
   callback(acc, element)
        ↓
   new accumulator

        ↓
       ...

        ↓
   final accumulator
```

Or simply:

```text
old acc + current value
        ↓
      callback
        ↓
     new acc
```

---

# 🧠 FINAL CHEAT SHEET

## Basic custom `reduce()`

```js
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
```

Example:

```js
const numbers = [1, 2, 3, 4];

const result = myReduce(numbers, (acc, num) => acc + num, 0);

console.log(result);
```

Output:

```text
10
```

---

# 🔥🔥🔥 What you should remember for the interview

```text
reduce()
→ processes every element
→ keeps an accumulator
→ callback creates the next accumulator
→ final accumulator is returned
```

Callback receives:

```text
accumulator
currentValue
currentIndex
array
```

The most important line:

```js
accumulator = callback(accumulator, array[i], i, array);
```

### Initial value determines the starting result:

```text
0  → sum
1  → multiplication
[] → array result
{} → object result
"" → string result
```

### 🔥 One-line memory trick

```text
myReduce = loop + accumulator + callback + return accumulator
```

And now remember all three together:

```text
map()
→ TRANSFORM

filter()
→ SELECT

reduce()
→ COMBINE / BUILD
```

That distinction is the key to understanding these three methods.

<!-- ============================= -->

# 22. 🔥🔥 Implement Your Own `forEach()`

## What is `forEach()`?

`forEach()` array ke **har element par ek callback function execute karta hai**.

Example:

```js
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});
```

Output:

```text
1
2
3
```

Simple meaning:

```text
array
  ↓
forEach()
  ↓
har element
  ↓
callback execute
```

---

# 🔥🔥 What does "Implement your own forEach()" mean?

Interviewer bol raha hai:

> "Built-in `forEach()` use mat karo. Khud ek function banao jo `forEach()` ki tarah kaam kare."

For example:

```js
const numbers = [1, 2, 3];

myForEach(numbers, (num) => {
  console.log(num);
});
```

Output:

```text
1
2
3
```

---

# 🔥 Simple implementation

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

const numbers = [1, 2, 3];

myForEach(numbers, (num) => {
  console.log(num);
});
```

Output:

```text
1
2
3
```

---

# 🧠 Let's understand this slowly

Suppose:

```js
const numbers = [10, 20, 30];
```

And:

```js
(num) => {
  console.log(num);
};
```

is our callback.

We call:

```js
myForEach(numbers, (num) => {
  console.log(num);
});
```

So our function receives:

```text
array
→ [10, 20, 30]

callback
→ function
```

Inside:

```js
for (let i = 0; i < array.length; i++) {
  callback(array[i]);
}
```

---

# First iteration

```text
i = 0
```

So:

```js
array[0];
```

is:

```text
10
```

Then:

```js
callback(10);
```

which prints:

```text
10
```

---

# Second iteration

```text
i = 1
```

So:

```js
array[1];
```

is:

```text
20
```

Then:

```js
callback(20);
```

Output:

```text
20
```

---

# Third iteration

```text
i = 2
```

So:

```js
array[2];
```

is:

```text
30
```

Then:

```js
callback(30);
```

Output:

```text
30
```

So final output:

```text
10
20
30
```

---

# 🔥🔥🔥 The most important line

This line is basically the whole idea:

```js
callback(array[i]);
```

It means:

```text
current element
      ↓
send it to callback
      ↓
callback performs some action
```

Unlike `map()` and `filter()`, we don't need to store the callback's result.

---

# 🔥🔥 `forEach()` also provides the index

Real `forEach()` callback receives:

```text
value
index
array
```

Example:

```js
const numbers = [10, 20, 30];

numbers.forEach((value, index) => {
  console.log(value, index);
});
```

Output:

```text
10 0
20 1
30 2
```

So our implementation should also support this.

---

# 🔥🔥 Better implementation

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}
```

Example:

```js
const numbers = [10, 20, 30];

myForEach(numbers, (value, index) => {
  console.log(value, index);
});
```

Output:

```text
10 0
20 1
30 2
```

---

# 🔥🔥🔥 Complete implementation

Real `forEach()` callback can receive:

```text
value
index
array
```

So:

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
```

Example:

```js
const numbers = [10, 20, 30];

myForEach(numbers, (value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
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
```

---

# 🧠 `forEach()` vs `map()`

This is VERY important.

## `forEach()`

```js
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num * 2);
});
```

Output:

```text
2
4
6
```

But:

```js
const result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);
```

Output:

```text
undefined
```

Why?

Because `forEach()` does not create and return a new array.

---

# 🔥🔥 `map()`

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  return num * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

So:

```text
forEach()
→ perform an action

map()
→ transform and return a new array
```

---

# 🧠 Memory Trick

Think:

```text
forEach()
→ "Do something for every element."

map()
→ "Give me a new value for every element."

filter()
→ "Should I keep this element?"

reduce()
→ "Combine everything into one result."
```

---

# 🔥🔥🔥 Why don't we use `return` in our custom `forEach()`?

Our implementation:

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
```

Notice:

```js
return;
```

is missing.

That's intentional.

`forEach()` is designed to execute the callback for its side effects.

For example:

```js
const numbers = [1, 2, 3];

myForEach(numbers, (num) => {
  console.log(num);
});
```

The purpose is:

```text
print something
```

not:

```text
create a new array
```

---

# 🔥🔥🔥 Example — Updating an external variable

```js
const numbers = [1, 2, 3];

let sum = 0;

myForEach(numbers, (num) => {
  sum += num;
});

console.log(sum);
```

Output:

```text
6
```

Dry run:

```text
sum = 0

num = 1
sum = 1

num = 2
sum = 3

num = 3
sum = 6
```

Here `forEach()` is useful because we just want to **perform an action for every element**.

---

# 🔥🔥🔥 Example — Objects

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
];

myForEach(users, (user) => {
  console.log(user.name);
});
```

Output:

```text
Ajay
Rahul
```

---

# 🔥🔥🔥 Example — Modify object properties

```js
const users = [
  { name: "Ajay", active: false },
  { name: "Rahul", active: false },
];

myForEach(users, (user) => {
  user.active = true;
});

console.log(users);
```

Output:

```text
[
  { name: "Ajay", active: true },
  { name: "Rahul", active: true }
]
```

Here the **objects themselves are being modified**.

This is different from the normal idea that `forEach()` "doesn't modify the array."

`forEach()` itself doesn't automatically create a new array, but your callback can still mutate objects or the array if you explicitly do so.

---

# 🔥🔥🔥 Important Interview Question

### Does `forEach()` return a new array?

**No.**

It returns:

```text
undefined
```

Example:

```js
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);
```

Output:

```text
undefined
```

The `return` inside the callback only returns from the callback. It does **not** make `forEach()` return an array.

---

# 🔥🔥🔥 Very Important Tricky Question

What is the output?

```js
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  return num * 2;
});

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

Why?

Because the callback's:

```js
return num * 2;
```

is ignored by `forEach()`.

It doesn't transform the original array.

---

# 🔥🔥🔥 Another Tricky Question

What happens here?

```js
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);
```

Output:

```text
undefined
```

Remember:

```text
callback return
      ≠
forEach return
```

---

# 🔥🔥🔥 Empty Array

What happens?

```js
myForEach([], (num) => {
  console.log(num);
});
```

Nothing is printed.

The loop runs zero times.

And:

```text
myForEach()
→ undefined
```

---

# 🔥🔥🔥 Can we use `break` inside `forEach()`?

This is a common interview question.

You cannot directly use:

```js
break;
```

inside a `forEach()` callback to stop the `forEach()`.

For example, this is invalid:

```js
numbers.forEach(num => {
  if (num === 3) {
    break;
  }
});
```

You will get a syntax error.

If you need to stop early, use:

```text
for
for...of
```

instead.

---

# 🔥🔥🔥 Can we use `continue` inside `forEach()`?

Similarly, you cannot directly use:

```js
continue;
```

inside the callback.

Instead, you can use:

```js
return;
```

to skip the rest of the current callback execution.

Example:

```js
numbers.forEach((num) => {
  if (num === 2) {
    return;
  }

  console.log(num);
});
```

Output:

```text
1
3
```

Here:

```text
return
→ skips this callback execution
```

It does **not** stop the entire `forEach()`.

---

# 🔥🔥🔥 Final Interview Implementation

If interviewer asks:

> Implement your own `forEach()`.

Use:

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
```

Test:

```js
const numbers = [1, 2, 3];

myForEach(numbers, (value, index) => {
  console.log(value, index);
});
```

Output:

```text
1 0
2 1
3 2
```

---

# 🧠 Compare All Four

```text
map()
→ TRANSFORM
→ returns new array

filter()
→ SELECT
→ returns new array

reduce()
→ COMBINE / BUILD
→ returns one final result

forEach()
→ DO SOMETHING
→ returns undefined
```

### 🔥 One-line memory trick

```text
forEach = loop + callback + side effect
```

The basic implementation is simply:

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
```

<!-- ================================ -->

# 23. 🔥🔥 Implement `debounce()`

## What is `debounce()`?

Debouncing ka matlab hai:

> **Jab tak function ko call karna band nahi kiya jata, tab tak actual function ko execute mat karo.**

Simple example:

Suppose user search box mein type kar raha hai:

```text
A
Aj
Aja
Ajay
```

Agar har key press par API call karoge:

```text
A    → API call
Aj   → API call
Aja  → API call
Ajay → API call
```

Toh unnecessary API calls hongi.

Debounce mein:

```text
A
Aj
Aja
Ajay
     ↓
user stops typing
     ↓
wait 500ms
     ↓
API call
```

So:

```text
Typing continues
      ↓
timer keeps resetting
      ↓
user stops
      ↓
wait
      ↓
function executes
```

---

# 🔥🔥 How does debounce work?

Debounce ke liye mainly do cheezein chahiye:

```text
setTimeout()
clearTimeout()
```

### `setTimeout()`

Kisi function ko future mein execute karta hai.

```js id="5yy2zj"
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

Meaning:

```text
Wait 1000ms
    ↓
then execute
```

---

### `clearTimeout()`

Previously created timer ko cancel karta hai.

```js id="7r4k3b"
const timer = setTimeout(() => {
  console.log("Hello");
}, 1000);

clearTimeout(timer);
```

Ab `"Hello"` execute nahi hoga.

---

# 🔥🔥🔥 Debounce ka main idea

Suppose delay:

```text
500ms
```

User calls function:

```text
0ms
```

Timer starts:

```text
0 → 500ms
```

But user calls again at:

```text
200ms
```

Old timer cancel:

```text
clearTimeout()
```

New timer starts:

```text
200 → 700ms
```

User again calls at:

```text
400ms
```

Again:

```text
old timer cancel
new timer start
```

Finally user stops.

500ms complete hone ke baad:

```text
actual function executes
```

---

# 🔥🔥🔥 Implement your own `debounce()`

```js id="e4c7h8"
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

That's the basic implementation.

---

# 🧠 Let's understand every line

## Step 1

```js id="v5k5yw"
function debounce(callback, delay) {
```

We receive:

```text
callback → actual function
delay    → kitni der wait karna hai
```

Example:

```js id="m6w3qh"
debounce(search, 500);
```

means:

```text
search function
+
500ms delay
```

---

# Step 2

```js id="4x9n8a"
let timer;
```

This variable timer ka reference store karega.

Initially:

```text
timer = undefined
```

---

# Step 3

```js id="2b3k9w"
return function (...args) {
```

This is very important.

`debounce()` khud actual callback ko immediately execute nahi karta.

Instead, it returns **another function**.

So:

```js id="8x1t1j"
const debouncedSearch = debounce(search, 500);
```

Now:

```text
debouncedSearch
       ↓
returned function
```

Whenever we call:

```js id="xq5j8p"
debouncedSearch("Ajay");
```

returned function execute hota hai.

---

# Step 4

```js id="70z3i4"
clearTimeout(timer);
```

Ye sabse important line hai.

Agar pehle se timer chal raha hai:

```text
old timer
   ↓
cancel
```

So every new call previous timer ko cancel kar deti hai.

---

# Step 5

```js id="m5x4lq"
timer = setTimeout(() => {
```

Ab new timer start hota hai.

```text
Wait delay
    ↓
callback execute
```

---

# Step 6

```js id="qf2x3h"
callback(...args);
```

Finally actual function execute hota hai.

`...args` means jo arguments debounce function ko mile the, unko callback ko pass karo.

---

# 🔥🔥🔥 Why `...args`?

Suppose:

```js id="w2k1v7"
function search(query) {
  console.log(query);
}
```

Then:

```js id="qj5l3d"
const debouncedSearch = debounce(search, 500);

debouncedSearch("javascript");
```

Here:

```text
args = ["javascript"]
```

So:

```js id="8z2v4p"
callback(...args);
```

becomes effectively:

```js id="5q6j3d"
search("javascript");
```

---

# 🔥🔥🔥 Real Example

```js id="3z5k1x"
function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java");
debouncedSearch("javascript");
```

Suppose calls happen quickly:

```text
j
 ↓
timer starts

ja
 ↓
old timer cancelled
new timer starts

jav
 ↓
old timer cancelled
new timer starts

java
 ↓
old timer cancelled
new timer starts

javascript
 ↓
old timer cancelled
new timer starts

500ms pass
 ↓
search("javascript")
```

Output:

```text
Searching for: javascript
```

Only **one execution**.

---

# 🔥🔥🔥 Important Interview Explanation

If interviewer asks:

> How does debounce work?

Say:

> "Debounce delays function execution until a certain amount of time has passed without another call. On every new call, we clear the previous timer and start a new one."

This is a very good interview answer.

---

# 🔥🔥🔥 Common use cases

Debounce is commonly used for:

```text
Search input
API calls while typing
Window resize
Autocomplete
Form validation
```

Example:

```text
User typing
      ↓
wait until typing stops
      ↓
API request
```

---

# 🔥🔥🔥 Tricky Question

What happens here?

```js id="8a5p1x"
const fn = debounce(() => {
  console.log("Hello");
}, 1000);

fn();
fn();
fn();
```

Three calls happen quickly.

What happens?

```text
call 1
 ↓
timer 1

call 2
 ↓
timer 1 cancelled
timer 2

call 3
 ↓
timer 2 cancelled
timer 3

1000ms
 ↓
Hello
```

Output:

```text
Hello
```

Only once.

---

# 🔥🔥🔥 Why does `timer` not disappear between calls?

This is an important JavaScript concept.

```js id="z7y0j2"
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

The returned function remembers:

```text
timer
```

even after `debounce()` has finished.

This happens because of a **closure**.

You already studied closures earlier.

So:

```text
debounce()
   ↓
creates timer variable
   ↓
returns function
   ↓
returned function remembers timer
   ↓
next call can clear previous timer
```

This is one reason debounce is a very good interview question.

---

# 🔥🔥🔥 `debounce()` Mental Model

Think of a person ringing a bell:

```text
Call
 ↓
wait...

Call again
 ↓
restart waiting

Call again
 ↓
restart waiting

No more calls
 ↓
wait completes
 ↓
execute
```

One-line memory:

```text
debounce → "Execute after calls stop."
```

---

# 24. 🔥🔥 Implement `throttle()`

## What is `throttle()`?

Throttling ka matlab hai:

> **Function ko ek fixed time interval mein maximum ek baar execute karna.**

Example:

Suppose scroll event continuously fire ho raha hai:

```text
scroll
scroll
scroll
scroll
scroll
scroll
scroll
...
```

Agar har event par function execute hoga, bahut expensive ho sakta hai.

Throttle bolta hai:

```text
Execute
 ↓
wait 1000ms
 ↓
allow next execution
 ↓
wait 1000ms
 ↓
allow next execution
```

So:

```text
Many calls
    ↓
limit execution frequency
    ↓
one execution per interval
```

---

# 🔥🔥 Debounce vs Throttle

This is VERY important.

### Debounce

```text
Calls keep happening
      ↓
keep waiting
      ↓
calls stop
      ↓
execute
```

### Throttle

```text
Calls keep happening
      ↓
execute at controlled intervals
```

Memory:

```text
Debounce → "Wait until it stops."

Throttle → "Don't run too often."
```

---

# 🔥🔥🔥 Implement your own `throttle()`

A simple implementation:

```js id="0j6g3v"
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      callback(...args);
    }
  };
}
```

---

# 🧠 Understand this slowly

We have:

```js id="z8d5w2"
let lastCall = 0;
```

This stores:

> Last time the callback was executed.

Initially:

```text
lastCall = 0
```

---

# Step 1

Every time returned function is called:

```js id="9z2m4w"
const now = Date.now();
```

We get current time.

For example:

```text
now = 5000
```

---

# Step 2

We calculate:

```js id="b2x8w1"
now - lastCall;
```

Suppose:

```text
now = 5000
lastCall = 3000
```

Then:

```text
5000 - 3000 = 2000ms
```

If delay is:

```text
1000ms
```

then enough time has passed.

So execute.

---

# Step 3

```js id="w8m4f7"
if (now - lastCall >= delay)
```

Meaning:

> Has at least `delay` milliseconds passed since the last execution?

If yes:

```js id="f3p9q2"
lastCall = now;

callback(...args);
```

---

# 🔥🔥🔥 Real Example

```js id="w6s7k3"
function handleScroll() {
  console.log("Scroll handled");
}

const throttledScroll = throttle(handleScroll, 1000);
```

Suppose scroll events happen:

```text
0ms
100ms
200ms
300ms
400ms
500ms
600ms
700ms
800ms
900ms
1000ms
1100ms
```

Throttle allows:

```text
0ms     → execute
100ms   → skip
200ms   → skip
300ms   → skip
...
900ms   → skip
1000ms  → execute
1100ms  → skip
```

So approximately:

```text
0ms
1000ms
2000ms
3000ms
...
```

Only controlled executions happen.

---

# 🔥🔥🔥 Another implementation using a timer

There is another common way to implement throttle:

```js id="v4p8x1"
function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) {
      return;
    }

    callback(...args);

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```

This version works like:

```text
First call
 ↓
execute immediately
 ↓
lock
 ↓
wait delay
 ↓
unlock
```

Then next call can execute.

---

# 🧠 Understand this version

Initially:

```text
shouldWait = false
```

Call function:

```text
shouldWait = false
```

So:

```js id="5j8r3f"
callback(...args);
```

executes.

Then:

```js id="n8h2k7"
shouldWait = true;
```

Now calls during the delay:

```text
shouldWait = true
```

So:

```js id="w4p3j9"
return;
```

They are ignored.

After delay:

```js id="4f6w2s"
shouldWait = false;
```

Now another call can execute.

---

# 🔥🔥🔥 Difference between the two throttle implementations

### Timestamp version

```js id="2m0g9k"
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
```

Uses:

```text
Date.now()
```

to check elapsed time.

### Timer version

```js id="y8j2h5"
function throttle(callback, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;

    callback(...args);

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
```

Uses:

```text
setTimeout()
```

to create a waiting period.

Both demonstrate the core throttle concept.

---

# 🔥🔥🔥 Important: Leading and trailing behavior

This is a slightly more advanced interview topic.

Suppose throttle is called continuously.

There are two possible behaviors:

```text
Leading
→ execute immediately on the first call.

Trailing
→ execute one more time after the waiting period
  using the latest arguments.
```

Our simple throttle:

```js id="h4j7f2"
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
```

is essentially **leading-only**.

If calls happen during the blocked period, they are ignored.

A production-ready throttle can additionally support trailing execution.

For your interview preparation, first understand the simple version very well.

---

# 🔥🔥🔥 Debounce Example

Imagine:

```text
User typing:

A
Aj
Aja
Ajay
```

Debounce:

```text
A
 ↓
wait

Aj
 ↓
reset timer

Aja
 ↓
reset timer

Ajay
 ↓
reset timer

User stops
 ↓
wait 500ms
 ↓
API call
```

Result:

```text
1 execution
```

---

# 🔥🔥🔥 Throttle Example

Imagine:

```text
User scrolling continuously
```

Throttle:

```text
scroll → execute
scroll → skip
scroll → skip
scroll → skip
scroll → execute
scroll → skip
scroll → skip
scroll → execute
```

Result:

```text
controlled repeated execution
```

---

# 🔥🔥🔥 Very Important Comparison

Suppose events happen:

```text
0ms
100ms
200ms
300ms
400ms
500ms
```

and delay is:

```text
500ms
```

### Debounce

Because calls keep happening:

```text
0 → reset
100 → reset
200 → reset
300 → reset
400 → reset
500 → reset
```

Then when calls stop:

```text
1000ms
 ↓
execute once
```

---

### Throttle

Throttle might execute:

```text
0ms
```

Then block until:

```text
500ms
```

Then allow another execution around:

```text
500ms
```

So:

```text
0ms    → execute
100ms  → skip
200ms  → skip
300ms  → skip
400ms  → skip
500ms  → execute
```

---

# 🔥🔥🔥 Common Use Cases

## Debounce

Use when you care about:

> **The final action after the user stops.**

Examples:

```text
Search input
Autocomplete
API calls while typing
Form validation
Resize handling
```

---

## Throttle

Use when you care about:

> **Controlling continuous events.**

Examples:

```text
Scroll
Mouse movement
Window resize
Drag events
Continuous user interactions
```

---

# 🔥🔥🔥 Interview Question

### Why is debounce useful for search?

Good answer:

> "Without debounce, every keystroke can trigger an API request. Debounce waits until the user stops typing for a specified delay, then makes one request."

---

# 🔥🔥🔥 Interview Question

### Why is throttle useful for scroll?

Good answer:

> "Scroll events can fire many times in a short period. Throttling limits how frequently the handler runs, which prevents unnecessary work and improves performance."

---

# 🔥🔥🔥 Important Closure Connection

Both implementations use **closures**.

Debounce:

```js id="h2t7n5"
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

The returned function remembers:

```text
timer
```

even after `debounce()` has finished.

Throttle:

```js id="z6w1v4"
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
```

The returned function remembers:

```text
lastCall
```

So:

```text
debounce
→ closure stores timer

throttle
→ closure stores lastCall
```

This is an excellent connection to your earlier **closures** topic.

---

# 🔥🔥🔥 FINAL Interview Implementations

## `debounce()`

```js id="y5m8v3"
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

Mental model:

```text
New call
   ↓
cancel previous timer
   ↓
start new timer
   ↓
no new call?
   ↓
execute
```

---

## `throttle()`

```js id="f1w6k9"
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      callback(...args);
    }
  };
}
```

Mental model:

```text
New call
   ↓
enough time passed?
   ↓
YES → execute
NO  → ignore
```

---

# 🧠 FINAL CHEAT SHEET

```text
DEBOUNCE

Calls keep coming
      ↓
reset timer
      ↓
calls stop
      ↓
wait delay
      ↓
execute once
```

```text
THROTTLE

Calls keep coming
      ↓
check time
      ↓
enough time?
   ↓       ↓
 YES      NO
  ↓        ↓
execute   skip
```

### 🔥 One-line memory trick

```text
Debounce → "Wait until it stops."

Throttle → "Don't run too often."
```

### And the implementation patterns:

```text
Debounce
→ clearTimeout()
→ setTimeout()

Throttle
→ Date.now()
→ compare elapsed time
```

### ⭐ Interview connection

```text
Debounce
→ closure + timer

Throttle
→ closure + timestamp
```

<!-- =============================== -->
