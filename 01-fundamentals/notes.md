# JavaScript Fundamentals — Part 1

> **Pattern: Meaning → Example → Remember → Interview Answer**

---

## 1. What is JavaScript?

### Meaning

> **JavaScript is a programming language used to add logic, behavior, and interactivity to applications.**

JavaScript se hum application ke **logic aur behavior** ko define karte hain.

For example, JavaScript se hum:

- values aur data handle kar sakte hain
- conditions ke according code execute kar sakte hain
- code ko repeat kar sakte hain using loops
- functions bana sakte hain
- user actions handle kar sakte hain
- APIs se data send aur receive kar sakte hain
- web page ka content dynamically change kar sakte hain

JavaScript code ko **JavaScript Engine** execute karta hai.

JavaScript browser mein bhi run ho sakti hai aur **Node.js** jaise runtime ke through server par bhi run ho sakti hai.

### Example

```js
const name = "Ajay";
const age = 25;

if (age >= 18) {
  console.log(`${name} is an adult`);
}
```

Yahan JavaScript:

- `name` aur `age` values ko handle kar rahi hai
- `if` condition check kar rahi hai
- condition true hone par code execute kar rahi hai
- output console mein print kar rahi hai

### Remember

> **JavaScript is a programming language used to define application logic and behavior.**

### Interview Answer

> **JavaScript is a high-level programming language used to build application logic, behavior, and interactivity. It is mainly used in web applications, but it can also run on servers using runtimes like Node.js.**

<!-- ====================== -->

## 2. JavaScript Engine & Runtime

### Meaning

> **A JavaScript engine is a program that reads, processes, and executes JavaScript code.**

JavaScript code ko computer directly execute nahi karta. **JavaScript Engine** JavaScript code ko process karke execute karta hai.

Popular JavaScript engines:

- **V8** → Chrome and Node.js
- **SpiderMonkey** → Firefox
- **JavaScriptCore** → Safari

Lekin JavaScript Engine akela complete environment nahi deta.

**Runtime** JavaScript Engine ke saath additional APIs aur features provide karta hai jo application ko different tasks perform karne dete hain.

For example:

**Browser Runtime** provides:

- DOM APIs
- Fetch API
- Web APIs
- Event APIs

**Node.js Runtime** provides:

- File System
- HTTP
- Timers
- Networking

Isliye simple way mein:

```text
Runtime = JavaScript Engine + Environment APIs
```

### Example

Browser mein:

```js
document.querySelector("button");
```

Yahan `document` aur `querySelector()` browser ke **DOM API** ka part hain.

Node.js mein:

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});
```

Yahan file ko read karne ki functionality **Node.js runtime** provide karta hai.

### Remember

> **Engine JavaScript code ko execute karta hai, while Runtime JavaScript ko run karne ke liye Engine + required APIs provide karta hai.**

### Interview Answer

> **A JavaScript engine is responsible for processing and executing JavaScript code. A runtime provides the JavaScript engine along with additional APIs required by the application. For example, browsers provide DOM and Web APIs, while Node.js provides file system, HTTP, and networking APIs.**

<!-- ====================== -->

## 3. Variables

### Meaning

> **A variable is a name used to access a value in a JavaScript program.**

JavaScript mein variable kisi value ko ek **name** deta hai. Is name ke through hum program mein us value ko access kar sakte hain.

```js
let age = 25;
```

Yahan:

- `let` → variable declare karne ka keyword
- `age` → variable ka name
- `25` → variable ki value

Ab `age` ke through hum `25` ko access kar sakte hain:

```js
console.log(age);
```

Output:

```text
25
```

Variable ki value change bhi ho sakti hai:

```js
let age = 25;

age = 26;

console.log(age);
```

Output:

```text
26
```

Yahan `age` same variable hai, lekin uski current value `25` se `26` ho gayi.

JavaScript mein variables declare karne ke liye mainly **`let`**, **`const`**, aur **`var`** use hote hain.

### Example

```js
let name = "Ajay";
let age = 25;

console.log(name);
console.log(age);

age = 26;

console.log(age);
```

Output:

```text
Ajay
25
26
```

### Remember

> **Variable = kisi value ko access karne ke liye diya gaya name.**

### Interview Answer

> **A variable is a name used to access a value in a JavaScript program. JavaScript provides `let`, `const`, and `var` to declare variables. These declarations have different rules for scope, reassignment, and hoisting.**

<!-- ======================== -->

## 4. `let`, `const`, and `var`

### Meaning

> **`let`, `const`, and `var` are keywords used to declare variables in JavaScript.**

Teeno variable declare karne ke liye use hote hain, lekin inka **scope** aur **value change karne ka behavior** different hota hai.

### `let`

`let` se declared variable ki value baad mein change kar sakte hain.

```js
let age = 25;

age = 26;

console.log(age); // 26
```

`let` **block-scoped** hota hai. Iska matlab hai ki `{ }` ke andar declare kiya gaya `let` variable us block ke bahar access nahi hota.

```js
if (true) {
  let message = "Hello";

  console.log(message); // Hello
}

console.log(message); // Error
```

### `const`

`const` se declared variable ko baad mein **new value assign nahi kar sakte**.

```js
const age = 25;

age = 26; // Error
```

`const` bhi **block-scoped** hota hai.

```js
if (true) {
  const message = "Hello";

  console.log(message); // Hello
}

console.log(message); // Error
```

### `var`

`var` bhi variable declare karta hai, lekin iska scope `let` aur `const` se different hota hai.

`var` **function-scoped** hota hai, block-scoped nahi.

```js
if (true) {
  var message = "Hello";
}

console.log(message); // Hello
```

Yahan `message` `if` block ke bahar bhi accessible hai.

### Main Difference

| Feature            | `let`  | `const` | `var`           |
| ------------------ | ------ | ------- | --------------- |
| Value reassignment | Yes    | No      | Yes             |
| Block-scoped       | Yes    | Yes     | No              |
| Function-scoped    | Yes    | Yes     | Yes             |
| Modern code        | Common | Common  | Usually avoided |

Modern JavaScript mein generally **`let` aur `const`** use kiye jaate hain. `var` ko mostly old code mein dekha jata hai.

### Example

```js
let score = 10;
score = 20;

const name = "Ajay";

var age = 25;
age = 26;

console.log(score); // 20
console.log(name); // Ajay
console.log(age); // 26
```

### Remember

> **`let` → value change kar sakte hain. `const` → value reassign nahi kar sakte. `var` → function-scoped old declaration.**

### Interview Answer

> **`let`, `const`, and `var` are used to declare variables in JavaScript. `let` and `const` are block-scoped, while `var` is function-scoped. `let` and `var` can be reassigned, but a `const` variable cannot be reassigned.**

<!-- ======================== -->

## 5. Declaration, Initialization, and Assignment

### Meaning

> **Declaration means creating a variable, initialization means giving it its first value, and assignment means giving a new value to an existing variable.**

Ye teen terms similar lagte hain, lekin inka meaning different hai.

### Declaration

Variable ko declare karne ka matlab hai **variable ko create karna**.

```js
let age;
```

Yahan `age` declare hua hai, lekin abhi humne khud koi value assign nahi ki.

### Initialization

Variable ko **first time value dena** initialization kehlata hai.

```js
let age = 25;
```

Yahan:

- `let age` → declaration
- `= 25` → first value dena
- `age = 25` → initialization

### Assignment

Existing variable ko **new value dena** assignment kehlata hai.

```js
let age = 25;

age = 26;
```

Yahan `age` pehle hi declare aur initialize ho chuka tha.

`age = 26` ek **assignment** hai because hum existing variable ko new value de rahe hain.

### Ek saath samjho

```js
let age; // Declaration

age = 25; // Initialization

age = 26; // Assignment
```

Ya declaration aur initialization ek hi statement mein:

```js
let age = 25;
```

Yahan **declaration + initialization** dono ek saath ho rahe hain.

### Example

```js
let name; // Declaration

name = "Ajay"; // Initialization

name = "Rahul"; // Assignment

console.log(name);
```

Output:

```text
Rahul
```

### Remember

> **Declaration = variable banana, Initialization = first value dena, Assignment = existing variable ko new value dena.**

### Interview Answer

> **Declaration means creating a variable. Initialization means giving the variable its first value. Assignment means giving a new value to an already existing variable. For example, `let age;` is declaration, `age = 25` is initialization, and `age = 26` is assignment.**

<!-- ======================= -->

## 6. Data Types

### Meaning

> **A data type defines what kind of value a variable contains and what operations can be performed on that value.**

JavaScript mein har value ka ek **data type** hota hai.

Data type JavaScript ko batata hai ki value kis type ki hai, jaise:

- **String** → text
- **Number** → numbers
- **Boolean** → `true` or `false`
- **undefined** → value assigned nahi hai
- **null** → intentionally empty value
- **Symbol** → unique value
- **BigInt** → very large integer

JavaScript mein **Object** bhi ek major data type category hai. Ismein objects, arrays, aur functions jaise values aati hain.

### Example

```js id="4gkn0t"
let name = "Ajay"; // String
let age = 25; // Number
let isDeveloper = true; // Boolean
let value; // undefined
let data = null; // null
```

Yahan different variables different types ki values contain kar rahe hain.

JavaScript mein data type ko check karne ke liye `typeof` operator use kar sakte hain:

```js id="4m8v6r"
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isDeveloper); // boolean
```

### Remember

> **Data type = value kis type ki hai, ye define karta hai.**

### Interview Answer

> **A data type defines the kind of value stored or used in a JavaScript program. JavaScript has primitive data types such as string, number, boolean, undefined, null, symbol, and bigint, along with objects as a non-primitive type.**

<!-- ============================== -->

## 7. Primitive vs Reference

### Meaning

> **Primitive values are simple values, while reference values are objects that are accessed through a reference.**

JavaScript values ko broadly **primitive** aur **reference values** mein samjha ja sakta hai.

### Primitive Values

Primitive values **single, simple values** hote hain.

JavaScript ke primitive types:

- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`
- `null`
- `symbol`

Example:

```js
let age = 25;
let name = "Ajay";
let isDeveloper = true;
```

Jab primitive value ko kisi doosre variable mein assign karte hain, to **value copy hoti hai**.

```js
let age = 25;

let anotherAge = age;

anotherAge = 30;

console.log(age); // 25
console.log(anotherAge); // 30
```

`anotherAge` ko `age` ki value ki ek separate copy mili.

### Reference Values

Objects, arrays, aur functions **reference values** ke form mein work karte hain.

```js
let user = {
  name: "Ajay",
};
```

Jab object ko kisi doosre variable mein assign karte hain, to object ki complete copy nahi banti. Dono variables **same object ko reference** karte hain.

```js
let user1 = {
  name: "Ajay",
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul
```

Yahan `user1` aur `user2` same object ko reference kar rahe hain.

### Main Difference

```text
Primitive

age → 25
       ↓
anotherAge → 25

Separate values
```

```text
Reference

user1 ──┐
        ↓
      Object
        ↑
user2 ──┘

Same object
```

### Example

```js
// Primitive
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

```js
// Reference
let user1 = {
  name: "Ajay",
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul
```

### Remember

> **Primitive assignment gives a separate value, while object/array assignment gives access to the same underlying object.**

### Interview Answer

> **Primitive values are simple immutable values such as strings, numbers, and booleans. When a primitive value is assigned to another variable, its value is copied. Objects and arrays are reference-based, so assigning them to another variable makes both variables refer to the same object.**

<!-- ========================= -->

## 8. String

### Meaning

> **A string is a data type used to represent text in JavaScript.**

String mein **text characters** store hote hain.

String ko JavaScript mein mainly single quotes `' '`, double quotes `" "`, ya backticks `` ` ` `` ke andar likhte hain.

```js
let name = "Ajay";
let city = "Delhi";
let message = `Hello`;
```

In teeno mein values **strings** hain.

String ke andar letters, numbers, spaces aur special characters ho sakte hain.

```js
let username = "Ajay123";
let message = "Hello World!";
```

Yahan `123` string ka part hai, isliye ye number ki tarah calculate nahi hoga.

```js
let value = "10";

console.log(typeof value); // string
```

### Example

```js
let firstName = "Ajay";
let lastName = "Maurya";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Ajay Maurya
```

Template literals ke saath:

```js
let name = "Ajay";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Ajay and I am 25 years old.
```

### Remember

> **String = text value in JavaScript.**

### Interview Answer

> **A string is a primitive data type used to represent text in JavaScript. Strings can be written using single quotes, double quotes, or backticks. Backticks also allow us to insert expressions using `${}`.**

<!-- ====================== -->

## 9. Number

### Meaning

> **A number is a data type used to represent numeric values in JavaScript.**

JavaScript mein `Number` data type ka use **integers aur decimal values** dono ko represent karne ke liye hota hai.

```js
let age = 25;
let price = 99.99;
let temperature = -10;
```

Yahan `25`, `99.99`, aur `-10` teeno ka data type **number** hai.

```js
console.log(typeof age); // "number"
console.log(typeof price); // "number"
console.log(typeof temperature); // "number"
```

JavaScript mein alag se `int` aur `float` data types nahi hote.

```js
let a = 10; // number
let b = 10.5; // number
```

Dono ka type `number` hai.

### Special Number Values

JavaScript ke `Number` type mein kuch special values bhi hoti hain.

#### `Infinity`

Jab calculation ka result mathematical sense mein infinity ho, JavaScript `Infinity` return kar sakta hai.

```js
console.log(10 / 0); // Infinity
```

#### `-Infinity`

```js
console.log(-10 / 0); // -Infinity
```

#### `NaN`

`NaN` ka meaning hai **Not-a-Number**.

Ye tab mil sakta hai jab JavaScript kisi invalid numeric operation ka result calculate nahi kar paati.

```js
console.log("hello" * 5); // NaN
```

Important point:

> `NaN` ka naam "Not-a-Number" hai, lekin JavaScript mein iska data type **number** hota hai.

```js
console.log(typeof NaN); // "number"
```

### Number Precision

JavaScript ka normal `Number` type internally **64-bit floating-point format** use karta hai.

Is wajah se kuch decimal calculations exactly represent nahi ho paati.

```js
console.log(0.1 + 0.2);
```

Output:

```text
0.30000000000000004
```

Ye JavaScript ka random bug nahi hai. Ye **binary floating-point representation** ki limitation hai.

### Safe Integer Range

JavaScript ke normal `Number` type mein all integers exactly represent nahi kiye ja sakte.

Safe integer range hai:

```js
Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;
```

Approximately:

```text
-9,007,199,254,740,991
to
 9,007,199,254,740,991
```

Agar isse bhi bade integers ke saath exact calculation karni ho, JavaScript mein **`BigInt`** use kiya ja sakta hai.

### Common Operations

Numbers ke saath normal arithmetic operations kar sakte hain:

```js
let a = 20;
let b = 5;

console.log(a + b); // 25
console.log(a - b); // 15
console.log(a * b); // 100
console.log(a / b); // 4
console.log(a % b); // 0
console.log(a ** b); // 3200000
```

### Example

```js
let price = 100;
let quantity = 3;

let total = price * quantity;

console.log(total);
```

Output:

```text
300
```

Decimal example:

```js
let price = 99.99;
let quantity = 2;

let total = price * quantity;

console.log(total);
```

### Remember

> **Number = JavaScript ka numeric data type, jo integers, decimals aur special numeric values like `Infinity` and `NaN` ko represent karta hai.**

### Interview Answer

> **Number is a primitive data type used to represent numeric values in JavaScript. Unlike some languages, JavaScript uses one `Number` type for both integers and floating-point values. It also includes special values such as `Infinity` and `NaN`. For integers larger than the safe `Number` range, JavaScript provides `BigInt`.**

<!-- ================== -->

## 10. Boolean

### Meaning

> **A Boolean is a data type that represents one of two values: `true` or `false`.**

Boolean ka use mainly **yes/no**, **true/false**, ya **condition ke result** ko represent karne ke liye hota hai.

Boolean ke sirf do possible values hote hain:

```js
true;
false;
```

Example:

```js id="d2r7yx"
let isLoggedIn = true;
let isAdmin = false;
```

Yahan:

- `isLoggedIn` ki value `true` hai
- `isAdmin` ki value `false` hai

Boolean values ko quotes ke andar nahi likhna chahiye.

```js id="q7q9zq"
let isActive = true; // Boolean
let value = "true"; // String
```

Dono different hain.

```js id="zj8c4u"
console.log(typeof isActive); // "boolean"
console.log(typeof value); // "string"
```

### Boolean from Comparisons

Comparison operators ka result usually Boolean hota hai.

```js id="y0w9gy"
let age = 25;

console.log(age >= 18); // true
console.log(age < 18); // false
```

Yahan:

```js
age >= 18;
```

ek condition hai jiska result `true` ya `false` hota hai.

### Boolean in Conditions

Boolean values ka use `if` conditions mein bahut common hai.

```js id="4zq5oe"
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome!");
}
```

Yahan `isLoggedIn` ki value `true` hai, isliye `if` ke andar ka code execute hota hai.

Agar value `false` ho:

```js id="5k0y2k"
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome!");
}
```

To `if` ke andar ka code execute nahi hoga.

### Boolean from Logical Operators

Logical operators bhi Boolean result de sakte hain.

```js id="j0d0qf"
let age = 25;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
```

Yahan dono conditions true hain, isliye result `true` hai.

### Boolean Conversion

JavaScript kisi value ko Boolean mein convert kar sakta hai using `Boolean()`.

```js id="6k9h4b"
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
```

Yahan JavaScript value ko Boolean context ke according evaluate kar rahi hai.

Is concept ko **Truthy and Falsy** kehte hain. Isko hum later separately detail mein padhenge.

### Example

```js id="2kz6d4"
let age = 22;
let hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("You can enter.");
} else {
  console.log("You cannot enter.");
}
```

Output:

```text
You can enter.
```

Yahan:

1. `age >= 18` → `true`
2. `hasTicket` → `true`
3. `true && true` → `true`
4. `if` block execute hota hai

### Remember

> **Boolean = a value that can only be `true` or `false`.**

### Interview Answer

> **Boolean is a primitive data type that represents two possible values: `true` and `false`. It is mainly used for conditions and logical decisions. Comparison and logical expressions commonly produce Boolean values.**

<!-- =================== -->

## 11. `undefined`

### Meaning

> **`undefined` is a JavaScript value that means a variable has been declared but no value has been assigned to it.**

Agar hum variable declare karte hain but usko koi value nahi dete, to JavaScript uski value **`undefined`** rakhta hai.

```js
let age;

console.log(age);
```

Output:

```text
undefined
```

Yahan `age` variable exist karta hai, lekin usko abhi koi value assign nahi ki gayi hai.

### `undefined` After Declaration

```js
let name;

console.log(name); // undefined

name = "Ajay";

console.log(name); // Ajay
```

Pehle `name` ki value `undefined` thi.

Baad mein `"Ajay"` assign karne ke baad uski value change ho gayi.

### Function Without `return`

Agar function koi value return nahi karta, to uska result `undefined` hota hai.

```js
function greet() {
  console.log("Hello");
}

let result = greet();

console.log(result);
```

Output:

```text
Hello
undefined
```

Function execute hua aur `"Hello"` print kiya, lekin usne koi value `return` nahi ki. Isliye `result` ki value `undefined` hai.

### Missing Object Property

Agar object mein koi property exist nahi karti aur hum us property ko access karte hain, to result `undefined` milta hai.

```js
const user = {
  name: "Ajay",
};

console.log(user.age);
```

Output:

```text
undefined
```

`user` object mein `age` property nahi hai, isliye result `undefined` hai.

### `undefined` vs `"undefined"`

Dono same nahi hain.

```js
let a = undefined;
let b = "undefined";

console.log(typeof a); // "undefined"
console.log(typeof b); // "string"
```

`undefined` ek **primitive value** hai, jabki `"undefined"` ek **string** hai.

### `undefined` vs `null`

Dono ka meaning similar lag sakta hai, but they represent different situations.

```js
let a;
let b = null;
```

- `a` → value assign nahi hui, so `undefined`
- `b` → intentionally empty value set ki gayi, so `null`

Is difference ko hum `null` ke topic mein detail mein dekhenge.

### Example

```js
let username;

console.log(username); // undefined

username = "Ajay";

console.log(username); // Ajay
```

### Remember

> **`undefined` means a value is not available or has not been assigned.**

### Interview Answer

> **`undefined` is a primitive value in JavaScript that usually represents the absence of an assigned value. A declared variable without a value has `undefined`, and functions without an explicit return also return `undefined`. Missing object properties also produce `undefined`.**

<!-- =============== -->

## 12. `null`

### Meaning

> **`null` is a JavaScript value that represents an intentional absence of a value.**

`null` ka use tab hota hai jab hum **intentionally batana chahte hain ki abhi koi value nahi hai**.

```js
let selectedUser = null;
```

Yahan `selectedUser` variable exist karta hai, lekin humne intentionally uski value `null` rakhi hai.

Iska meaning hai:

> **There is currently no user selected.**

Baad mein us variable ko actual value de sakte hain:

```js
let selectedUser = null;

selectedUser = "Ajay";

console.log(selectedUser); // Ajay
```

### `undefined` vs `null`

Ye interview mein commonly poocha ja sakta hai.

```js
let user1;
let user2 = null;
```

`user1` ki value `undefined` hai because humne usko koi value assign nahi ki.

`user2` ki value `null` hai because humne **intentionally empty value** assign ki hai.

Simple difference:

```text
undefined → value assigned nahi hai
null      → intentionally no value
```

### `null` is a Primitive

`null` JavaScript ka **primitive value** hai.

```js
let value = null;

console.log(value); // null
```

Lekin ek famous JavaScript behavior hai:

```js
console.log(typeof null);
```

Output:

```text
object
```

Ye JavaScript ka **historical language bug/legacy behavior** hai.

Technically `null` object nahi hai. `typeof null` ka `"object"` return karna JavaScript ka old behavior hai jo backward compatibility ke liye change nahi kiya gaya.

### Checking for `null`

Agar specifically check karna ho ki value `null` hai:

```js
let user = null;

console.log(user === null); // true
```

Yahan `===` use karna better hai because ye exact value check karta hai.

### Example

Imagine karo user profile load hone se pehle:

```js
let currentUser = null;

console.log(currentUser); // null
```

Login ke baad:

```js
currentUser = {
  name: "Ajay",
};

console.log(currentUser);
```

Ab `currentUser` mein actual object hai.

### Remember

> **`null` = intentionally no value.**

### Interview Answer

> **`null` is a primitive value used to represent an intentional absence of a value. Unlike `undefined`, which commonly means a value has not been assigned, `null` is explicitly assigned by the developer. One important JavaScript behavior is that `typeof null` returns `"object"` for historical reasons.**

<!-- ================= -->

## 13. `Symbol`

### Meaning

> **`Symbol` is a primitive data type used to create a unique value.**

Har `Symbol` value **unique** hoti hai, even agar do Symbols same description ke saath create kiye gaye ho.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

Yahan dono Symbols ka description `"id"` same hai, lekin `id1` aur `id2` **different unique values** hain.

### Why is `Symbol` Used?

`Symbol` ka common use **object ke unique property keys** banane ke liye hota hai.

Normally object properties string keys ho sakti hain:

```js
const user = {
  id: 101,
};
```

Lekin agar hume aisi property chahiye jiska key accidentally kisi existing property se conflict na kare, to `Symbol` use kar sakte hain.

```js
const id = Symbol("id");

const user = {
  name: "Ajay",
  [id]: 101,
};

console.log(user[id]); // 101
```

Yahan `[id]` mein `id` ek Symbol hai, isliye ye ek **unique property key** create karta hai.

### Same Description ≠ Same Symbol

Ye important interview point hai.

```js
const a = Symbol("user");
const b = Symbol("user");

console.log(a === b); // false
```

Description same hone ke baad bhi Symbols different hain.

Agar same Symbol ko reuse karna ho, `Symbol.for()` use kar sakte hain:

```js
const a = Symbol.for("user");
const b = Symbol.for("user");

console.log(a === b); // true
```

`Symbol.for()` ek **global Symbol registry** use karta hai.

### `typeof Symbol`

```js
const id = Symbol("id");

console.log(typeof id);
```

Output:

```text
symbol
```

### Example

```js
const userId = Symbol("userId");

const user = {
  name: "Ajay",
  [userId]: 101,
};

console.log(user.name); // Ajay
console.log(user[userId]); // 101
```

### Remember

> **Symbol = a unique primitive value, commonly used for unique object property keys.**

### Interview Answer

> **Symbol is a primitive data type used to create unique values. Two Symbols with the same description are still different values. Symbols are commonly used as unique object property keys to avoid property-name conflicts.**

<!-- ============================== -->

## 14. `BigInt`

### Meaning

> **`BigInt` is a primitive data type used to represent integers that are larger than the safe range of the `Number` type.**

JavaScript ka normal `Number` type bahut bade integers ko exactly represent nahi kar sakta.

Normal `Number` ke safe integer range ke bahar jaane par kuch integers ki exact value lose ho sakti hai.

`BigInt` ka use aise **very large integers** ke liye hota hai.

### Creating a `BigInt`

Number ke end mein `n` lagakar `BigInt` bana sakte hain:

```js
const bigNumber = 9007199254740993n;

console.log(bigNumber);
```

Ya `BigInt()` function se:

```js
const bigNumber = BigInt("9007199254740993");

console.log(bigNumber);
```

Yahan `n` batata hai ki value **BigInt** hai.

### `Number` vs `BigInt`

Normal `Number`:

```js
const number = 9007199254740991;

console.log(typeof number); // "number"
```

BigInt:

```js
const bigNumber = 9007199254740991n;

console.log(typeof bigNumber); // "bigint"
```

Dono ka data type different hai.

### Why BigInt?

JavaScript ka maximum safe integer hai:

```js
Number.MAX_SAFE_INTEGER;
```

Iski value hai:

```text
9007199254740991
```

Is range se bade integers ko `Number` ke through exactly represent karna safe nahi hota.

Aise cases mein:

```js
const id = 9007199254740993n;
```

`BigInt` exact integer value maintain kar sakta hai.

### BigInt with Arithmetic

BigInt ke saath normal arithmetic operations kar sakte hain:

```js
const a = 1000000000000000000n;
const b = 2000000000000000000n;

console.log(a + b);
```

Output:

```text
3000000000000000000n
```

### Important: `Number` and `BigInt` Mix Nahi Kar Sakte

Ye directly allowed nahi hai:

```js
const a = 10n;
const b = 5;

console.log(a + b); // TypeError
```

BigInt aur Number ko arithmetic operation mein directly mix nahi kar sakte.

Agar zarurat ho to same type mein convert karna padega:

```js
const a = 10n;
const b = BigInt(5);

console.log(a + b); // 15n
```

### BigInt Decimal Support Nahi Karta

`BigInt` sirf **integers** ke liye hai.

```js
const value = 10.5n; // SyntaxError
```

Decimal values ke liye normal `Number` use hota hai.

### Example

```js
const userId = 9007199254740993n;

console.log(userId);
console.log(typeof userId);
```

Output:

```text
9007199254740993n
bigint
```

### Remember

> **BigInt = very large integers ko exactly represent karne ke liye primitive data type.**

### Interview Answer

> **BigInt is a primitive data type used to represent integers larger than the safe range of JavaScript's Number type. It is created by adding `n` to an integer or using the `BigInt()` function. BigInt cannot be directly mixed with Number in arithmetic operations.**

<!-- =========================== -->

## 15. `typeof`

### Meaning

> **`typeof` is an operator used to check the data type of a value.**

JavaScript mein `typeof` ka use karke hum check kar sakte hain ki koi value kis **data type** ki hai.

Syntax:

```js
typeof value;
```

Example:

```js
const name = "Ajay";
const age = 25;
const isDeveloper = true;

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isDeveloper); // "boolean"
```

### Common Results

```js
typeof "Ajay"; // "string"
typeof 25; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof 10n; // "bigint"
typeof Symbol("id"); // "symbol"
```

### `typeof null`

Ek important JavaScript behavior:

```js
console.log(typeof null);
```

Output:

```text
"object"
```

Technically `null` **object nahi hai**. Ye JavaScript ka old historical behavior hai.

Isliye agar specifically `null` check karna ho:

```js
const value = null;

console.log(value === null); // true
```

### `typeof` with Objects

Objects ke liye:

```js
const user = {
  name: "Ajay",
};

console.log(typeof user); // "object"
```

Array ke liye bhi:

```js
const numbers = [1, 2, 3];

console.log(typeof numbers); // "object"
```

Isliye `typeof` se array ko directly identify nahi kar sakte.

Array check karne ke liye:

```js
console.log(Array.isArray(numbers)); // true
```

### `typeof` with Functions

Function ke liye `typeof`:

```js
function greet() {
  console.log("Hello");
}

console.log(typeof greet);
```

Output:

```text
"function"
```

Although functions JavaScript mein objects hain, `typeof` unke liye special result `"function"` return karta hai.

### Why `typeof` is Useful

Jab hume runtime par kisi value ka type check karna ho, `typeof` useful hota hai.

```js
function printAge(age) {
  if (typeof age === "number") {
    console.log(`Age is ${age}`);
  }
}

printAge(25);
```

Yahan code pehle check karta hai ki `age` ki value `number` hai ya nahi.

### Example

```js
const name = "Ajay";
const age = 25;
const isStudent = false;
const value = undefined;
const data = null;

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof value); // undefined
console.log(typeof data); // object
```

### Remember

> **`typeof` = value ka data type check karne ka operator.**

### Interview Answer

> **`typeof` is an operator used to determine the type of a value at runtime. It returns a string such as `"string"`, `"number"`, `"boolean"`, or `"object"`. One important exception is that `typeof null` returns `"object"` because of a historical JavaScript behavior.**

<!-- ============================== -->

## 16. Dynamic Typing

### Meaning

> **JavaScript is dynamically typed, which means a variable can hold values of different data types at different times.**

JavaScript mein variable ka type **variable declare karte time fixed nahi hota**.

Ek hi variable mein pehle ek type ki value ho sakti hai aur baad mein doosre type ki value assign kar sakte hain.

```js
let value = 10;

value = "Hello";

value = true;
```

Yahan:

```text
10       → number
"Hello"  → string
true     → boolean
```

Same variable `value` ne teen different types ki values hold ki hain.

### Static vs Dynamic Typing

**Static typed language** mein variable ka type generally declare/compile time par fixed hota hai.

Conceptually:

```text
int age = 25;

age = "Ajay"; // Error
```

Lekin JavaScript mein:

```js
let age = 25;

age = "Ajay"; // Allowed
```

JavaScript variable ko permanently `number` ya `string` type assign nahi karta.

### Type Runtime Par Determine Hota Hai

JavaScript mein value ka type runtime par determine hota hai.

```js
let value = 100;

console.log(typeof value); // "number"

value = "100";

console.log(typeof value); // "string"
```

Pehle `value` ki current value `number` thi.

Baad mein value change hui, to current type bhi `string` ho gaya.

### Variable vs Value Type

Ek important point:

> **Variable ka fixed type nahi hota; variable ke andar jo current value hai, uska type hota hai.**

Example:

```js
let data = 10;
```

Yahan `data` ko permanently `number` variable nahi kaha jaata.

`data` currently **number value ko reference/access** kar raha hai.

Baad mein:

```js
data = "Ajay";
```

Ab `data` ke through **string value** access ho rahi hai.

### Dynamic Typing ≠ No Types

JavaScript dynamically typed hai, lekin JavaScript mein types exist karte hain.

```js
let value = 10;

console.log(typeof value); // number

value = "Ajay";

console.log(typeof value); // string
```

Isliye dynamic typing ka matlab **"JavaScript mein data types nahi hote"** nahi hai.

Meaning ye hai ki **variable ka type fixed nahi hota aur value ke according runtime par type determine hota hai.**

### Example

```js
let userData = 25;

console.log(typeof userData); // number

userData = "Ajay";

console.log(typeof userData); // string

userData = true;

console.log(typeof userData); // boolean
```

### Remember

> **Dynamic typing = same variable different times par different data types ki values hold kar sakta hai.**

### Interview Answer

> **JavaScript is a dynamically typed language, which means a variable is not restricted to one data type. The type is associated with the current value and can change when a different type of value is assigned. This type information is determined at runtime.**

<!-- ========================= -->

## 17. Type Conversion

### Meaning

> **Type conversion means changing a value from one data type to another data type.**

JavaScript mein ek value ko explicitly doosre type mein convert kar sakte hain.

For example, **string ko number** mein convert karna:

```js
const value = "25";

const number = Number(value);

console.log(number); // 25
console.log(typeof number); // "number"
```

Yahan `"25"` pehle **string** tha.

`Number(value)` ne usko **number** mein convert kar diya.

### Common Type Conversion Methods

JavaScript mein commonly ye methods use hote hain:

```js
Number();
String();
Boolean();
```

### String → Number

```js
const value = "100";

const result = Number(value);

console.log(result); // 100
console.log(typeof result); // "number"
```

Agar string valid number nahi hai:

```js
const value = "hello";

console.log(Number(value)); // NaN
```

JavaScript `"hello"` ko valid number mein convert nahi kar paati, isliye result `NaN` hota hai.

### Number → String

`String()` se value ko string mein convert kar sakte hain.

```js
const age = 25;

const result = String(age);

console.log(result); // "25"
console.log(typeof result); // "string"
```

Dhyan do:

```text
25   → number
"25" → string
```

Value visually same lag sakti hai, lekin data type different hai.

### Value → Boolean

`Boolean()` kisi value ko `true` ya `false` mein convert karta hai.

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
```

Is conversion ke rules ko **Truthy and Falsy** values kehte hain. Hum isko later separately detail mein padhenge.

### Explicit Type Conversion

Jab developer khud conversion karta hai, use **explicit type conversion** kehte hain.

```js
const value = "50";

const number = Number(value);
```

Yahan humne explicitly `Number()` use karke string ko number mein convert kiya.

### Type Conversion vs Type Coercion

Dono related hain, but same nahi hain.

**Type Conversion:**

> Developer explicitly type change karta hai.

```js
Number("10");
```

**Type Coercion:**

> JavaScript operation ke time automatically type change kar deti hai.

```js
"10" - 5; // 5
```

Type coercion ko next topic mein detail mein dekhenge.

### Example

```js
const price = "500";
const quantity = 2;

const numericPrice = Number(price);

const total = numericPrice * quantity;

console.log(total); // 1000
```

Yahan:

```text
"500"
  ↓
Number()
  ↓
500
```

Phir `500 * 2` calculate hua.

### Remember

> **Type conversion = ek value ko explicitly doosre data type mein convert karna.**

### Interview Answer

> **Type conversion means converting a value from one data type to another. In JavaScript, we can explicitly convert values using methods like `Number()`, `String()`, and `Boolean()`. For example, `Number("25")` converts the string `"25"` into the number `25`.**

<!-- =============================== -->

## 18. Type Coercion

### Meaning

> **Type coercion means JavaScript automatically converts a value from one data type to another during an operation.**

Type conversion mein **hum khud conversion karte hain**:

```js
Number("10");
```

Lekin type coercion mein **JavaScript khud conversion karti hai** because an operation needs compatible types.

### String + Number

JavaScript mein `+` operator ka special behavior hai.

```js
const age = 25;

console.log("Age: " + age);
```

Output:

```text
Age: 25
```

Yahan `age` ek **number** hai, but `"Age: "` ek **string** hai.

`+` ke case mein JavaScript number ko string ke saath combine karne ke liye string mein convert kar deti hai.

Conceptually:

```text
"Age: " + 25
       ↓
"Age: " + "25"
       ↓
"Age: 25"
```

### Number Operation

Other arithmetic operators string numbers ko number mein convert kar sakte hain.

```js
console.log("10" - 5);
```

Output:

```text
5
```

Yahan `"10"` string hai, lekin `-` operator numeric subtraction karta hai, isliye JavaScript `"10"` ko number `10` mein convert kar deti hai.

```text
"10" - 5
   ↓
10 - 5
   ↓
5
```

Similarly:

```js
console.log("10" * 2); // 20
console.log("10" / 2); // 5
```

### Boolean Coercion

Conditions mein JavaScript values ko Boolean context mein convert kar sakti hai.

```js
const username = "Ajay";

if (username) {
  console.log("Username exists");
}
```

`"Ajay"` ek **truthy** value hai, isliye condition true treat hoti hai.

```js
const username = "";

if (username) {
  console.log("Username exists");
}
```

Empty string `""` **falsy** hoti hai, isliye `if` condition false treat hoti hai.

Truthy aur falsy values ko hum later separately detail mein padhenge.

### `==` and Type Coercion

Loose equality `==` comparison se pehle type coercion kar sakti hai.

```js
console.log("10" == 10);
```

Output:

```text
true
```

Yahan JavaScript values ko compatible type mein convert karke compare karti hai.

Lekin strict equality `===` type coercion nahi karti:

```js
console.log("10" === 10);
```

Output:

```text
false
```

Isliye modern JavaScript mein generally `===` prefer kiya jata hai.

### Type Conversion vs Type Coercion

**Type Conversion:**

> Developer explicitly value ko convert karta hai.

```js
const value = "10";

const number = Number(value);
```

**Type Coercion:**

> JavaScript operation ke time automatically conversion karti hai.

```js
const result = "10" - 5;
```

### Important Examples

```js
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
```

`+` mein string concatenation ho sakti hai, jabki `-`, `*`, aur `/` numeric operations perform karte hain.

### Example

```js
const price = "500";
const quantity = 2;

const total = price * quantity;

console.log(total);
```

Output:

```text
1000
```

Yahan `price` string hai, lekin `*` numeric operation hai. JavaScript `"500"` ko number `500` mein coerce karti hai.

### Remember

> **Type coercion = JavaScript operation ke time automatically value ka type convert kar deti hai.**

### Interview Answer

> **Type coercion is the automatic conversion of a value from one type to another by JavaScript during an operation. For example, `"10" - 5` gives `5` because JavaScript converts the string `"10"` to a number. This is different from type conversion, where the developer explicitly performs the conversion.**

<!-- ============================== -->

## 19. Truthy and Falsy

### Meaning

> **Truthy and falsy describe how a value behaves when JavaScript expects a Boolean value.**

JavaScript mein har value directly `true` ya `false` nahi hoti.

Lekin jab kisi value ko **Boolean context** mein use karte hain, JavaScript us value ko `true` ya `false` ke according treat karti hai.

Example:

```js
const name = "Ajay";

if (name) {
  console.log("Name exists");
}
```

`"Ajay"` ek **truthy** value hai, isliye `if` condition run hogi.

```js
const name = "";

if (name) {
  console.log("Name exists");
}
```

`""` ek **falsy** value hai, isliye `if` condition run nahi hogi.

### Falsy Values

JavaScript mein ye values **falsy** hoti hain:

```text
false
0
-0
0n
""
null
undefined
NaN
```

In values ko Boolean context mein `false` treat kiya jata hai.

Example:

```js
if (0) {
  console.log("This will not run");
}
```

`0` falsy hai, isliye block execute nahi hoga.

### Truthy Values

Jo values falsy nahi hain, woh generally **truthy** hoti hain.

Examples:

```js
true
1
-1
"hello"
"0"
[]
{}
```

Example:

```js
if ("hello") {
  console.log("This will run");
}
```

`"hello"` truthy hai, isliye block execute hoga.

### Empty String vs `"0"`

Ye important example hai:

```js
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
```

`""` empty string hai, isliye falsy hai.

Lekin `"0"` ek **non-empty string** hai, isliye truthy hai.

### Empty Array and Empty Object

Ye interview mein commonly confusing point hai:

```js
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

Empty array `[]` aur empty object `{}` **truthy** hote hain.

Isliye:

```js
if ([]) {
  console.log("Runs");
}
```

Output:

```text
Runs
```

### Explicit Boolean Conversion

Kisi value ka Boolean result directly check karna ho to `Boolean()` use kar sakte hain.

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean([])); // true
```

### `if` Condition Example

```js
const username = "Ajay";

if (username) {
  console.log("User has a username");
} else {
  console.log("Username is empty");
}
```

`username` ki value `"Ajay"` hai, jo truthy hai, isliye first block execute hoga.

### Remember

> **Truthy = Boolean context mein `true` treat hota hai. Falsy = Boolean context mein `false` treat hota hai.**

### Interview Answer

> **Truthy and falsy describe how JavaScript values behave in a Boolean context. Falsy values include `false`, `0`, `""`, `null`, `undefined`, `NaN`, `-0`, and `0n`. All other values are generally truthy, including empty arrays and empty objects.**

<!-- ================================ -->

## 20. `==` vs `===`

### Meaning

> **`==` and `===` are comparison operators used to check whether two values are equal.**

Main difference ye hai:

- `==` → **type coercion** kar sakta hai before comparison
- `===` → **type coercion nahi karta**; value aur type dono check karta hai

### `==` — Loose Equality

`==` ko **loose equality** operator kehte hain.

Agar dono values ka type different hai, to JavaScript comparison se pehle type conversion kar sakti hai.

```js id="b2m2j1"
console.log(10 == "10");
```

Output:

```text
true
```

Yahan:

```text
10      → number
"10"    → string
```

Types different hain, lekin `==` comparison ke time `"10"` ko number ke according convert karke compare kar sakta hai.

Conceptually:

```text
10 == "10"
   ↓
10 == 10
   ↓
true
```

### `===` — Strict Equality

`===` ko **strict equality** operator kehte hain.

Ye **value aur type dono** check karta hai.

```js id="3yqk1m"
console.log(10 === "10");
```

Output:

```text
false
```

Kyunki:

```text
10    → number
"10"  → string
```

Values same dikh sakti hain, lekin types different hain.

Isliye result `false` hai.

### Same Type Example

```js id="7w7m8n"
console.log(10 === 10); // true
console.log("hello" === "hello"); // true
console.log(true === true); // true
```

Yahan value aur type dono same hain.

### Important Examples

```js id="r2l8x6"
console.log(0 == false); // true
console.log(0 === false); // false
```

`==` type coercion kar sakta hai, isliye `0` aur `false` ko equal treat kar sakta hai.

`===` mein:

```text
0      → number
false  → boolean
```

Types different hain, so result `false`.

Another example:

```js id="8h0q42"
console.log("" == false); // true
console.log("" === false); // false
```

Again, `==` coercion allow karta hai, while `===` strict comparison karta hai.

### `!=` vs `!==`

Same concept inequality operators par bhi apply hota hai.

```js id="x6k8hj"
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
```

- `!=` → loose inequality
- `!==` → strict inequality

### Which One Should You Use?

Modern JavaScript mein generally **`===` aur `!==` prefer** kiye jaate hain.

```js id="x3j7v8"
const age = 25;

if (age === 25) {
  console.log("Age is 25");
}
```

Isse unexpected type coercion avoid hoti hai aur comparison more predictable hota hai.

### Example

```js id="2wq8rf"
const userInput = "25";

console.log(userInput == 25); // true
console.log(userInput === 25); // false
```

Agar `userInput` string hai aur hume specifically number `25` se compare karna hai, to `===` false dega.

Agar number comparison chahiye, pehle explicitly convert kar sakte hain:

```js id="q5m7xs"
const userInput = "25";

console.log(Number(userInput) === 25); // true
```

Yahan humne **explicit type conversion** ki aur phir strict comparison ki.

### Remember

> **`==` value compare karta hai with possible type coercion; `===` value aur type dono compare karta hai without type coercion.**

### Interview Answer

> **`==` is the loose equality operator and can perform type coercion before comparing values. `===` is the strict equality operator and compares both value and type without coercion. In modern JavaScript, `===` is generally preferred because it gives more predictable results.**

<!-- ============================= -->

## 21. Operators

### Meaning

> **An operator is a symbol or keyword used to perform an operation on one or more values.**

Operators JavaScript ko batate hain ki values ke saath **kya operation perform karna hai**.

For example:

```js
10 + 5;
```

Yahan:

- `10` → value
- `+` → operator
- `5` → value

`+` dono numbers ko add karta hai.

### Arithmetic Operators

Arithmetic operators numbers ke saath mathematical operations perform karte hain.

| Operator | Meaning        | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `10 + 5` | `15`   |
| `-`      | Subtraction    | `10 - 5` | `5`    |
| `*`      | Multiplication | `10 * 5` | `50`   |
| `/`      | Division       | `10 / 5` | `2`    |
| `%`      | Remainder      | `10 % 3` | `1`    |
| `**`     | Exponentiation | `2 ** 3` | `8`    |

Example:

```js
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### Assignment Operators

Assignment operators variable ko value assign ya update karne ke liye use hote hain.

```js
let score = 10;

score += 5;
console.log(score); // 15
```

Common assignment operators:

```text
=   → assign
+=  → add and assign
-=  → subtract and assign
*=  → multiply and assign
/=  → divide and assign
%=  → remainder and assign
```

For example:

```js
let score = 10;

score += 5; // score = score + 5
score *= 2; // score = score * 2

console.log(score); // 30
```

### Comparison Operators

Comparison operators do values ko compare karte hain aur usually **Boolean result** return karte hain.

```js
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log(10 === 10); // true
console.log(10 !== 5); // true
```

Common comparison operators:

```text
>   → greater than
<   → less than
>=  → greater than or equal to
<=  → less than or equal to
=== → strict equality
!== → strict inequality
```

### Unary Operators

Unary operator sirf **one operand/value** ke saath kaam karta hai.

Example:

```js
let age = 25;

age++;
console.log(age); // 26
```

Yahan `++` ek hi variable `age` par operate kar raha hai.

Common unary operators:

```text
++  → increment
--  → decrement
!   → logical NOT
typeof → type check
```

### Ternary Operator

Ternary operator ek short form hai `if...else` ki.

```js
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult
```

Iska basic structure:

```text
condition ? valueIfTrue : valueIfFalse
```

Isko hum later **Ternary Operator** ke topic mein separately detail mein padhenge.

### Operators and Operands

Operator ke saath jin values par operation perform hota hai unhe **operands** kehte hain.

```js
10 + 5;
```

Yahan:

```text
10 → operand
+  → operator
5  → operand
```

### Example

```js
const price = 500;
const quantity = 2;

const total = price * quantity;

console.log(total); // 1000

console.log(total > 800); // true
```

Yahan:

- `*` → arithmetic operator
- `=` → assignment operator
- `>` → comparison operator

### Remember

> **Operator = values ke saath koi specific operation perform karne wala symbol ya keyword.**

### Interview Answer

> **An operator is a symbol or keyword used to perform an operation on one or more values. JavaScript provides arithmetic, assignment, comparison, logical, unary, and other types of operators. For example, `+` performs addition, `=` assigns a value, and `===` performs strict equality comparison.**

<!-- ================================= -->

## 22. Logical Operators

### Meaning

> **Logical operators are used to combine or reverse conditions and produce a Boolean result.**

JavaScript mein logical operators ka use tab hota hai jab hume **multiple conditions ko combine** karna ho ya kisi condition ka result **reverse** karna ho.

JavaScript mein three main logical operators hain:

```text
&&  → AND
||  → OR
!   → NOT
```

---

### `&&` — AND

> **`&&` returns a truthy result only when both conditions are truthy.**

Example:

```js id="3w8c2a"
const age = 25;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
```

Output:

```text
true
```

Yahan:

```text
age >= 18 → true
hasLicense → true

true && true → true
```

Agar ek bhi condition falsy ho:

```js id="b9l3u7"
const age = 16;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
```

Output:

```text
false
```

Because:

```text
false && true → false
```

Simple rule:

```text
true && true   → true
true && false  → false
false && true  → false
false && false → false
```

---

### `||` — OR

> **`||` returns a truthy result when at least one condition is truthy.**

Example:

```js id="r8v2pk"
const isAdmin = false;
const isOwner = true;

console.log(isAdmin || isOwner);
```

Output:

```text
true
```

Because:

```text
false || true → true
```

Sirf tab result falsy hoga jab **dono conditions falsy** hon.

```js id="6e5x0m"
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
```

---

### `!` — NOT

> **`!` reverses the Boolean meaning of a value.**

Agar value truthy hai, `!` usko `false` bana deta hai.

```js id="t7b3xq"
console.log(!true); // false
```

Agar value falsy hai, `!` usko `true` bana deta hai.

```js id="1y6t4m"
console.log(!false); // true
```

Ye non-Boolean values par bhi work karta hai:

```js id="c0x1rz"
console.log(!"Hello"); // false
console.log(!""); // true
console.log(!0); // true
```

`"Hello"` truthy hai, so `!"Hello"` → `false`.

`""` falsy hai, so `!""` → `true`.

---

### Logical Operators Sirf `true` / `false` Return Nahi Karte

Ye ek **important interview point** hai.

`&&` aur `||` operands ki actual values bhi return kar sakte hain.

Example:

```js id="b6t4gq"
console.log("Hello" && "World");
```

Output:

```text
World
```

Aur:

```js id="x5h8zq"
console.log("Hello" || "World");
```

Output:

```text
Hello
```

Ye behavior **short-circuiting** ke saath closely related hai.

Isko next topic mein detail mein dekhenge.

---

### Example

```js id="2f7m9k"
const age = 25;
const hasTicket = true;
const isVIP = false;

if (age >= 18 && hasTicket) {
  console.log("Entry allowed");
}

if (isVIP || hasTicket) {
  console.log("You can enter");
}
```

Output:

```text
Entry allowed
You can enter
```

First condition:

```text
age >= 18 → true
hasTicket → true

true && true → true
```

Second condition:

```text
isVIP     → false
hasTicket → true

false || true → true
```

### Remember

> **`&&` needs both conditions to be truthy, `||` needs at least one truthy condition, and `!` reverses the Boolean result.**

### Interview Answer

> **Logical operators are used to combine or reverse conditions in JavaScript. `&&` requires both operands to be truthy, `||` returns a truthy result when at least one operand is truthy, and `!` reverses the Boolean meaning of a value. `&&` and `||` can also return operand values instead of only `true` or `false`.**

<!-- =================================== -->

## 23. Short-Circuiting

### Meaning

> **Short-circuiting means JavaScript stops evaluating a logical expression as soon as the final result is already known.**

Ye behavior mainly **`&&`** aur **`||`** ke saath hota hai.

JavaScript left to right operands ko evaluate karti hai. Agar kisi point par result already decide ho gaya, to remaining operands ko evaluate nahi karti.

---

### `&&` Short-Circuiting

`&&` mein agar koi operand **falsy** mil jaye, to poora expression falsy result dega.

Isliye JavaScript uske baad ke operands ko check nahi karti.

```js id="xq2k1p"
console.log(false && "Hello");
```

Output:

```text
false
```

JavaScript ko pehle hi pata hai:

```text
false && anything → false
```

Isliye `"Hello"` ko evaluate karne ki zarurat nahi hai.

Example:

```js id="nq7m3v"
const isLoggedIn = false;

isLoggedIn && console.log("Welcome");
```

Yahan `isLoggedIn` `false` hai, isliye `console.log()` execute nahi hoga.

---

### `||` Short-Circuiting

`||` mein agar koi operand **truthy** mil jaye, to poora expression truthy result dega.

Isliye JavaScript remaining operands ko evaluate nahi karti.

```js id="x7h4ps"
console.log(true || "Hello");
```

Output:

```text
true
```

JavaScript ko pehle hi pata hai:

```text
true || anything → true
```

Isliye `"Hello"` ko check karne ki zarurat nahi hai.

---

### Important: `&&` and `||` Return Values

Short-circuiting ka ek important point hai:

> **`&&` aur `||` necessarily `true` ya `false` return nahi karte. They can return one of their operands.**

#### `&&`

```js id="8q0w6r"
console.log("Hello" && "World");
```

Output:

```text
World
```

Reason:

```text
"Hello" → truthy
```

`&&` ko second operand tak jaana pada.

Second operand `"World"` hai, so result `"World"`.

Another example:

```js id="3w8d2k"
console.log("" && "World");
```

Output:

```text
""
```

First operand `""` falsy hai, so JavaScript wahi return karke stop kar deti hai.

---

### `||`

```js id="9y2c6h"
console.log("Hello" || "World");
```

Output:

```text
Hello
```

First operand `"Hello"` truthy hai, so JavaScript wahi return karke stop kar deti hai.

Another example:

```js id="v5m3n8"
console.log("" || "World");
```

Output:

```text
World
```

First operand `""` falsy hai, so JavaScript second operand check karti hai.

Second operand `"World"` truthy hai, so `"World"` return hota hai.

---

### Practical Use of `&&`

Conditionally code execute karne ke liye `&&` commonly use hota hai.

```js id="p4t7s2"
const isLoggedIn = true;

isLoggedIn && console.log("Welcome!");
```

Agar `isLoggedIn` true hai:

```text
Welcome!
```

Agar false hai, `console.log()` execute nahi hoga.

---

### Practical Use of `||`

Default value provide karne ke liye `||` commonly use hota hai.

```js id="w2m8kx"
const username = "";

const displayName = username || "Guest";

console.log(displayName);
```

Output:

```text
Guest
```

Reason:

```text
username → "" → falsy
```

So:

```text
"" || "Guest"
      ↓
   "Guest"
```

---

### Important Difference

`||` **falsy values** ko default value ke liye replace kar sakta hai.

```js id="s7q2nm"
const count = 0;

const result = count || 10;

console.log(result); // 10
```

Yahan `0` falsy hai, isliye `10` return hua.

Agar hume sirf `null` ya `undefined` ke case mein default value chahiye, to `??` better hai.

```js id="k3w9qp"
const count = 0;

const result = count ?? 10;

console.log(result); // 0
```

`??` ko next relevant topic mein detail mein dekhenge.

### Example

```js id="f8k2vd"
const user = {
  name: "Ajay",
};

const name = user && user.name;

console.log(name);
```

Output:

```text
Ajay
```

Agar `user` falsy hota, to JavaScript `user.name` ko evaluate nahi karti.

Ye behavior object properties safely access karne ke older patterns mein commonly use hota tha.

### Remember

> **Short-circuiting = result already known ho jaane par JavaScript remaining operands ko evaluate nahi karti.**

### Interview Answer

> **Short-circuiting means JavaScript stops evaluating a logical expression when its final result is already known. With `&&`, a falsy operand stops further evaluation, while with `||`, a truthy operand stops further evaluation. These operators can also return actual operand values, not only Boolean values.**

<!-- ============================= -->

## 24. `??` Nullish Coalescing Operator

### Meaning

> **The `??` operator returns the right-side value only when the left-side value is `null` or `undefined`.**

`??` ka use mainly **default value dene** ke liye hota hai jab actual value `null` ya `undefined` ho.

```js
const username = null;

const name = username ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

Yahan:

```text
username → null
```

Isliye JavaScript `"Guest"` return karti hai.

---

### How `??` Works

Agar left side ki value:

- `null` → right side return hogi
- `undefined` → right side return hogi
- koi bhi other value → left side return hogi

Example:

```js
console.log(null ?? "Guest"); // "Guest"
console.log(undefined ?? "Guest"); // "Guest"

console.log("Ajay" ?? "Guest"); // "Ajay"
console.log(25 ?? 100); // 25
console.log(false ?? true); // false
console.log(0 ?? 10); // 0
console.log("" ?? "Guest"); // ""
```

Important point:

> **`??` sirf `null` aur `undefined` ko missing value maanta hai.**

---

### `??` vs `||`

Ye interview mein **very important** comparison hai.

`||` left side ki **falsy values** ke case mein right side return kar sakta hai.

`??` sirf **`null` aur `undefined`** ke case mein right side return karta hai.

Example:

```js
const count = 0;

console.log(count || 10);
console.log(count ?? 10);
```

Output:

```text
10
0
```

Why?

`0` ek falsy value hai:

```text
0 || 10 → 10
```

Lekin `0` `null` ya `undefined` nahi hai:

```text
0 ?? 10 → 0
```

### Another Example

```js
const username = "";

console.log(username || "Guest"); // "Guest"
console.log(username ?? "Guest"); // ""
```

`""` falsy hai, isliye `||` `"Guest"` return karta hai.

Lekin `""` `null` ya `undefined` nahi hai, isliye `??` original empty string return karta hai.

---

### Practical Use

Suppose API se user ka `name` aa raha hai.

Agar API `null` ya `undefined` return kare, to hum default name de sakte hain:

```js
const userName = null;

const displayName = userName ?? "Guest";

console.log(displayName);
```

Output:

```text
Guest
```

Lekin agar user ka actual name empty string hai:

```js
const userName = "";

const displayName = userName ?? "Guest";

console.log(displayName);
```

Output:

```text
""
```

`??` empty string ko replace nahi karega because empty string `null` ya `undefined` nahi hai.

---

### Important Syntax Rule

`??` ko `&&` ya `||` ke saath directly mix karte waqt parentheses use karne padte hain.

Ye invalid hai:

```js
const result = a || b ?? c;
```

Instead:

```js
const result = (a || b) ?? c;
```

Ya:

```js
const result = a || (b ?? c);
```

Parentheses se evaluation clear ho jati hai.

---

### Example

```js
const age = 0;

const userAge = age ?? 18;

console.log(userAge);
```

Output:

```text
0
```

Yahan `0` valid value hai, isliye `??` usko replace nahi karta.

Agar:

```js
const age = null;

const userAge = age ?? 18;

console.log(userAge);
```

Output:

```text
18
```

Yahan `age` `null` hai, isliye default value `18` use hoti hai.

### Remember

> **`??` = default value only when the current value is `null` or `undefined`.**

### Interview Answer

> **The nullish coalescing operator `??` is used to provide a default value when the left side is `null` or `undefined`. Unlike `||`, it does not treat values like `0`, `false`, or an empty string as missing. This makes `??` useful when those values are valid and should be preserved.**

<!-- ============================= -->

## 25. Optional Chaining `?.`

### Meaning

> **The optional chaining operator `?.` allows you to safely access a property or call a function when the value before it may be `null` or `undefined`.**

Normally, agar hum `null` ya `undefined` ke andar property access karne ki try karein, JavaScript error throw karti hai.

```js
const user = null;

console.log(user.name);
```

Ye error dega:

```text
TypeError
```

Because `user` ke andar koi object nahi hai jiske andar `name` access kiya ja sake.

Optional chaining `?.` is situation ko safely handle karta hai:

```js
const user = null;

console.log(user?.name);
```

Output:

```text
undefined
```

Error nahi aata.

### How `?.` Works

```js
const user = {
  name: "Ajay",
};

console.log(user?.name);
```

Output:

```text
Ajay
```

Yahan `user` available hai, so `name` property access ho jaati hai.

Agar:

```js
const user = null;

console.log(user?.name);
```

To JavaScript property access ko stop kar deti hai aur `undefined` return karti hai.

Conceptually:

```text
user exists
    ↓
user?.name
    ↓
name access karo

user is null/undefined
    ↓
user?.name
    ↓
undefined
```

### Nested Properties

Optional chaining ka sabse common use nested objects ke saath hota hai.

Without optional chaining:

```js
const user = {};

console.log(user.address.city);
```

Ye error dega because `user.address` `undefined` hai.

With optional chaining:

```js
const user = {};

console.log(user.address?.city);
```

Output:

```text
undefined
```

Aur multiple levels par:

```js
const user = {};

console.log(user?.address?.city);
```

Agar kisi bhi level par value `null` ya `undefined` ho, chain safely stop ho sakti hai.

### Optional Function Call

`?.` ka use function call ke saath bhi kar sakte hain.

```js
const user = {
  greet() {
    console.log("Hello");
  },
};

user.greet?.();
```

Output:

```text
Hello
```

Agar `greet` function exist nahi karta:

```js
const user = {};

user.greet?.();
```

To error nahi aayega.

Function call simply skip ho jayega.

### Optional Array Access

Optional chaining ko array indexing ke saath bhi use kar sakte hain.

```js
const users = null;

console.log(users?.[0]);
```

Output:

```text
undefined
```

Normally `users[0]` error de sakta tha because `users` `null` hai.

### Optional Chaining vs `&&`

Purane code mein same type ka safe access `&&` se kiya ja sakta tha:

```js
const user = {};

const city = user && user.address && user.address.city;
```

Optional chaining isko much cleaner bana deta hai:

```js
const user = {};

const city = user?.address?.city;
```

Dono ka purpose similar ho sakta hai, but `?.` specifically **null/undefined safe property access** ke liye designed hai.

### Important Point

`?.` sirf `null` aur `undefined` par short-circuit karta hai.

Example:

```js
const value = 0;

console.log(value?.toString());
```

Yahan `0` nullish nahi hai, so property/method access continue hota hai.

Similarly:

```js
const value = false;

console.log(value?.toString());
```

`false` bhi nullish nahi hai.

### Example

API response ke saath optional chaining commonly useful hoti hai:

```js
const response = {
  user: {
    profile: {
      name: "Ajay",
    },
  },
};

const name = response?.user?.profile?.name;

console.log(name);
```

Output:

```text
Ajay
```

Agar `profile` missing ho:

```js
const response = {
  user: {},
};

const name = response?.user?.profile?.name;

console.log(name);
```

Output:

```text
undefined
```

Error nahi aayega.

### Remember

> **`?.` = property, method, or index ko safely access karo; agar value `null` ya `undefined` ho, error ke instead `undefined` milega.**

### Interview Answer

> **Optional chaining `?.` is used to safely access properties, methods, or array elements when a value may be `null` or `undefined`. If the value before `?.` is nullish, JavaScript stops the chain and returns `undefined` instead of throwing an error. It is especially useful for accessing nested API response data safely.**

<!-- ====================== -->

## 26. `if` / `else`

### Meaning

> **`if` and `else` are conditional statements used to execute different code based on whether a condition is true or false.**

JavaScript mein jab hume kisi condition ke according decide karna ho ki **kaunsa code execute hona chahiye**, tab `if` / `else` use karte hain.

Basic structure:

```js
if (condition) {
  // runs when condition is true
} else {
  // runs when condition is false
}
```

`if` ke andar wali condition ko JavaScript **Boolean context** mein evaluate karti hai.

Agar condition truthy hai, `if` block execute hota hai.

Agar condition falsy hai, aur `else` available hai, to `else` block execute hota hai.

### `if`

Sirf condition true hone par code execute karna ho:

```js
const age = 20;

if (age >= 18) {
  console.log("You are an adult");
}
```

Yahan:

```text
age >= 18
   ↓
true
   ↓
if block execute
```

Output:

```text
You are an adult
```

Agar condition false hoti:

```js
const age = 15;

if (age >= 18) {
  console.log("You are an adult");
}
```

To `if` block execute nahi hota.

### `if` / `else`

Jab true aur false dono cases ke liye code chahiye:

```js
const age = 15;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

Output:

```text
You are a minor
```

Yahan condition false hai, isliye `else` block execute hota hai.

### `else if`

Jab multiple conditions check karni ho, `else if` use kar sakte hain.

```js
const marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

Output:

```text
Grade B
```

JavaScript conditions ko **top to bottom** check karti hai.

Jaise hi koi condition truthy milti hai, uska block execute hota hai aur remaining `else if` conditions skip ho jaati hain.

### Multiple Conditions

Logical operators ke saath `if` use karna common hai.

```js
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
}
```

Yahan dono conditions true honi chahiye:

```text
age >= 18    → true
hasLicense   → true

true && true → true
```

### Truthy and Falsy Values

`if` mein condition sirf Boolean expression hona zaroori nahi hai.

JavaScript kisi bhi value ko Boolean context mein evaluate kar sakti hai.

```js
const username = "Ajay";

if (username) {
  console.log("Username exists");
}
```

`"Ajay"` truthy hai, isliye block execute hoga.

```js
const username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username is empty");
}
```

`""` falsy hai, isliye `else` execute hoga.

### Nested `if`

Ek `if` ke andar doosra `if` bhi likh sakte hain.

```js
const age = 25;
const isLoggedIn = true;

if (isLoggedIn) {
  if (age >= 18) {
    console.log("Access allowed");
  }
}
```

Lekin bahut zyada nested conditions code ko difficult bana sakti hain, isliye practical code mein conditions ko simple rakhna better hota hai.

### Example

```js
const username = "Ajay";
const passwordCorrect = true;

if (username && passwordCorrect) {
  console.log("Login successful");
} else {
  console.log("Invalid login");
}
```

Output:

```text
Login successful
```

Yahan:

1. `username` → truthy
2. `passwordCorrect` → `true`
3. `username && passwordCorrect` → truthy
4. `if` block execute

### Remember

> **`if` true condition par code run karta hai, `else if` additional conditions check karta hai, aur `else` tab run hota hai jab previous conditions false hon.**

### Interview Answer

> **`if`, `else if`, and `else` are conditional statements used to control which block of code should execute based on a condition. JavaScript evaluates the condition in a Boolean context. The first truthy condition is executed, and if no condition is true, the `else` block runs.**

<!-- =========================== -->

## 27. Ternary Operator

### Meaning

> **The ternary operator is a short way to write a simple `if` / `else` condition and choose between two values.**

Ternary operator ka naam **ternary** isliye hai because ismein **three parts** hote hain:

```text
condition ? valueIfTrue : valueIfFalse
```

- `condition` → condition check hoti hai
- `?` → agar condition truthy hai
- `valueIfTrue` → ye value choose hoti hai
- `:` → otherwise
- `valueIfFalse` → condition falsy hone par ye value choose hoti hai

### Basic Example

```js id="6q6u8a"
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text id="myw1q6"
Adult
```

Yahan:

```text id="n8kz8f"
age >= 18
    ↓
  true
    ↓
"Adult"
```

Agar condition false hoti:

```js id="1x6n9c"
const age = 15;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text id="b4p3jk"
Minor
```

### `if` / `else` vs Ternary

Same logic ko `if` / `else` se:

```js id="w7g4jz"
const age = 20;
let result;

if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}
```

Ternary se:

```js id="b9x5qp"
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";
```

Ternary **simple condition se value choose karne** ke liye useful hai.

### Ternary Returns a Value

Ternary ka important point hai ki ye **expression** hai aur ek value produce karta hai.

```js id="2w9j4m"
const age = 20;

const message = age >= 18 ? "You can vote" : "You cannot vote";

console.log(message);
```

Output:

```text id="1j4n9q"
You can vote
```

Isliye ternary ko variable assignment mein commonly use kiya jata hai.

### Nested Ternary

Ternary ke andar another ternary likhna possible hai:

```js id="f5y7j1"
const marks = 75;

const grade = marks >= 90 ? "A" : marks >= 60 ? "B" : marks >= 40 ? "C" : "F";

console.log(grade);
```

Output:

```text id="4c9q6a"
B
```

Ye technically valid hai, lekin bahut zyada nested ternary code ko difficult to read bana sakta hai.

Multiple complex conditions ke liye normal `if / else if / else` usually better hota hai.

### Ternary vs `if`

Ternary ko generally tab use karo jab:

- condition simple ho
- sirf do possible outcomes hon
- kisi value ko choose karna ho

Example:

```js id="2x7g5m"
const isLoggedIn = true;

const message = isLoggedIn ? "Welcome" : "Please login";
```

Complex logic ke liye:

```js id="g5h2k9"
if (isLoggedIn) {
  // multiple statements
  // complex logic
}
```

`if` / `else` better readability de sakta hai.

### Example

```js id="k8d3sf"
const isAdmin = true;

const access = isAdmin ? "Full Access" : "Limited Access";

console.log(access);
```

Output:

```text id="p9x6ds"
Full Access
```

### Remember

> **Ternary = simple `if / else` ko short form mein likhkar two possible values mein se ek choose karna.**

### Interview Answer

> **The ternary operator is a concise way to write a simple `if / else` expression. Its syntax is `condition ? valueIfTrue : valueIfFalse`. It is commonly used when we need to choose between two values based on a condition. For complex logic or multiple statements, `if / else` is usually more readable.**

<!-- ========================= -->

## 28. `switch`

### Meaning

> **`switch` is a conditional statement used to compare one value with multiple possible values and execute the matching case.**

Jab hume **ek hi value ko multiple possible values ke saath compare** karna ho, to `switch` useful hota hai.

Basic structure:

```js
switch (value) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
  // code
}
```

### How `switch` Works

JavaScript pehle `switch` ke andar wali value evaluate karti hai.

Phir us value ko har `case` ke saath compare karti hai.

Jo `case` match hota hai, uska code execute hota hai.

Example:

```js
const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
```

Output:

```text
Tuesday
```

Yahan:

```text
day → 2

case 1 → no match
case 2 → match
```

Isliye `"Tuesday"` print hota hai.

### `break`

`break` ka use `switch` ko stop karne ke liye hota hai.

```js
const number = 2;

switch (number) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

  case 3:
    console.log("Three");
    break;
}
```

Output:

```text
Two
```

`case 2` match hone ke baad `break` switch se bahar nikal deta hai.

### What Happens Without `break`?

Agar matching case ke baad `break` nahi hai, to JavaScript next cases ka code bhi execute kar sakti hai.

Is behavior ko **fall-through** kehte hain.

```js
const number = 2;

switch (number) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");

  case 3:
    console.log("Three");
}
```

Output:

```text
Two
Three
```

`case 2` match hua, lekin `break` nahi tha.

Isliye JavaScript next `case` mein bhi continue kar gayi.

### `default`

`default` tab execute hota hai jab koi bhi `case` match nahi karta.

```js
const day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
}
```

Output:

```text
Invalid day
```

### Strict Comparison

`switch` cases ko compare karte waqt JavaScript **strict equality (`===`)** ke behavior ka use karti hai.

Example:

```js
const value = 2;

switch (value) {
  case "2":
    console.log("String");
    break;

  case 2:
    console.log("Number");
    break;
}
```

Output:

```text
Number
```

Kyunki:

```text
2 === "2"   → false
2 === 2     → true
```

Isliye `case 2` match hota hai.

### Multiple Cases

Kabhi-kabhi multiple cases ke liye same code execute karna hota hai.

```js
const day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Weekday");
}
```

Output:

```text
Weekend
```

Yahan dono cases same code share kar rahe hain.

### `switch` vs `if / else`

Agar different conditions check karni hain:

```js
if (age >= 18) {
  // ...
} else if (age >= 13) {
  // ...
}
```

`if / else` better hai.

Agar **same value ko fixed possible values** se compare karna hai:

```js
switch (role) {
  case "admin":
    // ...
    break;

  case "user":
    // ...
    break;
}
```

`switch` readable ho sakta hai.

### Example

```js
const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;

  case "editor":
    console.log("Edit access");
    break;

  case "user":
    console.log("Limited access");
    break;

  default:
    console.log("Unknown role");
}
```

Output:

```text
Full access
```

### Remember

> **`switch` = ek value ko multiple fixed values se compare karke matching case execute karna.**

### Interview Answer

> **`switch` is a conditional statement used when one value needs to be compared with multiple possible values. JavaScript checks the cases using strict equality and executes the matching case. `break` stops execution from falling into the next cases, while `default` runs when no case matches.**

<!-- ======================== -->

## 29. Loops

### Meaning

> **A loop is a control structure used to repeatedly execute a block of code while a condition or iteration rule allows it.**

Jab hume same type ka code **multiple times execute** karna ho, tab loop use karte hain.

Without loop:

```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

Ye repetitive hai.

Loop se:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}
```

Same code 5 times execute hoga.

### How a Loop Works

Most loops mein basic idea ye hota hai:

```text
Start
  ↓
Condition check
  ↓
Condition true?
  ↓ Yes
Code execute
  ↓
Update / next iteration
  ↓
Condition check again
  ↓
...
  ↓ No
Loop stop
```

Example:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

Execution:

```text
i = 1 → condition true → print 1
i = 2 → condition true → print 2
i = 3 → condition true → print 3
i = 4 → condition false → stop
```

Output:

```text
1
2
3
```

### Why Loops Are Used

Loops useful hote hain jab:

- same operation multiple times karna ho
- array ke elements process karne ho
- numbers ke range par kaam karna ho
- repeated tasks perform karne ho
- data ko one-by-one process karna ho

Example:

```js
const users = ["Ajay", "Rahul", "Aman"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

Output:

```text
Ajay
Rahul
Aman
```

Yahan loop array ke har element ko one-by-one access kar raha hai.

### Types of Loops

JavaScript mein commonly ye loops use hote hain:

```text
for
while
do...while
for...of
for...in
```

Har loop ka use-case thoda different hota hai.

### Infinite Loop

Agar loop ki condition kabhi false nahi hoti, to loop continuously run kar sakta hai.

```js
while (true) {
  console.log("Running...");
}
```

Ye ek **infinite loop** hai.

Practical code mein infinite loops avoid karne chahiye unless intentionally required.

### Example

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}
```

Output:

```text
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

### Remember

> **Loop = same block of code ko repeatedly execute karne ka way.**

### Interview Answer

> **A loop is a control structure used to repeatedly execute code based on a condition or iteration rule. JavaScript provides different loops such as `for`, `while`, `do...while`, `for...of`, and `for...in`, each useful for different situations.**

<!-- =============================== -->

## 30. `for` Loop

### Meaning

> **A `for` loop is used to repeat a block of code.**

A `for` loop mein generally **initialization, condition, aur update** hota hai.

```js
for (initialization; condition; update) {
  // code
}
```

- **Initialization** → loop variable ki starting value set karta hai.
- **Condition** → decide karti hai ki loop continue hoga ya stop.
- **Update** → har iteration ke baad variable ki value change karta hai.

### Example

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

Isme:

```text
let i = 1  → Initialization
i <= 5     → Condition
i++        → Update
```

Execution:

```text
i = 1 → condition true → code runs
i = 2 → condition true → code runs
i = 3 → condition true → code runs
i = 4 → condition true → code runs
i = 5 → condition true → code runs
i = 6 → condition false → loop stops
```

### Array ke saath

`for` loop ka use array ke elements ko index ke through access karne ke liye bhi kar sakte hain.

```js
const users = ["Ajay", "Rahul", "Aman"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

Output:

```text
Ajay
Rahul
Aman
```

Yahan `i` array ka **index** represent karta hai.

### Remember

> **`for` loop = code ko repeat karna jab tak condition true hai.**

### Interview Answer

> **A `for` loop is used to repeat a block of code. It has three main parts: initialization, condition, and update. It is commonly used when we need to repeat code a known number of times or access array elements using an index.**

<!-- ===================== -->

## 31. `while` Loop

### Meaning

> **A `while` loop is used to repeat a block of code while a condition is true.**

`while` loop mein pehle **condition check** hoti hai.

Agar condition `true` hai, to code execute hota hai.

Phir condition dobara check hoti hai.

Jab condition `false` ho jaati hai, loop stop ho jata hai.

### Syntax

```js
while (condition) {
  // code
}
```

### Example

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Output:

```text
1
2
3
4
5
```

Execution:

```text
i = 1 → condition true → code runs
i = 2 → condition true → code runs
i = 3 → condition true → code runs
i = 4 → condition true → code runs
i = 5 → condition true → code runs
i = 6 → condition false → loop stops
```

### Important Point

`while` loop mein update automatically nahi hota.

Hume khud variable ko update karna padta hai:

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Agar `i++` nahi likhenge:

```js
let i = 1;

while (i <= 5) {
  console.log(i);
}
```

To `i` ki value `1` hi rahegi aur condition hamesha `true` rahegi.

Isse **infinite loop** ho jayega.

### `for` vs `while`

`for` loop:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

`while` loop:

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Dono same result de sakte hain.

Generally:

- **`for`** → jab iterations ka structure clear ho.
- **`while`** → jab loop condition ke based par chalana ho aur iterations pehle se fixed na hon.

### Example

```js
let passwordCorrect = false;
let attempts = 0;

while (!passwordCorrect && attempts < 3) {
  console.log("Checking password...");

  attempts++;
}
```

Yahan loop tab tak chalega jab tak:

- password correct nahi hai
- aur attempts `3` se kam hain

### Remember

> **`while` loop = condition true hone tak code repeat karna.**

### Interview Answer

> **A `while` loop is used to repeat a block of code while a condition is true. The condition is checked before every iteration. If the condition becomes false, the loop stops.**

<!-- ======================== -->

## 32. `do...while` Loop

### Meaning

> **A `do...while` loop is used to repeat a block of code while a condition is true, but it always runs the code at least once.**

`while` loop mein condition **pehle check** hoti hai.

Lekin `do...while` mein code **pehle execute** hota hai aur condition baad mein check hoti hai.

### Syntax

```js
do {
  // code
} while (condition);
```

### Example

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

Output:

```text
1
2
3
4
5
```

Execution:

```text
code runs
   ↓
condition check
   ↓
true → code runs again
   ↓
condition check
   ↓
...
   ↓
false → loop stops
```

### Important Difference from `while`

`while` mein:

```js
let i = 10;

while (i < 5) {
  console.log(i);
}
```

Output:

```text
// Nothing
```

Condition pehle check hui:

```text
10 < 5 → false
```

Isliye code ek baar bhi execute nahi hua.

Lekin `do...while` mein:

```js
let i = 10;

do {
  console.log(i);
} while (i < 5);
```

Output:

```text
10
```

Condition false hone ke baad bhi code **ek baar execute** hua because `do...while` condition ko baad mein check karta hai.

### `while` vs `do...while`

```text
while:

condition
   ↓
true → code
false → stop
```

```text
do...while:

code
 ↓
condition
 ↓
true → code again
false → stop
```

### Example

User se input lena ho aur kam se kam ek baar code run karna ho:

```js
let attempts = 0;

do {
  console.log("Checking...");
  attempts++;
} while (attempts < 3);
```

Output:

```text
Checking...
Checking...
Checking...
```

### Remember

> **`do...while` = code pehle run hota hai, condition baad mein check hoti hai.**

### Interview Answer

> **A `do...while` loop repeats a block of code while a condition is true. Its main difference from `while` is that the code runs at least once because the condition is checked after the first execution.**

<!-- ================================
 -->

## 33. `for...of` Loop

### Meaning

> **A `for...of` loop is used to iterate over the values of an iterable object.**

`for...of` ka use mainly **array, string, Map, Set** jaise iterables ke values ko one by one access karne ke liye hota hai.

### Example

```js
const users = ["Ajay", "Rahul", "Aman"];

for (const user of users) {
  console.log(user);
}
```

Output:

```text
Ajay
Rahul
Aman
```

Yahan `user` ko har iteration mein array ka **current value** milta hai.

```text
users
  ↓
"Ajay" → user
"Rahul" → user
"Aman" → user
```

### Array ke saath

`for...of` mein directly **value** milti hai.

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

Agar index bhi chahiye, to normal `for` loop use kar sakte hain:

```js
const numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}
```

### String ke saath

String bhi iterable hoti hai, isliye `for...of` se characters one by one mil sakte hain.

```js
const name = "Ajay";

for (const character of name) {
  console.log(character);
}
```

Output:

```text
A
j
a
y
```

### `for...of` vs `for...in`

Ye important interview difference hai.

`for...of` → **values** deta hai.

```js
const numbers = [10, 20, 30];

for (const value of numbers) {
  console.log(value);
}
```

Output:

```text
10
20
30
```

`for...in` → **keys/indexes** deta hai.

```js
const numbers = [10, 20, 30];

for (const index in numbers) {
  console.log(index);
}
```

Output:

```text
0
1
2
```

Simple rule:

> **`for...of` → values**
> **`for...in` → keys**

### Important Point

`for...of` iterable values ke liye hai. Normal plain object directly iterable nahi hota.

```js
const user = {
  name: "Ajay",
  age: 25,
};

for (const value of user) {
  console.log(value);
}
```

Ye error dega because plain object by default iterable nahi hota.

### Example

```js
const skills = ["JavaScript", "Node.js", "React"];

for (const skill of skills) {
  console.log(`I know ${skill}`);
}
```

Output:

```text
I know JavaScript
I know Node.js
I know React
```

### Remember

> **`for...of` = iterable ke values ko one by one access karna.**

### Interview Answer

> **A `for...of` loop is used to iterate over the values of an iterable such as an array or string. Unlike `for...in`, which gives keys or indexes, `for...of` directly gives the values.**

<!-- ===================== -->

## 34. `for...in` Loop

### Meaning

> **A `for...in` loop is used to iterate over the keys of an object.**

`for...in` ka use mainly **object ki properties/keys** ko one by one access karne ke liye hota hai.

### Example

```js
const user = {
  name: "Ajay",
  age: 25,
  city: "Delhi",
};

for (const key in user) {
  console.log(key);
}
```

Output:

```text
name
age
city
```

Yahan `key` ko har iteration mein object ki ek property ka **key** milta hai.

### Value Access Karna

Key milne ke baad us key ki value ko bracket notation se access kar sakte hain:

```js
const user = {
  name: "Ajay",
  age: 25,
  city: "Delhi",
};

for (const key in user) {
  console.log(key, user[key]);
}
```

Output:

```text
name Ajay
age 25
city Delhi
```

Yahan:

```js
user[key];
```

current key ki value access karta hai.

### `for...in` with Array

`for...in` array ke saath bhi use ho sakta hai, lekin ye **values nahi, indexes** deta hai.

```js
const numbers = [10, 20, 30];

for (const index in numbers) {
  console.log(index);
}
```

Output:

```text
0
1
2
```

Values chahiye to `for...of` better hai:

```js
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

Simple difference:

```text
for...in → keys / indexes
for...of → values
```

### Important Point

`for...in` object ki **enumerable properties** ko iterate karta hai.

Example:

```js
const user = {
  name: "Ajay",
  age: 25,
};

for (const key in user) {
  console.log(key);
}
```

Yahan `name` aur `age` enumerable properties hain, isliye loop mein milti hain.

### Example

```js
const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}
```

Output:

```text
name: Laptop
price: 50000
brand: Dell
```

### Remember

> **`for...in` = object ki keys ko one by one access karna.**

### Interview Answer

> **A `for...in` loop is used to iterate over the enumerable keys of an object. Each iteration gives the current key, and we can use that key to access the corresponding value. For arrays, `for...in` gives indexes, while `for...of` gives values.**

<!-- ========================= -->

## 35. `break` / `continue`

### Meaning

> **`break` is used to stop a loop, while `continue` is used to skip the current iteration and move to the next iteration.**

### `break`

`break` use karne par loop **immediately stop** ho jata hai.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
```

Jab `i` ki value `3` hui:

```text
i === 3
   ↓
break
   ↓
loop stops
```

Isliye `3`, `4`, aur `5` print nahi hue.

### `continue`

`continue` current iteration ko **skip** karta hai aur next iteration par chala jata hai.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

Jab `i` `3` hua:

```text
i === 3
   ↓
continue
   ↓
current iteration skipped
   ↓
next iteration
```

Loop completely stop nahi hua.

### `break` vs `continue`

```text
break
  ↓
loop completely stop


continue
  ↓
current iteration skip
  ↓
next iteration
```

### `while` Loop ke Saath

`break`:

```js
let i = 1;

while (i <= 5) {
  if (i === 3) {
    break;
  }

  console.log(i);
  i++;
}
```

Output:

```text
1
2
```

`continue` ke saath `while` loop mein update ka dhyan rakhna important hai:

```js
let i = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

Yahan `i++` ko `continue` se pehle rakha gaya hai, warna loop infinite ho sakta hai.

### Nested Loops

`break` normally **nearest loop** ko stop karta hai.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break;
    }

    console.log(i, j);
  }
}
```

Yahan `break` inner loop ko stop karta hai, outer loop ko nahi.

### Example

Agar array mein kisi specific value ko find karna ho:

```js
const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
  if (number === 30) {
    console.log("Found");
    break;
  }
}
```

Output:

```text
Found
```

`30` milne ke baad search ki zarurat nahi thi, isliye `break` se loop stop kar diya.

### Remember

> **`break` = loop stop, `continue` = current iteration skip.**

### Interview Answer

> **`break` is used to immediately stop a loop, while `continue` skips the current iteration and moves to the next one. `break` is useful when the required result is found, while `continue` is useful when some iterations should be skipped.**
