## What is the DOM?

The **DOM (Document Object Model)** is a representation of an HTML document that the browser creates as a **tree of objects**.

JavaScript can use the DOM to **read, change, add, or remove HTML elements**.

### 1. 🔥🔥🔥 What is the DOM?

DOM stands for **Document Object Model**.

It represents the HTML page as a **tree of objects** so JavaScript can interact with the page.

### Simple Example

```html
<body>
  <h1>Hello</h1>
  <p>Welcome</p>
</body>
```

The browser represents it roughly like:

```text
Document
   |
  body
 /    \
h1     p
```

JavaScript can then access and modify these elements.

```js
document.querySelector("h1").textContent = "Hello Ajay";
```

**Remember:**

**DOM → HTML page represented as a tree of objects that JavaScript can interact with.**

---

### 2. 🔥🔥🔥 How does the browser create the DOM?

The browser reads the **HTML document** and converts its HTML elements into a **DOM tree**.

### Simple Example

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

The browser creates a tree like:

```text
Document
   |
  html
   |
  body
 /    \
h1     p
```

The basic process is:

```text
HTML
 ↓
HTML Parsing
 ↓
DOM Tree
 ↓
JavaScript can access the DOM
```

**Remember:**

**Browser reads HTML → parses it → creates the DOM tree.**

<!-- ========================== -->

### 🔥🔥 What is the difference between DOM and BOM?

**DOM (Document Object Model)** represents the **HTML document** and allows JavaScript to interact with page elements.

**BOM (Browser Object Model)** represents the **browser environment** and allows JavaScript to interact with browser features.

### Simple Example

```js
// DOM → works with the webpage
document.querySelector("h1").textContent = "Hello";

// BOM → works with the browser
console.log(window.innerWidth);
console.log(window.location.href);
```

| DOM                                  | BOM                                |
| ------------------------------------ | ---------------------------------- |
| Represents the HTML document         | Represents the browser environment |
| Works with webpage elements          | Works with browser features        |
| Main object → `document`             | Main object → `window`             |
| Example → `document.querySelector()` | Example → `window.location`        |

**Remember:**

**DOM → webpage**

**BOM → browser**

<!-- ====================== -->

### 🔥🔥 `querySelector()` vs `getElementById()`?

Both are used to **select HTML elements from the DOM**, but they work differently.

- **`getElementById()`** → selects an element by its `id`.
- **`querySelector()`** → selects the **first element that matches a CSS selector**.

### Simple Example

```js
// getElementById()
const heading = document.getElementById("heading");

// querySelector()
const heading = document.querySelector("#heading");
```

Both select:

```html
<h1 id="heading">Hello</h1>
```

### Main Difference

| `getElementById()`            | `querySelector()`                            |
| ----------------------------- | -------------------------------------------- |
| Selects by `id` only          | Uses any CSS selector                        |
| `getElementById("heading")`   | `querySelector("#heading")`                  |
| Returns the element or `null` | Returns the first matching element or `null` |

### Example with CSS Selector

```js
const heading = document.querySelector(".heading");

const button = document.querySelector("button");

const input = document.querySelector("input[type='text']");
```

**Remember:**

**`getElementById()` → select by ID**

**`querySelector()` → select using CSS selector**

<!-- ==================================== -->
