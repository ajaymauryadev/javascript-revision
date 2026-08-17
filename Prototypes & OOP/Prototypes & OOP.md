## 1. 🔥🔥🔥 What is Prototypal Inheritance?

**Prototypal inheritance is a mechanism in JavaScript where one object can access properties and methods from another object through its prototype.**

Simple language mein:

> **Agar ek object ke paas koi property ya method nahi hai, to JavaScript uske prototype se wo property/method use kar sakta hai.**

Yani ek object **dusre object se properties/methods access kar sakta hai**.

---

### Simple Example

Suppose:

```js id="8k3m2p"
const person = {
  greet() {
    console.log("Hello!");
  },
};
```

Ab hum ek aur object banate hain:

```js id="4x7q9n"
const user = Object.create(person);
```

Ab `user` ke andar directly `greet()` method nahi hai.

But:

```js id="2m6v8r"
user.greet();
```

Output:

```text id="n4p7s2"
Hello!
```

How did this happen?

```text id="c8w5k1"
user
 ↓
Does user have greet()?
 ↓
No ❌
 ↓
Check prototype
 ↓
person has greet() ✅
 ↓
Run greet()
```

This ability to access something from another object's prototype is called **Prototypal Inheritance**.

---

### Another Very Simple Example

```js id="j3q8xm"
const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);

dog.eat();
```

Output:

```text id="v6n2kp"
Eating...
```

`dog` doesn't directly have `eat()`.

But `dog` can access it through `animal`.

```text id="r9m4zs"
dog
 ↓
eat() ❌
 ↓
prototype
 ↓
animal
 ↓
eat() ✅
```

So we can say:

> **`dog` inherits access to `eat()` from its prototype.**

---

### 🔥 Important: It Does NOT Copy the Method

This is important.

When we do:

```js id="q5x7nd"
const dog = Object.create(animal);
```

JavaScript does **not** copy `eat()` into `dog`.

Instead:

```text id="f8k3wm"
dog
 ↓
prototype reference
 ↓
animal
 ↓
eat()
```

`dog` simply gets access to the method through its prototype.

---

### Real JavaScript Example

You've already used prototypal inheritance many times without realizing it.

```js id="w2m9qx"
const numbers = [10, 20, 30];

numbers.push(40);
```

Where does `push()` come from?

It's not directly written inside your array:

```text id="k7p4zn"
numbers
 ├── 10
 ├── 20
 └── 30
```

JavaScript looks through the array's prototype:

```text id="s6x8vm"
numbers
   ↓
Array.prototype
   ↓
push()
```

That's why this works:

```js id="d4n9kp"
numbers.push(40);
```

The same idea applies to many built-in objects.

---

## 2. 🔥🔥🔥 What is the Prototype Chain?

The **prototype chain is the chain of objects that JavaScript follows when looking for a property or method that is not found on the current object.**

Simple language:

> **JavaScript property/method ko pehle object ke andar search karta hai. Agar nahi mila, to prototype mein search karta hai. Wahan bhi nahi mila, to uske prototype mein search karta hai. Ye search chain prototype chain hai.**

### Simple Example

```js id="p8x3mw"
const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);

dog.eat();
```

When we call:

```js id="y4k7qn"
dog.eat();
```

JavaScript searches like this:

```text id="m6r2vz"
dog
 ↓
Does dog have eat()?
 ↓
No ❌
 ↓
animal
 ↓
Does animal have eat()?
 ↓
Yes ✅
 ↓
Run eat()
```

This path:

```text id="w9p3kx"
dog → animal
```

is part of the **prototype chain**.

---

### What if `animal` also doesn't have the property?

Then JavaScript continues searching.

For example:

```text id="q2n7vc"
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```

This is the prototype chain.

Eventually, JavaScript reaches:

```js id="e8m4zp"
null;
```

That means there is no more prototype to search.

---

## 🔥 Let's Understand with a Common Example

You create an array:

```js id="t6k9wr"
const numbers = [10, 20, 30];
```

You call:

```js id="u3p7xm"
numbers.toString();
```

Where does `toString()` come from?

JavaScript searches:

```text id="r5m8qz"
numbers
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null
```

It finds `toString()` in:

```text id="j7x2nk"
Object.prototype
```

So the method can be used.

---

# 🔥 Prototypal Inheritance vs Prototype Chain

These two terms are related but not exactly the same.

### Prototypal Inheritance

Means:

> **One object can access properties/methods from another object through its prototype.**

```text id="c4n8wp"
dog
 ↓
inherits/accesses
 ↓
animal
```

### Prototype Chain

Means:

> **The chain JavaScript follows while searching for a property or method.**

```text id="v9m2ks"
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```

---

## 🔥🔥 Easy Real-Life Example

Imagine you have a student:

```text id="a6q3xz"
Ajay
```

Ajay doesn't know how to cook.

So he asks his parent:

```text id="h8m5vp"
Ajay
 ↓
Parent
```

Parent doesn't know either.

Then Ajay asks grandparent:

```text id="n3k7wd"
Ajay
 ↓
Parent
 ↓
Grandparent
```

If grandparent knows how to cook:

```text id="s4x9qm"
Ajay → Parent → Grandparent
                    ↓
                 Cooking
```

Ajay can use that ability.

That's similar to how JavaScript searches through the **prototype chain**.

---

# 🔥🔥 One Important Example You Should Remember

```js id="b7m2qx"
const person = {
  greet() {
    console.log("Hello!");
  },
};

const user = Object.create(person);

user.greet();
```

Think:

```text id="w5n8kc"
user
 ↓
"I don't have greet()"
 ↓
Check prototype
 ↓
person
 ↓
"person has greet()"
 ↓
Run it ✅
```

This is **prototypal inheritance**.

And the search:

```text id="j9q4vz"
user
 ↓
person
 ↓
Object.prototype
 ↓
null
```

is the **prototype chain**.

---

## 🔥🔥🔥 Interview Answers

### Prototypal Inheritance

**Prototypal inheritance is a JavaScript mechanism where an object can access properties and methods from another object through its prototype.**

### Prototype Chain

**The prototype chain is the chain of objects JavaScript follows to find a property or method when it is not found on the current object.**

---

## 🧠 Just Remember These 2 Lines

```text id="m8x3qp"
Prototypal Inheritance
→ Object can access another object's properties/methods through its prototype.


Prototype Chain
→ The path JavaScript follows while searching for those properties/methods.
```

**Bas itna concept clear rakho.** `prototype`, `__proto__`, `Object.prototype`, constructor functions, classes — ye sab isi basic idea ke around hain. Pehle is concept ko pakdo, baaki automatically easy lagega. 🔥

<!-- ============================== -->

## 1. 🔥🔥🔥 What is `prototype`?

`prototype` is a property that **functions used as constructors** have, and it is used to define properties and methods that instances created by that function can access.

In simple words:

> **Constructor function ke `prototype` object mein methods/properties rakh sakte hain, aur us constructor se banne wale objects unhe access kar sakte hain.**

### Simple Example

```js id="p8k4mz"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
```

Now create an object:

```js id="x5n7qd"
const user = new Person("Ajay");

user.greet();
```

Output:

```text id="m3q9vw"
Hello Ajay
```

But notice:

```text id="r6k2ps"
user
 ↓
Does user have greet()? ❌
 ↓
Person.prototype
 ↓
greet() ✅
```

So `greet()` is stored in:

```js id="c7w4nx"
Person.prototype;
```

and the object created by `new Person()` can access it.

---

### Why do we put methods on `prototype`?

Suppose we create 100 users:

```js id="v9m3ka"
const user1 = new Person("Ajay");
const user2 = new Person("Rahul");
const user3 = new Person("Amit");
```

If `greet()` were created separately inside every object, each object would have its own copy.

With `prototype`:

```text id="j4x8wp"
Person.prototype
      ↓
   greet()
      ↑
      │
 ┌────┼────┐
 ↓    ↓    ↓
user1 user2 user3
```

All objects can access the **same prototype method**.

---

### Important Point

Every normal object does **not** have its own `.prototype` property.

For example:

```js id="z6n2qm"
const user = {
  name: "Ajay",
};
```

This does not mean:

```js id="f8q4vk"
user.prototype;
```

`prototype` is mainly a property found on **functions that can be used as constructors**.

---

## 2. 🔥🔥🔥 What is `__proto__`?

`__proto__` is an accessor that lets us **get or set an object's prototype**.

In simple words:

> **`__proto__` se hum dekh sakte hain ki object ka prototype kya hai.**

### Simple Example

```js id="k3m7px"
const person = {
  greet() {
    console.log("Hello");
  },
};

const user = Object.create(person);
```

Now:

```js id="w8q2nz"
console.log(user.__proto__ === person);
```

Output:

```text id="d5r9vm"
true
```

Why?

Because:

```text id="a7x3kp"
user
 ↓
__proto__
 ↓
person
```

So `user` uses `person` as its prototype.

That's why:

```js id="q6m4ws"
user.greet();
```

works.

---

### Another Example

With a constructor function:

```js id="j9p5xc"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello");
};

const user = new Person("Ajay");
```

Now:

```js id="v4k8mq"
console.log(user.__proto__ === Person.prototype);
```

Output:

```text id="s2n7wd"
true
```

This is a very important relationship:

```text id="b6x3kp"
Person.prototype
       ↑
       │
    user.__proto__
```

So:

> **An object created using `new Person()` has `Person.prototype` as its prototype.**

---

## 3. 🔥🔥🔥 `prototype` vs `__proto__`

This is the most important part.

### `prototype`

`prototype` is a property of a **constructor function**.

Example:

```js id="m8q2vx"
function Person() {}

console.log(Person.prototype);
```

It gives us the prototype object that instances can inherit from.

```text id="p5k7zn"
Person (function)
      ↓
Person.prototype
      ↓
Object used as prototype
```

---

### `__proto__`

`__proto__` refers to the **prototype of an object**.

Example:

```js id="r3w9mq"
const user = new Person();

console.log(user.__proto__);
```

It points to:

```js id="c8x4vd"
Person.prototype;
```

So:

```text id="n7m2kp"
Person.prototype
      ↑
      │
user.__proto__
```

---

# 🔥🔥 Main Difference

| `prototype`                                            | `__proto__`                              |
| ------------------------------------------------------ | ---------------------------------------- |
| Property of constructor functions                      | Accessor on objects                      |
| Used to define shared methods/properties for instances | Refers to the object's prototype         |
| Example: `Person.prototype`                            | Example: `user.__proto__`                |
| Used when setting up inheritance                       | Used to access an object's prototype     |
| Exists on functions such as constructor functions      | Objects have an internal `[[Prototype]]` |

---

## 🔥 The Most Important Example

Look at this carefully:

```js id="u4n8xs"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user = new Person("Ajay");
```

Now:

```js id="w6m3qp"
console.log(user.__proto__ === Person.prototype);
```

Output:

```text id="a2k9vz"
true
```

Think of it like this:

```text id="j8p4nc"
          Person
        (function)
             │
             │ .prototype
             ↓
      Person.prototype
             ↑
             │
             │ .__proto__
             │
           user
          (object)
```

So:

```text id="q3m7ws"
Person.prototype
       ↓
"What prototype should Person's
instances use?"


user.__proto__
       ↓
"What is user object's prototype?"
```

And the answer is the same object:

```text id="k9x2pv"
user.__proto__
      =
Person.prototype
```

---

# 🔥 One More Important Thing

Modern JavaScript code generally prefers:

```js id="r7n4qm"
Object.getPrototypeOf(user);
```

instead of directly using:

```js id="c5x8wp"
user.__proto__;
```

So this:

```js id="v2m6kd"
Object.getPrototypeOf(user) === Person.prototype;
```

is the recommended way to inspect the prototype.

`__proto__` is still commonly seen in interview questions and existing code, so you **should understand it**, but don't make it your preferred API for new code.

---

# 🧠 Easy Memory Trick

Don't try to memorize complicated definitions.

Just remember:

```text id="e8m3qx"
prototype
    ↓
Function ka property
    ↓
Instances ke liye shared methods


__proto__
    ↓
Object ka prototype
    ↓
Points to the prototype object
```

### 🔥 Final Example

```js id="n6q2ws"
function Person() {}

Person.prototype.greet = function () {
  console.log("Hello");
};

const user = new Person();
```

Remember:

```text id="p9v4km"
Person.prototype
      ↑
      │
user.__proto__
```

Therefore:

```js id="t3x7qn"
user.greet();
```

works because JavaScript searches:

```text id="m5k8wp"
user
 ↓
user.__proto__
 ↓
Person.prototype
 ↓
greet() ✅
```

### 🔥🔥🔥 Interview Answers

**`prototype`:**
`prototype` is a property of constructor functions that provides the object from which their instances can inherit properties and methods.

**`__proto__`:**
`__proto__` is an accessor that refers to an object's prototype.

**Difference:**
`prototype` belongs to the constructor function and is used as the prototype for its instances, while `__proto__` refers to the prototype of a particular object.

```text id="w7n3xz"
Function → prototype

Object   → __proto__
```

<!-- =========================== -->

## 🔥🔥 What is `Object.create()`?

`Object.create()` is a JavaScript method used to **create a new object and set another object as its prototype**.

In simple words:

> **`Object.create()` se ek naya object banate hain aur uske prototype ke roop mein kisi existing object ko set kar dete hain.**

### Simple Example

Suppose we have:

```js id="p7m3kx"
const person = {
  greet() {
    console.log("Hello!");
  },
};
```

Now:

```js id="x4n8qd"
const user = Object.create(person);
```

Here, `user` is a new object, and `person` becomes its prototype.

```text id="m2v6wp"
user
 ↓
person
 ↓
greet()
```

So this works:

```js id="q9k3zs"
user.greet();
```

Output:

```text id="n5x8vc"
Hello!
```

Why?

Because `user` doesn't have `greet()` directly.

JavaScript searches its prototype:

```text id="j6r4pm"
user
 ↓
Does user have greet()? ❌
 ↓
Check prototype
 ↓
person
 ↓
Does person have greet()? ✅
 ↓
Run greet()
```

---

## 🔥 What exactly does `Object.create()` do?

When we write:

```js id="v8m2qn"
const user = Object.create(person);
```

JavaScript creates a new object:

```text id="c5x7kr"
user
```

and sets:

```text id="d9p3wm"
user's prototype → person
```

Conceptually:

```text id="a6k8vz"
user.__proto__ === person
```

So:

```js id="r3n7qx"
console.log(user.__proto__ === person);
```

Output:

```text id="w4m9pk"
true
```

A more modern way to check it is:

```js id="t8q2vn"
console.log(Object.getPrototypeOf(user) === person);
```

Output:

```text id="z6x5mc"
true
```

---

## 🔥 Object.create() vs Normal Object

Normally:

```js id="s7k4pd"
const user = {};
```

This creates an object whose prototype is `Object.prototype`.

```text id="q3m8vx"
user
 ↓
Object.prototype
 ↓
null
```

But:

```js id="n5w2ka"
const user = Object.create(person);
```

creates:

```text id="h8p6zm"
user
 ↓
person
 ↓
Object.prototype
 ↓
null
```

So `Object.create()` gives us control over **which object becomes the new object's prototype**.

---

## 🔥 Why is `Object.create()` Useful?

It is useful when we want one object to **inherit behavior from another object directly**.

### Example

```js id="k4q9ws"
const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log("Barking...");
};
```

Now:

```js id="m7x3pn"
dog.eat();
dog.bark();
```

Output:

```text id="r8c5vz"
Eating...
Barking...
```

Here:

```text id="j2n6kw"
dog
 ├── bark()       ← directly belongs to dog
 │
 ↓ prototype
animal
 └── eat()        ← inherited from animal
```

This is a very simple example of **prototypal inheritance**.

---

## 🔥 Another Important Use: Create an Object with No Prototype

We can pass `null`:

```js id="p9v4xm"
const obj = Object.create(null);
```

Now the object has **no prototype**.

```text id="c6k2wd"
obj
 ↓
null
```

So it doesn't inherit methods from `Object.prototype`.

For example:

```js id="e7m3qa"
const obj = Object.create(null);

console.log(Object.getPrototypeOf(obj));
```

Output:

```text id="y5n8vk"
null
```

This can be useful for special dictionary-like objects where you don't want inherited properties.

---

# 🔥 `Object.create()` vs `new`

These can both be used to create objects, but they work differently.

### `Object.create()`

```js id="f8q2mw"
const user = Object.create(person);
```

Directly sets:

```text id="u6n3px"
user's prototype → person
```

### `new`

```js id="b4k7zn"
function Person() {}

const user = new Person();
```

JavaScript automatically sets:

```text id="w9m5qc"
user.__proto__ → Person.prototype
```

So:

```text id="j3x8vk"
Object.create(person)
        ↓
prototype = person


new Person()
        ↓
prototype = Person.prototype
```

---

## 🧠 Easy Way to Remember

Just remember:

```text id="m5q8zd"
Object.create(object)
        ↓
Create new object
        ↓
Set given object as its prototype
```

### One-Line Example

```js id="r7x2kp"
const child = Object.create(parent);
```

Think:

```text id="v3n6wm"
child
  ↓
parent
```

**Child can access parent's properties/methods through the prototype chain.**

### 🔥 Interview Answer

**`Object.create()` creates a new object and sets the specified object as the new object's prototype. It is commonly used to create objects with a specific prototype and implement prototypal inheritance.**

<!-- ================================= -->

## 1. 🔥🔥 What are Constructor Functions?

**Constructor functions are regular JavaScript functions used with the `new` keyword to create multiple objects with the same structure and behavior.**

In simple words:

> **Ek function ko blueprint ki tarah use karke same type ke multiple objects banana = Constructor Function.**

### Simple Example

```js id="m7x3qp"
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

Now we can create objects:

```js id="r4k8vz"
const user1 = new Person("Ajay", 25);
const user2 = new Person("Rahul", 28);
```

Now:

```js id="p9n2wd"
console.log(user1.name);
console.log(user2.name);
```

Output:

```text id="q6m4ks"
Ajay
Rahul
```

Here:

```text id="x8v3pm"
Person()
    ↓
Blueprint
    ↓
user1
user2
user3
...
```

The `new` keyword creates a new object using the constructor function.

---

### What does `new` do?

This is important for interviews.

When we write:

```js id="c5m7xn"
const user = new Person("Ajay", 25);
```

JavaScript roughly does these things:

```text id="z8q2wv"
1. Create a new empty object
          ↓
2. Set its prototype to Person.prototype
          ↓
3. Run Person with `this` pointing to the new object
          ↓
4. Return the new object
```

So:

```js id="j4k9px"
user.__proto__ === Person.prototype;
```

is `true`.

This connects directly to what we learned earlier about **`prototype` and `__proto__`**.

---

### Adding Methods to the Prototype

Usually, methods are placed on the constructor's prototype:

```js id="w6n3qm"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
```

Now:

```js id="t8p5vk"
const user1 = new Person("Ajay");
const user2 = new Person("Rahul");

user1.greet();
user2.greet();
```

Both objects can use the same `greet()` method through:

```text id="f2m7xz"
user1
  ↓
Person.prototype
  ↓
greet()


user2
  ↓
Person.prototype
  ↓
greet()
```

---

# 2. 🔥🔥 What are Classes in JavaScript?

**A class is a JavaScript syntax used to create objects with shared properties and methods.**

In simple words:

> **Class ek cleaner aur easier syntax hai jisse hum similar objects create kar sakte hain.**

### Simple Example

```js id="n7q3wm"
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

Now create objects:

```js id="x5k8pz"
const user1 = new Person("Ajay", 25);
const user2 = new Person("Rahul", 28);
```

And:

```js id="c3m6vd"
user1.greet();
user2.greet();
```

Output:

```text id="j8q4wn"
Hello Ajay
Hello Rahul
```

---

### What is `constructor()`?

Inside a class:

```js id="b9x2km"
constructor(name, age) {
  this.name = name;
  this.age = age;
}
```

The `constructor()` method runs automatically when we create an object using `new`.

```js id="p6v3qs"
const user = new Person("Ajay", 25);
```

Think:

```text id="r4m8zk"
new Person("Ajay", 25)
          ↓
constructor() runs
          ↓
this.name = "Ajay"
this.age = 25
```

---

### Where does `greet()` go?

When we write:

```js id="w7n3qx"
class Person {
  greet() {
    console.log("Hello");
  }
}
```

The method is available through:

```text id="k5m9vp"
Person.prototype
       ↓
greet()
```

So classes are still connected to JavaScript's **prototype system**.

This is very important:

> **JavaScript classes do not replace prototypes. Classes are built on top of JavaScript's prototype-based inheritance system.**

---

# 3. 🔥🔥 Class vs Constructor Function

Both can be used to create multiple objects with shared behavior.

### Constructor Function

```js id="q8m4zn"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user = new Person("Ajay");
```

### Class

```js id="s6x2wp"
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new Person("Ajay");
```

Both can produce similar results.

---

## 🔥 Main Difference

| Constructor Function                        | Class                                     |
| ------------------------------------------- | ----------------------------------------- |
| Older way of creating object blueprints     | Modern syntax                             |
| Uses regular function                       | Uses `class` keyword                      |
| Methods are usually added using `prototype` | Methods are written directly inside class |
| Uses `new`                                  | Uses `new`                                |
| More manual syntax                          | Cleaner and easier syntax                 |
| Common in older JavaScript code             | Common in modern JavaScript               |

---

# 🔥 Are Classes Completely Different From Prototypes?

**No.**

This is a very important interview point.

Consider:

```js id="v3n7qm"
class Person {
  greet() {
    console.log("Hello");
  }
}
```

Then:

```js id="m8k4xp"
const user = new Person();
```

The `greet()` method is available through:

```text id="j6q2wn"
user
 ↓
Person.prototype
 ↓
greet()
```

So classes still use the **prototype system internally**.

You can verify:

```js id="p5r9vk"
console.log(Object.getPrototypeOf(user) === Person.prototype);
```

Output:

```text id="z2m6qs"
true
```

---

# 🔥 Constructor Function vs Class — Same Example

### Constructor Function

```js id="a7k3xm"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
```

### Class

```js id="c9m5wp"
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

Both create objects like:

```js id="n4x8qz"
const user = new Person("Ajay");

user.greet();
```

The major difference is that the **class syntax gives us a cleaner way to write the same prototype-based behavior**.

---

## 🧠 Easy Real-Life Example

Imagine you want to make 100 students.

Instead of manually creating:

```text id="w6p2vk"
student1
student2
student3
...
student100
```

you create a blueprint:

```text id="r8m4qn"
Person / Student
       ↓
Blueprint
       ↓
Create many objects
```

Constructor function:

```js id="t3x7mp"
function Student(name) {
  this.name = name;
}
```

Modern class:

```js id="y5k9wd"
class Student {
  constructor(name) {
    this.name = name;
  }
}
```

Then:

```js id="u2n6qx"
const student1 = new Student("Ajay");
const student2 = new Student("Rahul");
```

---

# 🔥🔥🔥 Important Connection With What We Learned

You can connect all these topics like this:

```text id="m7q3vz"
Constructor Function
        ↓
Person.prototype
        ↓
new Person()
        ↓
New Object
        ↓
object's prototype
        ↓
Person.prototype
        ↓
Prototype Chain
```

For classes:

```text id="x8k4pn"
Class
  ↓
Person.prototype
  ↓
new Person()
  ↓
New Object
  ↓
Prototype Chain
```

So don't think:

```text id="b5n9qm"
Class ❌ Prototype
```

Think:

```text id="c7m2wx"
Class
  ↓
uses
  ↓
Prototype system
```

### 🔥🔥🔥 Interview Answers

**Constructor Function:**
A constructor function is a function used with the `new` keyword to create multiple objects with similar properties and behavior.

**Class:**
A class is a cleaner syntax for creating objects and defining their properties and methods. JavaScript classes internally use the prototype-based inheritance system.

**Class vs Constructor Function:**
Both can create objects using `new`, but classes provide a cleaner and more structured syntax, while constructor functions use regular functions and manually work with the `prototype` property.

### 🧠 One-Line Memory Trick

```text id="v4p8ks"
Constructor Function → Old-style blueprint

Class               → Modern/cleaner blueprint

Both                 → Create objects + use prototypes
```

<!-- ======================== -->

## 1. 🔥🔥 What is Class Inheritance?

**Class inheritance allows one class to reuse the properties and methods of another class.**

In simple words:

> **Ek class dusri class ke properties aur methods ko reuse/inherit kar sakti hai.**

Usually hum do classes kehte hain:

```text
Parent Class
     ↓
Child Class
```

Child class parent ki functionality ko use kar sakti hai.

### Simple Example

Suppose we have a parent class:

```js id="p6m3xq"
class Animal {
  eat() {
    console.log("Eating...");
  }
}
```

Now we create a child class:

```js id="k8n4vz"
class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}
```

Now:

```js id="r3q7wm"
const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text id="v5m9kp"
Eating...
Barking...
```

Notice:

```text id="j2x6qd"
dog.eat()
```

`eat()` `Dog` class mein nahi hai.

It comes from the parent:

```text id="w7p4ns"
Animal
  ↓
eat()


Dog
  ↓
bark()
```

So `Dog` can use both:

```text id="m8k3vz"
Dog's own method
      +
Inherited Animal methods
```

This is **Class Inheritance**.

---

## 2. 🔥🔥 What is the `extends` keyword?

The `extends` keyword is used to **create a child class that inherits from another class**.

In simple words:

> **`extends` batata hai ki ek class ko kis parent class se inherit karna hai.**

### Example

```js id="x4q8pm"
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}
```

Here:

```js id="z6n2wk"
class Dog extends Animal
```

means:

```text id="c9m5vx"
Dog
 ↓
inherits from
 ↓
Animal
```

So:

```js id="s7p3qa"
const dog = new Dog();

dog.eat();
```

works even though `eat()` is defined inside `Animal`.

---

### Another Example

```js id="a8k4mn"
class User {
  login() {
    console.log("User logged in");
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted");
  }
}
```

Now:

```js id="q5x9wd"
const admin = new Admin();

admin.login();
admin.deleteUser();
```

Output:

```text id="n3m7kp"
User logged in
User deleted
```

`Admin` gets:

```text id="v8q2zs"
login()       ← inherited from User
deleteUser()  ← Admin's own method
```

### Easy Way to Remember

```text id="r4m6xn"
extends
   ↓
"Child class inherits from Parent class"
```

---

# 3. 🔥🔥 What is `super()`?

`super()` is used inside a child class to **call the parent class's constructor**.

In simple words:

> **`super()` parent class ke constructor ko call karta hai.**

This is especially important when the child class has its own `constructor()`.

### Simple Example

Parent:

```js id="k7p3mq"
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

Child:

```js id="x9n5wd"
class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }
}
```

Now:

```js id="m4q8vz"
const dog = new Dog("Bruno", "Labrador");

console.log(dog.name);
console.log(dog.breed);
```

Output:

```text id="p6k2xn"
Bruno
Labrador
```

Let's understand:

```text id="s8m3qw"
new Dog("Bruno", "Labrador")
          ↓
Dog constructor runs
          ↓
super("Bruno")
          ↓
Animal constructor runs
          ↓
this.name = "Bruno"
          ↓
this.breed = "Labrador"
```

So `super(name)` allows the child class to use the parent's constructor logic.

---

## 🔥 Why is `super()` needed?

When a child class has its own constructor, JavaScript requires the child to call `super()` **before using `this`**.

For example:

```js id="q3v7km"
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }
}
```

This is correct.

But this is wrong:

```js id="w5n9px"
class Dog extends Animal {
  constructor(name, breed) {
    this.breed = breed;

    super(name);
  }
}
```

Because we are trying to use:

```js id="f8m2qd"
this.breed;
```

before calling `super()`.

### Easy Rule

```text id="j6k4vz"
Child constructor
      ↓
super()
      ↓
Parent constructor
      ↓
Now use this
```

---

# 🔥 `super()` Can Also Call Parent Methods

`super` is not only used for constructors.

We can use:

```js id="b9x3wm"
super.methodName();
```

to call a method from the parent class.

### Example

```js id="n7m5kp"
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();

    console.log("Dog barks");
  }
}
```

Now:

```js id="r4q8zn"
const dog = new Dog();

dog.speak();
```

Output:

```text id="c6v2px"
Animal makes a sound
Dog barks
```

Here:

```js id="s8k3qm"
super.speak();
```

calls the parent class's `speak()` method.

---

# 🔥🔥 `extends` vs `super()`

These are related but do different jobs.

### `extends`

Used to create inheritance:

```js id="y5m9wk"
class Dog extends Animal
```

Means:

```text id="p3x7vq"
Dog
 ↓
inherits from
 ↓
Animal
```

### `super()`

Used inside the child class to call the parent constructor:

```js id="n8q4mz"
super(name);
```

Means:

```text id="t6k2wp"
Child constructor
       ↓
super()
       ↓
Parent constructor
```

---

# 🔥🔥 Complete Example

Now let's put everything together:

```js id="v7m3qx"
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Bruno", "Labrador");

dog.eat();
dog.bark();
```

Output:

```text id="k9x4wp"
Bruno is eating
Bruno is barking
```

Think of the structure like this:

```text id="m5q8zn"
              Animal
                │
        ┌───────┴────────┐
        │                │
   constructor()        eat()
        │
        ↓
       Dog
        │
   ┌────┴─────┐
   │          │
constructor() bark()
   │
   ↓
 super()
   │
   ↓
Animal constructor
```

---

# 🧠 Easy Memory Trick

```text id="c8m4vx"
extends
   ↓
"Who is my parent?"
   ↓
class Dog extends Animal


super()
   ↓
"Call/use my parent's functionality."
```

### 🔥🔥🔥 Interview Answers

**Class Inheritance:**
Class inheritance allows a child class to reuse properties and methods from a parent class.

**`extends`:**
The `extends` keyword is used to create a child class that inherits from another class.

**`super()`:**
`super()` calls the parent class's constructor from the child constructor. `super.method()` can also be used to call a parent class method.

### One-Line Memory Trick

```text id="q7n2wm"
extends → Inherit from parent

super() → Call parent constructor

super.method() → Call parent method
```

<!-- =============================== -->

## 1. 🔥 What are Static Methods?

**Static methods are methods that belong to the class itself, not to the objects created from that class.**

In simple words:

> **Normal method → object ke through call hota hai.**
> **Static method → class ke through call hota hai.**

### Simple Example

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
```

We call it using the class:

```js
console.log(MathUtils.add(10, 20));
```

Output:

```text
30
```

But we **cannot** call it using an object:

```js
const math = new MathUtils();

math.add(10, 20); // Error
```

Why?

Because:

```text
MathUtils.add()
      ↓
belongs to the class
```

not:

```text
math.add()
      ↓
belongs to the object ❌
```

---

### Normal Method vs Static Method

```js
class User {
  greet() {
    console.log("Hello");
  }

  static info() {
    console.log("This is a User class");
  }
}
```

Normal method:

```js
const user = new User();

user.greet();
```

Static method:

```js
User.info();
```

Think:

```text
Normal method
     ↓
object.method()


Static method
     ↓
Class.method()
```

### Real-World Example

JavaScript's built-in `Math` object has methods such as:

```js
Math.max(10, 20, 30);
Math.random();
```

We don't create:

```js
const math = new Math();
```

We directly use the object itself.

Similarly, static methods are useful for functionality that is related to the **class itself**, rather than a particular instance.

### Interview Answer

**Static methods are methods that belong to the class itself rather than its instances, and they are called using the class name instead of an object.**

---

## 2. 🔥 What are Getters and Setters?

**Getters and setters are special methods used to control how class properties are read and updated.**

In simple words:

> **Getter → value read karne par automatically run hota hai.**
> **Setter → value change karne par automatically run hota hai.**

### Getter

A getter uses the `get` keyword.

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Ajay", "Maurya");

console.log(user.fullName);
```

Output:

```text
Ajay Maurya
```

Notice:

```js
user.fullName;
```

We didn't write:

```js
user.fullName();
```

Because a getter behaves like a **property**.

```text
user.fullName
      ↓
getter automatically runs
      ↓
"Ajay Maurya"
```

---

### Setter

A setter uses the `set` keyword.

```js
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const user = new User("Ajay");

console.log(user.name);

user.name = "Rahul";

console.log(user.name);
```

Output:

```text
Ajay
Rahul
```

When we write:

```js
user.name = "Rahul";
```

the setter automatically runs.

---

### Why are Getters and Setters Useful?

They are useful when we want to **control or validate property access**.

For example:

```js
class User {
  constructor(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value >= 0) {
      this._age = value;
    }
  }
}
```

Now:

```js
const user = new User(25);

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

The setter rejected `-10` because of our condition.

### Easy Way to Remember

```text
get
 ↓
GET / read value

set
 ↓
SET / update value
```

### Interview Answer

**A getter is a special method that runs when a property is read, while a setter runs when a property is assigned a new value. They allow us to control property access and modification.**

---

## 3. 🔥🔥 How does Inheritance Work in JavaScript?

**Inheritance allows one class or object to reuse properties and methods from another class or object.**

In simple words:

> **Child ko parent ki functionality mil jati hai, so we don't have to write the same code again.**

### Simple Class Example

Parent class:

```js
class Animal {
  eat() {
    console.log("Eating...");
  }
}
```

Child class:

```js
class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}
```

Now:

```js
const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Eating...
Barking...
```

Notice:

```text
Dog
 ├── bark()       ← Dog's own method
 │
 ↓ inherits from
Animal
 └── eat()        ← inherited method
```

The `Dog` class doesn't have `eat()` directly, but it can still use it because it inherits from `Animal`.

---

### How does JavaScript actually find the method?

When we write:

```js
dog.eat();
```

JavaScript first checks the `dog` object/class for `eat()`.

If it doesn't find it, it looks through the prototype chain.

Conceptually:

```text
dog
 ↓
Dog.prototype
 ↓
Animal.prototype
 ↓
Object.prototype
 ↓
null
```

When JavaScript finds:

```text
Animal.prototype
      ↓
    eat()
```

it runs the method.

This is why **JavaScript inheritance is based on prototypes**.

---

### `extends` Creates the Inheritance Relationship

```js
class Dog extends Animal
```

means:

```text
Dog
 ↓
inherits from
 ↓
Animal
```

---

### `super()` Calls Parent Functionality

Suppose the parent has a constructor:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

Child:

```js
class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }
}
```

Here:

```js
super(name);
```

calls the parent constructor.

So:

```text
new Dog("Bruno", "Labrador")
          ↓
Dog constructor
          ↓
super("Bruno")
          ↓
Animal constructor
          ↓
this.name = "Bruno"
```

---

### JavaScript Has Two Main Forms of Inheritance

#### 1. Class-based syntax

```js
class Dog extends Animal {}
```

This is the syntax you will commonly use in modern JavaScript.

#### 2. Prototype-based inheritance

```js
const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);

dog.eat();
```

Here:

```text
dog
 ↓
animal
 ↓
eat()
```

The second example directly shows JavaScript's **prototype-based inheritance**.

Classes are built on top of this prototype system.

---

# 🔥🔥 Complete Picture

All the concepts you've learned connect like this:

```text
Class Inheritance
       ↓
class Dog extends Animal
       ↓
Dog inherits from Animal
       ↓
Prototype relationship
       ↓
Dog.prototype → Animal.prototype
       ↓
Prototype Chain
       ↓
JavaScript searches for properties/methods
```

### 🧠 Easy Memory Trick

```text
Static method
→ Class.method()


Getter
→ Read property


Setter
→ Update property


Inheritance
→ Child reuses Parent functionality


extends
→ Creates parent-child relationship


super()
→ Uses parent constructor/method
```

### 🔥 Interview Answers

**Static Method:**
A static method belongs to the class itself and is called using the class name rather than an instance.

**Getter/Setter:**
A getter runs when a property is read, while a setter runs when a property is assigned a new value.

**Inheritance:**
Inheritance allows a class or object to reuse properties and methods from another class or object. In JavaScript, class inheritance is implemented using the prototype system.

<!-- ============================ -->
