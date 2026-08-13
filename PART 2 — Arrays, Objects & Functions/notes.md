## 36. Arrays

### Meaning

> **An array is a data structure used to store multiple values in a single variable.**

An array can store multiple values in an **ordered collection**.

Each value has a **position called an index**.

Array indexing starts from **`0`**, so the first element is at index `0`, the second at index `1`, and so on.

### Example

```js
const numbers = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers[3]); // 40
```

Here:

```text
Index:    0    1    2    3
Value:   10   20   30   40
```

So:

```js
numbers[0]; // 10
numbers[2]; // 30
```

### How It Works

When we create:

```js
const numbers = [10, 20, 30];
```

JavaScript stores the array as an object-like collection of elements.

Each element can be accessed using its index:

```js
numbers[0];
numbers[1];
numbers[2];
```

The index tells JavaScript **which element we want to access**.

### Changing an Array Element

Array elements can be changed after the array is created.

```js
const numbers = [10, 20, 30];

numbers[1] = 50;

console.log(numbers);
```

Output:

```text
[10, 50, 30]
```

The element at index `1` was changed from `20` to `50`.

### Array Can Store Different Types

JavaScript arrays can contain values of different data types.

```js
const data = [10, "Hello", true, null, { name: "Ajay" }];

console.log(data[0]); // 10
console.log(data[1]); // "Hello"
console.log(data[2]); // true
```

However, in real applications, arrays usually contain values of the same logical type because that makes the code easier to understand and work with.

For example:

```js
const ages = [20, 25, 30, 35];
```

is usually better than:

```js
const data = [20, "Ajay", true, null];
```

when we are specifically working with ages.

### Array Length

The `length` property tells us the number of elements in an array.

```js
const numbers = [10, 20, 30, 40];

console.log(numbers.length); // 4
```

Important:

> **`length` gives the number of elements, while the last index is `length - 1`.**

For example:

```js
const numbers = [10, 20, 30, 40];

console.log(numbers.length); // 4
console.log(numbers[3]); // 40
console.log(numbers[4]); // undefined
```

Because:

```text
length = 4
last index = 4 - 1 = 3
```

### Adding Elements

We can add an element using methods such as `push()`.

```js
const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40]
```

`push()` adds the element at the **end** of the array.

### Removing Elements

We can remove the last element using `pop()`.

```js
const numbers = [10, 20, 30];

numbers.pop();

console.log(numbers);
```

Output:

```text
[10, 20]
```

`pop()` removes the **last element**.

### Important Point

Arrays are **mutable**.

That means an existing array can be changed after it is created.

```js
const numbers = [10, 20, 30];

numbers[0] = 100;

console.log(numbers);
```

Output:

```text
[100, 20, 30]
```

Notice that we used `const`, but we were still able to change an element.

This is because `const` prevents the variable from being **reassigned**. It does not make the array immutable.

For example:

```js
const numbers = [10, 20, 30];

numbers[0] = 100; // allowed

numbers = [1, 2, 3]; // Error
```

### Arrays Are Objects

In JavaScript, an array is a special type of **object**.

```js
const numbers = [10, 20, 30];

console.log(typeof numbers);
```

Output:

```text
object
```

To specifically check whether a value is an array, use:

```js
Array.isArray(numbers);
```

Example:

```js
const numbers = [10, 20, 30];

console.log(Array.isArray(numbers)); // true
```

This is important because:

```js
typeof [];
```

returns:

```text
"object"
```

So `typeof` alone cannot tell us whether a value is an array.

### Important Point

> **An array is a special object designed for storing ordered elements.**

Arrays have features that make working with ordered collections easier, such as:

```js
push();
pop();
slice();
splice();
map();
filter();
reduce();
find();
```

These methods will be covered separately.

### Example — Basic Array Operations

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple

fruits[1] = "Orange";

fruits.push("Grapes");

console.log(fruits);
console.log(fruits.length);
```

Output:

```text
Apple
["Apple", "Orange", "Mango", "Grapes"]
4
```

What happened:

```text
1. Array was created with 3 elements.
2. fruits[0] accessed "Apple".
3. fruits[1] was changed from "Banana" to "Orange".
4. push() added "Grapes" at the end.
5. length became 4.
```

### Common Interview Questions

**Q: What is an array in JavaScript?**

> **An array is a data structure used to store multiple values in an ordered collection. Each element can be accessed using its index, and indexing starts from `0`.**

**Q: Does JavaScript array indexing start from 0?**

> **Yes. The first element is at index `0`, so the last index is always `length - 1`.**

**Q: Are arrays mutable in JavaScript?**

> **Yes. Array elements can be changed, added, or removed after the array is created.**

**Q: Is an array an object in JavaScript?**

> **Yes. An array is a special type of object designed to store ordered elements.**

**Q: Why does `typeof []` return `"object"`?**

> **Because arrays are objects in JavaScript. To specifically check for an array, we use `Array.isArray()`.**

### Remember

> **Array = ordered collection of values + index starts from `0`.**

### Interview Answer

> **An array is a data structure used to store multiple values in an ordered collection. Each element has an index starting from `0`, and we can access elements using that index. JavaScript arrays are mutable and are a special type of object.**

<!-- ===================== -->

## 37. Objects

### Meaning

> **An object is a data structure used to store related data and behavior using key-value pairs.**

An object stores data in the form of:

```text
key → value
```

For example, a user has a name, age, and email. These related values can be stored inside one object.

### Example

```js
const user = {
  name: "Ajay",
  age: 25,
  email: "ajay@example.com",
};

console.log(user);
```

The object contains three properties:

```text
name  → "Ajay"
age   → 25
email → "ajay@example.com"
```

Here, `name`, `age`, and `email` are **keys (property names)**, and their corresponding values are the **property values**.

### Accessing Object Properties

We can access an object's property using **dot notation**.

```js
const user = {
  name: "Ajay",
  age: 25,
};

console.log(user.name); // Ajay
console.log(user.age); // 25
```

We can also use **bracket notation**.

```js
console.log(user["name"]); // Ajay
console.log(user["age"]); // 25
```

Both access the same property.

### Dot Notation vs Bracket Notation

Dot notation:

```js
user.name;
```

Bracket notation:

```js
user["name"];
```

Bracket notation is especially useful when the property name is stored in a variable.

```js
const user = {
  name: "Ajay",
  age: 25,
};

const key = "name";

console.log(user[key]); // Ajay
```

Here JavaScript evaluates `key` first:

```text
key → "name"
```

So:

```js
user[key];
```

becomes:

```js
user["name"];
```

### Important Difference

Consider:

```js
const key = "name";

console.log(user[key]); // Ajay
console.log(user.key); // undefined
```

Why?

With bracket notation:

```js
user[key];
```

JavaScript uses the **value of `key`**.

With dot notation:

```js
user.key;
```

JavaScript looks for a property literally named `"key"`.

### Adding Properties

We can add a new property to an existing object.

```js
const user = {
  name: "Ajay",
};

user.age = 25;

console.log(user);
```

Output:

```text
{
  name: "Ajay",
  age: 25
}
```

We can also use bracket notation:

```js
user["email"] = "ajay@example.com";
```

### Changing Properties

Object properties can be changed after the object is created.

```js
const user = {
  name: "Ajay",
  age: 25,
};

user.age = 26;

console.log(user.age); // 26
```

The property `age` now contains `26`.

### Removing Properties

The `delete` operator can remove a property from an object.

```js
const user = {
  name: "Ajay",
  age: 25,
};

delete user.age;

console.log(user);
```

Output:

```text
{
  name: "Ajay"
}
```

### Objects Can Store Different Types

An object property can contain almost any JavaScript value.

```js
const user = {
  name: "Ajay",
  age: 25,
  isActive: true,
  skills: ["JavaScript", "Node.js"],
  address: {
    city: "Delhi",
  },
};
```

Here:

```text
name     → string
age      → number
isActive → boolean
skills   → array
address  → object
```

Objects can also contain functions.

```js
const user = {
  name: "Ajay",

  greet: function () {
    console.log("Hello");
  },
};

user.greet();
```

A function stored inside an object is commonly called a **method**.

### Nested Objects

An object can contain another object as a property.

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi",
    country: "India",
  },
};

console.log(user.address.city); // Delhi
```

Here:

```text
user
 └── address
      ├── city
      └── country
```

To access `city`:

```js
user.address.city;
```

### Objects Are Mutable

Objects are mutable, which means their properties can be changed after the object is created.

```js
const user = {
  name: "Ajay",
};

user.name = "Rahul";

console.log(user.name); // Rahul
```

Notice that we used `const`.

`const` does **not** make the object immutable.

It prevents the variable from being reassigned to another object.

```js
const user = {
  name: "Ajay",
};

user.name = "Rahul"; // allowed

user = {
  name: "Amit",
}; // Error
```

Simple mental model:

```text
const → cannot change what the variable refers to
object → its properties can still be changed
```

### Objects Are Reference Values

This is an important interview concept.

Consider:

```js
const user1 = {
  name: "Ajay",
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
```

Why did `user1.name` also change?

Because `user1` and `user2` refer to the **same object**.

Mental model:

```text
user1 ──┐
        ├──> { name: "Ajay" }
user2 ──┘
```

After:

```js
user2.name = "Rahul";
```

the same object becomes:

```text
{ name: "Rahul" }
```

So both variables see the change.

### Object Comparison

Two separate objects are not equal just because they contain the same properties.

```js
const user1 = {
  name: "Ajay",
};

const user2 = {
  name: "Ajay",
};

console.log(user1 === user2); // false
```

Why?

They are two different objects.

```text
user1 → Object A
user2 → Object B
```

Even though the contents look the same, they are different object references.

But:

```js
const user1 = {
  name: "Ajay",
};

const user2 = user1;

console.log(user1 === user2); // true
```

Both variables refer to the same object.

### Object Keys

Object property names are normally strings or symbols.

For example:

```js
const user = {
  name: "Ajay",
  age: 25,
};
```

`name` and `age` are property keys.

Even when we write a numeric-looking key:

```js
const data = {
  1: "one",
};

console.log(data[1]); // one
console.log(data["1"]); // one
```

The property key is treated as a string in this normal object case.

### Important Point

> **Objects store data using properties, and each property has a key and a value.**

A value can itself be another object, array, function, or primitive value.

### Common Interview Questions

**Q: What is an object in JavaScript?**

> **An object is a data structure that stores related data and behavior using key-value pairs. Its values are accessed using property names.**

**Q: How can you access an object property?**

> **We can use dot notation or bracket notation. For example, `user.name` and `user["name"]` both access the `name` property.**

**Q: When should you use bracket notation?**

> **Bracket notation is useful when the property name is stored in a variable or when the property name cannot be conveniently accessed using dot notation.**

**Q: Are JavaScript objects mutable?**

> **Yes. Object properties can normally be added, changed, or deleted after the object is created.**

**Q: Why can we modify a `const` object?**

> **Because `const` prevents reassignment of the variable, not modification of the object it refers to.**

**Q: Why are two objects with the same data not equal with `===`?**

> **Because objects are compared by reference. Two separately created objects are different objects, even if their properties contain the same values.**

### Remember

> **Object = related data stored as key-value pairs.**

### Interview Answer

> **An object is a data structure used to store related data and behavior using key-value pairs. We access its properties using dot or bracket notation. Objects are mutable, and object variables hold a reference to the object, so two variables can refer to the same object.**

<!-- ==========================  -->

## 38. Object Properties

### Meaning

> **An object property is a named value stored inside an object.**

A property has a **key (property name)** and a **value**.

```js
const user = {
  name: "Ajay",
  age: 25,
};
```

Here:

```text
name → "Ajay"
age  → 25
```

`name` and `age` are **properties** of the `user` object.

### Property Key and Property Value

Consider:

```js
const user = {
  name: "Ajay",
  age: 25,
};
```

For the property:

```js
name: "Ajay";
```

```text
name  → property key
"Ajay" → property value
```

The value can be any valid JavaScript value.

```js
const user = {
  name: "Ajay",
  age: 25,
  isActive: true,
  skills: ["JavaScript", "Node.js"],
  address: {
    city: "Delhi",
  },
};
```

So object properties can contain:

- string
- number
- boolean
- `null`
- `undefined`
- array
- object
- function

### Accessing Properties

There are two main ways to access object properties.

#### 1. Dot Notation

```js
const user = {
  name: "Ajay",
  age: 25,
};

console.log(user.name); // Ajay
console.log(user.age); // 25
```

Here the property name is written directly after `.`.

```text
user.name
     ↑
   property
```

#### 2. Bracket Notation

```js
console.log(user["name"]); // Ajay
console.log(user["age"]); // 25
```

Here the property name is written inside `[]`.

### Dot vs Bracket Notation

The most important difference appears when the property name comes from a variable.

```js
const user = {
  name: "Ajay",
  age: 25,
};

const key = "name";

console.log(user[key]); // Ajay
```

JavaScript first gets the value of `key`:

```text
key → "name"
```

So:

```js
user[key];
```

accesses:

```js
user["name"];
```

But:

```js
user.key;
```

looks for a property literally named `"key"`.

```js
console.log(user.key); // undefined
```

### Important Point

> **Dot notation uses the property name written directly. Bracket notation evaluates the expression inside `[]` and uses its result as the property key.**

This is a very common interview question.

### Property Names With Spaces

Some property names cannot be conveniently accessed using dot notation.

For example:

```js
const user = {
  "first name": "Ajay",
};

console.log(user["first name"]); // Ajay
```

This cannot be written as:

```js
user.first name
```

because that is invalid JavaScript syntax.

So bracket notation is required.

### Adding a Property

We can add a new property to an existing object.

```js
const user = {
  name: "Ajay",
};

user.age = 25;

console.log(user);
```

Output:

```text
{
  name: "Ajay",
  age: 25
}
```

We can also use bracket notation:

```js
user["email"] = "ajay@example.com";
```

### Changing a Property

If a property already exists, assigning a new value changes it.

```js
const user = {
  name: "Ajay",
  age: 25,
};

user.age = 26;

console.log(user.age); // 26
```

The property still exists, but its value has changed.

### Deleting a Property

The `delete` operator removes a property from an object.

```js
const user = {
  name: "Ajay",
  age: 25,
};

delete user.age;

console.log(user);
```

Output:

```text
{
  name: "Ajay"
}
```

After deletion:

```js
console.log(user.age); // undefined
```

### Checking Whether a Property Exists

There are several ways to check whether an object has a property.

One common way is the `in` operator.

```js
const user = {
  name: "Ajay",
  age: 25,
};

console.log("name" in user); // true
console.log("email" in user); // false
```

The `in` operator checks whether the property exists on the object or anywhere in its **prototype chain**.

This detail becomes important when learning prototypes.

### `hasOwn` / Own Properties

Sometimes we want to check only whether the property belongs directly to the object itself.

```js
const user = {
  name: "Ajay",
};

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age")); // false
```

`Object.hasOwn()` checks whether the object has that property as its **own property**.

### Property With `undefined`

An object can have a property whose value is `undefined`.

```js
const user = {
  name: "Ajay",
  age: undefined,
};
```

Here `age` exists:

```js
console.log("age" in user); // true
```

But its value is:

```js
console.log(user.age); // undefined
```

This is different from a property that does not exist:

```js
const user = {
  name: "Ajay",
};

console.log(user.age); // undefined
```

In both cases, accessing the property gives `undefined`, but the property itself exists only in the first case.

This distinction is important.

```js
const user1 = {
  age: undefined,
};

const user2 = {};

console.log(user1.age); // undefined
console.log(user2.age); // undefined

console.log("age" in user1); // true
console.log("age" in user2); // false
```

### Computed Property Names

JavaScript allows us to create an object property using the value of an expression.

```js
const key = "name";

const user = {
  [key]: "Ajay",
};

console.log(user);
```

Output:

```text
{
  name: "Ajay"
}
```

The `[]` tells JavaScript to evaluate `key`.

```text
key → "name"

[key] → "name"

{name: "Ajay"}
```

This is called a **computed property name**.

### Property Shorthand

When the variable name and property name are the same, JavaScript allows a shorter syntax.

Instead of:

```js
const name = "Ajay";
const age = 25;

const user = {
  name: name,
  age: age,
};
```

We can write:

```js
const name = "Ajay";
const age = 25;

const user = {
  name,
  age,
};
```

JavaScript understands:

```js
{
  name: name,
  age: age
}
```

This is called **property shorthand**.

### Method Property

An object property can contain a function.

```js
const user = {
  name: "Ajay",

  greet() {
    console.log("Hello");
  },
};

user.greet();
```

Here `greet` is a property whose value is a function.

When a function is stored as an object property and represents an action of that object, we commonly call it a **method**.

### Nested Properties

An object property can contain another object.

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi",
    country: "India",
  },
};

console.log(user.address.city); // Delhi
```

The access happens step by step:

```text
user
 ↓
address
 ↓
city
 ↓
"Delhi"
```

So:

```js
user.address.city;
```

means:

1. Get the `address` property from `user`.
2. Get the `city` property from that `address` object.

### Object Properties Are Dynamic

JavaScript objects do not require all properties to be defined when the object is created.

We can add or remove properties later.

```js
const user = {
  name: "Ajay",
};

user.age = 25;
user.email = "ajay@example.com";

delete user.age;

console.log(user);
```

Final object:

```text
{
  name: "Ajay",
  email: "ajay@example.com"
}
```

### Important Interview Distinction

There is an important difference between:

```js
user.name;
```

and:

```js
user["name"];
```

For a normal fixed property name, both access the same property.

But bracket notation can use a dynamic key:

```js
const key = "name";

user[key];
```

This is extremely useful when the property name is not known until runtime.

### Example — Dynamic Property Access

```js
const user = {
  name: "Ajay",
  age: 25,
  city: "Delhi",
};

const property = "city";

console.log(user[property]); // Delhi
```

The value of `property` is:

```text
"city"
```

Therefore JavaScript accesses:

```js
user["city"];
```

and returns:

```text
"Delhi"
```

### Remember

> **Object property = key + value. Dot notation uses a fixed property name, while bracket notation can use a dynamic key.**

### Interview Answer

> **An object property is a named value stored inside an object. We can access properties using dot notation or bracket notation. Bracket notation is especially useful when the property key is dynamic or contains characters that cannot be used with dot notation.**

<!-- ======================= -->

## 39. Mutability

### Meaning

> **Mutability means whether a value can be changed after it is created.**

If a value can be changed, it is **mutable**.

If a value cannot be changed after it is created, it is **immutable**.

### Example

Objects and arrays are mutable.

```js
const user = {
  name: "Ajay",
};

user.name = "Rahul";

console.log(user.name); // Rahul
```

The object was created with:

```js
name: "Ajay";
```

and later its property was changed to:

```js
name: "Rahul";
```

So objects are **mutable**.

Arrays are also mutable:

```js
const numbers = [10, 20, 30];

numbers[0] = 100;

console.log(numbers); // [100, 20, 30]
```

The array itself was changed.

### Immutable Values

Primitive values such as strings and numbers are immutable.

For example:

```js
let name = "Ajay";

name[0] = "R";

console.log(name); // Ajay
```

The string was not changed.

If we write:

```js
let name = "Ajay";

name = "Rahul";
```

we are not changing `"Ajay"`.

We are assigning a **new value** to the variable.

### Important Difference

This is an important distinction:

```js
const user = {
  name: "Ajay",
};

user.name = "Rahul"; // allowed
```

But:

```js
const user = {
  name: "Ajay",
};

user = {
  name: "Rahul",
}; // Error
```

Why?

`const` prevents **reassignment of the variable**.

It does not make the object immutable.

So:

> **`const` does not mean immutable. It means the variable cannot be reassigned.**

### Mutable vs Immutable

| Mutable                        | Immutable                                    |
| ------------------------------ | -------------------------------------------- |
| Can be changed after creation  | Cannot be changed after creation             |
| Objects                        | Primitive values                             |
| Arrays                         | Strings                                      |
| Example: `user.name = "Rahul"` | Example: string characters cannot be changed |

### Remember

> **Mutable = the existing value can be changed. Immutable = the existing value cannot be changed.**

### Interview Answer

> **Mutability means whether a value can be changed after it is created. Objects and arrays are mutable, while primitive values such as strings and numbers are immutable. Also, `const` prevents reassignment, but it does not make an object or array immutable.**

<!-- =======================  -->

## 40. Array Methods

### Meaning

> **Array methods are built-in functions that JavaScript provides to work with arrays.**

They help us perform common operations such as:

- adding or removing elements
- searching for elements
- looping through elements
- creating a new array
- filtering elements
- calculating a result
- sorting elements

### Example

```js
const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40]
```

Here, `push()` is an **array method**.

We call it using:

```js
numbers.push(40);
```

### Common Array Methods

Some important array methods are:

| Method       | Main purpose                                 |
| ------------ | -------------------------------------------- |
| `push()`     | Adds element at the end                      |
| `pop()`      | Removes element from the end                 |
| `shift()`    | Removes element from the beginning           |
| `unshift()`  | Adds element at the beginning                |
| `slice()`    | Returns a part of an array                   |
| `splice()`   | Adds, removes, or replaces elements          |
| `includes()` | Checks whether a value exists                |
| `indexOf()`  | Finds the index of a value                   |
| `forEach()`  | Runs a function for each element             |
| `map()`      | Creates a new array by transforming elements |
| `filter()`   | Creates a new array with matching elements   |
| `reduce()`   | Reduces array elements to one result         |
| `find()`     | Returns the first matching element           |
| `some()`     | Checks whether at least one element matches  |
| `every()`    | Checks whether all elements match            |
| `sort()`     | Sorts the array                              |

### Methods Can Behave Differently

An important point is that **not every array method changes the original array**.

For example, `push()` changes the original array:

```js
const numbers = [10, 20];

numbers.push(30);

console.log(numbers); // [10, 20, 30]
```

But `map()` creates a new array:

```js
const numbers = [10, 20, 30];

const doubled = numbers.map((number) => number * 2);

console.log(numbers); // [10, 20, 30]
console.log(doubled); // [20, 40, 60]
```

So we should always know whether a method **mutates the original array** or returns a **new result**.

### Mutating vs Non-Mutating Methods

Some commonly used methods that **change the original array**:

```text
push()
pop()
shift()
unshift()
splice()
sort()
```

Some commonly used methods that **do not change the original array**:

```text
slice()
includes()
indexOf()
map()
filter()
find()
some()
every()
```

> **Important:** `reduce()` also does not change the original array itself; it returns a calculated result.

### Example — Multiple Array Methods

```js
const numbers = [10, 20, 30, 40];

console.log(numbers.includes(20)); // true

const doubled = numbers.map((number) => number * 2);

const greaterThan20 = numbers.filter((number) => number > 20);

console.log(doubled); // [20, 40, 60, 80]
console.log(greaterThan20); // [30, 40]
```

Here:

```text
includes() → checks for a value
map()      → transforms every element
filter()   → keeps elements that match a condition
```

The original array remains unchanged:

```js
console.log(numbers); // [10, 20, 30, 40]
```

### Important Point

> **Array methods are built-in methods for performing common operations on arrays. Some methods modify the original array, while others return a new result without modifying it.**

Knowing this difference is important in interviews because an interviewer may ask:

> **"Does this method mutate the original array?"**

### Remember

> **Array methods = ready-made functions for working with array elements. Always check whether the method changes the original array or returns a new result.**

### Interview Answer

> **Array methods are built-in JavaScript methods used to perform common operations on arrays, such as adding, removing, searching, transforming, and filtering elements. Some methods like `push()` and `splice()` modify the original array, while methods like `map()` and `filter()` return a new array.**

<!-- =======================  -->

## 41. `slice()` vs `splice()`

### Meaning

> **`slice()` returns a part of an array without changing the original array, while `splice()` adds, removes, or replaces elements and changes the original array.**

This is the main difference to remember:

```text
slice  → copy a part → original array unchanged
splice → change array → original array changed
```

### `slice()`

> **`slice()` returns a new array containing elements from the given start index up to, but not including, the end index.**

Syntax:

```js
array.slice(start, end);
```

`start` is included, but `end` is excluded.

### Example

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50]
```

Step by step:

```text
Index:    0   1   2   3   4
Value:   10  20  30  40  50
              ↑       ↑
            start     end
```

`slice(1, 4)` takes indexes:

```text
1, 2, 3
```

It stops before index `4`.

So the result is:

```text
[20, 30, 40]
```

### Important Point

> **`slice()` does not modify the original array. It returns a new array.**

```js
const numbers = [10, 20, 30, 40];

const result = numbers.slice(1, 3);

console.log(numbers); // [10, 20, 30, 40]
console.log(result); // [20, 30]
```

### `slice()` Without `end`

If `end` is not provided, `slice()` takes elements from `start` until the end of the array.

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(2);

console.log(result); // [30, 40, 50]
```

### Negative Index With `slice()`

Negative indexes count from the end.

```js
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(-2)); // [40, 50]
```

Here:

```text
-1 → 50
-2 → 40
```

---

### `splice()`

> **`splice()` changes the original array by adding, removing, or replacing elements.**

Syntax:

```js
array.splice(start, deleteCount, item1, item2, ...);
```

The important arguments are:

```text
start        → where to start changing the array
deleteCount  → how many elements to remove
items        → elements to add
```

### Example — Remove Elements

```js
const numbers = [10, 20, 30, 40, 50];

const removed = numbers.splice(1, 2);

console.log(removed); // [20, 30]
console.log(numbers); // [10, 40, 50]
```

What happened:

```text
Original:
[10, 20, 30, 40, 50]

Start at index 1:
     ↓
[10, 20, 30, 40, 50]

Remove 2 elements:
     ↓   ↓
   20   30

Remaining:
[10, 40, 50]
```

Notice that `splice()` **changes the original array**.

Also, `splice()` returns the elements that were removed.

### Example — Add Elements

`splice()` can also add elements.

```js
const numbers = [10, 20, 40, 50];

numbers.splice(2, 0, 30);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40, 50]
```

Here:

```js
splice(2, 0, 30);
```

means:

```text
start at index 2
remove 0 elements
add 30
```

### Example — Replace Elements

`splice()` can remove and add elements at the same position.

```js
const numbers = [10, 20, 30, 40];

numbers.splice(1, 1, 25);

console.log(numbers);
```

Output:

```text
[10, 25, 30, 40]
```

What happened:

```text
20 was removed
25 was added at the same position
```

So:

```js
splice(1, 1, 25);
```

means:

```text
start at index 1
remove 1 element
add 25
```

### Main Difference

| `slice()`                      | `splice()`                     |
| ------------------------------ | ------------------------------ |
| Returns a portion of an array  | Adds/removes/replaces elements |
| Does not change original array | Changes original array         |
| `end` index is excluded        | Uses `deleteCount`             |
| Returns a new array            | Returns removed elements       |
| Good for copying/extracting    | Good for modifying             |

### Example — Side by Side

```js
const numbers = [10, 20, 30, 40, 50];

const part = numbers.slice(1, 4);

console.log(part); // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50]
```

`slice()` leaves the original array unchanged.

Now:

```js
const numbers = [10, 20, 30, 40, 50];

const removed = numbers.splice(1, 2);

console.log(removed); // [20, 30]
console.log(numbers); // [10, 40, 50]
```

`splice()` changes the original array.

### Common Interview Questions

**Q: What is the difference between `slice()` and `splice()`?**

> **`slice()` returns a portion of an array without modifying the original array. `splice()` modifies the original array by adding, removing, or replacing elements.**

**Q: Does `slice()` mutate the original array?**

> **No. `slice()` returns a new array and does not modify the original array.**

**Q: Does `splice()` mutate the original array?**

> **Yes. `splice()` changes the original array.**

**Q: What does `splice()` return?**

> **`splice()` returns a new array containing the elements that were removed. If nothing is removed, it returns an empty array.**

**Q: Is the `end` index included in `slice()`?**

> **No. The `start` index is included, but the `end` index is excluded.**

### Remember

> **`slice()` = take a portion without changing the array. `splice()` = change the original array.**

### Interview Answer

> **`slice()` is used to get a portion of an array without modifying the original array, and its end index is excluded. `splice()` modifies the original array and can add, remove, or replace elements. `splice()` also returns the elements that were removed.**

<!-- =================== -->

## 43. `forEach()`

### Meaning

> **`forEach()` runs a function once for every element in an array.**

It is mainly used when we want to **perform an action for each element**.

### Example

```js
const numbers = [10, 20, 30];

numbers.forEach(function (number) {
  console.log(number);
});
```

Output:

```text
10
20
30
```

`forEach()` takes a **callback function** and calls that function for each element.

In this example:

```js
function (number) {
  console.log(number);
}
```

is the callback function.

### How It Works

For:

```js
const numbers = [10, 20, 30];
```

When we call:

```js
numbers.forEach(function (number) {
  console.log(number);
});
```

JavaScript runs the callback once for each element:

```text
1. number = 10 → console.log(10)
2. number = 20 → console.log(20)
3. number = 30 → console.log(30)
```

So the callback runs **3 times** because the array has 3 elements.

### Callback Parameters

The callback can receive three arguments:

```js
array.forEach(function (element, index, array) {
  // ...
});
```

They are:

```text
element → current element
index   → current element's index
array   → original array
```

### Example

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit, index) {
  console.log(index, fruit);
});
```

Output:

```text
0 "Apple"
1 "Banana"
2 "Mango"
```

Here:

```text
fruit → current value
index → current position
```

We do not have to use all three parameters.

For example:

```js
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

is completely valid.

### Using Arrow Function

`forEach()` is commonly written with an arrow function.

```js
const numbers = [10, 20, 30];

numbers.forEach((number) => {
  console.log(number);
});
```

This does the same thing as:

```js
numbers.forEach(function (number) {
  console.log(number);
});
```

### `forEach()` Does Not Create a New Array

This is an important difference from `map()`.

```js
const numbers = [10, 20, 30];

const result = numbers.forEach((number) => {
  console.log(number);
});

console.log(result); // undefined
```

`forEach()` is mainly for **performing an action**, not for creating a transformed array.

If we want a new array, `map()` is usually the correct method.

### `forEach()` vs `map()`

| `forEach()`                                       | `map()`                                   |
| ------------------------------------------------- | ----------------------------------------- |
| Runs a function for each element                  | Runs a function for each element          |
| Mainly used for side effects/actions              | Mainly used to transform values           |
| Returns `undefined`                               | Returns a new array                       |
| Does not create a new array from callback results | Creates a new array from callback results |

Example with `forEach()`:

```js
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number * 2);
});
```

Output:

```text
2
4
6
```

But with `map()`:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6]
```

### Important Point

> **`forEach()` does not stop early using `break` or `continue` like a normal `for` loop.**

This will not work:

```js
const numbers = [10, 20, 30];

numbers.forEach(number => {
  if (number === 20) {
    break; // SyntaxError
  }
});
```

If you need to stop based on a condition, a normal `for` loop or methods such as `some()`, `every()`, or `find()` may be more appropriate depending on the goal.

### Does `forEach()` Modify the Original Array?

`forEach()` itself does **not automatically modify** the array.

For example:

```js
const numbers = [10, 20, 30];

numbers.forEach((number) => {
  console.log(number * 2);
});

console.log(numbers); // [10, 20, 30]
```

However, the callback can modify the array if we explicitly do so.

```js
const numbers = [10, 20, 30];

numbers.forEach((number, index) => {
  numbers[index] = number * 2;
});

console.log(numbers); // [20, 40, 60]
```

So the correct understanding is:

> **`forEach()` does not itself modify the array, but the callback can modify it if we write code that does so.**

### Important Point

> **`forEach()` is best when we want to perform an action for every element and do not need a new array as the result.**

For example:

```js
const users = ["Ajay", "Rahul", "Amit"];

users.forEach((user) => {
  console.log(`Hello ${user}`);
});
```

Output:

```text
Hello Ajay
Hello Rahul
Hello Amit
```

### Common Interview Questions

**Q: What is `forEach()`?**

> **`forEach()` is an array method that executes a callback function once for every element in the array.**

**Q: What does `forEach()` return?**

> **`forEach()` returns `undefined`. It is not used to create a new array.**

**Q: Can we use `break` inside `forEach()`?**

> **No. `break` cannot be used to stop a `forEach()` loop. Use a normal loop or another suitable array method instead.**

**Q: What arguments does the `forEach()` callback receive?**

> **The callback can receive the current element, its index, and the original array.**

**Q: Does `forEach()` modify the original array?**

> **The `forEach()` method itself does not modify the array, but the callback can modify the array if we explicitly change it.**

**Q: What is the difference between `forEach()` and `map()`?**

> **`forEach()` is mainly used to perform an action for each element and returns `undefined`. `map()` transforms each element and returns a new array.**

### Remember

> **`forEach()` = run this function once for every array element.**

### Interview Answer

> **`forEach()` is an array method that runs a callback function once for every element. It is mainly used when we want to perform an action for each element, and it returns `undefined` rather than a new array.**

<!-- ==================  -->

## 44. `map()`

### Meaning

> **`map()` runs a function on every element of an array and returns a new array containing the results.**

The main idea is:

```text
old array → transform each element → new array
```

### Example

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled); // [2, 4, 6]
```

Here `map()` takes each number:

```text
1 → 2
2 → 4
3 → 6
```

and creates a new array:

```text
[2, 4, 6]
```

The original array is unchanged:

```js
console.log(numbers); // [1, 2, 3]
```

### How It Works

For:

```js
const numbers = [1, 2, 3];
```

when we write:

```js
const doubled = numbers.map((number) => {
  return number * 2;
});
```

`map()` calls the callback once for every element.

Step by step:

```text
1. number = 1 → return 2
2. number = 2 → return 4
3. number = 3 → return 6
```

The returned values are collected into a new array:

```text
[2, 4, 6]
```

So:

```js
doubled;
```

contains:

```js
[2, 4, 6];
```

### Important Point

> **The value returned by the callback becomes an element of the new array.**

For example:

```js
const numbers = [10, 20, 30];

const result = numbers.map((number) => {
  return number + 5;
});

console.log(result); // [15, 25, 35]
```

The callback returns:

```text
10 → 15
20 → 25
30 → 35
```

Those returned values become the new array.

### `map()` Callback Parameters

The callback can receive three arguments:

```js
array.map(function (element, index, array) {
  // ...
});
```

They are:

```text
element → current element
index   → current element's index
array   → original array
```

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.map((fruit, index) => {
  return `${index}: ${fruit}`;
});

console.log(result);
```

Output:

```text
[
  "0: Apple",
  "1: Banana",
  "2: Mango"
]
```

### `map()` Does Not Change the Original Array

`map()` creates a **new array**.

```js
const numbers = [10, 20, 30];

const doubled = numbers.map((number) => number * 2);

console.log(numbers); // [10, 20, 30]
console.log(doubled); // [20, 40, 60]
```

So:

```text
numbers → original array
doubled → new array
```

### `map()` vs `forEach()`

This is one of the most important differences.

| `map()`                                            | `forEach()`                                        |
| -------------------------------------------------- | -------------------------------------------------- |
| Creates and returns a new array                    | Returns `undefined`                                |
| Used mainly for transformation                     | Used mainly for performing an action               |
| Callback's returned values go into the new array   | Callback's return value is ignored                 |
| Original array is not changed by the method itself | Original array is not changed by the method itself |

Example:

```js
const numbers = [1, 2, 3];

const result = numbers.map((number) => number * 2);

console.log(result); // [2, 4, 6]
```

But:

```js
const numbers = [1, 2, 3];

const result = numbers.forEach((number) => number * 2);

console.log(result); // undefined
```

The `forEach()` callback does return a value here, but `forEach()` does not collect those returned values.

### Important Rule

> **Use `map()` when you want to transform every element and create a new array.**

For example, converting prices:

```js
const prices = [100, 200, 300];

const pricesWithTax = prices.map((price) => price * 1.18);

console.log(pricesWithTax);
// [118, 236, 354]
```

### Mapping Objects

`map()` is very commonly used with arrays of objects.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
];

const names = users.map((user) => user.name);

console.log(names);
// ["Ajay", "Rahul"]
```

Step by step:

```text
{ name: "Ajay", age: 25 }  → "Ajay"
{ name: "Rahul", age: 30 }  → "Rahul"
```

The new array contains only the returned values:

```js
["Ajay", "Rahul"];
```

### `map()` Can Return Objects

We can also create new objects from existing elements.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
];

const result = users.map((user) => {
  return {
    name: user.name,
    isAdult: user.age >= 18,
  };
});

console.log(result);
```

Result:

```js
[
  { name: "Ajay", isAdult: true },
  { name: "Rahul", isAdult: true },
];
```

Here each original object is transformed into a **new object**.

### Important Edge Case — Forgetting `return`

Consider:

```js
const numbers = [1, 2, 3];

const result = numbers.map((number) => {
  number * 2;
});

console.log(result);
```

Output:

```text
[undefined, undefined, undefined]
```

Why?

Because the callback uses `{ }`, so we need an explicit `return`.

Correct:

```js
const result = numbers.map((number) => {
  return number * 2;
});
```

Or use an implicit return:

```js
const result = numbers.map((number) => number * 2);
```

### Important Point

> **With an arrow function, `{ }` creates a function body where `return` must be written explicitly. Without `{ }`, the expression is returned automatically.**

Compare:

```js
(number) => number * 2;
```

with:

```js
(number) => {
  return number * 2;
};
```

Both return the same value.

### `map()` and Array Length

Normally, `map()` returns a new array with the **same length** as the original array.

```js
const numbers = [10, 20, 30];

const result = numbers.map((number) => number * 2);

console.log(numbers.length); // 3
console.log(result.length); // 3
```

If the goal is to remove elements, `filter()` is usually the correct method.

```text
map()    → transform
filter() → select
```

### Common Interview Questions

**Q: What is `map()`?**

> **`map()` is an array method that runs a callback for every element and returns a new array containing the values returned by the callback.**

**Q: Does `map()` modify the original array?**

> **No. `map()` creates and returns a new array. The original array is not modified by `map()` itself.**

**Q: What does `map()` return?**

> **It returns a new array containing the callback's returned values.**

**Q: What happens if the callback does not return anything?**

> **Each callback call returns `undefined`, so the resulting array contains `undefined` for those elements.**

**Q: What is the difference between `map()` and `forEach()`?**

> **`map()` is mainly used to transform elements and returns a new array. `forEach()` is mainly used to perform an action for each element and returns `undefined`.**

**Q: Does `map()` always return an array of the same length?**

> **For normal arrays, yes. It creates one result for each visited element, so the resulting array normally has the same length as the source array.**

### Remember

> **`map()` = transform every element and get a new array.**

### Interview Answer

> **`map()` is an array method used to transform every element of an array. It runs a callback for each element and returns a new array containing the values returned by that callback. It does not modify the original array itself.**

<!-- ======================  -->

## 45. `filter()`

### Meaning

> **`filter()` creates a new array containing only the elements that pass a condition.**

Simple idea:

```text
original array → check each element → keep matching elements → new array
```

The callback must return a **truthy or falsy value**.

- `true` → element is included
- `false` → element is not included

### Example

```js
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter((number) => number > 20);

console.log(result); // [25, 30]
```

Step by step:

```text
10 > 20 → false → remove
15 > 20 → false → remove
20 > 20 → false → remove
25 > 20 → true  → keep
30 > 20 → true  → keep
```

So the new array is:

```js
[25, 30];
```

The original array is unchanged:

```js
console.log(numbers); // [10, 15, 20, 25, 30]
```

### How It Works

For:

```js
const numbers = [10, 15, 20, 25];
```

when we write:

```js
const result = numbers.filter((number) => number >= 20);
```

`filter()` runs the callback for every element:

```text
1. number = 10 → false → not included
2. number = 15 → false → not included
3. number = 20 → true  → included
4. number = 25 → true  → included
```

The returned result is:

```js
[20, 25];
```

### Callback Parameters

Like `map()`, the `filter()` callback can receive:

```js
array.filter(function (element, index, array) {
  // ...
});
```

They are:

```text
element → current element
index   → current index
array   → original array
```

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.filter((fruit, index) => {
  return index > 0;
});

console.log(result); // ["Banana", "Mango"]
```

### `filter()` Does Not Modify the Original Array

`filter()` returns a **new array**.

```js
const numbers = [10, 20, 30, 40];

const result = numbers.filter((number) => number > 20);

console.log(numbers); // [10, 20, 30, 40]
console.log(result); // [30, 40]
```

So:

```text
numbers → original array
result  → new filtered array
```

### `filter()` vs `map()`

These two methods are commonly confused.

| `filter()`                                  | `map()`                                |
| ------------------------------------------- | -------------------------------------- |
| Selects elements                            | Transforms elements                    |
| Keeps elements that pass a condition        | Creates a result for every element     |
| Result can have fewer elements              | Normally same length                   |
| Callback decides whether to keep an element | Callback returns the transformed value |

Example:

```js
const numbers = [1, 2, 3, 4];

const filtered = numbers.filter((number) => number % 2 === 0);

console.log(filtered); // [2, 4]
```

Here we are **selecting** values.

With `map()`:

```js
const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8]
```

Here we are **transforming** values.

Simple difference:

> **`filter()` decides what to keep. `map()` decides what the new value should be.**

### Filtering Objects

`filter()` is very commonly used with arrays of objects.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 17 },
  { name: "Amit", age: 30 },
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);
```

Result:

```js
[
  { name: "Ajay", age: 25 },
  { name: "Amit", age: 30 },
];
```

The callback checks:

```js
user.age >= 18;
```

Only users for whom this condition is `true` are included.

### Important Point

> **`filter()` does not transform an element into a different value. It decides whether the original element should be included in the new array.**

For example:

```js
const numbers = [10, 20, 30];

const result = numbers.filter((number) => number > 10);

console.log(result); // [20, 30]
```

The elements `20` and `30` are kept as they are.

### What If Nothing Matches?

If no element passes the condition, `filter()` returns an **empty array**.

```js
const numbers = [10, 20, 30];

const result = numbers.filter((number) => number > 100);

console.log(result); // []
```

It does not return `null` or `undefined`.

### What If Everything Matches?

If every element passes the condition, all elements are included in the new array.

```js
const numbers = [10, 20, 30];

const result = numbers.filter((number) => number > 0);

console.log(result); // [10, 20, 30]
```

### Important Edge Case — Truthy and Falsy

The callback does not have to return exactly `true` or `false`.

JavaScript converts the returned value to a boolean when deciding whether to keep the element.

```js
const values = [1, 0, 2, "", 3];

const result = values.filter((value) => value);

console.log(result); // [1, 2, 3]
```

Here:

```text
1 → truthy → keep
0 → falsy  → remove
2 → truthy → keep
"" → falsy → remove
3 → truthy → keep
```

For interview code, however, explicit conditions are usually clearer:

```js
const result = numbers.filter((number) => number > 10);
```

### Common Interview Questions

**Q: What is `filter()`?**

> **`filter()` is an array method that creates a new array containing only the elements that satisfy a condition.**

**Q: Does `filter()` modify the original array?**

> **No. `filter()` returns a new array and does not modify the original array itself.**

**Q: What does the callback of `filter()` return?**

> **It should return a truthy or falsy value. Truthy means the element is included, and falsy means it is excluded.**

**Q: What does `filter()` return if no element matches?**

> **It returns an empty array `[]`.**

**Q: What is the difference between `filter()` and `map()`?**

> **`filter()` selects which elements should remain in the new array, while `map()` transforms every element and returns the transformed values.**

**Q: Can `filter()` change the length of the array?**

> **Yes. The new array can have fewer elements, the same number of elements, or zero elements depending on the condition.**

### Remember

> **`filter()` = keep the elements that pass the condition.**

### Interview Answer

> **`filter()` is an array method used to select elements based on a condition. It runs a callback for each element and includes the element when the callback returns a truthy value. It returns a new array and does not modify the original array.**
