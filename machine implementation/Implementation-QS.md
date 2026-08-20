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

# 24. 🔥🔥 Implement `Promise.all()`

## What is `Promise.all()`?

`Promise.all()` ka use tab hota hai jab humein **multiple Promises ko ek saath run karna ho** aur humein **sabke results chahiye**.

Example:

```js id="u6yq2x"
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Posts");
const p3 = Promise.resolve("Comments");

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});
```

Output:

```text id="7r3k1m"
["User", "Posts", "Comments"]
```

Simple meaning:

```text id="8gq4wa"
Promise 1 ──┐
Promise 2 ──┼──→ Promise.all() → final array
Promise 3 ──┘
```

`Promise.all()` waits for **all promises to fulfill**.

---

# 🔥🔥 Why do we need `Promise.all()`?

Suppose humein 3 APIs call karni hain:

```text id="x1v3f5"
Get user
Get posts
Get comments
```

We could do:

```js id="8o6t5h"
const user = await getUser();
const posts = await getPosts();
const comments = await getComments();
```

But if these requests independent hain, then one request unnecessarily doosre ka wait kar sakti hai.

Instead:

```js id="2f7w9d"
const [user, posts, comments] = await Promise.all([
  getUser(),
  getPosts(),
  getComments(),
]);
```

Now all three can run concurrently.

Conceptually:

```text id="w8h1k4"
getUser()     ──────────────→ done
getPosts()    ───────→ done
getComments() ───────────→ done

              ↓

        Promise.all()
              ↓
       wait for all
              ↓
     [user, posts, comments]
```

---

# 🔥🔥🔥 What does "Implement your own Promise.all()" mean?

Interviewer bol raha hai:

> "Built-in `Promise.all()` use mat karo. Khud ek function banao jo same basic behavior provide kare."

We want:

```js id="r4c6j2"
myPromiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  (result) => {
    console.log(result);
  },
);
```

Output:

```text id="z2h7p9"
[1, 2, 3]
```

---

# 🔥 Step 1 — Understand the requirements

Our custom `Promise.all()` ko mainly ye kaam karne hain:

```text id="6j2n8q"
1. Multiple values/promises accept karo.

2. Sabko process karo.

3. Sab resolve ho jaayein
   → results return karo.

4. Ek bhi reject ho
   → immediately reject karo.

5. Result ka order input ke same hona chahiye.
```

Last point **bahut important** hai.

---

# 🔥🔥🔥 Result order important hai

Suppose:

```js id="6f8q2r"
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 1000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("C"), 2000);
});
```

Actual completion order:

```text id="5g1m4d"
B → C → A
```

But:

```js id="j8v3k1"
Promise.all([p1, p2, p3]);
```

should return:

```text id="4q7w2m"
["A", "B", "C"]
```

**Not:**

```text id="e8x5n3"
["B", "C", "A"]
```

So:

```text id="k6p9r1"
Completion order ≠ Result order
```

Result order must match input order.

---

# 🔥🔥🔥 Basic Implementation

```js id="m4t7x2"
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
```

Ye basic interview implementation hai.

Ab isko **line by line** samjho.

---

# 🧠 Step 1 — Return a new Promise

```js id="q5w8n2"
return new Promise((resolve, reject) => {
```

Our `myPromiseAll()` ko khud ek Promise return karna hai.

So:

```text id="d3h6k9"
myPromiseAll()
      ↓
returns Promise
```

Then caller:

```js id="u1c7v4"
myPromiseAll([...])
  .then(...)
  .catch(...);
```

kar sakta hai.

---

# 🧠 Step 2 — Results array

```js id="r8m2y5"
const results = [];
```

Isme hum final values store karenge.

Suppose input:

```text id="z9p3k7"
[
  Promise A,
  Promise B,
  Promise C
]
```

Final result:

```text id="c4x1n8"
[
  "A",
  "B",
  "C"
]
```

---

# 🧠 Step 3 — Counter

```js id="w7k3m9"
let completed = 0;
```

Ye track karega:

> Kitne Promises successfully complete ho chuke hain?

Initially:

```text id="s6v2j4"
completed = 0
```

One Promise resolve:

```text id="a9q5t1"
completed = 1
```

Second:

```text id="k3m8p6"
completed = 2
```

Third:

```text id="r4x7z2"
completed = 3
```

Jab:

```text id="n8c2w5"
completed === promises.length
```

then all promises complete ho gaye.

---

# 🧠 Step 4 — Empty array

```js id="p7h4x9"
if (promises.length === 0) {
  resolve([]);
  return;
}
```

Native:

```js id="y2m6k8"
Promise.all([]);
```

eventually fulfills with:

```text id="c5r9v1"
[]
```

So hum bhi:

```text id="a1z4q7"
[]
```

return karte hain.

---

# 🧠 Step 5 — Process every Promise

```js id="k8p2m5"
promises.forEach((promise, index) => {
```

Suppose:

```text id="s3v7x1"
index = 0 → Promise A

index = 1 → Promise B

index = 2 → Promise C
```

---

# 🧠 Step 6 — `Promise.resolve()`

```js id="u4n8c2"
Promise.resolve(promise);
```

Ye important hai.

It allows our function to handle both:

```text id="q9m3w7"
Promise
```

and normal values:

```text id="d5x1k8"
10
"Hello"
true
```

For example:

```js id="e7p2v9"
myPromiseAll([Promise.resolve(10), 20, Promise.resolve(30)]);
```

should work.

`Promise.resolve(20)` effectively makes the normal value behave like a fulfilled Promise.

---

# 🧠 Step 7 — When Promise resolves

```js id="z3k8m1"
.then(value => {
```

Suppose:

```text id="h6q2r9"
Promise B → "B"
```

Then:

```text id="m7v4c1"
value = "B"
```

---

# 🔥🔥🔥 Step 8 — Store result at the correct index

This is perhaps the **most important line**:

```js id="n2x7p5"
results[index] = value;
```

Suppose:

```text id="k8f3w6"
Promise A → index 0
Promise B → index 1
Promise C → index 2
```

Even if Promise B completes first:

```text id="v1m6q9"
results[1] = "B";
```

So:

```text id="j4x8r2"
[empty, "B"]
```

Then C:

```text id="p7n3k5"
[empty, "B", "C"]
```

Then A:

```text id="q9w2m6"
["A", "B", "C"]
```

That's how we preserve input order.

---

# 🔥🔥🔥 Very Important

Suppose completion order is:

```text id="d8v2p5"
B
C
A
```

Our results array still becomes:

```text id="x4m7k1"
results[1] = "B"
results[2] = "C"
results[0] = "A"
```

Final:

```text id="n6q3w8"
["A", "B", "C"]
```

So remember:

```text id="r1p5z9"
Store using index.
```

---

# 🧠 Step 9 — Increase counter

```js id="v7m2k4"
completed++;
```

Every successful Promise ke baad:

```text id="h8q3n6"
completed++
```

Example:

```text id="c1x7m9"
0 → 1
1 → 2
2 → 3
```

---

# 🧠 Step 10 — Check if everything completed

```js id="f4z8p2"
if (completed === promises.length) {
  resolve(results);
}
```

Suppose:

```text id="k3m7x1"
promises.length = 3
```

When:

```text id="b8q2v5"
completed = 3
```

we know:

> All promises successfully resolved.

So:

```js id="y6n4r9"
resolve(results);
```

returns:

```text id="m2p7c8"
["A", "B", "C"]
```

---

# 🔥🔥🔥 Step 11 — What if one Promise rejects?

This is extremely important.

Suppose:

```js id="q8m4x1"
const p1 = Promise.resolve("A");

const p2 = Promise.reject("Something went wrong");

const p3 = Promise.resolve("C");
```

Then:

```js id="t6k2v9"
myPromiseAll([p1, p2, p3]);
```

should reject.

We handle that with:

```js id="n7c3p5"
.catch(error => {
  reject(error);
});
```

So:

```text id="a2m8x6"
p1 → resolve

p2 → reject
       ↓
   reject(error)

p3 → may still complete,
     but final Promise is already rejected.
```

---

# 🔥🔥🔥 Promise.all Rule

Remember this:

```text id="f7k3n9"
ALL must succeed.
```

If:

```text id="w2q8m4"
Promise 1 → success
Promise 2 → success
Promise 3 → success
```

Result:

```text id="s5v1x7"
resolve([...])
```

But:

```text id="k8m3q2"
Promise 1 → success
Promise 2 → ERROR
Promise 3 → success
```

Result:

```text id="d4n7p1"
reject(error)
```

Even one failure is enough.

---

# 🔥🔥🔥 Complete Example

```js id="z8m4q2"
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
```

Test:

```js id="p5x7n3"
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

myPromiseAll([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output:

```text id="a3k8m6"
["A", "B", "C"]
```

---

# 🔥🔥🔥 Test with different completion times

```js id="v2n7q4"
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("A"), 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("B"), 1000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("C"), 2000);
});

myPromiseAll([p1, p2, p3]).then((result) => {
  console.log(result);
});
```

Completion:

```text id="m9x3p7"
B → 1 second

C → 2 seconds

A → 3 seconds
```

But output:

```text id="q4k8n2"
["A", "B", "C"]
```

Again:

```text id="f1z6m3"
completion order
≠
result order
```

---

# 🔥🔥🔥 Why don't we simply `push()`?

You might think:

```js id="t3n8q5"
results.push(value);
```

But that would be wrong.

Because completion order may be:

```text id="b7m2x9"
B
C
A
```

Then:

```text id="h4q8v1"
results = ["B", "C", "A"]
```

But `Promise.all()` requires:

```text id="z6p3m8"
["A", "B", "C"]
```

That's why:

```js id="r5n7k2"
results[index] = value;
```

is essential.

---

# 🔥🔥🔥 `Promise.all()` with normal values

Native `Promise.all()` can accept values too.

Example:

```js id="x8m2q4"
Promise.all([10, 20, Promise.resolve(30)]).then((result) => {
  console.log(result);
});
```

Output:

```text id="v5k9n3"
[10, 20, 30]
```

Our:

```js id="p7m4x8"
Promise.resolve(promise);
```

helps us support this.

---

# 🔥🔥🔥 Important Interview Question

### Does `Promise.all()` execute promises one after another?

No.

The Promises are generally **started when their promise-producing functions are called**, before being passed into `Promise.all()`.

Example:

```js id="q3n8m5"
const p1 = fetch("/users");
const p2 = fetch("/posts");
const p3 = fetch("/comments");

const result = await Promise.all([p1, p2, p3]);
```

The requests can already be in progress concurrently.

`Promise.all()` mainly coordinates their completion.

Think:

```text id="c7m2x9"
start all
   ↓
wait for all
   ↓
collect results
```

---

# 🔥🔥🔥 `Promise.all()` vs `Promise.allSettled()`

This is a common interview follow-up.

### `Promise.all()`

```text id="w4n8q2"
One rejects
     ↓
whole Promise rejects
```

### `Promise.allSettled()`

```text id="p6x3m7"
One rejects
     ↓
still waits for everything
     ↓
returns status of every Promise
```

Example:

```text id="z8q4m1"
Promise.all()

A ✓
B ✗
C ✓

→ reject
```

Whereas:

```text id="k2v7n5"
Promise.allSettled()

A ✓
B ✗
C ✓

→ [
    { status: "fulfilled", ... },
    { status: "rejected", ... },
    { status: "fulfilled", ... }
  ]
```

---

# 🔥🔥🔥 `Promise.all()` vs `Promise.race()`

Another common follow-up.

### `Promise.all()`

Waits for:

```text id="f5m8q3"
ALL
```

### `Promise.race()`

Waits for:

```text id="j2n7x4"
FIRST SETTLED
```

Example:

```text id="s8q3m6"
A → 3 seconds
B → 1 second
C → 2 seconds
```

`Promise.all()`:

```text id="w5p9k2"
wait → 3 seconds
```

`Promise.race()`:

```text id="d4x8m1"
B → 1 second
```

---

# 🔥🔥🔥 Common Tricky Question

What is the output?

```js id="m7q3v9"
myPromiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  (result) => {
    console.log(result);
  },
);
```

Answer:

```text id="c5n8x2"
[1, 2, 3]
```

---

# 🔥🔥🔥 Tricky Question

What happens here?

```js id="z4p7m2"
myPromiseAll([Promise.resolve(1), Promise.reject("Error"), Promise.resolve(3)])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output:

```text id="q8n3v6"
Error
```

Because one Promise rejected.

---

# 🔥🔥🔥 Tricky Question — Order

```js id="x2m8q4"
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 2000);
});
```

Completion:

```text id="n6v3p9"
2
3
1
```

But:

```js id="r7m2x5"
myPromiseAll([p1, p2, p3]);
```

returns:

```text id="h4q8n1"
[1, 2, 3]
```

Because results are stored using:

```js id="c9m5v7"
results[index] = value;
```

---

# 🔥🔥🔥 The Core Algorithm

If you forget the code during an interview, remember these 5 steps:

```text id="k3p8w2"
1. Create a new Promise.

2. Create results = [].

3. Keep a completed counter.

4. For each Promise:
      → resolve it
      → store result at its original index
      → increase counter

5. When completed === total:
      → resolve(results)

6. If any Promise rejects:
      → reject(error)
```

That's the whole algorithm.

---

# 🔥🔥🔥 Final Interview Implementation

```js id="m8q4x7"
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
```

Test:

```js id="q5m9x3"
myPromiseAll([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C"),
]).then((result) => {
  console.log(result);
});
```

Output:

```text id="w2n7k4"
["A", "B", "C"]
```

---

# 🧠 FINAL CHEAT SHEET

```text id="x8m3q6"
Promise.all()

→ takes multiple Promises/values
→ waits for all to fulfill
→ returns one Promise
→ preserves input order
→ one rejection → entire result rejects
```

### Most important variables:

```text id="r4p8n2"
results
→ stores final values

completed
→ counts successful Promises

index
→ preserves input order
```

### Most important line:

```js id="j6q2m8"
results[index] = value;
```

### Most important rule:

```text id="f3n7x5"
ALL must succeed.
```

### Memory trick:

```text id="m8q4v2"
Promise.all()
→ "Sab successful honge tab result do."
```

And compare:

```text id="z5p2k7"
Promise.all()
→ wait for ALL

Promise.race()
→ wait for FIRST

Promise.allSettled()
→ wait for ALL, even if some fail
```

<!-- ========================= -->

Bilkul. Ye 3 questions interview mein thode scary lag sakte hain, especially deep clone aur curry, but hum inhe basic se step-by-step samjhenge.

Sabse pehle ek simple idea:

Deep Clone
→ completely independent copy

Memoization
→ same input ka result dobara calculate mat karo

Currying
→ ek function ke multiple arguments ko one-by-one functions mein convert karo

# 25. 🔥🔥 Implement a Deep Clone

## What is a Deep Clone?

Deep clone ka matlab hai:

> Kisi object ki **completely independent copy** banana, including uske nested objects aur arrays.

Example:

```js
const original = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};
```

Agar hum deep clone banate hain:

```js
const copy = deepClone(original);
```

Toh:

```text
original
   ↓
completely independent
   ↓
copy
```

Agar `copy` ko change karenge:

```js
copy.address.city = "Mumbai";
```

Toh `original` change nahi hona chahiye.

---

# 🔥🔥 Why is normal assignment NOT a clone?

Suppose:

```js
const user = {
  name: "Ajay",
};

const copy = user;

copy.name = "Rahul";

console.log(user.name);
```

Output:

```text
Rahul
```

Why?

Because:

```js
const copy = user;
```

new object nahi banata.

Dono same object ko point kar rahe hain:

```text
user ──────┐
           ↓
       { name: "Ajay" }
           ↑
copy ──────┘
```

So:

```text
copy change
    ↓
same object change
    ↓
user also changes
```

---

# 🔥🔥 Shallow Copy vs Deep Clone

Ye difference bahut important hai.

## Shallow Copy

Example:

```js
const original = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};

const copy = {
  ...original,
};
```

Outer object naya hai.

But nested object:

```text
original.address
      ↓
same object
      ↑
copy.address
```

So:

```js
copy.address.city = "Mumbai";

console.log(original.address.city);
```

Output:

```text
Mumbai
```

Because nested object share ho raha hai.

---

# 🔥🔥 Deep Clone

Deep clone mein nested object bhi copy hota hai:

```text
original
  ↓
new outer object
  ↓
new nested object
  ↓
new nested array
  ↓
new deeper object
```

So:

```text
original.address
      ↓
different object
      ↑
copy.address
```

Now changing `copy.address` does not affect `original.address`.

---

# 🔥🔥🔥 Implement Your Own Deep Clone

Basic interview implementation:

```js
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObject = {};

  for (const key in value) {
    clonedObject[key] = deepClone(value[key]);
  }

  return clonedObject;
}
```

Ab isko slowly samjhte hain.

---

# 🧠 Step 1 — Primitive values

```js
if (value === null || typeof value !== "object") {
  return value;
}
```

Primitive values:

```text
string
number
boolean
undefined
bigint
symbol
```

inhe clone karne ke liye kuch special nahi karna.

Example:

```js
deepClone("Ajay");
```

returns:

```text
"Ajay"
```

Similarly:

```js
deepClone(25);
```

returns:

```text
25
```

---

# 🧠 Step 2 — Why check `null`?

Because JavaScript mein:

```js
typeof null;
```

returns:

```text
"object"
```

So sirf:

```js
typeof value !== "object";
```

enough nahi hai.

Isliye:

```js
value === null;
```

ko separately check karte hain.

---

# 🧠 Step 3 — Array check

```js
if (Array.isArray(value)) {
  return value.map((item) => deepClone(item));
}
```

Array bhi technically object hota hai.

Example:

```js
const numbers = [1, 2, 3];
```

We create a new array:

```text
[1, 2, 3]
```

But nested values ko bhi recursively clone karte hain.

---

# 🧠 What does recursion mean here?

Suppose:

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
};
```

When we reach:

```js
address;
```

we call:

```js
deepClone(address);
```

Then inside `address`:

```text
city → "Delhi"
```

is primitive, so simply return it.

So:

```text
deepClone(user)
      ↓
deepClone(address)
      ↓
deepClone("Delhi")
      ↓
"Delhi"
```

This is recursion.

---

# 🔥🔥🔥 Step 4 — Clone Object

```js
const clonedObject = {};
```

We create a completely new object.

Then:

```js
for (const key in value) {
  clonedObject[key] = deepClone(value[key]);
}
```

For:

```js
const user = {
  name: "Ajay",
  age: 25,
};
```

it effectively does:

```text
clonedObject.name = deepClone("Ajay");

clonedObject.age = deepClone(25);
```

Result:

```js
{
  name: "Ajay",
  age: 25
}
```

---

# 🔥🔥🔥 Full Example

```js
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObject = {};

  for (const key in value) {
    clonedObject[key] = deepClone(value[key]);
  }

  return clonedObject;
}

const original = {
  name: "Ajay",
  address: {
    city: "Delhi",
  },
  skills: ["JavaScript", "React"],
};

const copy = deepClone(original);

copy.address.city = "Mumbai";
copy.skills.push("Node.js");

console.log(original);
console.log(copy);
```

Original remains:

```text
{
  name: "Ajay",
  address: {
    city: "Delhi"
  },
  skills: ["JavaScript", "React"]
}
```

Copy becomes:

```text
{
  name: "Ajay",
  address: {
    city: "Mumbai"
  },
  skills: ["JavaScript", "React", "Node.js"]
}
```

---

# 🔥🔥 Important Interview Point

This basic implementation is good for understanding the concept, but it is **not a complete replacement for native cloning utilities**.

Real-world objects can contain:

```text
Date
RegExp
Map
Set
Function
Symbol properties
Circular references
Class instances
```

For example:

```js
const obj = {
  date: new Date(),
};
```

Our basic implementation won't correctly preserve the `Date` object's behavior.

For modern JavaScript, `structuredClone()` can handle many built-in types:

```js
const copy = structuredClone(original);
```

But if the interviewer specifically says:

> "Implement your own deep clone"

they usually want to see **recursion + separate nested objects/arrays**.

---

# 🧠 Deep Clone Memory Trick

```text
Deep Clone
→ check primitive
→ check array
→ create new object
→ recursively clone nested values
```

---

# 26. 🔥🔥 Implement Memoization

## What is Memoization?

Memoization ka matlab hai:

> **Function ke previous results ko cache karna, taaki same input dobara aaye to function ko recalculate na karna pade.**

Example:

Suppose:

```js
function square(num) {
  console.log("Calculating...");
  return num * num;
}
```

If we call:

```js
square(5);
square(5);
square(5);
```

Normal function:

```text
Calculating...
Calculating...
Calculating...
```

Same calculation 3 times.

Memoization:

```text
First square(5)
    ↓
calculate
    ↓
store 25

Second square(5)
    ↓
cache has 25
    ↓
return 25

Third square(5)
    ↓
cache has 25
    ↓
return 25
```

So calculation happens only once.

---

# 🔥🔥 Why is memoization useful?

Memoization useful hai jab function:

```text
expensive
+
same inputs repeatedly
```

ke saath call hota hai.

Examples:

```text
Complex calculations
Fibonacci
Data transformations
Repeated API-related processing
Expensive React calculations
```

---

# 🔥🔥🔥 Implement Your Own Memoization

Basic version:

```js
function memoize(callback) {
  const cache = {};

  return function (value) {
    if (cache[value] !== undefined) {
      return cache[value];
    }

    const result = callback(value);

    cache[value] = result;

    return result;
  };
}
```

Example:

```js
function square(num) {
  console.log("Calculating...");
  return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(5));
```

Output:

```text
Calculating...
25

25

Calculating...
100

25
```

Notice:

```text
square(5)
```

sirf **ek baar calculate** hua.

---

# 🧠 How does it work?

Initially:

```text
cache = {}
```

First call:

```js
memoizedSquare(5);
```

Cache mein `5` nahi hai.

So:

```text
calculate 5 × 5
      ↓
25
      ↓
cache[5] = 25
```

Cache:

```text
{
  5: 25
}
```

---

# Second call

```js
memoizedSquare(5);
```

Now cache contains:

```text
5 → 25
```

So:

```text
return 25
```

No calculation.

---

# 🔥🔥🔥 The most important part

Memoization has two steps:

```text
1. Check cache

2. If not present:
   calculate
   store result
```

Think:

```text
input
  ↓
cache?
 ↓     ↓
YES    NO
 ↓      ↓
return  calculate
         ↓
       store
         ↓
       return
```

---

# 🔥🔥🔥 Why is `cache` inside `memoize()`?

```js
function memoize(callback) {
  const cache = {};

  return function (value) {
    ...
  };
}
```

Because of **closure**.

The returned function remembers:

```text
cache
```

even after `memoize()` has finished.

So:

```text
memoize()
   ↓
creates cache
   ↓
returns function
   ↓
returned function remembers cache
```

Again, this connects directly to the **closures** topic you already studied.

---

# 🔥🔥🔥 Better Memoization Implementation

The simple version has a problem.

It only handles one primitive argument well.

For example:

```js
function add(a, b) {
  return a + b;
}
```

We want:

```js
memoizedAdd(2, 3);
memoizedAdd(2, 3);
```

We can use `...args`:

```js
function memoize(callback) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = callback(...args);

    cache.set(key, result);

    return result;
  };
}
```

Example:

```js
function add(a, b) {
  console.log("Calculating...");
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(5, 10));
console.log(memoizedAdd(2, 3));
```

Output:

```text
Calculating...
5

5

Calculating...
15

5
```

---

# 🧠 Why use `Map()`?

Instead of:

```js
const cache = {};
```

we can use:

```js
const cache = new Map();
```

Then:

```js
cache.has(key);
```

checks whether result exists.

And:

```js
cache.get(key);
```

gets cached result.

And:

```js
cache.set(key, result);
```

stores result.

---

# 🔥🔥🔥 Why `JSON.stringify(args)`?

Suppose:

```js
args = [2, 3];
```

We convert it to:

```text
"[2,3]"
```

That becomes our cache key.

So:

```text
[2, 3]
 ↓
"[2,3]"
```

Same arguments:

```text
[2, 3]
 ↓
"[2,3]"
```

Same key → cached result.

---

# 🔥🔥🔥 Important Interview Point

Memoization works best when the function is:

```text
pure
```

Meaning:

> Same input → same output.

For example:

```js
function square(num) {
  return num * num;
}
```

is a good candidate.

But:

```js
function getCurrentTime() {
  return Date.now();
}
```

is not a good candidate.

Because:

```text
same call
→ different time
```

Caching it would give an old result.

---

# 🧠 Memoization Memory Trick

```text
Memoization
→ Cache previous result
→ Same input?
→ Return cached result
→ Otherwise calculate and cache
```

One line:

```text
memoization = cache + function result
```

---

# 27. 🔥🔥 Implement a Curry Function

## What is Currying?

Currying ka matlab hai:

> Ek function jo multiple arguments leta hai, usko aise functions mein convert karna jahan **one argument at a time** diya ja sake.

Normal function:

```js
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3);
```

Output:

```text
6
```

Curried version:

```js
add(1)(2)(3);
```

Output:

```text
6
```

So:

```text
Normal:

add(1, 2, 3)


Curried:

add(1)
   ↓
  function
   ↓
(2)
   ↓
  function
   ↓
(3)
   ↓
  6
```

---

# 🔥🔥🔥 Why is it called currying?

Because:

```text
f(a, b, c)
```

is transformed into:

```text
f(a)(b)(c)
```

Instead of giving all arguments together, we give them one by one.

---

# 🔥🔥🔥 Implement a Curry Function

Suppose:

```js
function add(a, b, c) {
  return a + b + c;
}
```

We want:

```js
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
```

Output:

```text
6
```

Implementation:

```js
function curry(callback) {
  return function curried(...args) {
    if (args.length >= callback.length) {
      return callback(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}
```

Ye thoda scary lag sakta hai, so let's break it down.

---

# 🧠 Step 1 — `callback.length`

Suppose:

```js
function add(a, b, c) {
  return a + b + c;
}
```

Then:

```js
add.length;
```

returns:

```text
3
```

Because function expects 3 parameters.

So our curry function knows:

```text
Need 3 arguments
```

---

# 🧠 Step 2 — First call

```js
curriedAdd(1);
```

Now:

```text
args = [1]
```

Required:

```text
3
```

We don't have enough.

So:

```js
if (args.length >= callback.length)
```

is:

```text
1 >= 3
→ false
```

Therefore:

```js
return function (...nextArgs) {
  return curried(...args, ...nextArgs);
};
```

A new function is returned.

---

# 🧠 Step 3 — Second call

Now:

```js
curriedAdd(1)(2);
```

First call collected:

```text
[1]
```

Second call gives:

```text
[2]
```

Together:

```text
[1, 2]
```

Still need 3 arguments.

So another function is returned.

---

# 🧠 Step 4 — Third call

Now:

```js
curriedAdd(1)(2)(3);
```

Arguments become:

```text
[1, 2, 3]
```

Now:

```text
args.length = 3
callback.length = 3
```

So:

```js
return callback(...args);
```

becomes:

```js
return add(1, 2, 3);
```

Result:

```text
6
```

---

# 🔥🔥🔥 Full Example

```js
function curry(callback) {
  return function curried(...args) {
    if (args.length >= callback.length) {
      return callback(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
```

Output:

```text
6
```

---

# 🔥🔥🔥 Currying doesn't always have to be one argument

Our implementation also supports:

```js
curriedAdd(1, 2)(3);
```

and:

```js
curriedAdd(1)(2, 3);
```

and:

```js
curriedAdd(1, 2, 3);
```

All can produce:

```text
6
```

Because we check:

```js
args.length >= callback.length;
```

and combine:

```js
...args,
...nextArgs
```

---

# 🔥🔥🔥 Example

```js
console.log(curriedAdd(1, 2)(3));
```

Flow:

```text
[1, 2]
   ↓
need 3
   ↓
receive 3
   ↓
[1, 2, 3]
   ↓
add(1, 2, 3)
   ↓
6
```

---

# 🔥🔥🔥 Another Curry Example

Suppose:

```js
function multiply(a, b, c) {
  return a * b * c;
}
```

Create:

```js
const curriedMultiply = curry(multiply);
```

Now:

```js
console.log(curriedMultiply(2)(3)(4));
```

Output:

```text
24
```

Because:

```text
2 × 3 × 4 = 24
```

---

# 🔥🔥🔥 Why is currying useful?

Currying is useful when you want to create **specialized functions**.

Example:

```js
function multiply(a, b) {
  return a * b;
}
```

Curried:

```js
const multiplyBy = curry(multiply);
```

Then:

```js
const multiplyBy2 = multiplyBy(2);
```

Now:

```js
multiplyBy2(5);
```

gives:

```text
10
```

and:

```js
multiplyBy2(10);
```

gives:

```text
20
```

So:

```text
multiplyBy2
→ reusable specialized function
```

---

# 🔥🔥🔥 Another Real-World Style Example

Suppose:

```js
function greet(greeting, name) {
  return `${greeting}, ${name}`;
}
```

Curried:

```js
const curriedGreet = curry(greet);
```

Now:

```js
const sayHello = curriedGreet("Hello");
```

Then:

```js
console.log(sayHello("Ajay"));
console.log(sayHello("Rahul"));
```

Output:

```text
Hello, Ajay
Hello, Rahul
```

We created a reusable function:

```text
sayHello
```

---

# 🔥🔥🔥 The Important Difference

## Normal function

```js
add(1, 2, 3);
```

All arguments at once.

## Curried function

```js
add(1)(2)(3);
```

Arguments one by one.

Think:

```text
Normal
→ one function call

Currying
→ chain of function calls
```

---

# 🔥🔥🔥 Common Interview Question

### What is the difference between currying and partial application?

This is a common follow-up.

### Currying

Transforms:

```js
f(a, b, c);
```

into:

```js
f(a)(b)(c);
```

### Partial application

Some arguments pehle se fix kar deta hai.

Example:

```js
function add(a, b, c) {
  return a + b + c;
}
```

Create:

```text
add5
```

where:

```text
a = 5
```

Then:

```js
add5(2, 3);
```

So:

```text
Currying
→ one argument at a time

Partial application
→ some arguments pre-filled
```

For your current interview preparation, just remember this distinction.

---

# 🔥🔥🔥 Compare All Three

## Deep Clone

```text
Original object
      ↓
completely independent copy
```

Main concept:

```text
recursion
```

---

## Memoization

```text
Input
 ↓
Cache?
 ↓       ↓
YES      NO
 ↓        ↓
return   calculate
cache      ↓
         store
```

Main concept:

```text
cache + closure
```

---

## Currying

```text
f(a, b, c)

      ↓

f(a)
  ↓
f(b)
  ↓
f(c)
  ↓
result
```

Main concept:

```text
closures + functions returning functions
```

---

# 🧠 FINAL CHEAT SHEET

## 🔥 Deep Clone

```js
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObject = {};

  for (const key in value) {
    clonedObject[key] = deepClone(value[key]);
  }

  return clonedObject;
}
```

Memory:

```text
deepClone
→ new object
→ new nested objects
→ recursion
```

---

## 🔥 Memoization

```js
function memoize(callback) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = callback(...args);

    cache.set(key, result);

    return result;
  };
}
```

Memory:

```text
memoize
→ cache previous results
→ same input → return cached result
```

---

## 🔥 Curry

```js
function curry(callback) {
  return function curried(...args) {
    if (args.length >= callback.length) {
      return callback(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}
```

Memory:

```text
curry
→ collect arguments
→ not enough → return function
→ enough → execute
```

---

# ⭐ The Three Most Important Interview Ideas

```text
Deep Clone
→ "Nested data bhi independent banao."

Memoization
→ "Same input ka calculation dobara mat karo."

Currying
→ "Arguments ko gradually collect karo."
```

And one more important connection:

```text
Deep Clone
→ Recursion

Memoization
→ Closure + Cache

Currying
→ Closure + Function returning function
```

Agar interview mein code bhool bhi jao, **ye internal logic explain kar paana** bahut important hai.

<!-- ============================= -->

Bilkul. Ye 4 questions interview mein tricky lag sakte hain, especially bind(), call(), apply() because yahan this ka concept use hota hai.

Pehle ek simple picture:

function composition
→ functions ko chain karna

bind()
→ function ko this ke saath baad mein call karna

call()
→ function ko this ke saath immediately call karna

apply()
→ function ko this ke saath immediately call karna

- arguments array mein dena

# 28. 🔥🔥 Implement Function Composition

## What is Function Composition?

Function composition ka matlab hai:

> **Ek function ka output doosre function ka input banana.**

Suppose:

```js id="1z7y3k"
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}
```

Agar hum:

```text id="8q2m5c"
5
 ↓
double
 ↓
10
 ↓
square
 ↓
100
```

karna chahte hain, toh:

```js id="8z5q1p"
square(double(5));
```

Output:

```text id="0x7c4m"
100
```

Yahi basic function composition hai.

---

# 🔥🔥 Why do we need a composition function?

Instead of manually:

```js id="0v8x6m"
square(double(5));
```

hum ek reusable function bana sakte hain:

```js id="5y2q9n"
const composed = compose(square, double);

console.log(composed(5));
```

Output:

```text id="p7x3m2"
100
```

So:

```text id="c9v4k1"
compose()
→ multiple functions ko connect karta hai
```

---

# 🔥🔥🔥 Implement Your Own `compose()`

A simple implementation:

```js id="m3q8v1"
function compose(...functions) {
  return function (value) {
    return functions.reduceRight((result, fn) => fn(result), value);
  };
}
```

Example:

```js id="t5n2x8"
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const composed = compose(square, double);

console.log(composed(5));
```

Output:

```text id="r8k4z2"
100
```

---

# 🧠 Why `reduceRight()`?

Suppose:

```js id="f7m2q9"
compose(square, double);
```

We want:

```text id="c2x8v4"
double first
    ↓
square second
```

So:

```text id="z4p1n7"
5
 ↓
double
 ↓
10
 ↓
square
 ↓
100
```

But functions were passed as:

```text id="a9k3m6"
square, double
```

Therefore we go from **right to left**.

That's why:

```js id="b8v4y2"
reduceRight();
```

is used.

---

# 🔥🔥🔥 Another Example

```js id="u2m7x9"
function add10(num) {
  return num + 10;
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const result = compose(square, double, add10);

console.log(result(5));
```

Flow:

```text id="q3w8k1"
5
 ↓
add10
 ↓
15
 ↓
double
 ↓
30
 ↓
square
 ↓
900
```

Output:

```text id="d6p2m8"
900
```

---

# 🔥🔥🔥 `compose()` Mental Model

```text id="k8q2v5"
compose(f3, f2, f1)

input
 ↓
f1
 ↓
f2
 ↓
f3
 ↓
output
```

Memory trick:

```text id="z5m1x7"
compose()
→ right to left
```

---

# 🔥🔥🔥 `compose()` vs `pipe()`

This is a common interview follow-up.

### `compose()`

Runs:

```text id="x7q3m9"
right → left
```

Example:

```js id="a4v8k2"
compose(square, double)(5);
```

means:

```text id="p9m2x5"
square(double(5))
```

### `pipe()`

Runs:

```text id="r6k1z8"
left → right
```

Example:

```js id="c5w7n3"
pipe(double, square)(5);
```

means:

```text id="u8q2m4"
square(double(5))
```

So:

```text id="h3v9k1"
compose → right to left

pipe → left to right
```

---

# 29. 🔥🔥 Implement a Custom `bind()`

## First: What is `bind()`?

`bind()` ka simple meaning:

> **Ek function ko ek specific `this` value ke saath permanently attach karke ek new function return karna.**

Example:

```js id="j7m3q8"
const user = {
  name: "Ajay",
};

function greet() {
  console.log("Hello " + this.name);
}
```

Normally:

```js id="z5x1v9"
greet();
```

`this` expected object nahi ho sakta.

But:

```js id="k2q7m4"
const boundGreet = greet.bind(user);

boundGreet();
```

Output:

```text id="w8n3p6"
Hello Ajay
```

Because:

```text id="m4v9x2"
boundGreet
    ↓
this = user
```

---

# 🔥🔥🔥 The important thing about `bind()`

`bind()` function ko **immediately execute nahi karta**.

It returns a **new function**.

Example:

```js id="r3k8y1"
const boundGreet = greet.bind(user);
```

At this point:

```text id="q6m2x9"
greet()
```

has NOT executed.

Later:

```js id="v7p4n8"
boundGreet();
```

then function executes.

Remember:

```text id="x5q1m7"
bind()
→ returns new function
→ executes later
```

---

# 🔥🔥🔥 Implement Custom `bind()`

Basic implementation:

```js id="c8m4z2"
Function.prototype.myBind = function (context) {
  const originalFunction = this;

  return function (...args) {
    return originalFunction.apply(context, args);
  };
};
```

Example:

```js id="n7q3v8"
const user = {
  name: "Ajay",
};

function greet(message) {
  console.log(message + ", " + this.name);
}

const boundGreet = greet.myBind(user);

boundGreet("Hello");
```

Output:

```text id="p4x9m2"
Hello, Ajay
```

---

# 🧠 Understand `this` here

When we do:

```js id="z8m3q5"
greet.myBind(user);
```

Inside:

```js id="h2v7n9"
Function.prototype.myBind = function (context) {
```

`this` refers to:

```text id="a6q1x4"
greet
```

So:

```js id="k3m8p2"
const originalFunction = this;
```

means:

```text id="w5n9r7"
originalFunction = greet
```

Then we return a new function.

---

# 🔥🔥🔥 Why use `apply()` inside our `bind()`?

This:

```js id="b7q4x1"
originalFunction.apply(context, args);
```

means:

```text id="m8p2z5"
call originalFunction
with this = context
and arguments = args
```

So:

```js id="q4n7v3"
boundGreet("Hello");
```

becomes conceptually:

```js id="s9x2m6"
greet.apply(user, ["Hello"]);
```

which means:

```text id="r5k8q1"
this = user
message = "Hello"
```

---

# 🔥🔥🔥 `bind()` Can Also Pre-fill Arguments

This is important.

Suppose:

```js id="u3m7x8"
function multiply(a, b) {
  return a * b;
}
```

We can:

```js id="y6q2p4"
const multiplyBy2 = multiply.bind(null, 2);
```

Then:

```js id="h8m3v9"
console.log(multiplyBy2(5));
```

Output:

```text id="j4x7n2"
10
```

Because:

```text id="a8q5m1"
a = 2
b = 5

2 × 5 = 10
```

So `bind()` can do two things:

```text id="f7p2k9"
1. Fix `this`

2. Pre-fill arguments
```

---

# 🔥🔥🔥 Better Custom `bind()`

```js id="v3m8q1"
Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFunction = this;

  return function (...newArgs) {
    return originalFunction.apply(context, [...boundArgs, ...newArgs]);
  };
};
```

Example:

```js id="c6x2m7"
function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = multiply.myBind(null, 2);

console.log(multiplyBy2(3, 4));
```

Output:

```text id="n8q4v1"
24
```

Because:

```text id="z5m2k7"
boundArgs = [2]

newArgs = [3, 4]

combined = [2, 3, 4]

2 × 3 × 4 = 24
```

---

# 🧠 `bind()` Mental Model

```text id="q7m3x9"
function
   +
context
   +
optional arguments
   ↓
bind()
   ↓
new function
   ↓
execute later
```

Memory trick:

```text id="c4v8n2"
bind()
→ "Prepare now, execute later."
```

---

# 30. 🔥 Implement a Custom `call()`

## What is `call()`?

`call()` ka meaning:

> **Function ko immediately execute karo aur `this` ko explicitly set karo.**

Example:

```js id="m2q7x5"
const user = {
  name: "Ajay",
};

function greet(message) {
  console.log(message + ", " + this.name);
}

greet.call(user, "Hello");
```

Output:

```text id="p8v3k1"
Hello, Ajay
```

Notice:

```text id="h4m9x2"
call()
→ execute immediately
```

---

# 🔥🔥 `bind()` vs `call()`

Very important:

```text id="z7q2m5"
bind()
→ returns a new function
→ execute later

call()
→ immediately executes function
```

Example:

```js id="a5n8v3"
const bound = greet.bind(user);
```

Nothing executes yet.

But:

```js id="k3x7m1"
greet.call(user);
```

executes immediately.

---

# 🔥🔥🔥 How can we implement `call()`?

JavaScript mein function ko kisi object ka temporary method bana sakte hain.

Suppose:

```js id="r8m2q6"
const user = {
  name: "Ajay",
};

function greet() {
  console.log(this.name);
}
```

Normally:

```text id="y4p7n1"
greet()
```

But we can temporarily do:

```js id="v6x3m9"
user.greet = greet;
```

Now:

```js id="j2q8k5"
user.greet();
```

Inside `greet()`:

```text id="c9m4x7"
this = user
```

because `user.greet()` is a method call.

Then we remove it.

---

# 🔥🔥🔥 Custom `call()`

```js id="n5q2v8"
Function.prototype.myCall = function (context, ...args) {
  const key = Symbol();

  context[key] = this;

  const result = context[key](...args);

  delete context[key];

  return result;
};
```

Example:

```js id="x7m3p9"
const user = {
  name: "Ajay",
};

function greet(message) {
  return message + ", " + this.name;
}

const result = greet.myCall(user, "Hello");

console.log(result);
```

Output:

```text id="f2q8n5"
Hello, Ajay
```

---

# 🧠 Understand this implementation

## Step 1

```js id="w8m2x4"
const key = Symbol();
```

We create a unique property name.

Why?

Because we don't want to accidentally overwrite an existing property.

---

# Step 2

```js id="q3v7n9"
context[key] = this;
```

Here:

```text id="m5x1k8"
this = greet
```

So effectively:

```text id="a9q4p2"
user[someUniqueKey] = greet
```

Now `greet` temporarily becomes a method of `user`.

---

# Step 3

```js id="k7m3x5"
const result = context[key](...args);
```

This is the important part.

Because we're calling:

```js id="v2q8n6"
context[key]();
```

the `this` inside the function becomes:

```text id="j4x9m1"
context
```

So:

```text id="d7p3k8"
this = user
```

---

# Step 4

```js id="w5m2q7"
delete context[key];
```

We remove the temporary property.

So the original object remains clean.

---

# Step 5

```js id="n8q4x3"
return result;
```

Return whatever the original function returned.

---

# 🔥🔥🔥 Example with Arguments

```js id="x3m7p1"
const user = {
  name: "Ajay",
};

function introduce(age, city) {
  return `${this.name} is ${age} years old and lives in ${city}`;
}

console.log(introduce.myCall(user, 25, "Delhi"));
```

Output:

```text id="p6k2v9"
Ajay is 25 years old and lives in Delhi
```

Arguments:

```text id="c8m3q5"
25
Delhi
```

are passed individually.

---

# 31. 🔥 Implement a Custom `apply()`

## What is `apply()`?

`apply()` almost exactly `call()` ki tarah hai.

Difference:

```text id="m7q2x8"
call()
→ arguments individually

apply()
→ arguments as an array
```

Example:

```js id="j4n8p2"
function introduce(age, city) {
  return `${this.name} is ${age} years old and lives in ${city}`;
}

const user = {
  name: "Ajay",
};

introduce.call(user, 25, "Delhi");

introduce.apply(user, [25, "Delhi"]);
```

Both produce:

```text id="q8m3v5"
Ajay is 25 years old and lives in Delhi
```

---

# 🔥🔥🔥 Implement Custom `apply()`

```js id="x7p2m9"
Function.prototype.myApply = function (context, args) {
  const key = Symbol();

  context[key] = this;

  const result = context[key](...(args || []));

  delete context[key];

  return result;
};
```

Example:

```js id="n4q8v2"
const user = {
  name: "Ajay",
};

function greet(message, age) {
  return `${message}, ${this.name}, age ${age}`;
}

const result = greet.myApply(user, ["Hello", 25]);

console.log(result);
```

Output:

```text id="k6m3x8"
Hello, Ajay, age 25
```

---

# 🧠 Understand the Important Difference

### `call()`

```js id="p7x3m1"
greet.myCall(user, "Hello", 25);
```

Arguments:

```text id="a5q8n2"
"Hello"
25
```

---

### `apply()`

```js id="v4m9k2"
greet.myApply(user, ["Hello", 25]);
```

Arguments:

```text id="x8p2q6"
["Hello", 25]
```

That's the main difference.

---

# 🔥🔥🔥 Call vs Apply vs Bind

This table is VERY important for interviews.

| Method    | Executes immediately? | Returns         | Arguments               |
| --------- | --------------------- | --------------- | ----------------------- |
| `call()`  | Yes                   | Function result | Individual              |
| `apply()` | Yes                   | Function result | Array                   |
| `bind()`  | No                    | New function    | Individual / pre-filled |

Memory:

```text id="q2m8v5"
call()
→ now + individual args

apply()
→ now + array args

bind()
→ later + returns function
```

---

# 🔥🔥🔥 Same Example with All Three

```js id="m8x3q7"
const user = {
  name: "Ajay",
};

function greet(message, age) {
  console.log(message + ", " + this.name + ", age " + age);
}
```

### `call()`

```js id="c7p2n9"
greet.call(user, "Hello", 25);
```

Immediately executes.

---

### `apply()`

```js id="v5m8x1"
greet.apply(user, ["Hello", 25]);
```

Immediately executes.

---

### `bind()`

```js id="z3q7m2"
const boundGreet = greet.bind(user, "Hello", 25);
```

Nothing executes yet.

Then:

```js id="f8n4x6"
boundGreet();
```

executes.

---

# 🔥🔥🔥 Why do we use `Symbol()` in custom call/apply?

Suppose we did:

```js id="y6m2q8"
context.temp = this;
```

Problem:

What if the object already has:

```js id="p4x8n1"
temp;
```

property?

We would overwrite it.

`Symbol()` creates a unique property:

```js id="m7q3v9"
const key = Symbol();
```

So:

```text id="r5n8x2"
context[uniqueSymbol]
```

is extremely unlikely to conflict with existing properties.

---

# 🔥🔥🔥 Important Edge Case

What if context is `null` or `undefined`?

A simplified implementation may assume a valid object:

```js id="k8m3q5"
context[key] = this;
```

But a more complete polyfill needs to handle JavaScript's actual `this` rules, including:

```text id="p2v7x4"
null
undefined
primitive values
strict mode
```

For interview purposes, first master the core mechanism:

```text id="x4q9m1"
temporary method
→ execute
→ delete temporary method
```

---

# 🔥🔥🔥 Function Composition Example

Let's connect composition with the functions you already learned.

```js id="z6m2p8"
function add10(num) {
  return num + 10;
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}
```

Compose:

```js id="q8x3n5"
const process = compose(square, double, add10);
```

Then:

```js id="m4v7k2"
console.log(process(5));
```

Flow:

```text id="a8p3q6"
5
 ↓
add10
 ↓
15
 ↓
double
 ↓
30
 ↓
square
 ↓
900
```

Output:

```text id="w7n2x4"
900
```

---

# 🔥🔥🔥 Final Interview Implementations

## 1. `compose()`

```js id="r5m8q2"
function compose(...functions) {
  return function (value) {
    return functions.reduceRight((result, fn) => fn(result), value);
  };
}
```

Remember:

```text id="x3p7n9"
compose → right to left
```

---

## 2. Custom `bind()`

```js id="k8m4v1"
Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFunction = this;

  return function (...newArgs) {
    return originalFunction.apply(context, [...boundArgs, ...newArgs]);
  };
};
```

Remember:

```text id="q6x2m8"
bind
→ returns new function
→ executes later
```

---

## 3. Custom `call()`

```js id="p4n7x3"
Function.prototype.myCall = function (context, ...args) {
  const key = Symbol();

  context[key] = this;

  const result = context[key](...args);

  delete context[key];

  return result;
};
```

Remember:

```text id="z8m3q5"
call
→ executes immediately
→ arguments individually
```

---

## 4. Custom `apply()`

```js id="v2q9m6"
Function.prototype.myApply = function (context, args) {
  const key = Symbol();

  context[key] = this;

  const result = context[key](...(args || []));

  delete context[key];

  return result;
};
```

Remember:

```text id="j5x8p2"
apply
→ executes immediately
→ arguments as array
```

---

# 🧠 FINAL CHEAT SHEET

```text id="m7q3v9"
compose()
→ combine functions
→ right to left

bind()
→ fix this
→ returns new function
→ execute later

call()
→ fix this
→ execute immediately
→ individual arguments

apply()
→ fix this
→ execute immediately
→ array of arguments
```

### ⭐ One-line memory trick

```text id="x4p8n2"
compose → chain

bind    → later

call    → now + args

apply   → now + array
```

And the most important connection:

```text id="q6m2v8"
bind / call / apply
        ↓
       this
        ↓
function execution context
```

Agar interviewer custom `call()`/`apply()` pooche, **temporary method + `this` + `Symbol()` + delete** ka logic explain kar paana code yaad rakhne se zyada important hai.
