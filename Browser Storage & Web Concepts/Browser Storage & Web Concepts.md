## 1. 🔥🔥 What is `localStorage`?

`localStorage` is a browser storage mechanism used to **store data as key-value pairs in the user's browser**.

The important thing is that the data **remains stored even after the browser is closed or the page is refreshed**.

### Simple Example

```js
localStorage.setItem("name", "Ajay");
```

Now the browser stores:

```text
key   → name
value → Ajay
```

We can get the data later:

```js
const name = localStorage.getItem("name");

console.log(name);
```

Output:

```text
Ajay
```

Even if we:

```text
Refresh the page       → Data remains
Close the browser     → Data remains
Open the website again → Data remains
```

### Remove Data

Remove one item:

```js
localStorage.removeItem("name");
```

Remove everything:

```js
localStorage.clear();
```

### Important Point

`localStorage` stores values as **strings**.

If we want to store an object, we usually use `JSON.stringify()`:

```js
const user = {
  name: "Ajay",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));
```

To get it back as an object:

```js
const user = JSON.parse(localStorage.getItem("user"));

console.log(user.name);
```

### Common Uses

```text
Save theme preference
Save language preference
Save simple user preferences
Store non-sensitive client-side data
```

---

## 2. 🔥🔥 What is `sessionStorage`?

`sessionStorage` is also a browser storage mechanism that stores data as **key-value pairs**.

The main difference is that the data is available only for the **current browser tab/session**.

### Simple Example

```js
sessionStorage.setItem("name", "Ajay");
```

Get the value:

```js
const name = sessionStorage.getItem("name");

console.log(name);
```

The data remains when we refresh the page:

```text
Refresh page → Data remains ✅
```

But when we **close that browser tab**, its `sessionStorage` data is removed:

```text
Close tab → Data removed ❌
```

### Example Use Case

Suppose a user is filling a multi-step form:

```text
Step 1 → Personal Details
Step 2 → Address
Step 3 → Confirmation
```

We can temporarily store some form data in `sessionStorage`.

When the user refreshes the page, the data can still be available.

But after closing the tab, the session data is removed.

### Important Difference

```text
localStorage
    ↓
Remains until it is manually removed


sessionStorage
    ↓
Remains during the current tab session
```

---

## 3. 🔥🔥 What are Cookies?

**Cookies are small pieces of data stored by the browser that can be used to maintain information between the browser and a website/server.**

Unlike `localStorage` and `sessionStorage`, cookies are **automatically sent with HTTP requests** to the matching server/domain when their rules allow it.

### Simple Example

JavaScript can create a cookie:

```js
document.cookie = "username=Ajay";
```

We can read cookies:

```js
console.log(document.cookie);
```

The browser may send the cookie with a request:

```text
Browser
   ↓
HTTP Request + Cookie
   ↓
Server
```

This makes cookies especially useful for things such as:

```text
Authentication/session information
User preferences
Tracking
Maintaining login sessions
```

### Cookies Can Have Expiration

For example:

```js
document.cookie = "username=Ajay; max-age=3600";
```

Here, `max-age=3600` means the cookie can live for **3600 seconds (1 hour)**.

Cookies can also have important security attributes such as:

```text
HttpOnly
Secure
SameSite
```

For example, an `HttpOnly` cookie cannot be read by JavaScript through `document.cookie`, which can help protect it from certain types of client-side attacks.

---

## 🔥🔥 localStorage vs sessionStorage vs Cookies

| Feature                      | `localStorage`              | `sessionStorage`   | Cookies                                  |
| ---------------------------- | --------------------------- | ------------------ | ---------------------------------------- |
| Stored in browser            | ✅                          | ✅                 | ✅                                       |
| Survives page refresh        | ✅                          | ✅                 | ✅                                       |
| Survives closing tab/browser | ✅                          | ❌                 | Depends on cookie type/expiration        |
| Automatically sent to server | ❌                          | ❌                 | ✅                                       |
| JavaScript access            | ✅                          | ✅                 | Usually ✅, except `HttpOnly` cookies    |
| Main use                     | Persistent client-side data | Temporary tab data | Sessions, authentication, preferences    |
| Storage size                 | Larger                      | Larger             | Small (typically around 4 KB per cookie) |

### Easy Way to Remember

```text
localStorage
     ↓
"Keep it in this browser."

sessionStorage
     ↓
"Keep it for this tab/session."

Cookies
     ↓
"Store small data that can be sent with requests to the server."
```

### Interview Answer

**`localStorage` stores persistent client-side data, `sessionStorage` stores data for the current tab session, and cookies are small pieces of data that can be stored by the browser and automatically sent with matching HTTP requests.**

<!-- ======================= -->

## 🔥🔥🔥 Cookies vs `localStorage` vs `sessionStorage`

All three are used to **store data in the browser**, but they are different in terms of **how long the data stays, whether it is sent to the server, storage size, and common use cases**.

The most important difference is:

```text
localStorage
→ Persistent browser storage

sessionStorage
→ Temporary storage for one tab/session

Cookies
→ Small data that can be sent automatically with HTTP requests
```

---

## 🔥 1. `localStorage`

`localStorage` is mainly used when we want data to **remain in the browser even after closing the tab or browser**.

```js id="7s3k9p"
localStorage.setItem("theme", "dark");

console.log(localStorage.getItem("theme"));
```

The data stays until we remove it:

```js id="d8k2wm"
localStorage.removeItem("theme");
```

### Example

Suppose a user selects **Dark Mode**.

We can save:

```text id="f6n3qx"
theme = dark
```

Even if the user closes the browser and comes back later, the preference can still be available.

### Common Uses

```text id="c2m7vp"
Theme preference
Language preference
User preferences
Non-sensitive client-side data
```

---

## 🔥 2. `sessionStorage`

`sessionStorage` is used when we want data to remain available **during the current browser tab/session**.

```js id="r5j8xd"
sessionStorage.setItem("step", "2");

console.log(sessionStorage.getItem("step"));
```

If we refresh the page:

```text id="m4q9sk"
Refresh → Data remains ✅
```

If we close that tab:

```text id="a7p2wn"
Close tab → Data is removed ❌
```

### Example

Suppose a user is filling a multi-step form:

```text id="h8k3vz"
Step 1
  ↓
Step 2
  ↓
Step 3
```

We can temporarily store the current step:

```js id="j6d1qa"
sessionStorage.setItem("currentStep", "2");
```

This can survive a page refresh but is normally removed when that tab is closed.

---

## 🔥 3. Cookies

Cookies are **small pieces of data stored by the browser that can be automatically sent with matching HTTP requests**.

For example:

```text id="w4n9cx"
Browser
   ↓
HTTP Request + Cookie
   ↓
Server
```

This makes cookies particularly useful for **server-side sessions and authentication-related information**.

Cookies can also have security settings such as:

```text id="e7k2pm"
HttpOnly
Secure
SameSite
```

For example, an `HttpOnly` cookie cannot be accessed through JavaScript's `document.cookie`.

### Example

A server may set a session cookie:

```text id="q3v8ld"
sessionId = abc123
```

Then the browser automatically sends that cookie with matching requests.

The server can use it to recognize the user's session.

---

# 🔥🔥 Main Difference

| Feature                      | `localStorage`         | `sessionStorage`   | Cookies                   |
| ---------------------------- | ---------------------- | ------------------ | ------------------------- |
| Stored in browser            | ✅                     | ✅                 | ✅                        |
| Survives page refresh        | ✅                     | ✅                 | ✅                        |
| Survives closing tab         | ✅                     | ❌                 | Depends on cookie         |
| Automatically sent to server | ❌                     | ❌                 | ✅                        |
| JavaScript can access        | ✅                     | ✅                 | Usually ✅                |
| `HttpOnly` possible          | ❌                     | ❌                 | ✅                        |
| Storage capacity             | Larger                 | Larger             | Small                     |
| Common use                   | Persistent client data | Temporary tab data | Sessions/auth/preferences |

---

# 🔥🔥 Most Important Interview Difference

Suppose we have:

```text id="z6m3rx"
localStorage
sessionStorage
cookies
```

Think like this:

### `localStorage`

```text id="u4p8nd"
"Keep this data for later."

Browser closed
     ↓
Data remains
```

### `sessionStorage`

```text id="k9w2sj"
"Keep this data for this tab."

Tab closed
     ↓
Data removed
```

### Cookies

```text id="n5c7qx"
"Keep this small piece of data
and potentially send it with requests."

Browser
   ↓
Request + Cookie
   ↓
Server
```

---

## 🔥 Real-World Example

Imagine you are building a shopping website.

### User's Theme

```js id="t7m4kp"
localStorage.setItem("theme", "dark");
```

Why?

The user expects their theme preference to remain.

### Current Checkout Step

```js id="b3x8vn"
sessionStorage.setItem("checkoutStep", "2");
```

Why?

The information is useful during the current tab/session.

### Login Session

```text id="p9k2wd"
Cookie
   ↓
Session information
   ↓
Automatically sent with requests
   ↓
Server identifies the session
```

Why?

Cookies are designed to work naturally with HTTP requests and server-side sessions.

---

# 🔥🔥 Security Point

Do **not** simply think:

```text id="r8m5cz"
localStorage = secure ❌
sessionStorage = secure ❌
cookies = always secure ❌
```

Security depends on **how the data is stored and used**.

For sensitive authentication data, cookies can provide security controls such as:

```text id="x2q7vs"
HttpOnly
Secure
SameSite
```

An `HttpOnly` cookie is especially important because JavaScript cannot directly read it.

---

## 🔥 Interview Answer

**`localStorage` stores persistent client-side data, `sessionStorage` stores data for the current browser tab/session, and cookies store small pieces of data that can be automatically sent with matching HTTP requests. Cookies also support security attributes such as `HttpOnly`, `Secure`, and `SameSite`.**

### One-Line Memory Trick

```text id="m6v9qa"
localStorage   → "Keep it."

sessionStorage  → "Keep it for this tab."

Cookies         → "Send it with requests."
```

<!-- =========================== -->

## 1. 🔥🔥 What is an HTTP-only Cookie?

An **HTTP-only cookie** is a cookie that **cannot be accessed by JavaScript in the browser**.

It is created with the `HttpOnly` attribute.

In simple words:

> **JavaScript cookie ko read nahi kar sakta, lekin browser us cookie ko HTTP requests ke saath server ko bhej sakta hai.**

### Simple Example

Suppose the server sends a cookie:

```http
Set-Cookie: sessionId=abc123; HttpOnly
```

The browser stores it.

Now JavaScript tries:

```js
console.log(document.cookie);
```

The `HttpOnly` cookie will **not be available through `document.cookie`**.

But when the browser sends a request to the matching server:

```text id="7m4k2p"
Browser
   ↓
HTTP Request
   +
sessionId=abc123
   ↓
Server
```

The browser can still send the cookie automatically.

### Why is `HttpOnly` Useful?

It helps protect cookies from being **read by JavaScript**.

For example, if malicious JavaScript is injected into a page:

```js
console.log(document.cookie);
```

It cannot directly read an `HttpOnly` cookie.

This is useful for sensitive session/authentication cookies.

### Important Point

`HttpOnly` **does not mean the cookie is completely secure**.

It mainly means:

```text id="8w3n6q"
JavaScript
    ↓
❌ Cannot read HttpOnly cookie

Browser
    ↓
✅ Can send it to the server
```

---

## 2. 🔥🔥 What is a Secure Cookie?

A **Secure cookie** is a cookie that the browser sends to the server **only over a secure HTTPS connection**.

It is created with the `Secure` attribute.

### Simple Example

```http
Set-Cookie: sessionId=abc123; Secure
```

Now the browser will send this cookie over:

```text id="p5x8rd"
HTTPS → ✅ Cookie can be sent

HTTP  → ❌ Cookie is not sent
```

### Why is `Secure` Useful?

Without HTTPS, data sent between the browser and server can potentially be exposed to attackers on an insecure network.

The `Secure` attribute helps ensure that the cookie is transmitted only over an **encrypted HTTPS connection**.

### Visual Example

```text id="k7q2vm"
Browser
   ↓
HTTPS 🔒
   ↓
Server
   ↓
Cookie can be sent ✅
```

But:

```text id="n4c9sx"
Browser
   ↓
HTTP ❌
   ↓
Server

Cookie is not sent
```

---

# 🔥🔥 HTTP-only vs Secure Cookie

These two attributes solve **different problems**.

| `HttpOnly`                                   | `Secure`                               |
| -------------------------------------------- | -------------------------------------- |
| Controls JavaScript access                   | Controls how the cookie is transmitted |
| JavaScript cannot read the cookie            | Cookie is sent only over HTTPS         |
| Helps reduce cookie theft through JavaScript | Helps protect cookie transmission      |
| Related to client-side access                | Related to network transport           |

### Easy Way to Remember

```text id="z8m3kw"
HttpOnly
   ↓
"JavaScript, you cannot read me."


Secure
   ↓
"Browser, send me only through HTTPS."
```

### 🔥 Can We Use Both?

Yes, and for sensitive session cookies, it is common to use both:

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure
```

This means:

```text id="q6v2ns"
HttpOnly
→ JavaScript cannot read it

Secure
→ Cookie is sent only over HTTPS
```

You will often also see:

```http
SameSite=Lax
```

or

```http
SameSite=Strict
```

which controls when the browser sends the cookie in cross-site situations.

### Interview Answer

**An `HttpOnly` cookie cannot be accessed through JavaScript and is mainly used to reduce client-side access to sensitive cookies. A `Secure` cookie is sent by the browser only over HTTPS, helping protect the cookie while it is transmitted.**

<!-- ================================ -->

## 1. 🔥🔥 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism that controls whether a webpage is allowed to make requests to a **different origin**.

In simple words:

> **Agar frontend aur backend different origin par hain, browser check karta hai ki backend frontend ko request karne ki permission deta hai ya nahi.**

### First, what is an Origin?

An origin is made up of:

```text id="4k7p2x"
Protocol + Domain + Port
```

For example:

```text id="z8m3qa"
http://localhost:3000
```

and

```text id="http1"
http://localhost:5000
```

have different **ports**, so they are different origins.

Similarly:

```text id="p6v2nd"
https://myfrontend.com
https://mybackend.com
```

are different origins because their domains are different.

### Simple Example

Suppose our React frontend runs on:

```text id="k3s8wp"
http://localhost:3000
```

and our Node.js backend runs on:

```text id="m9q4zx"
http://localhost:5000
```

Frontend makes a request:

```js id="a7f3kd"
fetch("http://localhost:5000/api/users");
```

The browser sees:

```text id="v2n6sq"
Frontend
localhost:3000
      ↓
      ↓ Request
      ↓
Backend
localhost:5000
```

These are different origins.

The backend needs to tell the browser that this frontend is allowed to access its response.

---

## 2. 🔥🔥🔥 Why does CORS happen?

CORS happens because of the browser's **Same-Origin Policy**.

The Same-Origin Policy is a browser security rule that prevents a webpage from freely reading responses from a different origin.

### Why does the browser do this?

Imagine you are logged into:

```text id="j4m8sx"
bank.com
```

Now suppose you visit a malicious website:

```text id="r7p2qd"
malicious.com
```

If browsers allowed any website to freely make requests to any other website and read the responses, the malicious website could potentially try to access sensitive information from websites where you are logged in.

So browsers follow the Same-Origin Policy.

```text id="c9w5ka"
Website A
   ↓
Different Website B
   ↓
Browser checks permission
```

If Website B allows Website A:

```text id="d3n7vm"
Browser → ✅ Response can be read
```

If Website B does not allow Website A:

```text id="s8q2pl"
Browser → ❌ Response blocked
```

### Important Point

CORS is mainly a **browser-side security mechanism**.

It does **not** mean that the server cannot receive the request at all.

The browser may send a request to the server, but if the server does not provide the required CORS permission, the browser prevents JavaScript from accessing the response.

### Example

Frontend:

```text id="w5k3nr"
http://localhost:3000
```

Backend:

```text id="p2m8xq"
http://localhost:5000
```

Frontend:

```js id="f9c4vz"
fetch("http://localhost:5000/api/users");
```

Backend can allow the frontend by returning an appropriate header such as:

```http id="b7n2ks"
Access-Control-Allow-Origin: http://localhost:3000
```

Now the browser knows:

```text id="q6r4md"
localhost:3000
       ↓
Allowed to read response ✅
```

---

## 3. 🔥🔥 What is a CORS Preflight Request?

A **CORS preflight request** is an automatic `OPTIONS` request sent by the browser **before certain cross-origin requests** to check whether the server allows the actual request.

In simple words:

> **Browser pehle server se permission poochta hai: "Kya main ye actual request bhej sakta hoon?"**

### Example

Suppose the frontend wants to send:

```js id="n6k3xw"
fetch("http://localhost:5000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Ajay",
  }),
});
```

Because this is a cross-origin request with conditions that require a preflight, the browser first sends:

```http id="y4m8qp"
OPTIONS /api/users
```

The server can respond with headers such as:

```http id="c8v2nd"
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: Content-Type
```

The browser checks the response.

If permission is valid:

```text id="g5r9kx"
OPTIONS request
      ↓
Server says "Allowed" ✅
      ↓
Actual POST request
      ↓
Server
```

If permission is not valid:

```text id="t2m7qa"
OPTIONS request
      ↓
Server does not allow it ❌
      ↓
Actual request is blocked/not sent
```

### Why is it called "Preflight"?

Because it happens **before the actual request**.

```text id="u8p3ms"
Preflight
    ↓
Actual Request
    ↓
Response
```

Think of it like asking for permission before entering a building:

```text id="k4n9wd"
"Can I enter?"

      ↓

Security checks

      ↓

"Yes" → Enter ✅
"No"  → Stop ❌
```

---

# 🔥🔥 Quick Summary

### CORS

```text id="v7m2qx"
CORS
 ↓
Controls cross-origin requests
 ↓
Browser checks server permission
```

### Why CORS happens

```text id="r3k8np"
Different Origin
      ↓
Same-Origin Policy
      ↓
Browser needs permission
      ↓
CORS
```

### Preflight

```text id="x6q9sw"
Certain cross-origin request
        ↓
OPTIONS request
        ↓
"Server, do you allow this?"
        ↓
Yes → Actual request
No  → Browser blocks access
```

### 🔥 Interview Answers

**CORS:**
CORS is a browser security mechanism that allows a server to specify which different origins are permitted to access its resources.

**Why CORS happens:**
CORS is needed because browsers enforce the Same-Origin Policy, which restricts a webpage from freely reading resources from a different origin.

**Preflight request:**
A CORS preflight is an automatic `OPTIONS` request sent by the browser before certain cross-origin requests to check the server's allowed origin, method, and headers.

<!-- ============================ -->

## 1. 🔥🔥 What is XSS?

**XSS (Cross-Site Scripting)** is a security vulnerability where an attacker manages to make **malicious JavaScript run in another user's browser**.

In simple words:

> **Attacker apna malicious JavaScript website ke andar inject karta hai, aur wo code victim ke browser mein run ho jata hai.**

### Simple Example

Suppose a website displays user-provided comments.

A normal comment:

```text id="j4k8mp"
Hello, this is a nice website!
```

But an attacker tries to insert HTML/JavaScript instead:

```html id="p7n3qx"
<script>
  console.log("Malicious code");
</script>
```

If the website incorrectly puts this input directly into the page, the browser may execute the script.

```text id="x5r2wd"
Attacker input
      ↓
Website stores/displays it
      ↓
Victim opens the page
      ↓
Browser executes malicious JavaScript ❌
```

This is **XSS**.

### What Can XSS Do?

Depending on the vulnerability and the application's protections, malicious JavaScript may be able to:

```text id="q8m4zs"
Read sensitive page data
Perform actions as the victim
Modify the webpage
Send data to an attacker's server
```

For example, if sensitive information is accessible to JavaScript, malicious code may try to read it.

This is one reason why using **HttpOnly cookies** for sensitive session cookies is useful:

```text id="v3n7ka"
HttpOnly Cookie
      ↓
JavaScript cannot read it
      ↓
XSS has less access to that cookie
```

But `HttpOnly` does **not** completely prevent XSS. The malicious script can still potentially perform actions that the victim's browser is allowed to perform.

### How to Prevent XSS?

Common protections include:

```text id="c6p9wr"
Validate input
Sanitize untrusted HTML
Escape output
Avoid unsafe innerHTML usage
Use Content Security Policy (CSP)
Use framework security features correctly
```

For example, if we only want to insert text, prefer:

```js id="n2k7vx"
element.textContent = userInput;
```

instead of blindly inserting untrusted HTML:

```js id="s8m4qa"
element.innerHTML = userInput;
```

### Interview Answer

**XSS is a vulnerability where an attacker injects malicious JavaScript into a web application, causing that code to execute in another user's browser.**

---

## 2. 🔥🔥 What is CSRF?

**CSRF (Cross-Site Request Forgery)** is an attack where a malicious website tricks a user's browser into **sending an unwanted request to another website where the user is already authenticated**.

In simple words:

> **User kisi website par already logged in hai. Attacker doosri website se us user's browser ko unwanted request bhejne ke liye trick karta hai.**

### Simple Example

Suppose you are logged into:

```text id="r5m8nc"
bank.com
```

Your browser has a valid authentication cookie.

Now you visit:

```text id="k3q7wd"
malicious.com
```

The malicious website may try to cause your browser to send a request to the bank.

Conceptually:

```text id="w9p2sx"
You are logged in
      ↓
bank.com has your session cookie
      ↓
You visit malicious.com
      ↓
malicious.com tricks browser into making a request
      ↓
bank.com receives the request with your cookie
```

If the bank does not properly protect state-changing requests, the unwanted action could succeed.

### Important Point

In CSRF, the attacker generally **doesn't need to know your password**.

The attack takes advantage of the fact that your browser already has authentication information for the target website.

---

## How is CSRF Prevented?

Common protections include:

### 1. CSRF Tokens

The server gives the legitimate page a unique token.

```text id="f6k3zp"
User opens form
      ↓
Server provides CSRF token
      ↓
User submits request + token
      ↓
Server verifies token
```

An attacker's website normally won't have the correct token.

---

### 2. `SameSite` Cookies

Cookies can use the `SameSite` attribute:

```http id="y7n4qx"
Set-Cookie: sessionId=abc123; SameSite=Lax
```

or:

```http id="m2p8wd"
Set-Cookie: sessionId=abc123; SameSite=Strict
```

This can restrict when cookies are sent in cross-site situations and helps reduce CSRF risk.

---

### 3. Check the Request Origin

The server can also validate request-related headers such as:

```text id="q9v3ks"
Origin
Referer
```

to help determine where a request came from.

---

# 🔥🔥 XSS vs CSRF

This is a **very important interview difference**.

| XSS                                          | CSRF                                                           |
| -------------------------------------------- | -------------------------------------------------------------- |
| Attacker injects malicious script            | Attacker tricks browser into sending a request                 |
| Malicious code runs in the victim's browser  | Unwanted request is made using victim's authentication         |
| Main target: user's browser/page             | Main target: authenticated actions on a website                |
| Often involves unsafe handling of user input | Often involves authentication cookies being sent automatically |
| Example: malicious `<script>`                | Example: unwanted account-changing request                     |

### Easy Way to Remember

```text id="v8m2qx"
XSS
 ↓
"Attacker's JavaScript runs in my browser."


CSRF
 ↓
"Attacker tricks my browser into making
an unwanted request while I'm logged in."
```

### Real-Life Analogy

**XSS:**

```text id="s6n9wp"
Attacker secretly puts a bad instruction
inside a website.

You open it.

Your browser follows that instruction.
```

**CSRF:**

```text id="j4r7km"
You are already logged into a website.

Attacker tricks you into triggering an action.

Your browser sends the request using
your existing login session.
```

### 🔥 Interview Answers

**XSS:**
XSS is a vulnerability where an attacker injects malicious JavaScript that executes in another user's browser.

**CSRF:**
CSRF is an attack where an attacker tricks an authenticated user's browser into sending an unwanted request to a website where the user is already logged in.

<!-- ============================== -->

## 1. 🔥🔥 What is Same-Origin Policy?

**Same-Origin Policy (SOP)** is a browser security rule that prevents a webpage from freely accessing data from a **different origin**.

In simple words:

> **Ek website ko doosri website ke sensitive data ko freely read karne ki permission nahi hoti.**

### First, what is an Origin?

An origin consists of:

```text
Protocol + Domain + Port
```

For example:

```text
https://example.com:443
```

If any of these are different, the origin is different.

```text
https://example.com
https://api.example.com
```

Different domain/subdomain → different origin.

```text
http://example.com
https://example.com
```

Different protocol → different origin.

```text
http://localhost:3000
http://localhost:5000
```

Different port → different origin.

---

### Simple Example

Suppose you are logged into:

```text
bank.com
```

Now you open:

```text
malicious.com
```

Without browser security restrictions, `malicious.com` could potentially try to read sensitive information from `bank.com`.

So the browser says:

```text
malicious.com
      ↓
Try to access bank.com data
      ↓
Browser checks Same-Origin Policy
      ↓
❌ Not freely allowed
```

This protects users from websites freely reading data belonging to other origins.

---

### Same Origin vs Different Origin

```text
https://example.com/page1
https://example.com/page2
```

Same origin:

```text
Protocol → same
Domain   → same
Port     → same
```

So the browser considers them the **same origin**.

But:

```text
https://example.com
https://api.example.com
```

are different origins because the host is different.

---

### How is this related to CORS?

This is an important connection:

```text
Same-Origin Policy
        ↓
Browser restricts cross-origin access
        ↓
CORS provides a controlled way
for servers to allow certain cross-origin access
```

So:

> **SOP is the browser's default security restriction, while CORS is a mechanism that allows a server to relax certain cross-origin restrictions.**

### Interview Answer

**Same-Origin Policy is a browser security mechanism that restricts a webpage from freely accessing data or resources from a different origin. An origin is determined by the protocol, host, and port.**

---

## 2. 🔥🔥 What is the difference between Authentication and Authorization?

These two terms are very commonly confused.

The easiest way to remember them is:

```text
Authentication → "Who are you?"
Authorization  → "What are you allowed to do?"
```

---

### Authentication

**Authentication is the process of verifying the identity of a user.**

In simple words:

> **Authentication checks whether you are really the person you claim to be.**

### Example

You enter:

```text
Email: ajay@gmail.com
Password: ********
```

The server verifies your credentials.

```text
Credentials
    ↓
Server verifies
    ↓
Valid?
    ↓
Yes → User authenticated ✅
```

Other examples of authentication:

```text
Password
OTP
Fingerprint
Face recognition
Google login
```

After successful authentication, the application knows:

```text
"This user is Ajay."
```

---

### Authorization

**Authorization is the process of deciding what an authenticated user is allowed to access or perform.**

In simple words:

> **Authorization checks what you are allowed to do after you are identified.**

### Example

Suppose you successfully log in as a normal user.

You can:

```text
View your profile       ✅
Edit your profile       ✅
Place an order          ✅
```

But you cannot:

```text
Delete another user     ❌
Access admin dashboard  ❌
Delete products         ❌
```

The server checks your permissions/role:

```text
User authenticated
       ↓
What role does the user have?
       ↓
Normal User
       ↓
Check permission
       ↓
Allowed / Not Allowed
```

---

# 🔥🔥 Authentication vs Authorization

| Authentication                      | Authorization                         |
| ----------------------------------- | ------------------------------------- |
| Checks **who you are**              | Checks **what you can do**            |
| Verifies identity                   | Verifies permissions                  |
| Happens first                       | Happens after authentication          |
| Uses password, OTP, biometric, etc. | Uses roles, permissions, access rules |
| Example: Login                      | Example: Admin can delete users       |

---

## Real-Life Example

Imagine entering an office building.

### Authentication

Security guard asks:

> **"Who are you?"**

You show your ID card.

```text
ID verified
   ↓
You are Ajay ✅
```

That's **Authentication**.

### Authorization

Now the guard checks:

> **"Which rooms are you allowed to enter?"**

You can enter:

```text
Employee area     ✅
Cafeteria         ✅
```

But:

```text
CEO room          ❌
Server room       ❌
```

That's **Authorization**.

---

## 🔥 Full Flow

In a real application, it often looks like:

```text
User
 ↓
Login
 ↓
Authentication
 ↓
"Who is this user?"
 ↓
User identified ✅
 ↓
Authorization
 ↓
"What can this user do?"
 ↓
Permission check
 ↓
Allow / Deny
```

### Example in a MERN Application

Suppose an admin wants to delete a user:

```text
POST /login
      ↓
Authentication
      ↓
User is authenticated
      ↓
DELETE /users/123
      ↓
Authorization
      ↓
Is user an admin?
      ↓
Yes → Allow ✅
No  → Deny ❌
```

### Interview Answer

**Authentication verifies the identity of a user, while authorization determines what an authenticated user is allowed to access or perform.**

### One-Line Memory Trick

```text
Authentication → "Who are you?"

Authorization  → "What are you allowed to do?"
```

<!-- =========================== -->
