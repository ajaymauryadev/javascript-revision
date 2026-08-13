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

<!-- ============ ==================== -->

## 46. `reduce()`

### Meaning

> **`reduce()` processes all elements of an array and combines them into one final value.**

That final value can be:

- a number
- a string
- an object
- an array
- or any other value

Simple idea:

```text
array → process elements one by one → final result
```

### Example

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total); // 60
```

Here `reduce()` adds all numbers together.

```text
10 → sum becomes 10
20 → sum becomes 30
30 → sum becomes 60
```

Final result:

```text
60
```

### How It Works

The most important concept in `reduce()` is the **accumulator**.

> **The accumulator stores the result built so far while `reduce()` moves through the array.**

In this example:

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
```

There are two important values:

```text
sum    → accumulator
number → current element
```

The `0` at the end is the **initial value** of the accumulator.

### Step-by-Step Execution

For:

```js
const numbers = [10, 20, 30];
```

and:

```js
numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
```

Execution:

```text
Initial:
sum = 0

1st element:
sum = 0
number = 10
return 0 + 10 → 10

2nd element:
sum = 10
number = 20
return 10 + 20 → 30

3rd element:
sum = 30
number = 30
return 30 + 30 → 60
```

Final result:

```text
60
```

So:

```js
const total = 60;
```

### Syntax

The general syntax is:

```js
array.reduce((accumulator, currentValue) => {
  return newAccumulator;
}, initialValue);
```

The callback can receive four arguments:

```js
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // ...
}, initialValue);
```

They are:

```text
accumulator  → result built so far
currentValue → current element
currentIndex  → current index
array        → original array
```

Most of the time, we mainly use:

```text
accumulator
currentValue
```

### Why Is `initialValue` Important?

Consider:

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
```

Here:

```text
initialValue = 0
```

So the first accumulator value is `0`.

This makes the behavior clear and avoids many edge cases.

### Without `initialValue`

We can also write:

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
});

console.log(total); // 60
```

When no `initialValue` is provided, `reduce()` uses the **first array element as the initial accumulator**.

So execution starts like this:

```text
sum = 10
number = 20 → 30
number = 30 → 60
```

Notice that the callback starts from the **second element**.

### Important Interview Point

> **If `initialValue` is provided, the accumulator starts with that value. If it is not provided, the first array element becomes the initial accumulator value.**

This difference is commonly asked in interviews.

### Example — Finding a Total

```js
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total); // 600
```

Step by step:

```text
0 + 100 → 100
100 + 200 → 300
300 + 300 → 600
```

### Example — Finding the Maximum

`reduce()` can also be used to find the largest value.

```js
const numbers = [10, 50, 30, 80, 20];

const max = numbers.reduce((largest, number) => {
  return number > largest ? number : largest;
}, numbers[0]);

console.log(max); // 80
```

Step by step:

```text
largest = 10

50 > 10 → 50
30 > 50 → 50
80 > 50 → 80
20 > 80 → 80
```

Final result:

```text
80
```

### Example — Counting Values

`reduce()` can also build an object.

```js
const fruits = ["apple", "banana", "apple", "mango"];

const count = fruits.reduce((result, fruit) => {
  result[fruit] = (result[fruit] || 0) + 1;
  return result;
}, {});

console.log(count);
```

Result:

```js
{
  apple: 2,
  banana: 1,
  mango: 1
}
```

Here the accumulator is not a number.

It starts as an empty object:

```js
{
}
```

and gradually becomes:

```js
{
  apple: 2,
  banana: 1,
  mango: 1
}
```

This shows an important point:

> **The accumulator can be any type of value.**

### `reduce()` Does Not Automatically Modify the Original Array

`reduce()` returns a result.

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(numbers); // [10, 20, 30]
console.log(total); // 60
```

The original array remains unchanged.

However, if the accumulator contains an object or array, we can intentionally modify that accumulator inside the callback. That is different from `reduce()` modifying the source array itself.

### `map()` vs `filter()` vs `reduce()`

These three methods are extremely important.

| Method     | Main purpose                             | Result    |
| ---------- | ---------------------------------------- | --------- |
| `map()`    | Transform every element                  | New array |
| `filter()` | Select matching elements                 | New array |
| `reduce()` | Combine/process elements into one result | Any value |

Example:

```js
const numbers = [1, 2, 3, 4];
```

**`map()` — transform**

```js
const result = numbers.map((number) => number * 2);

console.log(result); // [2, 4, 6, 8]
```

**`filter()` — select**

```js
const result = numbers.filter((number) => number % 2 === 0);

console.log(result); // [2, 4]
```

**`reduce()` — combine**

```js
const result = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(result); // 10
```

Simple mental model:

```text
map    → change every element
filter → keep some elements
reduce → combine/process elements into one result
```

### Important Edge Case — Empty Array

If we provide an initial value:

```js
const result = [].reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(result); // 0
```

This works because the initial accumulator is `0`.

But without an initial value:

```js
const result = [].reduce((sum, number) => {
  return sum + number;
});
```

JavaScript throws a `TypeError` because there is no first element to use as the accumulator.

So using an appropriate `initialValue` is often safer.

### Important Point

> **`reduce()` is not limited to producing a single number. It can produce any final value depending on what we return from the callback.**

For example:

```js
const numbers = [1, 2, 3];

const result = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
```

Result:

```text
6
```

But we could also return an object:

```js
const result = numbers.reduce((obj, number) => {
  obj[number] = number * 2;
  return obj;
}, {});
```

Result:

```js
{
  1: 2,
  2: 4,
  3: 6
}
```

### Common Interview Questions

**Q: What is `reduce()`?**

> **`reduce()` processes the elements of an array one by one and combines them into a final result using an accumulator.**

**Q: What is an accumulator?**

> **The accumulator stores the result built so far during the execution of `reduce()`.**

**Q: What is the second argument of `reduce()`?**

> **The second argument is the initial value of the accumulator.**

**Q: What happens if we don't provide an initial value?**

> **The first array element is used as the initial accumulator, and the callback starts from the second element.**

**Q: What can `reduce()` return?**

> **It can return any value, such as a number, string, object, or array.**

**Q: Does `reduce()` modify the original array?**

> **`reduce()` itself does not modify the original array. It processes the elements and returns the accumulated result.**

**Q: What happens when `reduce()` is called on an empty array without an initial value?**

> **It throws a `TypeError` because there is no first element to use as the initial accumulator.**

### Remember

> **`reduce()` = take array elements one by one and build one final result using an accumulator.**

### Interview Answer

> **`reduce()` is an array method that processes elements one by one and combines them into a final result. It uses an accumulator to store the result built so far, and we can provide an initial value for that accumulator. The final result can be a number, object, array, or any other value.**

<!-- =======================  -->

## 47. `find()`

### Meaning

> **`find()` returns the first element in an array that matches a condition.**

Simple idea:

```text
array → check elements one by one → return first match
```

If no element matches, `find()` returns `undefined`.

### Example

```js
const numbers = [10, 20, 30, 40];

const result = numbers.find((number) => number > 20);

console.log(result); // 30
```

Step by step:

```text
10 > 20 → false
20 > 20 → false
30 > 20 → true  → stop
```

So `find()` returns:

```text
30
```

It does **not** continue checking `40` because it already found the first matching element.

### How It Works

Consider:

```js
const numbers = [5, 12, 18, 25];

const result = numbers.find((number) => number > 10);
```

Execution:

```text
1. 5  → 5 > 10  → false
2. 12 → 12 > 10 → true
3. Stop searching
4. Return 12
```

So:

```js
console.log(result); // 12
```

> **`find()` stops as soon as the first matching element is found.**

### Callback Parameters

Like other array methods, the callback can receive:

```js
array.find((element, index, array) => {
  // condition
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
const numbers = [10, 20, 30];

const result = numbers.find((number, index) => {
  return index === 1;
});

console.log(result); // 20
```

### `find()` With Objects

`find()` is very useful when working with an array of objects.

```js
const users = [
  { id: 1, name: "Ajay" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" },
];

const user = users.find((user) => user.id === 2);

console.log(user);
```

Output:

```js
{
  id: 2,
  name: "Rahul"
}
```

Here:

```js
user.id === 2;
```

is the condition.

When the second object matches, `find()` returns that **entire object**.

### Important Point

> **`find()` returns the actual element that matches, not a boolean and not an array.**

For example:

```js
const numbers = [10, 20, 30];

const result = numbers.find((number) => number > 15);

console.log(result); // 20
```

It returns:

```text
20
```

Not:

```text
[20]
```

and not:

```text
true
```

### What If No Element Matches?

If no element satisfies the condition, `find()` returns `undefined`.

```js
const numbers = [10, 20, 30];

const result = numbers.find((number) => number > 100);

console.log(result); // undefined
```

This is important when using the returned value.

For example:

```js
const user = users.find((user) => user.id === 10);

if (user) {
  console.log(user.name);
}
```

This prevents trying to access a property from `undefined`.

### `find()` vs `filter()`

These methods are commonly confused.

| `find()`                           | `filter()`                    |
| ---------------------------------- | ----------------------------- |
| Returns the first matching element | Returns all matching elements |
| Returns a single value             | Returns a new array           |
| Returns `undefined` if no match    | Returns `[]` if no match      |
| Stops after the first match        | Checks all relevant elements  |

Example:

```js
const numbers = [10, 20, 20, 30];

const first = numbers.find((number) => number === 20);
const all = numbers.filter((number) => number === 20);

console.log(first); // 20
console.log(all); // [20, 20]
```

Simple difference:

```text
find()   → give me the first matching element
filter() → give me all matching elements
```

### `find()` vs `includes()`

These are also different.

```js
const numbers = [10, 20, 30];

console.log(numbers.includes(20)); // true

console.log(numbers.find((number) => number === 20)); // 20
```

`includes()` gives:

```text
true / false
```

`find()` gives:

```text
the matching element / undefined
```

### `find()` vs `indexOf()`

```js
const numbers = [10, 20, 30];

console.log(numbers.indexOf(20)); // 1

console.log(numbers.find((number) => number === 20)); // 20
```

So:

```text
indexOf() → position
find()    → element
```

### `find()` Does Not Modify the Original Array

`find()` only searches the array.

```js
const numbers = [10, 20, 30];

const result = numbers.find((number) => number > 15);

console.log(numbers); // [10, 20, 30]
console.log(result); // 20
```

The original array is unchanged by `find()` itself.

### Important Edge Case

If the array contains objects, `find()` returns the **object itself**.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
];

const user = users.find((user) => user.name === "Ajay");

user.age = 26;

console.log(users);
```

Output:

```js
[
  { name: "Ajay", age: 26 },
  { name: "Rahul", age: 30 },
];
```

Why?

Because `find()` returned a reference to the matching object. We changed that object through `user`.

So:

> **`find()` does not modify the array itself, but if it returns an object, modifying that object can affect the object stored inside the original array.**

### Common Interview Questions

**Q: What is `find()`?**

> **`find()` searches an array and returns the first element that satisfies a condition.**

**Q: What does `find()` return if nothing matches?**

> **It returns `undefined`.**

**Q: Does `find()` return an array?**

> **No. It returns a single matching element, or `undefined` if no element matches.**

**Q: What is the difference between `find()` and `filter()`?**

> **`find()` returns the first matching element, while `filter()` returns all matching elements in a new array.**

**Q: Does `find()` stop after finding a match?**

> **Yes. It stops searching once the first matching element is found.**

**Q: What is the difference between `find()` and `indexOf()`?**

> **`find()` returns the matching element, while `indexOf()` returns the index of the matching element.**

### Remember

> **`find()` = find the first element that matches the condition.**

### Interview Answer

> **`find()` is an array method that searches for the first element that satisfies a condition. It returns that element and stops searching after the first match. If no element matches, it returns `undefined`.**

<!-- =================  -->

## 48. `some()`

### Meaning

> **`some()` checks whether at least one element in an array satisfies a condition.**

It returns:

```text
true  → if at least one element matches
false → if no element matches
```

Simple idea:

```text
some() → "Is there at least one?"
```

### Example

```js
const numbers = [10, 20, 30, 40];

const result = numbers.some((number) => number > 25);

console.log(result); // true
```

Why?

```text
10 > 25 → false
20 > 25 → false
30 > 25 → true
```

As soon as `30` satisfies the condition, `some()` knows the answer is `true`.

It does not need to continue checking the remaining elements.

### How It Works

Consider:

```js
const numbers = [5, 10, 15, 20];

const result = numbers.some((number) => number > 12);
```

Step by step:

```text
1. 5  > 12 → false
2. 10 > 12 → false
3. 15 > 12 → true
4. Stop searching
```

Final result:

```js
true;
```

> **`some()` stops as soon as it finds one matching element.**

### If No Element Matches

If none of the elements satisfies the condition, `some()` returns `false`.

```js
const numbers = [10, 20, 30];

const result = numbers.some((number) => number > 100);

console.log(result); // false
```

Every check is false:

```text
10 > 100 → false
20 > 100 → false
30 > 100 → false
```

So the final result is:

```text
false
```

### Callback Parameters

The callback can receive three arguments:

```js
array.some((element, index, array) => {
  // condition
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
const numbers = [10, 20, 30];

const result = numbers.some((number, index) => {
  return index === 2 && number === 30;
});

console.log(result); // true
```

### `some()` With Objects

`some()` is very useful when checking whether an array of objects contains at least one object matching a condition.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 17 },
  { name: "Amit", age: 30 },
];

const hasMinor = users.some((user) => user.age < 18);

console.log(hasMinor); // true
```

Why?

```text
Ajay  → 25 < 18 → false
Rahul → 17 < 18 → true
```

As soon as Rahul matches, `some()` returns `true`.

### `some()` vs `find()`

These methods can look similar, but they return different things.

| `some()`                                    | `find()`                             |
| ------------------------------------------- | ------------------------------------ |
| Checks whether at least one element matches | Finds the first matching element     |
| Returns `true` or `false`                   | Returns the element                  |
| Returns `false` if no match                 | Returns `undefined` if no match      |
| Good for yes/no questions                   | Good when we need the actual element |

Example:

```js
const numbers = [10, 20, 30];

const exists = numbers.some((number) => number > 20);
const value = numbers.find((number) => number > 20);

console.log(exists); // true
console.log(value); // 30
```

Simple difference:

```text
some() → "Does one exist?"
find() → "Which one is the first match?"
```

### `some()` vs `filter()`

This is another important distinction.

```js
const numbers = [10, 20, 30, 40];

const exists = numbers.some((number) => number > 25);
const values = numbers.filter((number) => number > 25);

console.log(exists); // true
console.log(values); // [30, 40]
```

So:

```text
some()   → boolean
filter() → array
```

Use `some()` when you only need to know whether a match exists.

Use `filter()` when you need all matching elements.

### `some()` vs `every()`

These are opposites in an important way.

```js
const numbers = [10, 20, 30];

console.log(numbers.some((number) => number > 25)); // true
console.log(numbers.every((number) => number > 25)); // false
```

Meaning:

```text
some()  → at least one element must match
every() → every element must match
```

Example:

```js
const numbers = [10, 20, 30];

numbers.some((number) => number > 20);
// true because 30 matches

numbers.every((number) => number > 20);
// false because 10 and 20 do not match
```

### `some()` Does Not Modify the Array

`some()` only checks the elements.

```js
const numbers = [10, 20, 30];

const result = numbers.some((number) => number > 20);

console.log(result); // true
console.log(numbers); // [10, 20, 30]
```

The original array remains unchanged.

### Important Edge Case — Empty Array

For an empty array:

```js
const numbers = [];

console.log(numbers.some((number) => number > 10)); // false
```

Why?

There is no element that satisfies the condition.

So:

> **`some()` on an empty array always returns `false`.**

### Common Interview Questions

**Q: What is `some()`?**

> **`some()` checks whether at least one element in an array satisfies a condition. It returns `true` if a match exists, otherwise `false`.**

**Q: Does `some()` stop after finding a match?**

> **Yes. It stops as soon as the callback returns a truthy result for an element.**

**Q: What does `some()` return if no element matches?**

> **It returns `false`.**

**Q: What is the difference between `some()` and `find()`?**

> **`some()` returns a boolean indicating whether a match exists, while `find()` returns the first matching element.**

**Q: What is the difference between `some()` and `filter()`?**

> **`some()` returns a boolean and stops when it finds a match. `filter()` checks the elements and returns a new array containing all matching elements.**

**Q: What does `some()` return for an empty array?**

> **It returns `false` because there is no element that can satisfy the condition.**

### Remember

> **`some()` = is there at least one element that matches?**

### Interview Answer

> **`some()` is an array method that checks whether at least one element satisfies a condition. It returns `true` when it finds a match and `false` if no element matches. It also stops checking once it finds the first matching element.**

<!-- ================================  -->

## 49. `every()`

### Meaning

> **`every()` checks whether all elements in an array satisfy a condition.**

It returns:

```text
true  → if every element matches
false → if even one element does not match
```

Simple idea:

```text
every() → "Do all elements match?"
```

### Example

```js
const numbers = [10, 20, 30];

const result = numbers.every((number) => number > 5);

console.log(result); // true
```

Why?

```text
10 > 5 → true
20 > 5 → true
30 > 5 → true
```

Every element satisfies the condition, so:

```text
true
```

### How It Works

Consider:

```js
const numbers = [10, 20, 30, 40];

const result = numbers.every((number) => number > 15);
```

Step by step:

```text
1. 10 > 15 → false
2. Stop checking
```

The result is:

```js
false;
```

Notice that `every()` does not need to check the remaining elements after finding one element that fails the condition.

> **`every()` stops as soon as one element does not satisfy the condition.**

### Another Example

```js
const ages = [20, 25, 30, 22];

const allAdults = ages.every((age) => age >= 18);

console.log(allAdults); // true
```

Every age is `18` or greater, so the result is `true`.

Now:

```js
const ages = [20, 25, 16, 30];

const allAdults = ages.every((age) => age >= 18);

console.log(allAdults); // false
```

Step by step:

```text
20 >= 18 → true
25 >= 18 → true
16 >= 18 → false
```

As soon as `16` fails, `every()` returns `false`.

### Callback Parameters

The callback can receive three arguments:

```js
array.every((element, index, array) => {
  // condition
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
const numbers = [10, 20, 30];

const result = numbers.every((number, index) => {
  return number > index;
});

console.log(result); // true
```

### `every()` With Objects

`every()` is useful when we want to check whether **all objects** in an array satisfy a condition.

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Amit", age: 22 },
];

const allAdults = users.every((user) => user.age >= 18);

console.log(allAdults); // true
```

If one user is under 18:

```js
const users = [
  { name: "Ajay", age: 25 },
  { name: "Rahul", age: 17 },
  { name: "Amit", age: 22 },
];

const allAdults = users.every((user) => user.age >= 18);

console.log(allAdults); // false
```

### `every()` vs `some()`

These two methods are commonly confused.

| `every()`                                   | `some()`                                        |
| ------------------------------------------- | ----------------------------------------------- |
| Checks whether **all** elements match       | Checks whether **at least one** element matches |
| Returns `true` only if every element passes | Returns `true` if any element passes            |
| Stops when one element fails                | Stops when one element passes                   |

Example:

```js
const numbers = [10, 20, 30];

console.log(numbers.every((number) => number > 15));
// false

console.log(numbers.some((number) => number > 15));
// true
```

Why?

For `every()`:

```text
10 > 15 → false
```

One failure is enough, so result is `false`.

For `some()`:

```text
10 > 15 → false
20 > 15 → true
```

One success is enough, so result is `true`.

Simple difference:

```text
some()  → at least one
every() → all
```

### `every()` vs `filter()`

These methods have different purposes.

```js
const numbers = [10, 20, 30];

const result1 = numbers.every((number) => number > 5);
const result2 = numbers.filter((number) => number > 5);

console.log(result1); // true
console.log(result2); // [10, 20, 30]
```

So:

```text
every()  → boolean
filter() → array
```

Use `every()` when you only need to know whether **all elements satisfy a condition**.

Use `filter()` when you need the **matching elements themselves**.

### `every()` Does Not Modify the Array

`every()` only checks the elements.

```js
const numbers = [10, 20, 30];

const result = numbers.every((number) => number > 5);

console.log(result); // true
console.log(numbers); // [10, 20, 30]
```

The original array remains unchanged by `every()` itself.

### Important Edge Case — Empty Array

One interesting behavior is:

```js
const numbers = [];

console.log(numbers.every((number) => number > 10)); // true
```

This may look strange at first.

Why is it `true` when there are no elements?

Because there is **no element that fails the condition**.

For `every()` to return `false`, it needs at least one element that does not satisfy the condition.

An empty array has no such element.

This is a standard JavaScript behavior and can be asked in interviews.

Compare:

```js
[].every((x) => x > 10); // true
[].some((x) => x > 10); // false
```

Mental model:

```text
every() → "Is there any element that fails?"
          No → true

some()  → "Is there any element that passes?"
          No → false
```

### Important Point

> **`every()` returns `true` only when no element fails the condition. It returns `false` as soon as it finds one element that fails.**

### Common Interview Questions

**Q: What is `every()`?**

> **`every()` checks whether all elements in an array satisfy a condition. It returns `true` if all elements pass and `false` if at least one element fails.**

**Q: Does `every()` stop early?**

> **Yes. It stops as soon as the callback returns a falsy value for an element.**

**Q: What does `every()` return if one element fails?**

> **It immediately returns `false`.**

**Q: What is the difference between `every()` and `some()`?**

> **`every()` checks whether all elements satisfy a condition, while `some()` checks whether at least one element satisfies it.**

**Q: What does `every()` return for an empty array?**

> **It returns `true`. This is because there is no element that fails the condition.**

**Q: Does `every()` modify the original array?**

> **No. `every()` only checks the elements and returns a boolean.**

### Remember

> **`every()` = do all elements satisfy the condition?**

### Interview Answer

> **`every()` is an array method that checks whether all elements satisfy a condition. It returns `true` only if every element passes the condition, and it stops and returns `false` as soon as one element fails.**

<!-- ===========================  -->

## 50. `sort()`

### Meaning

> **`sort()` is used to arrange the elements of an array in a specific order.**

By default, `sort()` converts elements to **strings** and sorts them based on their string values.

> **Important: `sort()` changes the original array.**

### Example

```js
const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
// ["Apple", "Banana", "Mango"]
```

The original array is changed.

```text
Before:
["Mango", "Apple", "Banana"]

After:
["Apple", "Banana", "Mango"]
```

### Important Point — Default Numeric Sorting

A very common JavaScript interview question is:

**Why doesn't `sort()` correctly sort numbers by default?**

Consider:

```js
const numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers);
```

Result:

```text
[10, 2, 30, 5]
```

This happens because, by default, JavaScript converts the numbers to strings before comparing them.

Conceptually:

```text
10 → "10"
2  → "2"
30 → "30"
5  → "5"
```

Then they are compared like strings.

So `"10"` comes before `"2"` because string comparison looks at the characters.

### Sorting Numbers

To sort numbers in **ascending order**, provide a comparison function:

```js
const numbers = [10, 2, 30, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [2, 5, 10, 30]
```

The comparison function tells `sort()` which value should come first.

### How the Comparison Function Works

The basic rule is:

```js
(a, b) => a - b;
```

JavaScript looks at the returned value:

```text
negative → a comes before b
positive → b comes before a
zero     → order is considered equal
```

For ascending order:

```js
(a, b) => a - b;
```

Example:

```text
a = 2
b = 10

2 - 10 = -8
```

Negative result means:

```text
2 comes before 10
```

Another example:

```text
a = 10
b = 2

10 - 2 = 8
```

Positive result means:

```text
2 comes before 10
```

### Descending Order

To sort numbers from largest to smallest:

```js
const numbers = [10, 2, 30, 5];

numbers.sort((a, b) => b - a);

console.log(numbers);
// [30, 10, 5, 2]
```

Simple rule:

```text
Ascending  → a - b
Descending → b - a
```

### `sort()` Mutates the Original Array

This is an important point.

```js
const numbers = [30, 10, 20];

const result = numbers.sort((a, b) => a - b);

console.log(numbers); // [10, 20, 30]
console.log(result); // [10, 20, 30]
```

Both variables refer to the same sorted array because `sort()` changes the original array and also returns that array.

So:

> **`sort()` is a mutating array method.**

### If You Don't Want to Change the Original Array

Create a copy first.

```js
const numbers = [30, 10, 20];

const sorted = [...numbers].sort((a, b) => a - b);

console.log(numbers); // [30, 10, 20]
console.log(sorted); // [10, 20, 30]
```

Here:

```js
[...numbers];
```

creates a new array.

Then `sort()` changes that new array instead of the original one.

### Sorting Strings

For simple strings, default sorting often works as expected:

```js
const names = ["Rahul", "Ajay", "Amit"];

names.sort();

console.log(names);
// ["Ajay", "Amit", "Rahul"]
```

But string sorting follows JavaScript's string comparison rules, so it is not always the same as human language/alphabetical ordering for all characters and locales.

### Sorting Objects

We can sort an array of objects using a comparison function.

```js
const users = [
  { name: "Ajay", age: 30 },
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 25 },
];

users.sort((a, b) => a.age - b.age);

console.log(users);
```

Result:

```js
[
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 25 },
  { name: "Ajay", age: 30 },
];
```

Here:

```js
a.age - b.age;
```

compares the ages.

### Sorting Objects in Descending Order

```js
const users = [
  { name: "Ajay", age: 30 },
  { name: "Rahul", age: 20 },
  { name: "Amit", age: 25 },
];

users.sort((a, b) => b.age - a.age);

console.log(users);
```

Result:

```js
[
  { name: "Ajay", age: 30 },
  { name: "Amit", age: 25 },
  { name: "Rahul", age: 20 },
];
```

### Sorting Strings With `localeCompare()`

When sorting strings, `localeCompare()` can be useful.

```js
const names = ["Rahul", "Ajay", "Amit"];

names.sort((a, b) => a.localeCompare(b));

console.log(names);
// ["Ajay", "Amit", "Rahul"]
```

For reverse order:

```js
names.sort((a, b) => b.localeCompare(a));
```

### Important Point — Comparison Function

The comparison function does **not need to return exactly `-1`, `0`, or `1`**.

It only needs to return:

```text
negative → a before b
positive → b before a
zero     → considered equal
```

So this is perfectly valid:

```js
numbers.sort((a, b) => a - b);
```

For example, if:

```text
a = 5
b = 10
```

then:

```text
5 - 10 = -5
```

The negative value tells `sort()` that `5` should come before `10`.

### `sort()` vs `slice()`

Remember that `sort()` mutates the array, while `slice()` does not.

```js
const numbers = [30, 10, 20];

const sorted = numbers.slice().sort((a, b) => a - b);

console.log(numbers); // [30, 10, 20]
console.log(sorted); // [10, 20, 30]
```

This pattern is useful when we need a sorted copy.

### Important Edge Case — `const`

Because `sort()` changes the contents of an array, this works:

```js
const numbers = [30, 10, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [10, 20, 30]
```

Even though `numbers` is declared with `const`.

This is because `sort()` is modifying the existing array.

It is not reassigning the variable.

But this would fail:

```js
const numbers = [30, 10, 20];

numbers = [1, 2, 3]; // Error
```

So again:

> **`const` prevents reassignment, not mutation.**

### Common Interview Questions

**Q: What is `sort()`?**

> **`sort()` is an array method used to arrange array elements in an order. By default, it compares elements as strings.**

**Q: Does `sort()` modify the original array?**

> **Yes. `sort()` mutates the original array.**

**Q: Why does `[10, 2, 30].sort()` not give numeric order?**

> **Because `sort()` converts the values to strings by default and compares those strings.**

**Q: How do you sort numbers in ascending order?**

> **Use `array.sort((a, b) => a - b)`.**

**Q: How do you sort numbers in descending order?**

> **Use `array.sort((a, b) => b - a)`.**

**Q: What does the comparison function return?**

> **A negative value means `a` comes before `b`, a positive value means `b` comes before `a`, and zero means they are considered equal for sorting.**

**Q: How can you sort without modifying the original array?**

> **Create a copy first, for example `[...numbers].sort((a, b) => a - b)`.**

### Remember

> **`sort()` changes the original array. For numbers, use `(a, b) => a - b` for ascending and `(a, b) => b - a` for descending.**

### Interview Answer

> **`sort()` is an array method used to arrange elements in an order, and it modifies the original array. By default, JavaScript sorts values as strings, so for numbers we usually provide a comparison function like `(a, b) => a - b` for ascending order.**

<!-- ============= ===================  -->

## 51. Functions

### Meaning

> **A function is a reusable block of code that performs a specific task.**

Instead of writing the same code again and again, we can put it inside a function and call that function whenever we need it.

### Example

```js
function greet() {
  console.log("Hello");
}

greet();
greet();
```

Output:

```text
Hello
Hello
```

Here:

```js
function greet() {
  console.log("Hello");
}
```

creates the function.

And:

```js
greet();
```

**calls the function**.

### How It Works

Consider:

```js
function greet() {
  console.log("Hello");
}

console.log("Start");

greet();

console.log("End");
```

Execution happens step by step:

```text
1. JavaScript creates the function `greet`.
2. "Start" is printed.
3. `greet()` is called.
4. Function execution starts.
5. "Hello" is printed.
6. Function finishes.
7. "End" is printed.
```

Output:

```text
Start
Hello
End
```

Important:

> **Defining a function does not execute its body. The function body runs when the function is called.**

### Function Declaration

A basic function is written using a function declaration:

```js
function add(a, b) {
  return a + b;
}
```

Here:

```text
function → keyword
add      → function name
a, b     → parameters
return   → sends a value back
```

We call it using:

```js
const result = add(10, 20);

console.log(result); // 30
```

### Parameters and Arguments

Consider:

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Ajay");
```

Here:

```text
name  → parameter
"Ajay" → argument
```

> **Parameters are the names defined in the function. Arguments are the actual values passed when calling the function.**

We will cover this separately in topic `52`.

### Function With Return Value

A function can return a value.

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result); // 30
```

The function calculates:

```text
10 + 20 = 30
```

and `return` sends `30` back to the place where the function was called.

We will cover `return` in detail in topic `53`.

### Function Without Return

A function does not have to return a value.

```js
function greet() {
  console.log("Hello");
}

const result = greet();

console.log(result); // undefined
```

The function prints `"Hello"`, but it does not return anything explicitly.

Therefore, its return value is:

```text
undefined
```

### Why Use Functions?

Functions help us:

- **reuse code**
- break large problems into smaller parts
- avoid repeating the same logic
- make code easier to read
- make code easier to test and maintain

Example without a function:

```js
console.log(10 * 10);
console.log(20 * 20);
console.log(30 * 30);
```

With a function:

```js
function square(number) {
  return number * number;
}

console.log(square(10));
console.log(square(20));
console.log(square(30));
```

The logic is written once and reused.

### Function Can Accept Different Values

The same function can work with different arguments.

```js
function square(number) {
  return number * number;
}

console.log(square(5)); // 25
console.log(square(10)); // 100
console.log(square(20)); // 400
```

The function itself does not change.

Only the input changes.

```text
5  → square() → 25
10 → square() → 100
20 → square() → 400
```

### Functions Are Values in JavaScript

This is an important JavaScript concept.

Functions are **first-class values**.

That means a function can be:

- stored in a variable
- stored in an object
- passed to another function
- returned from another function

For example:

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

Here the function is stored in the variable `greet`.

We will study function expressions separately in topic `55`.

### Functions Can Be Passed to Other Functions

```js
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);
```

Here:

```text
greet → function
execute → receives that function
fn() → calls the function
```

This idea is the foundation of **callback functions** and **higher-order functions**, which we will cover later.

### Function Execution and Call Stack

When a function is called, JavaScript starts executing its body.

```js
function greet() {
  console.log("Hello");
}

greet();
```

A simplified execution flow is:

```text
1. JavaScript reaches `greet()`.
2. `greet` is called.
3. A function execution context is created.
4. The function body executes.
5. "Hello" is printed.
6. The function finishes.
7. Its execution context is removed from the call stack.
```

This becomes very important when learning **Execution Context** and **Call Stack**.

### Important Point

> **A function declaration defines reusable code, but the function body executes only when the function is called.**

### Common Interview Questions

**Q: What is a function in JavaScript?**

> **A function is a reusable block of code that performs a specific task. It can accept inputs through parameters and can return a value.**

**Q: Why are functions used?**

> **Functions help us reuse code, avoid repetition, and divide a program into smaller and easier-to-manage parts.**

**Q: What is the difference between a parameter and an argument?**

> **A parameter is a variable defined in the function declaration, while an argument is the actual value passed when calling the function.**

**Q: What happens if a function does not return anything?**

> **It returns `undefined` by default.**

**Q: Does defining a function execute it?**

> **No. Defining a function creates the function, but its body executes when the function is called.**

**Q: Are functions objects in JavaScript?**

> **Yes. Functions are callable objects in JavaScript and can also be treated as values.**

**Q: What does it mean that functions are first-class values?**

> **It means functions can be stored in variables, passed as arguments, returned from other functions, and stored as object properties.**

### Remember

> **Function = reusable code that runs when you call it.**

### Interview Answer

> **A function is a reusable block of code that performs a specific task. It can receive data through parameters and return a value. Functions help us reuse logic and break a program into smaller, manageable parts.**

<!-- =========================  -->

## 52. Parameters / Arguments

### Meaning

> **Parameters are variables defined in a function, while arguments are the actual values passed to the function when it is called.**

Simple difference:

```text
parameter → variable in the function definition
argument  → actual value passed during the function call
```

### Example

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Ajay");
```

Here:

```text
name   → parameter
"Ajay" → argument
```

The parameter `name` receives the argument `"Ajay"`.

So during this function call:

```text
name → "Ajay"
```

and the output is:

```text
Hello Ajay
```

### How It Works

Consider:

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
```

When the function is defined:

```text
a, b → parameters
```

When the function is called:

```js
add(10, 20);
```

the values are:

```text
10 → argument for a
20 → argument for b
```

So conceptually:

```text
a → 10
b → 20
```

Then:

```js
return a + b;
```

becomes:

```text
10 + 20
```

and returns:

```text
30
```

### Multiple Parameters and Arguments

A function can have multiple parameters.

```js
function introduce(name, age, city) {
  console.log(name, age, city);
}

introduce("Ajay", 25, "Delhi");
```

Here:

```text
Parameters:
name
age
city

Arguments:
"Ajay"
25
"Delhi"
```

The values are assigned according to their **position**.

```text
name → "Ajay"
age  → 25
city → "Delhi"
```

### What If We Pass Fewer Arguments?

JavaScript allows us to call a function with fewer arguments than its parameters.

```js
function greet(name, age) {
  console.log(name);
  console.log(age);
}

greet("Ajay");
```

Output:

```text
Ajay
undefined
```

Why?

Because no value was provided for `age`.

So:

```text
name → "Ajay"
age  → undefined
```

### What If We Pass More Arguments?

JavaScript also allows extra arguments.

```js
function greet(name) {
  console.log(name);
}

greet("Ajay", 25, "Delhi");
```

Output:

```text
Ajay
```

The parameter `name` receives `"Ajay"`.

The extra arguments are not assigned to named parameters.

However, JavaScript provides a way to access all passed arguments using **rest parameters**:

```js
function greet(...args) {
  console.log(args);
}

greet("Ajay", 25, "Delhi");
```

Output:

```text
["Ajay", 25, "Delhi"]
```

`...args` collects the arguments into an array.

### Default Parameters

We can give a parameter a default value.

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet("Ajay");
greet();
```

Output:

```text
Hello Ajay
Hello Guest
```

When an argument is provided:

```text
name → "Ajay"
```

When no argument is provided:

```text
name → "Guest"
```

### Important Point — `undefined` and Default Parameters

The default value is used when the argument is `undefined`.

```js
function greet(name = "Guest") {
  console.log(name);
}

greet(undefined); // Guest
```

But `null` is an actual value, so the default is not used.

```js
greet(null); // null
```

So:

```text
undefined → default value is used
null      → default value is not used
```

### Arguments Can Be Expressions

An argument does not have to be a simple value.

It can be an expression.

```js
function multiply(a, b) {
  return a * b;
}

const result = multiply(5 + 5, 2 * 3);

console.log(result); // 60
```

JavaScript evaluates the arguments first:

```text
5 + 5 → 10
2 * 3 → 6
```

Then the function receives:

```text
a → 10
b → 6
```

So:

```text
10 × 6 = 60
```

### Parameters Can Have Different Data Types

JavaScript does not require a parameter to have a specific declared type.

```js
function printValue(value) {
  console.log(value);
}

printValue(10);
printValue("Hello");
printValue(true);
printValue({ name: "Ajay" });
```

The same parameter can receive different types of values.

This is because JavaScript is **dynamically typed**.

### Primitive Arguments

When a primitive value is passed to a function, changing the parameter does not change the original variable.

```js
let age = 25;

function changeAge(value) {
  value = 30;
}

changeAge(age);

console.log(age); // 25
```

Conceptually:

```text
age   → 25
value → 25
```

Inside the function:

```text
value → 30
```

But `age` is still:

```text
25
```

### Object Arguments

Objects behave differently because the value passed to the function is a **reference to the same object**.

```js
const user = {
  name: "Ajay",
};

function changeName(obj) {
  obj.name = "Rahul";
}

changeName(user);

console.log(user.name); // Rahul
```

The function receives a reference to the same object.

Conceptually:

```text
user ──┐
       ↓
   { name: "Ajay" }
       ↑
      obj
```

So:

```js
obj.name = "Rahul";
```

changes the same object that `user` refers to.

### Important Technical Point

It is common to hear:

> "Objects are passed by reference."

This is a useful shortcut, but the technically accurate explanation is:

> **JavaScript always passes arguments by value. When the value is an object, that value is a reference to the object.**

This explains why a function can modify an object's properties.

Example:

```js
const user = {
  name: "Ajay",
};

function updateUser(obj) {
  obj.name = "Rahul";
}

updateUser(user);
```

The function receives a copy of the **reference value**, and that reference still points to the same object.

### Important Difference

Changing the object's property:

```js
function updateUser(obj) {
  obj.name = "Rahul";
}
```

can affect the original object.

But reassigning the parameter:

```js
function updateUser(obj) {
  obj = {
    name: "Rahul",
  };
}
```

does **not** change what the original variable refers to.

Example:

```js
const user = {
  name: "Ajay",
};

function updateUser(obj) {
  obj = {
    name: "Rahul",
  };
}

updateUser(user);

console.log(user.name); // Ajay
```

Why?

Because only the local parameter `obj` was reassigned.

The original `user` variable still refers to the original object.

### Parameters vs Arguments

| Parameters                               | Arguments                                |
| ---------------------------------------- | ---------------------------------------- |
| Defined in the function                  | Passed when calling the function         |
| Act like local variables                 | Actual values                            |
| Example: `a`, `b`                        | Example: `10`, `20`                      |
| Exist as part of the function definition | Exist as values provided during the call |

Example:

```js
function add(a, b) {
  return a + b;
}

add(10, 20);
```

```text
a, b     → parameters
10, 20   → arguments
```

### Common Interview Questions

**Q: What is a parameter?**

> **A parameter is a variable defined in a function that receives a value when the function is called.**

**Q: What is an argument?**

> **An argument is the actual value passed to a function when it is called.**

**Q: What happens if fewer arguments are passed?**

> **The parameters without corresponding arguments receive `undefined`, unless they have default values.**

**Q: What happens if more arguments are passed?**

> **The extra arguments are allowed but are not assigned to named parameters. They can be accessed using mechanisms such as rest parameters.**

**Q: What is a default parameter?**

> **A default parameter provides a value that is used when the corresponding argument is `undefined` or not provided.**

**Q: Are JavaScript arguments passed by value or reference?**

> **JavaScript always passes arguments by value. For objects, the value being passed is a reference to the object, so the function can modify that same object's properties.**

### Remember

> **Parameter = function's input variable. Argument = actual value passed to it.**

### Interview Answer

> **Parameters are the variables defined in a function, while arguments are the actual values passed when calling the function. JavaScript allows fewer or extra arguments, and missing parameters become `undefined` unless a default value is provided.**

<!-- =============================  -->

## 53. `return`

### Meaning

> **`return` sends a value back from a function to the place where the function was called.**

It also **stops the execution of the function immediately**.

### Example

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result); // 30
```

Here:

```js
return a + b;
```

calculates:

```text
10 + 20 = 30
```

and sends `30` back to:

```js
const result = add(10, 20);
```

So:

```text
result → 30
```

### How It Works

Consider:

```js
function calculate() {
  return 10 + 20;
}

const result = calculate();

console.log(result); // 30
```

Step by step:

```text
1. `calculate()` is called.
2. Function starts executing.
3. `10 + 20` is calculated.
4. `return` sends `30` back.
5. Function execution stops.
6. `result` receives `30`.
```

Mental flow:

```text
calculate()
    ↓
return 30
    ↓
result = 30
```

### `return` Stops the Function

Anything written after `return` in the same function body will not execute.

```js
function test() {
  console.log("Start");

  return;

  console.log("End");
}

test();
```

Output:

```text
Start
```

`"End"` is never printed because the function stopped at `return`.

So:

> **`return` does two things: it sends a value back and stops the current function execution.**

### Returning a Value

We can return any JavaScript value.

```js
function getName() {
  return "Ajay";
}

console.log(getName()); // Ajay
```

We can return a number:

```js
function getAge() {
  return 25;
}
```

A boolean:

```js
function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(25)); // true
```

An array:

```js
function getNumbers() {
  return [10, 20, 30];
}
```

An object:

```js
function getUser() {
  return {
    name: "Ajay",
    age: 25,
  };
}
```

### `return` Without a Value

We can write:

```js
function test() {
  return;
}

console.log(test()); // undefined
```

When `return` has no value, the function returns `undefined`.

This is also useful when we want to **stop the function early**.

```js
function checkAge(age) {
  if (age < 18) {
    return;
  }

  console.log("Adult");
}

checkAge(15);
```

For `15`:

```text
age < 18 → true
return → function stops
"Adult" is not printed
```

### Function Without `return`

If a function finishes without reaching a `return` statement, JavaScript returns `undefined`.

```js
function greet() {
  console.log("Hello");
}

const result = greet();

console.log(result); // undefined
```

The function performs an action, but it does not return a value.

So these both result in `undefined`:

```js
function test1() {
  return;
}

function test2() {}
```

### `return` vs `console.log()`

This is a very important distinction.

`console.log()` **prints** a value.

`return` **sends a value back from the function**.

```js
function add(a, b) {
  console.log(a + b);
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
undefined
```

Why?

```text
console.log(30) → prints 30
no return       → function returns undefined
```

Now:

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

Here `return` gives the value to the caller.

### Important Mental Model

Think of a function like a machine:

```text
Input
  ↓
Function
  ↓
Processing
  ↓
return
  ↓
Output
```

Example:

```js
function square(number) {
  return number * number;
}
```

```text
5
 ↓
square()
 ↓
5 × 5
 ↓
25
```

So:

```js
const result = square(5);
```

gives:

```text
result → 25
```

### Returning Early

`return` is commonly used for **early exit**.

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    return "Insufficient balance";
  }

  return balance - amount;
}

console.log(withdraw(1000, 1500));
// Insufficient balance

console.log(withdraw(1000, 500));
// 500
```

Execution:

```text
withdraw(1000, 1500)

amount > balance
1500 > 1000 → true

return "Insufficient balance"
        ↓
function stops
```

The second `return` is never reached in that case.

### Multiple `return` Statements

A function can have multiple `return` statements.

```js
function getStatus(age) {
  if (age < 18) {
    return "Minor";
  }

  if (age >= 60) {
    return "Senior";
  }

  return "Adult";
}
```

Only one of these returns will be reached for a particular function call.

```js
console.log(getStatus(15)); // Minor
console.log(getStatus(30)); // Adult
console.log(getStatus(70)); // Senior
```

### Important Point

> **Once a `return` statement is executed, the current function stops immediately.**

This is why multiple `return` statements can be used for different conditions.

### Returning From a Function Does Not Stop the Whole Program

This is an important distinction.

```js
function greet() {
  return "Hello";
}

console.log(greet());

console.log("Program continues");
```

Output:

```text
Hello
Program continues
```

`return` only stops the **current function**, not the entire JavaScript program.

### `return` in `map()`

`return` is also important when using callback functions.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled); // [2, 4, 6]
```

Here the callback's `return` provides the value that `map()` puts into the new array.

Step by step:

```text
1 → return 2
2 → return 4
3 → return 6

new array → [2, 4, 6]
```

This is why forgetting `return` can cause a problem:

```js
const doubled = numbers.map((number) => {
  number * 2;
});

console.log(doubled);
// [undefined, undefined, undefined]
```

The callback did not return the calculated value.

### Common Interview Questions

**Q: What does `return` do in JavaScript?**

> **`return` sends a value back from a function to its caller and stops the function's execution.**

**Q: What happens if we use `return` without a value?**

> **The function returns `undefined` and stops executing.**

**Q: What happens if a function has no `return` statement?**

> **It returns `undefined` when it finishes.**

**Q: What is the difference between `return` and `console.log()`?**

> **`console.log()` prints a value to the console, while `return` sends a value back to the code that called the function.**

**Q: Does `return` stop the entire program?**

> **No. It only stops the execution of the current function.**

**Q: Can a function have multiple `return` statements?**

> **Yes. A function can have multiple `return` statements, but only the first one reached during that particular execution will run.**

### Remember

> **`return` = send a value back and stop the function.**

### Interview Answer

> **`return` is used to send a value back from a function to its caller. When JavaScript executes a `return`, the current function stops immediately. If a function doesn't return a value, it returns `undefined` by default.**

<!-- ===================================  -->

## 54. Function Declaration

### Meaning

> **A function declaration is a way to define a named function using the `function` keyword.**

Example:

```js
function greet() {
  console.log("Hello");
}
```

Here:

```text
function → keyword
greet    → function name
()       → parameters
{}       → function body
```

The function body runs only when we call it:

```js
greet(); // Hello
```

### Example

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result); // 30
```

Here:

```text
add      → function name
a, b     → parameters
10, 20   → arguments
a + b    → function logic
30       → returned value
```

### How It Works

When JavaScript reaches:

```js
function greet() {
  console.log("Hello");
}
```

the function is defined.

But this does **not** execute:

```js
console.log("Hello");
```

The function body executes when we call:

```js
greet();
```

Execution:

```text
1. Function `greet` is declared.
2. JavaScript reaches `greet()`.
3. The function is called.
4. Function body starts executing.
5. `"Hello"` is printed.
6. Function finishes.
```

### Function Declaration Is Hoisted

One important feature of function declarations is **hoisting**.

A function declaration can be called **before its declaration in the code**.

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```text
Hello
```

This works because function declarations are available before their declaration is reached during normal execution.

### Important Point

> **Function declarations are hoisted, so a function declared with `function name() {}` can normally be called before its declaration in the same scope.**

This is different from function expressions and arrow functions.

For example, this does not work:

```js
greet();

const greet = function () {
  console.log("Hello");
};
```

And this does not work:

```js
greet();

const greet = () => {
  console.log("Hello");
};
```

These are **function expressions**, not function declarations.

We will compare them in topic `55`.

### Function Declaration With Parameters

A function declaration can accept parameters.

```js
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 4)); // 20
```

Here:

```text
a → 5
b → 4
```

and:

```text
5 × 4 = 20
```

### Function Declaration Can Return Any Value

```js
function getUser() {
  return {
    name: "Ajay",
    age: 25,
  };
}

const user = getUser();

console.log(user.name); // Ajay
```

The function returns an object.

### Function Declaration Creates a Reusable Function

The same function can be called multiple times.

```js
function square(number) {
  return number * number;
}

console.log(square(2)); // 4
console.log(square(5)); // 25
console.log(square(10)); // 100
```

The logic is written once and reused.

### Function Declaration vs Function Call

Do not confuse these two.

**Declaration:**

```js
function greet() {
  console.log("Hello");
}
```

This **defines** the function.

**Call:**

```js
greet();
```

This **executes** the function.

Simple difference:

```text
function greet() { ... } → create/define function
greet()                  → call/execute function
```

### Function Declaration vs Function Expression

| Function Declaration                      | Function Expression                                            |
| ----------------------------------------- | -------------------------------------------------------------- |
| `function greet() {}`                     | `const greet = function() {}`                                  |
| Function has its own name                 | Function is assigned to a variable                             |
| Function declaration is hoisted           | Variable initialization is not available before it is executed |
| Can normally be called before declaration | Cannot normally be called before initialization                |

Example:

```js
// Function Declaration
greet();

function greet() {
  console.log("Hello");
}
```

Works.

But:

```js
// Function Expression
greet();

const greet = function () {
  console.log("Hello");
};
```

Throws an error because `greet` cannot be accessed before its initialization.

### Important Interview Point

Do not simply remember:

> "Function expressions are not hoisted."

A more technically correct explanation is:

> **The function expression itself is not available before the variable is initialized. With `let`/`const`, accessing the variable before initialization causes a TDZ error.**

For a function expression using `var`, the behavior is different:

```js
greet();

var greet = function () {
  console.log("Hello");
};
```

Here `greet` is hoisted as `undefined`, so calling it results in:

```text
TypeError: greet is not a function
```

This distinction becomes important when learning **hoisting** and **TDZ**.

### Important Point

> **A function declaration is a complete function definition created with the `function` keyword, and function declarations are hoisted.**

### Common Interview Questions

**Q: What is a function declaration?**

> **A function declaration defines a named function using the `function` keyword, followed by the function name, parameters, and body.**

**Q: Are function declarations hoisted?**

> **Yes. Function declarations are hoisted, so they can normally be called before their declaration in the same scope.**

**Q: What is the difference between a function declaration and a function call?**

> **A function declaration defines the function, while a function call executes the function.**

**Q: Can a function declaration have parameters and return a value?**

> **Yes. It can accept parameters and use `return` to send a value back to the caller.**

**Q: How is a function declaration different from a function expression?**

> **A function declaration directly defines a named function, while a function expression creates a function as part of an expression and usually assigns it to a variable. Function declarations are hoisted differently from function expressions.**

### Remember

> **Function Declaration = `function name() {}` used to define a named function, and it is hoisted.**

### Interview Answer

> **A function declaration is a way to define a named function using the `function` keyword. It can accept parameters and return a value, and unlike function expressions, function declarations are hoisted, so they can normally be called before their declaration.**

<!-- ======================  -->

## 55. Function Expression

### Meaning

> **A function expression is a function that is created and assigned to a variable or another value.**

A function expression creates a function as a **value**.

The function can then be stored in a variable and called using that variable.

### Example

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

Here:

```text
function () { ... } → function expression
greet               → variable storing the function
greet()             → calls the function
```

The function does not have its own name in this example. This is called an **anonymous function expression**.

### How It Works

First, JavaScript creates the function:

```js
function () {
  console.log("Hello");
}
```

Then that function is assigned to `greet`:

```js
const greet = function () {
  console.log("Hello");
};
```

Now `greet` refers to that function.

When we write:

```js
greet();
```

JavaScript calls the function stored in `greet`.

So mentally:

```text
greet
  ↓
function () {
  console.log("Hello");
}
```

### Named Function Expression

A function expression can also have a name:

```js
const greet = function sayHello() {
  console.log("Hello");
};

greet();
```

Here:

- `greet` is the variable holding the function.
- `sayHello` is the function's internal name.
- The function is still a **function expression** because it is created as part of an expression and assigned to `greet`.

The name can be useful for debugging and recursion.

### Function Declaration vs Function Expression

```js
// Function Declaration
function greet() {
  console.log("Hello");
}
```

```js
// Function Expression
const greet = function () {
  console.log("Hello");
};
```

Main difference:

| Function Declaration                         | Function Expression                                          |
| -------------------------------------------- | ------------------------------------------------------------ |
| Uses `function` as a declaration             | Function is created as part of an expression                 |
| Has a function name                          | Can be anonymous                                             |
| Function declaration is hoisted              | Function expression itself is not callable before assignment |
| `greet()` can be used before the declaration | With `const`, calling before initialization causes an error  |

### Important: Hoisting

This works with a function declaration:

```js
greet();

function greet() {
  console.log("Hello");
}
```

But this does not work:

```js
greet();

const greet = function () {
  console.log("Hello");
};
```

Why?

With `const`, the variable exists in the **Temporal Dead Zone** until its declaration is initialized.

The function expression is created only when this line executes:

```js
const greet = function () {
  console.log("Hello");
};
```

So before that line executes, `greet` cannot be used.

With `var`:

```js
greet();

var greet = function () {
  console.log("Hello");
};
```

This gives:

```text
TypeError: greet is not a function
```

Because `var greet` is hoisted and initially has the value `undefined`.

So:

```text
Function Declaration
→ function itself is available before its declaration

Function Expression with const
→ variable is in TDZ before initialization

Function Expression with var
→ variable is initially undefined
```

### Why Function Expressions Are Useful

Function expressions are useful when a function needs to be treated as a **value**.

For example, a function can be:

- stored in a variable
- passed as an argument
- returned from another function
- used as a callback

Example:

```js
const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

Here the function is stored in `add`, and `add` can be used to call it.

### Remember

> **Function Expression = create a function as a value and store it in a variable or use it in an expression.**

### Interview Answer

> **A function expression is a function created as part of an expression and usually assigned to a variable. It can be anonymous or named. Unlike a function declaration, the function expression is not available for calling before its assignment is executed.**

<!-- ==========================  -->

## 56. Arrow Function

### Meaning

> **An arrow function is a shorter way to write a function expression using the `=>` syntax.**

It was introduced in **ES6**.

### Example

```js
const greet = () => {
  console.log("Hello");
};

greet();
```

Here:

```text
()      → parameters
=>      → arrow syntax
{ ... } → function body
```

This is similar to a normal function expression:

```js
const greet = function () {
  console.log("Hello");
};
```

The main difference is that the arrow function uses `=>` and has different behavior for `this`.

### Parameters

If there is one parameter, parentheses can be removed:

```js
const square = (number) => {
  return number * number;
};

console.log(square(5));
```

If there are multiple parameters, parentheses are required:

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
```

For zero parameters, parentheses are required:

```js
const greet = () => {
  console.log("Hello");
};
```

### Implicit Return

If an arrow function has only one expression, `{}` and `return` can be removed.

```js
const add = (a, b) => a + b;

console.log(add(10, 20));
```

Output:

```text
30
```

This is called an **implicit return** because the expression is automatically returned.

The same function with an explicit return:

```js
const add = (a, b) => {
  return a + b;
};
```

Both return the same value.

### Important Point

When using `{}`, you need `return` if you want to return a value:

```js
const square = (number) => {
  return number * number;
};
```

Without `return`:

```js
const square = (number) => {
  number * number;
};
```

The function returns `undefined`.

But without `{}`, the expression is automatically returned:

```js
const square = (number) => number * number;
```

### Returning an Object

There is an important syntax rule when returning an object directly.

This does **not** return an object:

```js
const getUser = () => {
  name: "Ajay";
};
```

Here `{}` is treated as the **function body**, not an object.

Use parentheses around the object:

```js
const getUser = () => ({
  name: "Ajay",
});

console.log(getUser());
```

Output:

```text
{ name: "Ajay" }
```

### Arrow Function vs Regular Function

```js
const greet1 = function () {
  console.log("Hello");
};

const greet2 = () => {
  console.log("Hello");
};
```

Both are functions, but arrow functions have an important difference:

**Arrow functions do not have their own `this`.**

They take `this` from the surrounding scope.

Example:

```js
const user = {
  name: "Ajay",

  greet: function () {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text
Ajay
```

Here, the regular function gets its own `this`, which refers to `user` when called as `user.greet()`.

With an arrow function:

```js
const user = {
  name: "Ajay",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

The arrow function does **not** create its own `this`.

It gets `this` from the surrounding scope.

So arrow functions should not be used just because they are shorter. The `this` behavior matters.

### Other Important Differences

Arrow functions:

- do not have their own `this`
- do not have their own `arguments`
- cannot be used as constructors with `new`
- are commonly used for callbacks

Example of a callback:

```js
const numbers = [10, 20, 30];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
```

Output:

```text
[20, 40, 60]
```

Here:

```js
(number) => number * 2;
```

is an arrow function passed to `map()`.

### Remember

> **Arrow Function = shorter function syntax + lexical `this`.**

Think:

```text
Regular function → has its own `this`
Arrow function   → gets `this` from outer scope
```

### Interview Answer

> **An arrow function is a shorter syntax for writing function expressions using `=>`. It supports implicit return and is commonly used for callbacks. The important difference is that an arrow function does not have its own `this`; it gets `this` from its surrounding scope.**

<!-- =========================  -->

## 57. Callback Function

### Meaning

> **A callback function is a function that is passed to another function as an argument, so it can be called later by that function.**

The important point is that **one function receives another function**.

### Example

```js
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Ajay");
}

processUser(greet);
```

Output:

```text
Hello Ajay
```

Here:

```text
greet
  ↓
passed as an argument
  ↓
processUser(greet)
  ↓
processUser calls greet
```

`greet` is the **callback function** because it is passed to `processUser()`.

### How It Works

Look at this line:

```js
processUser(greet);
```

We are passing the function itself:

```js
greet;
```

We are **not calling** it.

If we write:

```js
processUser(greet());
```

then `greet()` runs immediately and its return value is passed to `processUser`.

So:

```text
greet     → pass the function
greet()   → call the function
```

Inside `processUser()`:

```js
function processUser(callback) {
  callback("Ajay");
}
```

The parameter `callback` now refers to the `greet` function.

So this:

```js
callback("Ajay");
```

is effectively calling:

```js
greet("Ajay");
```

### Callback with Arrow Function

A callback is often written as an arrow function.

```js
function processUser(callback) {
  callback("Ajay");
}

processUser((name) => {
  console.log("Hello " + name);
});
```

Here:

```js
(name) => {
  console.log("Hello " + name);
};
```

is the callback function.

### Callback with Array Methods

Callbacks are very common in JavaScript array methods.

For example, with `map()`:

```js
const numbers = [10, 20, 30];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);
```

Output:

```text
[20, 40, 60]
```

The function passed to `map()` is the callback:

```js
function (number) {
  return number * 2;
}
```

The same thing can be written using an arrow function:

```js
const numbers = [10, 20, 30];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
```

Here:

```js
(number) => number * 2;
```

is the callback.

### Synchronous Callback

A callback does not automatically mean asynchronous.

A callback can execute **immediately**.

```js
function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}

calculate(10, 20, (result) => {
  console.log(result);
});
```

Output:

```text
30
```

The callback runs during the execution of `calculate()`.

This is a **synchronous callback**.

### Asynchronous Callback

Callbacks are also commonly used with asynchronous operations.

```js
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

Here:

```js
() => {
  console.log("Hello");
};
```

is a callback passed to `setTimeout()`.

The callback is executed later, after the timer finishes.

So remember:

> **Callback and asynchronous are not the same thing.**

A callback can be synchronous or asynchronous.

### Important Point

A callback is about **how a function is passed and used**, not about whether the operation is asynchronous.

```text
Callback
→ function passed to another function

Synchronous callback
→ called during the current execution

Asynchronous callback
→ called later after an asynchronous operation completes
```

### Common Interview Question

**What is the difference between passing a function and calling a function?**

```js
processUser(greet);
```

Here we **pass** the function.

```js
processUser(greet());
```

Here we **call** `greet()` first and pass its return value.

This difference is very important when working with callbacks.

### Remember

> **Callback = a function passed to another function, which can call it when needed.**

Think:

```text
Function A
   ↓
receives Function B
   ↓
Function A calls Function B
```

### Interview Answer

> **A callback is a function passed as an argument to another function so that the receiving function can call it. Callbacks can be synchronous or asynchronous. They are commonly used in array methods, event handlers, timers, and asynchronous operations.**

<!-- ========================= -->

## 58. Higher-Order Function

### Meaning

> **A higher-order function is a function that takes another function as an argument, returns a function, or does both.**

In simple terms, a higher-order function **works with other functions**.

A function becomes a higher-order function when it treats another function as a value.

### Example

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(10, 20, add));
```

Output:

```text
30
```

Here:

```text
calculate
   ↓
receives add function
   ↓
calls add(10, 20)
   ↓
returns 30
```

`calculate()` is a **higher-order function** because it receives another function as an argument.

`add()` is the **callback function**.

### Callback vs Higher-Order Function

These two concepts are closely related but they are not the same thing.

```js
function process(callback) {
  callback();
}

function greet() {
  console.log("Hello");
}

process(greet);
```

Here:

```text
process() → Higher-Order Function
greet()   → Callback Function
```

Why?

`process()` receives a function, so it is a **higher-order function**.

`greet` is passed into `process()`, so it is a **callback**.

Think:

> **Callback = the function being passed.**
> **Higher-Order Function = the function receiving or returning another function.**

### Returning a Function

A higher-order function can also **return another function**.

```js
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);

console.log(double(5));
```

Output:

```text
10
```

### How It Works

First:

```js
const double = createMultiplier(2);
```

`createMultiplier(2)` runs.

Inside it, a new function is created and returned:

```js
function (number) {
  return number * 2;
}
```

That returned function is stored in `double`.

So mentally:

```text
createMultiplier(2)
        ↓
returns a function
        ↓
double
        ↓
function(number) {
    return number * 2;
}
```

Then:

```js
double(5);
```

calls the returned function.

Result:

```text
10
```

### Array Methods as Higher-Order Functions

Many JavaScript array methods are higher-order functions because they receive functions as arguments.

For example:

```js
const numbers = [10, 20, 30];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
```

Output:

```text
[20, 40, 60]
```

`map()` is a higher-order function because it receives this function:

```js
(number) => number * 2;
```

as an argument.

The arrow function is the **callback**.

Other common higher-order array methods include:

```text
map()
filter()
reduce()
find()
some()
every()
forEach()
```

They receive a callback function.

### Higher-Order Function Does Not Mean Asynchronous

A higher-order function can be completely synchronous.

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(10, 20, (x, y) => x + y);

console.log(result);
```

There is no asynchronous operation here.

So:

```text
Higher-order function
→ about functions being passed or returned

Asynchronous function
→ about when an operation completes
```

These are different concepts.

### Important Point

A function is a **higher-order function** if it:

```text
1. Takes a function as an argument
OR
2. Returns a function
OR
3. Does both
```

It does not have to do both.

For example:

```js
function run(callback) {
  callback();
}
```

This is a higher-order function because it **takes a function**.

And:

```js
function createFunction() {
  return function () {
    console.log("Hello");
  };
}
```

This is also a higher-order function because it **returns a function**.

### Why Higher-Order Functions Are Useful

Higher-order functions allow us to write reusable functions.

Instead of creating separate functions for every operation:

```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
```

We can create one general function:

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 20, (a, b) => a + b));
console.log(calculate(10, 20, (a, b) => a * b));
```

Output:

```text
30
200
```

The main logic is reusable, while the operation can change.

### Remember

> **Higher-Order Function = a function that takes another function or returns another function.**

Think:

```text
Function
   ↓
works with
   ↓
another function
```

### Interview Answer

> **A higher-order function is a function that takes another function as an argument, returns a function, or both. For example, `map()` is a higher-order function because it receives a callback function. The callback is the function being passed, while the higher-order function is the function that receives or returns it.**

<!-- ==========================  -->

## 59. Scope

### Meaning

> **Scope defines where a variable can be accessed in a JavaScript program.**

In simple words, **scope decides which part of the code can see and use a variable**.

For example:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

greet();
```

Here, `name` is accessible inside `greet()` because `greet()` is inside the scope where `name` is available.

### How It Works

JavaScript does not allow every variable to be accessed from everywhere.

The scope of a variable depends on **where the variable is declared**.

For example:

```js
function greet() {
  const message = "Hello";

  console.log(message);
}

greet();

console.log(message);
```

Output:

```text
Hello
ReferenceError: message is not defined
```

Why?

`message` was declared inside `greet()`.

So it is available inside that function, but not outside it.

Think of the function as a boundary:

```text
Outside
┌─────────────────────────────┐
│                             │
│  function greet() {         │
│                             │
│     message ← accessible    │
│                             │
│  }                          │
│                             │
└─────────────────────────────┘

message → not accessible outside
```

### Scope Depends on Where the Variable Is Declared

Consider:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

greet();
```

`name` is declared outside `greet()`, so `greet()` can access it.

This works because an inner scope can access variables from its outer scope.

But the opposite does not work:

```js
function greet() {
  const message = "Hello";
}

console.log(message);
```

The outer code cannot access a variable declared inside the function.

So:

```text
Outer scope → can be accessed by inner scope

Inner scope → cannot be directly accessed by outer scope
```

### Scope Types

JavaScript mainly has these scope types:

```text
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope
```

We will study each one separately.

### Global Scope

A variable declared outside functions and blocks can have **global scope**.

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

greet();
```

`name` is available inside `greet()` because it is declared in the outer/global scope.

### Function Scope

A variable declared with `var` inside a function is available throughout that function.

```js
function greet() {
  var message = "Hello";

  console.log(message);
}

greet();
```

But it cannot be accessed outside the function:

```js
function greet() {
  var message = "Hello";
}

console.log(message);
```

This causes an error because `message` belongs to the function scope.

### Block Scope

`let` and `const` are **block-scoped**.

A block is code inside `{}`.

```js
if (true) {
  let age = 25;
  const name = "Ajay";

  console.log(age);
  console.log(name);
}
```

They can be accessed inside the block.

But not outside:

```js
if (true) {
  let age = 25;
}

console.log(age);
```

This causes:

```text
ReferenceError
```

because `age` exists only inside that block.

### `var` vs `let` / `const`

This is an important interview point.

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

Why?

```text
var
→ function-scoped

let / const
→ block-scoped
```

So the `{}` block does not create a separate scope for `var`, but it does create a scope for `let` and `const`.

### Nested Scope

Scopes can exist inside other scopes.

```js
const outer = "Outer";

function first() {
  const middle = "Middle";

  function second() {
    const inner = "Inner";

    console.log(outer);
    console.log(middle);
    console.log(inner);
  }

  second();
}

first();
```

Inside `second()`, JavaScript can access:

```text
inner   → current scope
middle  → outer scope
outer   → even farther outer scope
```

This is the basic idea behind the **scope chain**.

### Scope Chain

When JavaScript tries to find a variable, it first looks in the **current scope**.

If it does not find the variable, it looks in the outer scope.

If it still does not find it, it continues moving outward.

Example:

```js
const a = 10;

function outer() {
  const b = 20;

  function inner() {
    const c = 30;

    console.log(c);
    console.log(b);
    console.log(a);
  }

  inner();
}

outer();
```

For `c`:

```text
inner scope → found
```

For `b`:

```text
inner scope → not found
outer scope → found
```

For `a`:

```text
inner scope → not found
outer scope → not found
global scope → found
```

If JavaScript reaches the outermost scope and still cannot find the variable, it produces a `ReferenceError`.

### Important Point

> **Scope is determined by where a variable is declared, not where the function is called.**

Example:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

function start() {
  greet();
}

start();
```

`greet()` can access `name` because of **where `greet` is written**, not because `start()` called it.

This idea becomes very important when learning **lexical scope and closures**.

### Scope vs Scope Chain

These two terms are related but different.

**Scope:**

> Defines where a variable can be accessed.

**Scope chain:**

> The chain of current and outer scopes JavaScript checks when looking for a variable.

Example:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

JavaScript searches through this chain when resolving a variable.

### Remember

> **Scope = the area of code where a variable is accessible.**

Mental model:

```text
Variable
   ↓
Where was it declared?
   ↓
That determines its scope
   ↓
Only allowed scopes can access it
```

### Interview Answer

> **Scope defines where a variable can be accessed in JavaScript. The scope depends on where the variable is declared. JavaScript has global, function, and block scopes, and when looking for a variable, it searches from the current scope through its outer scopes.**

<!-- ========================= -->

## 60. Global Scope

### Meaning

> **Global scope is the outermost scope of a JavaScript program, where variables can be accessed from different parts of the program, depending on how they are declared.**

A variable declared at the top level of a script is in the **global scope**.

### Example

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

greet();
```

Here, `name` is declared outside the function, so it is available to the code inside `greet()`.

Output:

```text
Ajay
```

### How It Works

Think of global scope as the **outermost scope**:

```text
Global Scope
│
├── name
│
├── function greet()
│      └── can access name
│
└── other code
```

Code inside an inner scope can access variables from the global scope.

But a variable declared inside a function does not become global:

```js
function greet() {
  const message = "Hello";
}

console.log(message);
```

This causes a `ReferenceError` because `message` belongs to the function's scope.

### Global Scope and Scope Chain

When JavaScript needs a variable, it first checks the current scope.

If it cannot find it, JavaScript moves outward through the scope chain.

For example:

```js
const name = "Ajay";

function greet() {
  function sayHello() {
    console.log(name);
  }

  sayHello();
}

greet();
```

When `sayHello()` tries to access `name`:

```text
sayHello scope
      ↓
greet scope
      ↓
global scope
      ↓
name found
```

So `name` can be accessed because JavaScript eventually finds it in the global scope.

### Global Variables

A variable declared in the global scope is commonly called a **global variable**.

```js
const appName = "My App";

function startApp() {
  console.log(appName);
}

function showAppName() {
  console.log(appName);
}

startApp();
showAppName();
```

Both functions can access `appName` because it is available in their outer/global scope.

### `var`, `let`, and `const` in Global Scope

There is an important difference in browser JavaScript.

```js
var a = 10;
let b = 20;
const c = 30;
```

At the top level of a browser script:

- `var` creates a property on the global object.
- `let` and `const` do **not** create properties on the global object.

For example:

```js
var a = 10;
let b = 20;
const c = 30;

console.log(window.a); // 10
console.log(window.b); // undefined
console.log(window.c); // undefined
```

This is an important distinction between **global scope** and the **global object**.

### Global Scope vs Global Object

These terms should not be treated as exactly the same.

**Global scope** is the outermost scope where top-level declarations can be available.

The **global object** is an object provided by the JavaScript environment.

In a browser, the global object is:

```js
window;
```

In modern JavaScript, `globalThis` provides a standard way to access the global object:

```js
console.log(globalThis);
```

In a browser:

```js
globalThis === window; // true
```

So:

```text
Global Scope
→ scope where global declarations exist

Global Object
→ object representing the global environment
```

### Important Point

Global variables should be used carefully.

If many parts of an application depend on the same global variables, the code can become harder to understand and maintain.

For example:

```js
let userName = "Ajay";

function changeName() {
  userName = "Rahul";
}

function printName() {
  console.log(userName);
}
```

Now different functions can change or depend on the same global variable.

For larger applications, keeping data inside appropriate local scopes is generally easier to manage.

### Important Interview Point

Do not say:

> **"Any variable declared with `var`, `let`, or `const` becomes a property of the global object."**

That is incorrect.

In a browser's classic script:

```js
var x = 10;
let y = 20;
const z = 30;
```

Only `x` becomes a property of `window`.

```js
console.log(window.x); // 10
console.log(window.y); // undefined
console.log(window.z); // undefined
```

### Remember

> **Global Scope = the outermost scope of the program.**

Mental model:

```text
Global Scope
     ↓
outermost area
     ↓
inner scopes can access it
```

### Interview Answer

> **Global scope is the outermost scope in JavaScript. Variables declared at the top level can be accessed from inner scopes through the scope chain. In browsers, top-level `var` in a classic script becomes a property of `window`, while top-level `let` and `const` do not.**

<!-- ============================================ -->

## 61. Function Scope

### Meaning

> **Function scope means a variable is accessible only inside the function where it is declared.**

In JavaScript, `var` is **function-scoped**.

A variable declared with `var` inside a function cannot be accessed outside that function.

### Example

```js
function greet() {
  var message = "Hello";

  console.log(message);
}

greet();
```

Output:

```text
Hello
```

`message` can be accessed inside `greet()` because it was declared inside that function.

But this does not work:

```js
function greet() {
  var message = "Hello";
}

console.log(message);
```

This gives:

```text
ReferenceError
```

because `message` belongs to the function scope of `greet()`.

### How It Works

Think of a function as a boundary:

```text
Outside Function
│
│  message → ❌ cannot access
│
┌──────────────────────────┐
│ function greet() {       │
│                          │
│   var message = "Hello"; │
│                          │
│   message → ✅ accessible│
│                          │
│ }                        │
└──────────────────────────┘
```

The variable exists within the function's scope.

### `var` Is Function-Scoped

The important rule is:

> **`var` is scoped to the nearest function.**

For example:

```js
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x);
}

test();
```

Output:

```text
10
```

Even though `x` was declared inside the `if` block, it is still accessible throughout the function.

Why?

Because `if` creates a block, but `var` does not respect block scope.

It respects **function scope**.

### `var` vs `let` / `const`

This is one of the most important differences:

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

test();
```

Why?

```text
var
→ function-scoped

let
→ block-scoped

const
→ block-scoped
```

The `if` block creates a scope for `let` and `const`, but not for `var`.

### Function Scope vs Block Scope

Consider:

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  console.log(b);
}

test();
```

`a` works because `var` is function-scoped.

`b` fails because `let` is block-scoped.

So:

```text
Function
└── var → accessible throughout the function

Block {}
└── let / const → accessible only inside the block
```

### Nested Functions

A nested function can access variables from its outer function.

```js
function outer() {
  var message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

Output:

```text
Hello
```

`inner()` can access `message` because `message` belongs to its outer function scope.

The scope chain allows JavaScript to search the outer scope when the variable is not found in the current scope.

### Function Scope Does Not Mean Function Call

A common confusion is between **where a variable is scoped** and **when the function runs**.

```js
function greet() {
  var message = "Hello";
}
```

The function scope is created by the function's code structure.

Calling the function:

```js
greet();
```

causes the function's code to execute.

The important point is that `message` is not accessible from outside the function.

### Important Point

> **Function scope is mainly associated with `var`. `let` and `const` are not function-scoped; they are block-scoped.**

Example:

```js
function test() {
  var x = 10;

  if (true) {
    let y = 20;
    const z = 30;
  }

  console.log(x); // 10
}
```

`x` is available throughout `test()`, while `y` and `z` are limited to the `if` block.

### Remember

> **Function Scope = `var` belongs to the nearest function.**

Mental model:

```text
var
 ↓
nearest function
 ↓
accessible throughout that function
```

### Interview Answer

> # **Function scope means a variable is accessible within the function where it is declared. In JavaScript, `var` is function-scoped, so it is accessible throughout the function even if it is declared inside a block. In contrast, `let` and `const` are block-scoped.**

<!-- ===============================   -->

## 62. Block Scope

### Meaning

> **Block scope means a variable is accessible only inside the block `{}` where it is declared.**

In JavaScript, `let` and `const` are **block-scoped**.

A block can be created by:

```js
if (true) {
  // block
}
```

```js
for (let i = 0; i < 3; i++) {
  // block
}
```

```js
{
  // block
}
```

### Example

```js
if (true) {
  let message = "Hello";
  const name = "Ajay";

  console.log(message);
  console.log(name);
}
```

Output:

```text
Hello
Ajay
```

Both variables can be accessed inside the block.

But they cannot be accessed outside:

```js
if (true) {
  let message = "Hello";
}

console.log(message);
```

This gives:

```text
ReferenceError
```

because `message` belongs to the `if` block.

### How It Works

Think of `{}` as a boundary:

```text
Outside Block
│
│  message → ❌ cannot access
│
┌─────────────────────────┐
│ if (true) {             │
│                         │
│   let message = "Hello" │
│                         │
│   message → ✅          │
│                         │
│ }                       │
└─────────────────────────┘
```

The variable exists only inside that block.

### `let` and `const` Are Block-Scoped

Both `let` and `const` follow block scope:

```js
if (true) {
  let age = 25;
  const name = "Ajay";

  console.log(age);
  console.log(name);
}
```

But:

```js
if (true) {
  let age = 25;
  const name = "Ajay";
}

console.log(age); // ReferenceError
console.log(name); // ReferenceError
```

The variables are not available outside the block.

### `var` vs `let` / `const`

This is an important interview difference.

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

Why?

```text
var
→ function-scoped

let
→ block-scoped

const
→ block-scoped
```

The `if` block creates a scope for `let` and `const`, but `var` does not respect this block boundary.

### Block Scope Inside a Function

Block scope can exist inside function scope.

```js
function test() {
  var a = 10;

  if (true) {
    let b = 20;
    const c = 30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
  }
}

test();
```

Here:

```text
Function Scope
│
├── var a
│
└── Block Scope
    ├── let b
    └── const c
```

The inner block can access `a` because `a` belongs to its outer function scope.

### Nested Blocks

Blocks can be nested inside other blocks.

```js
{
  let a = 10;

  {
    let b = 20;

    console.log(a); // 10
    console.log(b); // 20
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
}
```

The inner block can access variables from the outer block.

But the outer block cannot access variables declared inside the inner block.

So:

```text
Outer Block
│
├── a
│
└── Inner Block
    └── b

Inner Block → can access a and b
Outer Block → can access a, but not b
```

### Block Scope in `for` Loops

Block scope is especially useful with `let` in loops.

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

The first part prints:

```text
0
1
2
```

But the last line causes:

```text
ReferenceError
```

because `i` is scoped to the `for` loop.

This is one reason `let` is preferred over `var` for loop variables.

### Important Point

> **A block is any code surrounded by `{}` that creates a lexical scope, and `let`/`const` declarations inside it are limited to that scope.**

For example:

```js
if (true) {
  let x = 10;
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Both `x` and `i` are block-scoped.

### Block Scope vs Function Scope

| Function Scope                               | Block Scope                                |
| -------------------------------------------- | ------------------------------------------ |
| Mainly associated with `var`                 | `let` and `const`                          |
| Boundary is a function                       | Boundary is a block `{}`                   |
| `var` ignores `if`/`for` block boundaries    | `let`/`const` respect block boundaries     |
| Variable can be used throughout the function | Variable can be used only inside the block |

Example:

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
}
```

### Remember

> **Block Scope = `let` and `const` belong to the `{}` block where they are declared.**

Mental model:

```text
{
   let / const
      ↓
   only inside this block
}
```

### Interview Answer

> **Block scope means a variable is accessible only inside the block where it is declared. `let` and `const` are block-scoped, so they are limited to `{}` blocks such as `if`, `for`, and `while`. `var` is different because it is function-scoped rather than block-scoped.**

<!-- =================================== -->

## 63. Lexical Scope

### Meaning

> **Lexical scope means JavaScript decides a variable's scope based on where the variable and function are written in the code.**

In simple words:

**JavaScript looks at the code structure to determine which variables a function can access.**

This is also called **static scope**.

### Example

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

greet();
```

Output:

```text
Ajay
```

Why can `greet()` access `name`?

Because `name` is declared in the scope where `greet` is **written**.

```text
Global Scope
│
├── name
│
└── greet()
     ↓
  can access name
```

### How It Works

Consider this example:

```js
const name = "Ajay";

function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
    console.log(name);
  }

  inner();
}

outer();
```

When `inner()` tries to access `message`:

```text
inner scope
   ↓
outer scope
   ↓
message found
```

When it tries to access `name`:

```text
inner scope
   ↓
outer scope
   ↓
global scope
   ↓
name found
```

This happens because of the **lexical structure** of the code.

### Lexical Scope Is Based on Where Code Is Written

This is the most important idea.

Look at:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

function start() {
  greet();
}

start();
```

`greet()` is called from inside `start()`.

But `greet()` can still access `name` because `name` is in the scope where `greet()` was **defined**, not because `start()` called it.

So:

```text
Where function is written
        ↓
determines its lexical scope
        ↓
determines which outer variables it can access
```

### Lexical Scope vs Calling Location

This is an important interview concept.

Consider:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}

function start() {
  const name = "Rahul";
  greet();
}

start();
```

Output:

```text
Ajay
```

Some beginners may expect:

```text
Rahul
```

because `greet()` is called inside `start()`.

But JavaScript uses **lexical scope**.

`greet()` was written in the global scope, where `name` refers to `"Ajay"`.

So JavaScript does not use the caller's local variables to resolve normal variable references.

### Scope Chain and Lexical Scope

Lexical scope and the scope chain are closely connected.

Example:

```js
const a = 10;

function outer() {
  const b = 20;

  function inner() {
    const c = 30;

    console.log(c);
    console.log(b);
    console.log(a);
  }

  inner();
}

outer();
```

For `inner()`:

```text
Current Scope
     ↓
inner
     ↓
Outer Scope
     ↓
outer
     ↓
Global Scope
     ↓
global
```

JavaScript searches this chain when resolving variables.

The **lexical structure of the code determines this relationship**.

### Lexical Scope and Nested Functions

Nested functions are a common example of lexical scope.

```js
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

`inner()` can access `message` because `inner()` is **lexically inside** `outer()`.

The important point is not simply that `inner()` is called by `outer()`.

It is that `inner()` is **defined inside `outer()`**.

### Lexical Scope and Closures

Lexical scope is an important foundation for understanding **closures**.

Example:

```js
function outer() {
  const message = "Hello";

  return function inner() {
    console.log(message);
  };
}

const greet = outer();

greet();
```

Output:

```text
Hello
```

`inner()` can access `message` because of lexical scope.

Even after `outer()` has finished executing, the returned function still has access to the variable from its outer lexical scope.

This behavior is called a **closure**.

So mentally:

```text
Lexical Scope
     ↓
Function knows its outer scope
     ↓
Closure can preserve access to that scope
```

Closures will be studied separately in more detail.

### Important Point

> **Lexical scope is determined at the time the code is written, not by where the function is called.**

Example:

```js
const x = "global";

function show() {
  console.log(x);
}

function test() {
  const x = "local";
  show();
}

test();
```

Output:

```text
global
```

Why?

`show()` was defined in the global scope.

Therefore, its lexical scope points to the global scope, not to `test()`.

### Lexical Scope vs Dynamic Scope

JavaScript uses **lexical scope**, not dynamic scope.

```text
Lexical Scope
→ based on where code is written

Dynamic Scope
→ would be based on where a function is called
```

JavaScript does **not** normally search the caller's local variables when resolving a variable.

For example:

```js
const x = "global";

function show() {
  console.log(x);
}

function test() {
  const x = "local";
  show();
}

test();
```

JavaScript prints:

```text
global
```

If JavaScript used dynamic scope, the caller's `x` could have been used instead.

### Remember

> **Lexical Scope = where a function is written determines which outer variables it can access.**

Mental model:

```text
Where function is written
          ↓
    outer scopes
          ↓
  variable lookup path
```

### Interview Answer

> **Lexical scope means variable access is determined by where the code is written, not where a function is called. A function can access variables from its own scope and its outer lexical scopes. JavaScript uses lexical scope, which is also the foundation for closures.**

<!-- ============================ -->

## 64. Hoisting

### Meaning

> **Hoisting is JavaScript's behavior where declarations are processed before the code in their scope starts executing.**

In simple words, JavaScript knows about certain **variable and function declarations before reaching their line during execution**.

Important:

> **Hoisting does not literally move the code to the top.**

It is better to think that JavaScript processes declarations before executing the code.

### Example

Function declarations are available before their written position:

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```text
Hello
```

This works because the function declaration is available when the code starts executing.

### How It Works

Consider:

```js
console.log(name);

var name = "Ajay";
```

Output:

```text
undefined
```

It behaves roughly like:

```js
var name;

console.log(name);

name = "Ajay";
```

The important point is that the **declaration** is processed before execution, but the **assignment** happens only when JavaScript reaches that line.

So:

```text
var name = "Ajay";

declaration → processed before execution
assignment  → happens at this line
```

### `var` Hoisting

A `var` declaration is hoisted and initialized with `undefined`.

```js
console.log(age);

var age = 25;
```

Output:

```text
undefined
```

Conceptually:

```text
var age;        → declaration processed
console.log(age); → undefined
age = 25;       → assignment happens
```

So remember:

> **`var` is hoisted and initialized with `undefined`.**

### `let` and `const` Hoisting

`let` and `const` are also processed before execution, but they behave differently from `var`.

```js
console.log(age);

let age = 25;
```

This gives:

```text
ReferenceError
```

The same happens with `const`:

```js
console.log(age);

const age = 25;
```

Output:

```text
ReferenceError
```

`let` and `const` bindings exist before their declaration line is executed, but they cannot be accessed during that period.

This period is called the **Temporal Dead Zone (TDZ)**.

```text
Scope starts
    ↓
let / const binding exists
    ↓
Temporal Dead Zone
    ↓
declaration is initialized
    ↓
variable can be accessed
```

We will study TDZ separately.

### Function Declaration Hoisting

Function declarations are hoisted with their function value.

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```text
Hello
```

JavaScript can call `greet()` before the function declaration appears in the code.

This is different from a function expression.

### Function Expression and Hoisting

Consider:

```js
greet();

const greet = function () {
  console.log("Hello");
};
```

This gives:

```text
ReferenceError
```

Why?

`greet` is declared using `const`, so it is in the **Temporal Dead Zone** before initialization.

With `var`:

```js
greet();

var greet = function () {
  console.log("Hello");
};
```

This gives:

```text
TypeError: greet is not a function
```

Why?

The `var` declaration is hoisted and initialized as:

```js
var greet = undefined;
```

So JavaScript effectively tries to do:

```js
undefined();
```

That is why we get a `TypeError`.

### Important Comparison

| Declaration          | Hoisted?        | Initial Value Before Declaration | Can Call Before Declaration? |
| -------------------- | --------------- | -------------------------------- | ---------------------------- |
| `var`                | Yes             | `undefined`                      | No                           |
| `let`                | Yes, but in TDZ | Uninitialized                    | No                           |
| `const`              | Yes, but in TDZ | Uninitialized                    | No                           |
| Function declaration | Yes             | Function itself                  | Yes                          |

The word **hoisted** does not mean all declarations behave the same way.

### Hoisting Does Not Mean Assignment Is Hoisted

This is an important interview point.

```js
console.log(name);

var name = "Ajay";
```

Output:

```text
undefined
```

Not:

```text
Ajay
```

Only the declaration is processed before execution.

The assignment:

```js
name = "Ajay";
```

happens when JavaScript reaches that line.

### Example: Multiple Variables

```js
console.log(a);
console.log(b);

var a = 10;
var b = 20;
```

Output:

```text
undefined
undefined
```

Conceptually:

```js
var a;
var b;

console.log(a);
console.log(b);

a = 10;
b = 20;
```

Again:

```text
Declaration → available earlier
Assignment  → happens at the original line
```

### Important Point

> **Hoisting is about declaration processing, not moving complete statements to the top.**

For example:

```js
console.log(x); // undefined

var x = 10;
```

The complete statement:

```js
var x = 10;
```

is not simply moved to the top.

The declaration and initialization behave differently.

### Hoisting with `let` and `const`

A common mistake is saying:

> "`let` and `const` are not hoisted."

This is an oversimplification.

A more technically correct explanation is:

> **`let` and `const` declarations are processed during scope creation, but their bindings remain uninitialized until execution reaches the declaration. Accessing them before initialization causes a `ReferenceError` because of the Temporal Dead Zone.**

Example:

```js
console.log(name); // ReferenceError

let name = "Ajay";
```

So:

```text
var
→ hoisted + initialized as undefined

let / const
→ hoisted/processed + uninitialized
→ TDZ
```

### Hoisting and Scope

Hoisting happens within the relevant scope.

For example:

```js
function test() {
  console.log(value);

  var value = 10;
}

test();
```

Output:

```text
undefined
```

The `var value` declaration is processed within the **function scope** of `test()`.

It does not become a global variable.

### Remember

> **Hoisting = declarations are processed before execution, but initialization and assignment happen according to the normal execution order.**

Mental model:

```text
Before execution
      ↓
Declarations are processed
      ↓
Code starts executing
      ↓
Assignments happen when their lines are reached
```

### Interview Answer

> **Hoisting is JavaScript's behavior where declarations are processed before code execution in their scope. Function declarations can be called before their declaration, `var` is initialized with `undefined`, while `let` and `const` remain uninitialized in the Temporal Dead Zone until their declaration is executed.**

<!-- ====================== -->

## 65. TDZ

### Meaning

> **TDZ (Temporal Dead Zone) is the period between entering a scope and initializing a `let`, `const`, or `class` declaration, during which the variable cannot be accessed.**

In simple words:

**`let` and `const` variables exist before their declaration is executed, but JavaScript does not allow you to use them until they are initialized.**

### Example

```js
console.log(age);

let age = 25;
```

This gives:

```text
ReferenceError
```

The reason is that `age` is in the **Temporal Dead Zone** when `console.log(age)` runs.

### How It Works

Consider:

```js
console.log(age);

let age = 25;

console.log(age);
```

Execution happens like this:

```text
Scope starts
     ↓
age binding exists
     ↓
TDZ starts
     ↓
console.log(age)
     ↓
ReferenceError
     ↓
let age = 25
     ↓
age is initialized
     ↓
TDZ ends
     ↓
console.log(age)
     ↓
25
```

The important point is:

> **The TDZ ends when execution reaches the declaration and the variable is initialized.**

### TDZ with `const`

`const` also has a Temporal Dead Zone.

```js
console.log(name);

const name = "Ajay";
```

This gives:

```text
ReferenceError
```

After the declaration is executed:

```js
const name = "Ajay";

console.log(name);
```

Output:

```text
Ajay
```

So both `let` and `const` have TDZ behavior.

### Why Does TDZ Exist?

TDZ prevents variables from being used before they are properly initialized.

Compare:

```js
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

But:

```js
console.log(b);

let b = 10;
```

Output:

```text
ReferenceError
```

The difference is:

```text
var
→ declaration is hoisted
→ initialized with undefined

let / const
→ declaration is processed
→ remains uninitialized
→ accessing it during TDZ causes ReferenceError
```

### TDZ and Hoisting

This is an important interview concept.

A common statement is:

> "`let` and `const` are not hoisted."

This is an oversimplification.

A more technically correct explanation is:

> **`let` and `const` declarations are processed during scope creation, but their bindings remain uninitialized until execution reaches the declaration. The time before initialization is called the Temporal Dead Zone.**

Example:

```js
console.log(age); // ReferenceError

let age = 25;
```

So:

```text
var
→ hoisted + initialized as undefined

let / const
→ hoisted/processed + uninitialized
→ TDZ
→ initialized at declaration
```

### TDZ Is Based on Execution

The TDZ is not simply "the area above the declaration."

It is better to think of it as a **time period during execution**.

Example:

```js
let age = 25;

console.log(age);
```

There is no TDZ when `console.log(age)` executes because the declaration has already been initialized.

But here:

```js
console.log(age);

let age = 25;
```

`age` is accessed while it is still in the TDZ.

### TDZ Inside a Block

TDZ also applies inside blocks.

```js
{
  console.log(name);

  let name = "Ajay";
}
```

This gives:

```text
ReferenceError
```

The `name` variable belongs to the block, but it cannot be accessed before its initialization.

### TDZ Inside a Function

The same behavior occurs inside functions.

```js
function greet() {
  console.log(message);

  let message = "Hello";
}

greet();
```

Output:

```text
ReferenceError
```

The `message` variable is in the TDZ when `console.log(message)` executes.

### TDZ with `const`

`const` must also be initialized when declared.

```js
const name = "Ajay";
```

This is valid.

But:

```js
const name;
```

This gives:

```text
SyntaxError
```

This is different from TDZ.

The TDZ is about **accessing a `let`/`const` binding before initialization**.

### Important Difference

```js
console.log(a);
let a = 10;
```

```text
ReferenceError
→ accessing a during TDZ
```

But:

```js
const a;
```

```text
SyntaxError
→ const declaration must have an initializer
```

These are different errors.

### TDZ with Shadowing

TDZ can cause a confusing situation when an inner variable has the same name as an outer variable.

```js
let name = "Ajay";

function greet() {
  console.log(name);

  let name = "Rahul";
}

greet();
```

This gives:

```text
ReferenceError
```

Why doesn't JavaScript use the outer `"Ajay"`?

Because the inner `name` declaration creates a binding in the function scope.

When `console.log(name)` runs, JavaScript finds the inner `name`, but that inner variable is still in the TDZ.

So:

```text
Outer name → "Ajay"

Function Scope
│
├── inner name → TDZ
│
└── console.log(name)
        ↓
   finds inner name
        ↓
   still uninitialized
        ↓
   ReferenceError
```

This is an important example of how **scope + TDZ** work together.

### Remember

> **TDZ = the time between entering a scope and initializing a `let` or `const` variable, during which accessing it causes a `ReferenceError`.**

Mental model:

```text
Scope starts
    ↓
let / const exists but uninitialized
    ↓
     TDZ
    ↓
declaration executes
    ↓
variable initialized
    ↓
TDZ ends
```

### Interview Answer

> **TDZ stands for Temporal Dead Zone. It is the period between entering a scope and initializing a `let`, `const`, or `class` declaration. During this period, accessing the variable causes a `ReferenceError`. This is why `let` and `const` behave differently from `var`, which is initialized with `undefined` during hoisting.**

<!-- ======================== -->

## 66. Execution Context

### Meaning

> **An execution context is the environment JavaScript creates to manage and execute a piece of code.**

In simple words:

**Execution Context is the setup JavaScript creates before executing code.**

It keeps track of things JavaScript needs while running the code, such as:

- variables
- functions
- scope information
- `this`
- other information needed for execution

### Types of Execution Context

JavaScript mainly works with these execution contexts:

```text
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context
```

In modern JavaScript, **module code** also has its own execution behavior.

For normal JavaScript development and interviews, the most important ones are:

```text
Global Execution Context
        ↓
Function Execution Context
```

### Global Execution Context

When JavaScript starts executing a script, it creates a **Global Execution Context**.

Example:

```js
const name = "Ajay";

console.log(name);
```

Before executing this code, JavaScript creates the global execution environment.

Conceptually:

```text
Global Execution Context
│
├── variables
│     └── name
│
├── functions
│
├── scope information
│
└── this
```

Then JavaScript executes the code.

### Function Execution Context

Whenever a function is called, JavaScript creates a new **Function Execution Context** for that function call.

Example:

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Ajay");
```

When JavaScript reaches:

```js
greet("Ajay");
```

a new execution context is created for `greet()`.

Conceptually:

```text
Global Execution Context
        ↓
greet("Ajay")
        ↓
Function Execution Context
        ↓
execute greet()
```

After the function finishes, its execution context is removed from the call stack.

### How Execution Context Works

Consider:

```js
const name = "Ajay";

function greet() {
  const message = "Hello";

  console.log(message);
}

greet();

console.log(name);
```

JavaScript roughly works like this:

```text
1. Global Execution Context is created

2. Global variables and functions are set up

3. Global code starts executing

4. greet() is called

5. Function Execution Context for greet() is created

6. greet() executes

7. "Hello" is printed

8. greet() finishes

9. greet()'s execution context is removed

10. Global code continues executing
```

### Two Main Phases

Execution context creation is commonly explained using two phases:

```text
1. Creation Phase
2. Execution Phase
```

These phases help explain **hoisting** and **TDZ**.

### Creation Phase

During the creation phase, JavaScript sets up the execution context before executing the code.

Conceptually, JavaScript prepares:

```text
Variables
Functions
Scope information
this
```

For example:

```js
var age = 25;

function greet() {
  console.log("Hello");
}
```

During setup, JavaScript knows about:

```text
age
greet
```

The function declaration is available with its function value.

The `var` variable is initially initialized with `undefined`.

Conceptually:

```text
age   → undefined
greet → function
```

### Execution Phase

After the setup is complete, JavaScript executes the code line by line.

```js
var age = 25;

function greet() {
  console.log("Hello");
}
```

During execution:

```text
age → undefined
      ↓
age = 25
```

The assignment happens when JavaScript reaches:

```js
age = 25;
```

This is why hoisting does not mean the complete statement is moved to the top.

### `let` and `const` During Creation

`let` and `const` behave differently from `var`.

Example:

```js
console.log(age);

let age = 25;
```

During setup, the `age` binding is created, but it remains **uninitialized** until execution reaches the declaration.

So:

```text
Creation Phase
      ↓
age binding created
      ↓
uninitialized
      ↓
TDZ
      ↓
Execution reaches:
let age = 25
      ↓
age initialized
```

Accessing `age` before initialization causes a `ReferenceError`.

This connects **Execution Context → Hoisting → TDZ**.

### What Does an Execution Context Contain?

For a useful interview-level mental model, think of an execution context as containing:

```text
Execution Context
│
├── Lexical Environment
├── Variable Environment
├── this binding
└── other execution information
```

#### Lexical Environment

The **Lexical Environment** keeps track of identifiers and their relationships with outer scopes.

For example:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}
```

`greet()` can find `name` through its outer lexical environment.

This is closely related to **lexical scope** and the **scope chain**.

#### Variable Environment

The Variable Environment is used for tracking certain variable declarations, especially declarations made with `var`.

For interview purposes, you can think of it as part of the execution context that keeps track of variable bindings.

The distinction between **Lexical Environment** and **Variable Environment** is more technical than the basic scope explanation, so you do not need to treat them as completely separate "places" in memory.

#### `this` Binding

An execution context also has information related to `this`.

For example:

```js
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Here, when `user.greet()` executes, `this` refers to `user`.

The exact value of `this` depends on **how the function is called**.

Arrow functions are different because they do not have their own `this`.

### Execution Context and Call Stack

Execution contexts are managed using the **Call Stack**.

Consider:

```js
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

When the program starts:

```text
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘
```

When `first()` is called:

```text
┌─────────────────────────┐
│ first() Execution Context│
├─────────────────────────┤
│ Global Execution Context │
└─────────────────────────┘
```

When `second()` is called:

```text
┌──────────────────────────┐
│ second() Execution Context│
├──────────────────────────┤
│ first() Execution Context │
├──────────────────────────┤
│ Global Execution Context  │
└──────────────────────────┘
```

When `second()` finishes:

```text
┌─────────────────────────┐
│ first() Execution Context│
├─────────────────────────┤
│ Global Execution Context │
└─────────────────────────┘
```

When `first()` finishes:

```text
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘
```

When the global code finishes, the normal execution of the script is complete.

### Important Point

> **Every function call creates a new function execution context.**

The function declaration itself does not create a new function execution context.

For example:

```js
function greet() {
  console.log("Hello");
}
```

No function execution context is created just because the function was declared.

It is created when the function is called:

```js
greet();
```

So:

```text
Function declaration
→ function exists

Function call
→ function execution context is created
```

### Execution Context vs Scope

These concepts are related but not the same.

**Scope:**

> Defines where variables can be accessed.

**Execution Context:**

> Provides the environment and information JavaScript uses while executing code.

For example:

```js
function greet() {
  const message = "Hello";

  console.log(message);
}
```

`message` has a particular **scope**.

When `greet()` is called, JavaScript creates a **Function Execution Context** to execute the function.

### Execution Context vs Call Stack

These are also different concepts.

```text
Execution Context
→ environment for executing code

Call Stack
→ structure used to keep track of currently executing contexts
```

Think:

```text
Execution Context = the execution setup

Call Stack = where active execution contexts are tracked
```

### Complete Mental Model

Consider:

```js
const name = "Ajay";

function greet() {
  const message = "Hello " + name;

  console.log(message);
}

greet();
```

Think about it like this:

```text
JavaScript starts
      ↓
Global Execution Context created
      ↓
Global code starts executing
      ↓
greet() called
      ↓
Function Execution Context created
      ↓
Function scope is prepared
      ↓
message is created
      ↓
name is found through outer lexical scope
      ↓
"Hello Ajay" is printed
      ↓
greet() finishes
      ↓
Function Execution Context removed
      ↓
Global code continues
```

This mental model will become very important when learning **Call Stack, Closures, `this`, and the Event Loop**.

### Remember

> **Execution Context = the environment JavaScript creates to execute a piece of code.**

Mental model:

```text
Code
 ↓
Execution Context created
 ↓
Environment prepared
 ↓
Code executes
 ↓
Context finishes
```

For a function:

```text
function call
      ↓
Function Execution Context
      ↓
function executes
      ↓
context finishes
```

### Interview Answer

> **An execution context is the environment JavaScript creates to execute code. The main contexts we commonly discuss are the global execution context and function execution contexts. A function execution context is created whenever a function is called, and it contains information such as lexical environment, variable environment, and `this` binding. Active execution contexts are managed through the call stack.**

<!-- ======================== -->

## 66. Execution Context

### Meaning

> **An execution context is the environment JavaScript creates to manage and execute a piece of code.**

In simple words:

**Execution Context is the setup JavaScript creates before executing code.**

It keeps track of things JavaScript needs while running the code, such as:

- variables
- functions
- scope information
- `this`
- other information needed for execution

### Types of Execution Context

JavaScript mainly works with these execution contexts:

```text
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context
```

In modern JavaScript, **module code** also has its own execution behavior.

For normal JavaScript development and interviews, the most important ones are:

```text
Global Execution Context
        ↓
Function Execution Context
```

### Global Execution Context

When JavaScript starts executing a script, it creates a **Global Execution Context**.

Example:

```js
const name = "Ajay";

console.log(name);
```

Before executing this code, JavaScript creates the global execution environment.

Conceptually:

```text
Global Execution Context
│
├── variables
│     └── name
│
├── functions
│
├── scope information
│
└── this
```

Then JavaScript executes the code.

### Function Execution Context

Whenever a function is called, JavaScript creates a new **Function Execution Context** for that function call.

Example:

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Ajay");
```

When JavaScript reaches:

```js
greet("Ajay");
```

a new execution context is created for `greet()`.

Conceptually:

```text
Global Execution Context
        ↓
greet("Ajay")
        ↓
Function Execution Context
        ↓
execute greet()
```

After the function finishes, its execution context is removed from the call stack.

### How Execution Context Works

Consider:

```js
const name = "Ajay";

function greet() {
  const message = "Hello";

  console.log(message);
}

greet();

console.log(name);
```

JavaScript roughly works like this:

```text
1. Global Execution Context is created

2. Global variables and functions are set up

3. Global code starts executing

4. greet() is called

5. Function Execution Context for greet() is created

6. greet() executes

7. "Hello" is printed

8. greet() finishes

9. greet()'s execution context is removed

10. Global code continues executing
```

### Two Main Phases

Execution context creation is commonly explained using two phases:

```text
1. Creation Phase
2. Execution Phase
```

These phases help explain **hoisting** and **TDZ**.

### Creation Phase

During the creation phase, JavaScript sets up the execution context before executing the code.

Conceptually, JavaScript prepares:

```text
Variables
Functions
Scope information
this
```

For example:

```js
var age = 25;

function greet() {
  console.log("Hello");
}
```

During setup, JavaScript knows about:

```text
age
greet
```

The function declaration is available with its function value.

The `var` variable is initially initialized with `undefined`.

Conceptually:

```text
age   → undefined
greet → function
```

### Execution Phase

After the setup is complete, JavaScript executes the code line by line.

```js
var age = 25;

function greet() {
  console.log("Hello");
}
```

During execution:

```text
age → undefined
      ↓
age = 25
```

The assignment happens when JavaScript reaches:

```js
age = 25;
```

This is why hoisting does not mean the complete statement is moved to the top.

### `let` and `const` During Creation

`let` and `const` behave differently from `var`.

Example:

```js
console.log(age);

let age = 25;
```

During setup, the `age` binding is created, but it remains **uninitialized** until execution reaches the declaration.

So:

```text
Creation Phase
      ↓
age binding created
      ↓
uninitialized
      ↓
TDZ
      ↓
Execution reaches:
let age = 25
      ↓
age initialized
```

Accessing `age` before initialization causes a `ReferenceError`.

This connects **Execution Context → Hoisting → TDZ**.

### What Does an Execution Context Contain?

For a useful interview-level mental model, think of an execution context as containing:

```text
Execution Context
│
├── Lexical Environment
├── Variable Environment
├── this binding
└── other execution information
```

#### Lexical Environment

The **Lexical Environment** keeps track of identifiers and their relationships with outer scopes.

For example:

```js
const name = "Ajay";

function greet() {
  console.log(name);
}
```

`greet()` can find `name` through its outer lexical environment.

This is closely related to **lexical scope** and the **scope chain**.

#### Variable Environment

The Variable Environment is used for tracking certain variable declarations, especially declarations made with `var`.

For interview purposes, you can think of it as part of the execution context that keeps track of variable bindings.

The distinction between **Lexical Environment** and **Variable Environment** is more technical than the basic scope explanation, so you do not need to treat them as completely separate "places" in memory.

#### `this` Binding

An execution context also has information related to `this`.

For example:

```js
const user = {
  name: "Ajay",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Here, when `user.greet()` executes, `this` refers to `user`.

The exact value of `this` depends on **how the function is called**.

Arrow functions are different because they do not have their own `this`.

### Execution Context and Call Stack

Execution contexts are managed using the **Call Stack**.

Consider:

```js
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

When the program starts:

```text
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘
```

When `first()` is called:

```text
┌─────────────────────────┐
│ first() Execution Context│
├─────────────────────────┤
│ Global Execution Context │
└─────────────────────────┘
```

When `second()` is called:

```text
┌──────────────────────────┐
│ second() Execution Context│
├──────────────────────────┤
│ first() Execution Context │
├──────────────────────────┤
│ Global Execution Context  │
└──────────────────────────┘
```

When `second()` finishes:

```text
┌─────────────────────────┐
│ first() Execution Context│
├─────────────────────────┤
│ Global Execution Context │
└─────────────────────────┘
```

When `first()` finishes:

```text
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘
```

When the global code finishes, the normal execution of the script is complete.

### Important Point

> **Every function call creates a new function execution context.**

The function declaration itself does not create a new function execution context.

For example:

```js
function greet() {
  console.log("Hello");
}
```

No function execution context is created just because the function was declared.

It is created when the function is called:

```js
greet();
```

So:

```text
Function declaration
→ function exists

Function call
→ function execution context is created
```

### Execution Context vs Scope

These concepts are related but not the same.

**Scope:**

> Defines where variables can be accessed.

**Execution Context:**

> Provides the environment and information JavaScript uses while executing code.

For example:

```js
function greet() {
  const message = "Hello";

  console.log(message);
}
```

`message` has a particular **scope**.

When `greet()` is called, JavaScript creates a **Function Execution Context** to execute the function.

### Execution Context vs Call Stack

These are also different concepts.

```text
Execution Context
→ environment for executing code

Call Stack
→ structure used to keep track of currently executing contexts
```

Think:

```text
Execution Context = the execution setup

Call Stack = where active execution contexts are tracked
```

### Complete Mental Model

Consider:

```js
const name = "Ajay";

function greet() {
  const message = "Hello " + name;

  console.log(message);
}

greet();
```

Think about it like this:

```text
JavaScript starts
      ↓
Global Execution Context created
      ↓
Global code starts executing
      ↓
greet() called
      ↓
Function Execution Context created
      ↓
Function scope is prepared
      ↓
message is created
      ↓
name is found through outer lexical scope
      ↓
"Hello Ajay" is printed
      ↓
greet() finishes
      ↓
Function Execution Context removed
      ↓
Global code continues
```

This mental model will become very important when learning **Call Stack, Closures, `this`, and the Event Loop**.

### Remember

> **Execution Context = the environment JavaScript creates to execute a piece of code.**

Mental model:

```text
Code
 ↓
Execution Context created
 ↓
Environment prepared
 ↓
Code executes
 ↓
Context finishes
```

For a function:

```text
function call
      ↓
Function Execution Context
      ↓
function executes
      ↓
context finishes
```

### Interview Answer

> **An execution context is the environment JavaScript creates to execute code. The main contexts we commonly discuss are the global execution context and function execution contexts. A function execution context is created whenever a function is called, and it contains information such as lexical environment, variable environment, and `this` binding. Active execution contexts are managed through the call stack.**

<!-- =========================== -->

## 67. Call Stack

### Meaning

> **The Call Stack is a stack that JavaScript uses to keep track of the currently executing functions.**

In simple words:

**Call Stack tells JavaScript which function is currently running and which function should run next.**

It follows **LIFO**:

> **Last In, First Out**

The function called most recently is the first one to finish and leave the stack.

### Example

```js
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

Let's understand what happens step by step.

### How It Works

When JavaScript starts executing the script:

```text
Call Stack
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘
```

Then:

```js
first();
```

is called.

A new execution context for `first()` is pushed onto the stack:

```text
Call Stack
┌──────────────────────────┐
│ first()                  │
├──────────────────────────┤
│ Global Execution Context │
└──────────────────────────┘
```

Inside `first()`:

```js
second();
```

is called.

Now `second()` is pushed on top:

```text
Call Stack
┌──────────────────────────┐
│ second()                 │ ← currently running
├──────────────────────────┤
│ first()                  │
├──────────────────────────┤
│ Global Execution Context │
└──────────────────────────┘
```

`second()` executes:

```js
console.log("Hello");
```

Then `second()` finishes and is removed:

```text
Call Stack
┌──────────────────────────┐
│ first()                  │
├──────────────────────────┤
│ Global Execution Context │
└──────────────────────────┘
```

Then `first()` finishes:

```text
Call Stack
┌─────────────────────────┐
│ Global Execution Context│
└─────────────────────────┘
```

Finally, the global code finishes.

### Push and Pop

The Call Stack mainly performs two important operations:

```text
push → add a new execution context
pop  → remove the completed execution context
```

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
```

When `greet()` is called:

```text
push
  ↓
greet()
```

When `greet()` finishes:

```text
pop
  ↓
greet() removed
```

So:

```text
Function Call
     ↓
Push onto Call Stack
     ↓
Function executes
     ↓
Function finishes
     ↓
Pop from Call Stack
```

### LIFO — Last In, First Out

Consider:

```js
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();
```

The stack changes like this:

```text
one() called

┌──────────────┐
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

Then `two()`:

```text
┌──────────────┐
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

Then `three()`:

```text
┌──────────────┐
│ three()      │
├──────────────┤
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

`three()` finishes first:

```text
three() → pop
```

Then:

```text
two() → pop
```

Then:

```text
one() → pop
```

This is **Last In, First Out**.

### Call Stack and Execution Context

These two concepts are closely related.

When a function is called:

```js
greet();
```

JavaScript creates a **Function Execution Context**.

That execution context is then placed on the **Call Stack**.

Think:

```text
Function Call
      ↓
Execution Context created
      ↓
Context pushed onto Call Stack
      ↓
Function executes
      ↓
Context popped when function finishes
```

So:

> **Execution Context = environment used to execute the function.**

> **Call Stack = stack that keeps track of active execution contexts.**

### Example with Nested Functions

```js
function outer() {
  console.log("Outer");

  function inner() {
    console.log("Inner");
  }

  inner();
}

outer();
```

Execution:

```text
1. Global code starts

2. outer() is called

3. outer() execution context is pushed

4. "Outer" is printed

5. inner() is called

6. inner() execution context is pushed

7. "Inner" is printed

8. inner() finishes → popped

9. outer() finishes → popped
```

Stack:

```text
Global
   ↓
outer()
   ↓
inner()
```

Then it unwinds:

```text
inner() → removed
outer() → removed
Global   → remains
```

### Stack Overflow

The Call Stack has a limited amount of space.

If functions keep calling themselves without stopping, the stack keeps growing.

Example:

```js
function repeat() {
  repeat();
}

repeat();
```

Here:

```text
repeat()
   ↓
repeat()
   ↓
repeat()
   ↓
repeat()
   ↓
...
```

Each call creates another execution context and pushes it onto the Call Stack.

Eventually, the stack becomes full and JavaScript throws an error such as:

```text
RangeError: Maximum call stack size exceeded
```

This is called a **stack overflow**.

### Recursion and Call Stack

Recursion means a function calls itself.

Example:

```js
function countdown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

countdown(3);
```

The stack grows:

```text
countdown(3)
    ↓
countdown(2)
    ↓
countdown(1)
    ↓
countdown(0)
```

When `countdown(0)` returns, the stack starts unwinding:

```text
countdown(0) → pop
countdown(1) → pop
countdown(2) → pop
countdown(3) → pop
```

The **base condition** is important because it stops the recursion.

### Synchronous JavaScript and the Call Stack

JavaScript executes synchronous code using the Call Stack.

Example:

```js
console.log("A");
console.log("B");
console.log("C");
```

JavaScript executes these operations one after another.

Output:

```text
A
B
C
```

The Call Stack helps keep track of the currently executing work.

### Call Stack and Asynchronous JavaScript

This becomes important when JavaScript handles asynchronous operations.

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Timer
```

The callback from `setTimeout()` does not simply stay on the Call Stack waiting for two seconds.

The browser/runtime handles the timer separately.

When the timer is ready, its callback waits until JavaScript can execute it.

The **Event Loop** coordinates when waiting callbacks can move to the Call Stack.

A simplified model is:

```text
Call Stack
    ↓
JavaScript executes current code
    ↓
Async operation handled by runtime
    ↓
Callback waits
    ↓
Event Loop checks the Call Stack
    ↓
When appropriate, callback is moved for execution
```

The Event Loop will be studied separately.

### Important Point

> **The Call Stack can execute one stack frame at a time.**

JavaScript is commonly described as **single-threaded** in the context of its main execution thread, meaning there is one main Call Stack handling JavaScript execution at a time.

This is why long-running synchronous code can block other JavaScript work.

Example:

```js
function block() {
  while (true) {}
}

block();

console.log("Hello");
```

The Call Stack never becomes free because `block()` never finishes.

Therefore:

```text
"Hello"
→ never gets executed
```

### Call Stack vs Execution Context

| Execution Context                          | Call Stack                                |
| ------------------------------------------ | ----------------------------------------- |
| Environment for executing code             | Stack that tracks active execution        |
| Contains execution-related information     | Contains active execution contexts/frames |
| Created for global code and function calls | Manages the order of active calls         |
| A function call creates one                | The context is pushed onto it             |
| Finishes when execution completes          | Context is popped when the call finishes  |

### Remember

> **Call Stack = where JavaScript keeps track of currently running function calls.**

Mental model:

```text
Last function called
       ↓
┌─────────────┐
│   newest    │ ← runs first / leaves first
├─────────────┤
│   older     │
├─────────────┤
│   oldest    │
└─────────────┘
```

**LIFO = Last In, First Out**

### Interview Answer

> **The Call Stack is a LIFO data structure used by JavaScript to keep track of currently executing functions. When a function is called, its execution context is pushed onto the stack, and when the function finishes, it is popped. Because JavaScript has one main Call Stack, long-running synchronous code can block other JavaScript execution.**
