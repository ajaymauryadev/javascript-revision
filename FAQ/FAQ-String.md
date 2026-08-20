# 13. Important String Coding Questions ⭐⭐⭐

These are some of the most common beginner-to-interview-level string problems.

Before solving them, understand one important thing:

> **A string is a sequence of characters.**

For example:

```js
const str = "hello";
```

Characters are:

```text
h  e  l  l  o
0  1  2  3  4
```

JavaScript strings have indexes starting from `0`.

```js
console.log(str[0]); // h
console.log(str[1]); // e
console.log(str[4]); // o
```

---

# 1. 🔥🔥🔥 Reverse a string

## What does "reverse a string" mean?

Given:

```text
"hello"
```

we need:

```text
"olleh"
```

Another example:

```text
"Ajay"
```

becomes:

```text
"yajA"
```

---

## 🔥 First understand the logic

Original:

```text
h e l l o
0 1 2 3 4
```

We want to read it from **right to left**:

```text
o l l e h
4 3 2 1 0
```

So we can start from the last index:

```js
str.length - 1;
```

For `"hello"`:

```js
str.length;
// 5

str.length - 1;
// 4
```

Because the last index is `4`.

---

# 🔥🔥 Method 1 — Using a loop

```js
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("hello"));
```

### Output

```text
olleh
```

---

## 🧠 Understand every line

### Step 1

```js
let result = "";
```

We need an empty string where we will build the answer.

Initially:

```text
result = ""
```

---

### Step 2

```js
let i = str.length - 1;
```

For:

```text
hello
```

we get:

```text
i = 4
```

---

### Step 3

```js
i >= 0;
```

We continue until we reach index `0`.

---

### Step 4

```js
i--;
```

This moves backwards:

```text
4
3
2
1
0
```

---

### Step 5

```js
result += str[i];
```

Let's track it:

```text
i = 4
str[4] = "o"
result = "o"

i = 3
str[3] = "l"
result = "ol"

i = 2
str[2] = "l"
result = "oll"

i = 1
str[1] = "e"
result = "olle"

i = 0
str[0] = "h"
result = "olleh"
```

Final:

```text
olleh
```

---

# 🔥🔥 Method 2 — Using built-in methods

This is much shorter:

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
```

### Output

```text
olleh
```

Understand the three methods:

```js
str.split("");
```

converts:

```text
"hello"
```

into:

```text
["h", "e", "l", "l", "o"]
```

Then:

```js
.reverse()
```

becomes:

```text
["o", "l", "l", "e", "h"]
```

Then:

```js
.join("")
```

becomes:

```text
"olleh"
```

So:

```text
"hello"
   ↓
split("")
   ↓
["h","e","l","l","o"]
   ↓
reverse()
   ↓
["o","l","l","e","h"]
   ↓
join("")
   ↓
"olleh"
```

---

# 🔥🔥🔥 Interview trap — Don't confuse `reverse()`

This doesn't work:

```js
const str = "hello";

str.reverse();
```

Why?

Because `reverse()` is an **array method**, not a string method.

You need:

```js
str.split("").reverse().join("");
```

---

# 🔥🔥🔥 Another common question

What is the output?

```js
const str = "hello";

console.log(str.split(""));
console.log(str.split("").reverse());
console.log(str.split("").reverse().join(""));
```

### Output

```text
["h", "e", "l", "l", "o"]

["o", "l", "l", "e", "h"]

"olleh"
```

---

# 2. 🔥🔥🔥 Check whether a string is a palindrome

## What is a palindrome?

A palindrome is a string that reads the **same from left to right and right to left**.

Examples:

```text
"madam"
"level"
"racecar"
```

All are palindromes.

But:

```text
"hello"
```

is not.

Because:

```text
hello
olleh
```

They are different.

---

# 🔥🔥 Method 1 — Reverse and compare

This is the easiest way to understand.

```js
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
```

### Output

```text
true
false
```

---

## 🧠 Step-by-step

For:

```text
"madam"
```

Reverse it:

```text
"madam"
```

Original:

```text
madam
```

Reversed:

```text
madam
```

Compare:

```js
"madam" === "madam";
```

Result:

```text
true
```

For:

```text
"hello"
```

Reverse:

```text
olleh
```

Compare:

```js
"hello" === "olleh";
```

Result:

```text
false
```

---

# 🔥🔥🔥 Method 2 — Using two pointers

This is more important for interviews because it shows that you understand the logic.

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam"));
```

### Output

```text
true
```

---

## 🧠 Understand the two pointers

For:

```text
madam
```

indexes:

```text
m a d a m
0 1 2 3 4
```

We start:

```text
left = 0
right = 4
```

Compare:

```text
str[0] === str[4]

m === m
```

Good.

Move:

```text
left++
right--
```

Now:

```text
left = 1
right = 3
```

Compare:

```text
a === a
```

Good.

Move again:

```text
left = 2
right = 2
```

Now they meet.

We can stop.

Therefore:

```text
true
```

---

# 🔥🔥🔥 Why `left < right`?

Because we only need to compare the first half with the second half.

For:

```text
m a d a m
```

we compare:

```text
m ↔ m
a ↔ a
```

We don't need:

```text
d ↔ d
```

because the middle character doesn't affect whether the string is a palindrome.

---

# 🔥🔥🔥 What happens when it is NOT a palindrome?

```js
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("hello"));
```

First comparison:

```text
h !== o
```

Immediately:

```text
return false;
```

Output:

```text
false
```

This is called **early exit**.

---

# 🔥🔥🔥 Interview variation — Ignore case

What if:

```text
"Madam"
```

should also be considered a palindrome?

Our previous code gives:

```text
false
```

because:

```text
"M" !== "m"
```

We can normalize the string:

```js
function isPalindrome(str) {
  str = str.toLowerCase();

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("Madam"));
```

### Output

```text
true
```

---

# 🔥🔥🔥 Interview variation — Ignore spaces

What if:

```text
"nurses run"
```

should be considered a palindrome?

We can remove spaces:

```js
function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("nurses run"));
```

### Output

```text
true
```

Because we compare:

```text
nursesrun
```

with:

```text
nursesrun
```

---

# 🔥🔥🔥 Important interview version

Sometimes they say:

> Check whether a string is a palindrome ignoring spaces and case.

Then think:

```text
1. Convert to lowercase
2. Remove spaces
3. Reverse
4. Compare
```

---

# 3. 🔥🔥 Count characters in a string

Now the question changes.

Given:

```text
"hello"
```

How many characters are there?

Answer:

```text
5
```

The easiest solution is:

```js
const str = "hello";

console.log(str.length);
```

### Output

```text
5
```

---

# 🔥🔥 But be careful — "Count characters" can mean different things

This is where interview questions become tricky.

They might mean:

### Meaning 1

> How many total characters are there?

```text
"hello" → 5
```

Use:

```js
str.length;
```

---

### Meaning 2

> Count how many times each character appears.

```text
"hello"
```

Answer:

```text
h → 1
e → 1
l → 2
o → 1
```

This is the **frequency** problem, which is the next question.

---

# 🔥🔥 4. Count frequency of characters

## What does "frequency" mean?

Frequency means:

> **How many times each character appears in the string.**

Example:

```text
"hello"
```

Characters:

```text
h → 1
e → 1
l → 2
o → 1
```

Another example:

```text
"banana"
```

Frequency:

```text
b → 1
a → 3
n → 2
```

---

# 🔥🔥🔥 Method 1 — Using an object

This is one of the most important patterns to learn.

```js
function countFrequency(str) {
  const frequency = {};

  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

console.log(countFrequency("hello"));
```

### Output

```text
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

# 🧠 Understand this slowly

We start with:

```js
const frequency = {};
```

So:

```text
frequency = {}
```

Now:

```js
for (let char of str)
```

means:

> Take each character from the string one by one.

For:

```text
hello
```

we get:

```text
h
e
l
l
o
```

---

## First character: `h`

Check:

```js
frequency["h"];
```

Does it exist?

No.

So:

```js
frequency["h"] = 1;
```

Now:

```text
{
  h: 1
}
```

---

## Second character: `e`

Again:

```js
frequency["e"];
```

doesn't exist.

So:

```js
frequency["e"] = 1;
```

Now:

```text
{
  h: 1,
  e: 1
}
```

---

## Third character: `l`

Does:

```js
frequency["l"];
```

exist?

No.

So:

```js
frequency["l"] = 1;
```

Now:

```text
{
  h: 1,
  e: 1,
  l: 1
}
```

---

## Fourth character: `l`

Now `l` already exists:

```text
l → 1
```

So:

```js
frequency["l"]++;
```

becomes:

```text
l → 2
```

Now:

```text
{
  h: 1,
  e: 1,
  l: 2
}
```

---

## Fifth character: `o`

Not found.

So:

```js
frequency["o"] = 1;
```

Final:

```text
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

# 🔥🔥🔥 The Most Important Pattern

Memorize this pattern:

```js
const frequency = {};

for (let char of str) {
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}
```

It means:

```text
If character already exists
        ↓
increase count

Otherwise
        ↓
start count at 1
```

This pattern is useful far beyond strings.

You can use the same idea for:

```text
numbers
words
IDs
categories
objects
```

---

# 🔥🔥 5. Frequency using `||`

You will often see a shorter version:

```js
function countFrequency(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

console.log(countFrequency("hello"));
```

### Output

```text
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

## 🧠 Understand this line

```js
frequency[char] = (frequency[char] || 0) + 1;
```

For the first `h`:

```text
frequency["h"]
→ undefined
```

So:

```text
undefined || 0
→ 0
```

Then:

```text
0 + 1
→ 1
```

So:

```text
h → 1
```

For the second `l`:

```text
frequency["l"]
→ 1
```

So:

```text
1 || 0
→ 1
```

Then:

```text
1 + 1
→ 2
```

So:

```text
l → 2
```

---

# 🔥🔥🔥 6. Count frequency with `Map`

You may also see `Map`:

```js
function countFrequency(str) {
  const frequency = new Map();

  for (let char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  return frequency;
}

console.log(countFrequency("hello"));
```

Conceptually:

```text
h → 1
e → 1
l → 2
o → 1
```

For beginner interviews, an object-based solution is usually easier to explain.

---

# 🔥🔥🔥 7. Count characters excluding spaces

Suppose:

```text
"hello world"
```

You don't want to count the space.

```js
function countCharacters(str) {
  let count = 0;

  for (let char of str) {
    if (char !== " ") {
      count++;
    }
  }

  return count;
}

console.log(countCharacters("hello world"));
```

### Output

```text
10
```

Why?

```text
hello → 5
space → ignored
world → 5
```

Total:

```text
10
```

---

# 🔥🔥🔥 8. Frequency excluding spaces

```js
function countFrequency(str) {
  const frequency = {};

  for (let char of str) {
    if (char === " ") {
      continue;
    }

    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

console.log(countFrequency("hello world"));
```

Output:

```text
{
  h: 1,
  e: 1,
  l: 3,
  o: 2,
  w: 1,
  r: 1,
  d: 1
}
```

Notice:

```text
hello world
```

has:

```text
l → 3
o → 2
```

---

# 🔥🔥🔥 9. Case-sensitive frequency

```js
const str = "Hello";

console.log(countFrequency(str));
```

If we don't convert case:

```text
H → 1
e → 1
l → 2
o → 1
```

`H` and `h` would be considered different characters.

---

# 🔥🔥🔥 10. Case-insensitive frequency

If we want:

```text
"H" and "h"
```

to be treated as the same character:

```js
function countFrequency(str) {
  const frequency = {};

  str = str.toLowerCase();

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

console.log(countFrequency("Hello"));
```

### Output

```text
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

# 🔥🔥🔥 11. Find the first character that appears once

This is a very common follow-up question.

Given:

```text
"hello"
```

We know:

```text
h → 1
e → 1
l → 2
o → 1
```

The first character with frequency `1` is:

```text
h
```

Solution:

```js
function firstUniqueChar(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("hello"));
```

### Output

```text
h
```

### 🧠 Why two loops?

First loop:

```text
Count everything
```

Second loop:

```text
Find the first character whose count is 1
```

This two-step pattern is extremely useful.

---

# 🔥🔥🔥 12. Find the most frequent character

```js
function mostFrequentChar(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(mostFrequentChar("hello"));
```

### Output

```text
l
```

Because:

```text
h → 1
e → 1
l → 2  ← highest
o → 1
```

---

# 🔥🔥🔥 13. Predict the output

```js
const str = "banana";
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);
```

### Output

```text
{
  b: 1,
  a: 3,
  n: 2
}
```

Let's manually track:

```text
b → 1

a → 1

n → 1

a → 2

n → 2

a → 3
```

Final:

```text
b → 1
a → 3
n → 2
```

---

# 🔥🔥🔥 14. Tricky Output Question

```js
const str = "abc";

const result = str.split("").reverse();

console.log(result);
```

### Output

```text
["c", "b", "a"]
```

Remember:

```text
split("")
→ array

reverse()
→ reversed array
```

It is **not a string** yet.

To get:

```text
"cba"
```

you need:

```js
str.split("").reverse().join("");
```

---

# 🔥🔥🔥 15. Tricky Palindrome Question

Predict:

```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("level"));
console.log(isPalindrome("Level"));
```

### Output

```text
true
false
```

Why?

First:

```text
level === level
→ true
```

Second:

```text
Level
```

reversed is:

```text
leveL
```

Because uppercase and lowercase are different.

So:

```text
Level !== leveL
```

---

# 🔥🔥🔥 16. Empty String

```js
console.log("".length);
```

Output:

```text
0
```

What about palindrome?

```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome(""));
```

Output:

```text
true
```

Because:

```text
"" === ""
```

Whether an empty string should count as a palindrome depends on the interviewer's expected definition, but in the standard algorithm above, it returns `true`.

---

# 🔥🔥🔥 17. Single Character

```js
console.log(isPalindrome("a"));
```

Output:

```text
true
```

A single character reads the same forwards and backwards.

---

# 🧠 How to Recognize These Questions

When interviewer says:

### "Reverse a string"

Think:

```text
Read from last index to first
```

or:

```text
split → reverse → join
```

---

### "Check palindrome"

Think:

```text
Original === Reverse
```

or:

```text
Compare left and right characters
```

---

### "Count characters"

First clarify mentally:

```text
Total number of characters?
```

Then:

```js
str.length;
```

---

### "Count frequency"

Think immediately:

```text
Object / Map
     ↓
character → count
```

Pattern:

```js
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}
```

---

# 🔥🔥🔥 The Most Important Patterns to Memorize

## Pattern 1 — Reverse

```js
str.split("").reverse().join("");
```

---

## Pattern 2 — Palindrome

```js
str === str.split("").reverse().join("");
```

---

## Pattern 3 — Count total characters

```js
str.length;
```

---

## Pattern 4 — Count frequency

```js
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}
```

---

# 🧠 Interview Thinking Framework

When you get a new string problem, **don't immediately write code**.

First ask:

```text
1. What exactly is the input?
        ↓
2. What exactly should I return?
        ↓
3. Do I need to inspect every character?
        ↓
4. Do I need to remember/count something?
        ↓
5. Do I need an object/Map?
        ↓
6. Is order important?
        ↓
7. Are spaces/capital letters important?
```

For example:

```text
"Hello World"
```

Before coding, ask:

```text
Should H and h be the same?
Should spaces count?
Should punctuation count?
Should I return a string, number, boolean, or object?
```

These small details are where **tricky interview questions** usually come from.

---

# 🔥🔥🔥 Complexity You Should Know

### Reverse using loop

```text
Time:  O(n)
Space: O(n)
```

because we create a new result string.

### Palindrome using two pointers

```text
Time:  O(n)
Space: O(1)
```

if we don't create another string.

### Frequency counting

```text
Time:  O(n)
Space: O(k)
```

where `k` is the number of unique characters.

For normal ASCII characters, `k` is bounded by the character set.

---

# 🧠 Final Cheat Sheet

```text
REVERSE
"hello"
   ↓
"olleh"


PALINDROME
"madam"
   ↓
reverse
   ↓
"madam"
   ↓
same?
   ↓
true


COUNT CHARACTERS
"hello"
   ↓
length
   ↓
5


FREQUENCY
"hello"
   ↓
h → 1
e → 1
l → 2
o → 1
```

### 🔥🔥🔥 One-Line Memory Trick

```text
Reverse     → go backwards
Palindrome  → compare with reverse
Count       → length
Frequency   → object/Map + counter
```

<!-- ============================= -->

# 14. String Coding Questions — Frequency-Based Problems ⭐⭐⭐

Before solving these, remember the frequency pattern from the previous question:

```js
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}
```

This gives us:

```text
character → how many times it appears
```

For:

```text
"hello"
```

we get:

```text
h → 1
e → 1
l → 2
o → 1
```

Now we can solve all three problems.

---

# 1. 🔥🔥 Find the first non-repeating character

## What does "non-repeating" mean?

A **non-repeating character** is a character that appears **exactly once**.

Example:

```text
"hello"
```

Frequency:

```text
h → 1
e → 1
l → 2
o → 1
```

There are three non-repeating characters:

```text
h
e
o
```

But the question asks:

> **Find the FIRST non-repeating character.**

So answer:

```text
h
```

Because `h` appears first in the original string.

---

# 🔥🔥 Method — Two loops

This is the most important approach to understand.

```js
function firstNonRepeating(str) {
  const frequency = {};

  // Step 1: Count frequency
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Step 2: Find first character with count 1
  for (let char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeating("hello"));
```

### Output

```text
h
```

---

# 🧠 Understand this slowly

Suppose:

```text
str = "hello"
```

### Step 1 — Count everything

After the first loop:

```text
h → 1
e → 1
l → 2
o → 1
```

Now we have the information we need.

### Step 2 — Go through the original string again

Original:

```text
h e l l o
```

Check:

```text
h → frequency = 1
```

Found it!

So:

```js
return "h";
```

We don't even need to check `e`, `l`, or `o`.

---

# 🔥🔥🔥 Why do we need TWO loops?

This is an important interview concept.

You might think:

> "Why can't I find the answer in the same loop?"

Because while looking at the first character, you don't necessarily know whether it appears later.

Example:

```text
"swiss"
```

When you first see:

```text
s
```

you don't yet know that `s` appears multiple times.

So first:

```text
Loop 1 → count everything
```

Then:

```text
Loop 2 → find the first character whose count is 1
```

This is a very common interview pattern:

```text
First pass  → collect information

Second pass → use that information
```

---

# 🔥🔥🔥 Example: `"swiss"`

Let's calculate:

```text
s → 3
w → 1
i → 1
```

Now scan original string:

```text
s → 3 ❌
w → 1 ✅
```

Answer:

```text
w
```

```js
console.log(firstNonRepeating("swiss"));
```

Output:

```text
w
```

---

# 🔥🔥 Example: No non-repeating character

```js
console.log(firstNonRepeating("aabbcc"));
```

Frequency:

```text
a → 2
b → 2
c → 2
```

No character has frequency `1`.

So:

```text
null
```

Output:

```text
null
```

---

# 🔥🔥🔥 Important difference: "first" matters

Consider:

```text
"character"
```

Suppose multiple characters appear only once.

The answer isn't:

```text
"all unique characters"
```

The question asks:

```text
FIRST non-repeating character
```

So we scan from left to right and return immediately when:

```js
frequency[char] === 1;
```

---

# 🔥🔥🔥 Case sensitivity

Consider:

```js
console.log(firstNonRepeating("aAb"));
```

Without converting case:

```text
a → 1
A → 1
b → 1
```

The first one is:

```text
a
```

If the interviewer says:

> Ignore case.

Then:

```js
str = str.toLowerCase();
```

Now:

```text
"aAb"
 ↓
"aab"
```

Frequency:

```text
a → 2
b → 1
```

Answer:

```text
b
```

---

# 2. 🔥🔥 Find duplicate characters

## What does "duplicate character" mean?

A duplicate character is a character that appears **more than once**.

Example:

```text
"hello"
```

Frequency:

```text
h → 1
e → 1
l → 2
o → 1
```

So duplicate character:

```text
l
```

---

# 🔥🔥 Method — Frequency object

```js
function findDuplicates(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const duplicates = [];

  for (let char in frequency) {
    if (frequency[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

console.log(findDuplicates("hello"));
```

### Output

```text
["l"]
```

---

# 🧠 Understand the logic

First:

```text
"hello"
```

Count:

```text
h → 1
e → 1
l → 2
o → 1
```

Then ask:

```text
Which characters have count > 1?
```

Only:

```text
l → 2
```

So:

```text
["l"]
```

---

# 🔥🔥🔥 Example: `"banana"`

```js
console.log(findDuplicates("banana"));
```

Frequency:

```text
b → 1
a → 3
n → 2
```

Characters with count greater than `1`:

```text
a
n
```

Output:

```text
["a", "n"]
```

---

# 🔥🔥🔥 Important: Duplicate vs frequency

These are different questions.

For:

```text
"banana"
```

### Frequency

```text
a → 3
n → 2
b → 1
```

### Duplicate characters

```text
a
n
```

### First non-repeating character

```text
b
```

So:

```text
frequency → count

duplicates → count > 1

non-repeating → count === 1
```

---

# 🔥🔥🔥 Another way to find duplicates

You may also see `Set`:

```js
function findDuplicates(str) {
  const seen = new Set();
  const duplicates = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      duplicates.add(char);
    } else {
      seen.add(char);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates("banana"));
```

Output:

```text
["a", "n"]
```

### How does it work?

Initially:

```text
seen = {}
duplicates = {}
```

Read `b`:

```text
seen → b
```

Read `a`:

```text
seen → b, a
```

Read `n`:

```text
seen → b, a, n
```

Read `a` again:

```text
a already exists in seen
        ↓
duplicate!
        ↓
add a to duplicates
```

And similarly for `n`.

---

# 🔥🔥🔥 Why use `Set`?

A `Set` stores **unique values**.

For example:

```js
const set = new Set();

set.add("a");
set.add("a");
set.add("b");

console.log(set);
```

Conceptually:

```text
{"a", "b"}
```

The second `"a"` isn't added again.

This makes `Set` very useful for duplicate-related problems.

---

# 🔥🔥🔥 3. Remove duplicate characters

Now the question is different.

Given:

```text
"banana"
```

we want:

```text
"ban"
```

Because:

```text
b → keep
a → keep
n → keep
a → already exists
n → already exists
a → already exists
```

---

# 🔥🔥 Method 1 — Using `Set`

The easiest solution:

```js
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("banana"));
```

### Output

```text
ban
```

---

# 🧠 Understand this carefully

Start with:

```text
"banana"
```

When we do:

```js
new Set(str);
```

JavaScript creates a Set containing unique characters:

```text
b
a
n
```

So conceptually:

```text
Set {
  "b",
  "a",
  "n"
}
```

Then:

```js
[...new Set(str)];
```

converts it back to an array:

```text
["b", "a", "n"]
```

Then:

```js
.join("")
```

creates:

```text
"ban"
```

So:

```text
"banana"
   ↓
Set
   ↓
{"b", "a", "n"}
   ↓
["b", "a", "n"]
   ↓
"ban"
```

---

# 🔥🔥 Method 2 — Without `Set`

Interviewers sometimes say:

> "Don't use built-in methods."

Then we can use an object.

```js
function removeDuplicates(str) {
  const seen = {};
  let result = "";

  for (let char of str) {
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("banana"));
```

### Output

```text
ban
```

---

# 🧠 Understand this line by line

Start:

```text
seen = {}
result = ""
```

String:

```text
banana
```

### Character `b`

`b` is not in `seen`.

So:

```text
seen.b = true
result = "b"
```

---

### Character `a`

Not seen:

```text
result = "ba"
```

---

### Character `n`

Not seen:

```text
result = "ban"
```

---

### Character `a`

Already seen.

So skip it.

```text
result = "ban"
```

---

### Character `n`

Already seen.

Skip.

---

### Character `a`

Already seen.

Skip.

Final:

```text
"ban"
```

---

# 🔥🔥🔥 4. Very Important Difference

Look at these three questions using the same string:

```text
"banana"
```

### First non-repeating

Frequency:

```text
b → 1
a → 3
n → 2
```

Answer:

```text
b
```

---

### Duplicate characters

Characters appearing more than once:

```text
a
n
```

Answer:

```text
["a", "n"]
```

---

### Remove duplicate characters

Keep the first occurrence of each:

```text
"ban"
```

---

# 🧠 Think of them like this

```text
"banana"

       b a n a n a
       ↓ ↓ ↓ ↓ ↓ ↓

Frequency:
b = 1
a = 3
n = 2

First non-repeating:
b

Duplicates:
a, n

Remove duplicates:
b a n
```

---

# 🔥🔥🔥 5. Tricky Question — Preserve Order

Consider:

```text
"programming"
```

If we remove duplicates, we usually want:

```text
"progamin"
```

Why?

Let's scan:

```text
p → keep
r → keep
o → keep
g → keep
r → duplicate
a → keep
m → keep
m → duplicate
i → keep
n → keep
g → duplicate
```

Result:

```text
"progamin"
```

Using:

```js
console.log(removeDuplicates("programming"));
```

Output:

```text
progamin
```

---

# 🔥🔥🔥 6. Remove duplicates but keep only characters that appear once

This is a different question.

Given:

```text
"banana"
```

Normal duplicate removal:

```text
"ban"
```

But if interviewer says:

> "Return only characters that occur exactly once."

Then answer:

```text
"b"
```

Because:

```text
b → 1
a → 3
n → 2
```

Solution:

```js
function uniqueOnly(str) {
  const frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let result = "";

  for (let char of str) {
    if (frequency[char] === 1) {
      result += char;
    }
  }

  return result;
}

console.log(uniqueOnly("banana"));
```

### Output

```text
b
```

### ⚠️ Very important

Don't confuse:

```text
"Remove duplicates"
```

with:

```text
"Keep only non-repeating characters"
```

They are completely different.

---

# 🔥🔥🔥 7. Tricky Output — `Set`

Predict:

```js
const result = new Set("banana");

console.log(result);
```

Conceptually output:

```text
Set(3) {
  "b",
  "a",
  "n"
}
```

The important thing is:

```text
b
a
n
```

Only unique characters remain.

---

# 🔥🔥🔥 8. Predict this

```js
const str = "hello";

const result = [...new Set(str)];

console.log(result);
```

Output:

```text
["h", "e", "l", "o"]
```

Notice:

```text
l
```

appeared twice originally, but Set keeps it once.

---

# 🔥🔥🔥 9. Predict this

```js
const str = "hello";

const result = [...new Set(str)].join("");

console.log(result);
```

Output:

```text
helo
```

Because:

```text
hello
 ↓
h e l l o
 ↓
remove repeated l
 ↓
h e l o
 ↓
"helo"
```

---

# 🔥🔥🔥 10. First Non-Repeating with `Set`? Be Careful

You might think:

```js
new Set(str);
```

can directly solve first non-repeating character.

❌ No.

A Set only tells you **unique values**, not how many times each character occurred.

For:

```text
"banana"
```

Set gives:

```text
b, a, n
```

But it doesn't tell you:

```text
b → 1
a → 3
n → 2
```

For first non-repeating, we need frequency information.

That's why we use:

```text
Object / Map
```

---

# 🔥🔥🔥 11. First Non-Repeating — Best Mental Pattern

Whenever you hear:

> "first non-repeating"

immediately think:

```text
1. Count frequency
2. Scan original string
3. Find frequency === 1
4. Return immediately
```

Code:

```js
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}

for (let char of str) {
  if (frequency[char] === 1) {
    return char;
  }
}
```

---

# 🔥🔥🔥 12. Duplicate Characters — Best Mental Pattern

Whenever you hear:

> "find duplicate characters"

think:

```text
1. Count frequency
2. Find frequency > 1
```

Code:

```js
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}

for (let char in frequency) {
  if (frequency[char] > 1) {
    console.log(char);
  }
}
```

---

# 🔥🔥🔥 13. Remove Duplicate Characters — Best Mental Pattern

Whenever you hear:

> "remove duplicates"

think:

```text
1. Remember what I've already seen
2. If not seen → keep it
3. If already seen → skip it
```

Using Set:

```js
const seen = new Set();
let result = "";

for (let char of str) {
  if (!seen.has(char)) {
    seen.add(char);
    result += char;
  }
}
```

---

# 🔥🔥🔥 14. One Combined Example

Let's use:

```text
"programming"
```

### Frequency

```text
p → 1
r → 2
o → 1
g → 2
a → 1
m → 2
i → 1
n → 1
```

### First non-repeating

Scan:

```text
p → 1 ✅
```

Answer:

```text
p
```

### Duplicate characters

```text
r
g
m
```

### Remove duplicates

Scan and keep first occurrence:

```text
p r o g a m i n
```

Answer:

```text
progamin
```

---

# 🔥🔥🔥 15. Important Edge Cases

You should always think about these in an interview.

### Empty string

```js
firstNonRepeating("");
```

Usually:

```text
null
```

---

### All characters repeated

```js
firstNonRepeating("aabbcc");
```

Output:

```text
null
```

---

### One character

```js
firstNonRepeating("a");
```

Output:

```text
a
```

Because it appears exactly once.

---

### Remove duplicates from empty string

```js
removeDuplicates("");
```

Output:

```text
""
```

---

# 🧠 Complexity

## First non-repeating

Two passes:

```text
Time:  O(n)
Space: O(k)
```

where `k` is the number of unique characters.

---

## Find duplicates

```text
Time:  O(n)
Space: O(k)
```

---

## Remove duplicates

```text
Time:  O(n)
Space: O(k)
```

---

# 🔥🔥🔥 Final Cheat Sheet

```text
QUESTION                         THINK

First non-repeating              frequency === 1
                                  + original order

Find duplicate characters        frequency > 1

Remove duplicate characters      seen / Set
                                  keep first occurrence

Keep only non-repeating          frequency === 1
                                  keep ALL matching characters
```

### Example

```text
Input:
"banana"
```

```text
Frequency:
b → 1
a → 3
n → 2
```

Therefore:

```text
First non-repeating:
b

Duplicate characters:
a, n

Remove duplicates:
ban

Only non-repeating characters:
b
```

---

# 🧠 The Most Important Interview Pattern

You will see this pattern again and again:

```js
const frequency = {};

for (let char of str) {
  frequency[char] = (frequency[char] || 0) + 1;
}
```

Once you have:

```text
character → count
```

many problems become easy:

```text
count === 1
→ non-repeating

count > 1
→ duplicate

count === maximum
→ most frequent

count === minimum
→ least frequent
```

And for **removing duplicates**, remember a different pattern:

```js
const seen = new Set();
let result = "";

for (let char of str) {
  if (!seen.has(char)) {
    seen.add(char);
    result += char;
  }
}
```

### 🔥🔥🔥 One-Line Memory Trick

```text
Frequency → "How many?"

Set       → "Have I seen this before?"

First     → "Give me the first matching one."

Remove    → "Keep it only the first time."
```

<!-- ============================== -->

# 15. String Coding Questions — Anagrams & Longest Word ⭐⭐⭐

## 1. 🔥🔥 Check whether two strings are anagrams

### What is an anagram?

Two strings are **anagrams** if they contain the **same characters with the same frequency**, but their order can be different.

Example:

```text
"listen"
"silent"
```

Both contain:

```text
l → 1
i → 1
s → 1
t → 1
e → 1
n → 1
```

So:

```text
"listen" → "silent"
```

are anagrams.

---

### Another example

```text
"hello"
"world"
```

These are **not** anagrams.

Why?

```text
hello:
h → 1
e → 1
l → 2
o → 1

world:
w → 1
o → 1
r → 1
l → 1
d → 1
```

The characters and frequencies are different.

---

# 🔥🔥 First understand the main idea

For anagrams, **order doesn't matter**.

These:

```text
"listen"
"silent"
```

are different in order:

```text
l i s t e n
s i l e n t
```

But they have the same characters.

So we need to somehow ignore the order.

There are two common approaches:

```text
Approach 1:
Sort both strings and compare

Approach 2:
Count frequency of characters and compare
```

Both are important.

---

# 🔥🔥 Method 1 — Sort and compare

This is the easiest solution to understand.

```js
function areAnagrams(str1, str2) {
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
```

### Output

```text
true
false
```

---

# 🧠 Understand every step

Take:

```text
"listen"
```

First:

```js
str1.split("");
```

gives:

```text
["l", "i", "s", "t", "e", "n"]
```

Then:

```js
.sort()
```

gives:

```text
["e", "i", "l", "n", "s", "t"]
```

Then:

```js
.join("")
```

gives:

```text
"eilnst"
```

---

Now `"silent"`:

```text
"silent"
   ↓
["s","i","l","e","n","t"]
   ↓
["e","i","l","n","s","t"]
   ↓
"eilnst"
```

Now compare:

```js
"eilnst" === "eilnst";
```

So:

```text
true
```

---

# 🔥🔥🔥 Why does sorting work?

Because anagrams contain exactly the same characters.

Before sorting:

```text
listen
silent
```

After sorting:

```text
eilnst
eilnst
```

If both become the same string, they must contain the same characters with the same frequency.

---

# 🔥🔥🔥 Important trap — Different lengths

Consider:

```js
console.log(areAnagrams("abc", "abcd"));
```

Output:

```text
false
```

Obviously, they cannot be anagrams because one string has 3 characters and the other has 4.

You can make this check explicit:

```js
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}
```

This is slightly better because we can immediately reject strings with different lengths.

---

# 🔥🔥🔥 Method 2 — Frequency counting

This is more important for interviews because it demonstrates the **frequency-map pattern** you've just learned.

```js
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequency = {};

  for (let char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frequency[char]) {
      return false;
    }

    frequency[char]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent"));
```

### Output

```text
true
```

---

# 🧠 Understand this slowly

Suppose:

```text
str1 = "listen"
str2 = "silent"
```

First we count `str1`:

```text
l → 1
i → 1
s → 1
t → 1
e → 1
n → 1
```

Now read `str2`:

```text
s
i
l
e
n
t
```

Each character exists in our frequency object.

Every time we find one, decrease its count.

For example:

```text
s → 1 → 0
i → 1 → 0
l → 1 → 0
e → 1 → 0
n → 1 → 0
t → 1 → 0
```

Everything matches.

Therefore:

```text
true
```

---

# 🔥🔥🔥 Why do we decrease the count?

This is important.

Suppose:

```text
str1 = "aab"
str2 = "abb"
```

Lengths are the same.

Frequency of first:

```text
a → 2
b → 1
```

Now read second:

```text
a → 2 → 1

b → 1 → 0

b → 0
```

When we encounter the second `b`, there aren't enough `b`s in `str1`.

So it isn't an anagram.

The frequency approach catches this.

---

# 🔥🔥🔥 Even simpler frequency approach

You can count both strings:

```js
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const freq1 = {};
  const freq2 = {};

  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  return JSON.stringify(freq1) === JSON.stringify(freq2);
}
```

But for interviews, I prefer the previous frequency-decrement approach because it avoids creating a second frequency object.

---

# 🔥🔥🔥 Case sensitivity

By default:

```js
areAnagrams("Listen", "silent");
```

returns:

```text
false
```

because:

```text
"L" !== "l"
```

If the interviewer says:

> Ignore case.

Then normalize first:

```js
function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(areAnagrams("Listen", "Silent"));
```

### Output

```text
true
```

---

# 🔥🔥🔥 Ignore spaces

Another common interview variation:

```text
"The eyes"
"They see"
```

These should be treated as anagrams if spaces are ignored.

Normalize:

```js
function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().replaceAll(" ", "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(areAnagrams("The eyes", "They see"));
```

### Output

```text
true
```

Because:

```text
"The eyes"
    ↓
"theeyes"

"They see"
    ↓
"theysee"
```

Both contain the same characters.

---

# 🔥🔥🔥 Common Anagram Pattern

When you hear:

> "Check whether two strings are anagrams."

Think immediately:

```text
1. Normalize if required
2. Check lengths
3. Sort OR count frequency
4. Compare
```

The simplest version to remember:

```js
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
```

---

# 🧠 Complexity

### Sorting approach

```text
Time:  O(n log n)
Space: O(n)
```

because sorting takes `O(n log n)`.

### Frequency approach

```text
Time:  O(n)
Space: O(k)
```

where `k` is the number of unique characters.

So if the interviewer asks:

> "Can you do it without sorting?"

Use the frequency approach.

---

# 2. 🔥🔥 Find the longest word in a sentence

## What is the question asking?

Given:

```text
"JavaScript is very powerful"
```

Find the word with the greatest number of characters.

Words:

```text
JavaScript → 10
is         → 2
very       → 4
powerful   → 8
```

So answer:

```text
JavaScript
```

---

# 🔥🔥 Method 1 — `split()` + loop

This is the best beginner-friendly approach.

```js
function longestWord(sentence) {
  const words = sentence.split(" ");

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("JavaScript is very powerful"));
```

### Output

```text
JavaScript
```

---

# 🧠 Understand this step by step

Input:

```text
"JavaScript is very powerful"
```

First:

```js
sentence.split(" ");
```

creates:

```text
[
  "JavaScript",
  "is",
  "very",
  "powerful"
]
```

Now:

```js
let longest = "";
```

Initially:

```text
longest = ""
```

---

## First word

```text
JavaScript
```

Length:

```text
10
```

Compare:

```text
10 > 0
```

Yes.

So:

```text
longest = "JavaScript"
```

---

## Second word

```text
is
```

Length:

```text
2
```

Compare:

```text
2 > 10
```

No.

So:

```text
longest = "JavaScript"
```

---

## Third word

```text
very
```

Length:

```text
4
```

Compare:

```text
4 > 10
```

No.

---

## Fourth word

```text
powerful
```

Length:

```text
8
```

Compare:

```text
8 > 10
```

No.

Final:

```text
JavaScript
```

---

# 🔥🔥🔥 Why start with `""`?

We need something to compare the first word against.

```js
let longest = "";
```

Its length is:

```text
0
```

So any normal non-empty word will be longer.

---

# 🔥🔥🔥 Tricky Question — Equal Length Words

Suppose:

```text
"cat dog"
```

Both have length `3`.

Our code:

```js
if (word.length > longest.length)
```

uses `>`.

So:

```text
cat → longest
dog → same length, don't replace
```

Output:

```text
cat
```

So **the first longest word is returned**.

---

# 🔥🔥🔥 What if interviewer wants the LAST longest word?

Then change:

```js
word.length > longest.length;
```

to:

```js
word.length >= longest.length;
```

Now:

```text
cat
dog
```

gives:

```text
dog
```

### 🧠 Remember

```text
>
→ first longest

>=
→ last longest
```

This is a small detail interviewers can use as a tricky variation.

---

# 🔥🔥🔥 3. Multiple Spaces

Consider:

```text
"JavaScript   is   powerful"
```

If you use:

```js
sentence.split(" ");
```

you can get empty strings:

```text
[
  "JavaScript",
  "",
  "",
  "is",
  "",
  "",
  "powerful"
]
```

Those empty strings aren't actual words.

A better solution is:

```js
sentence.trim().split(/\s+/);
```

Example:

```js
function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("JavaScript   is   powerful"));
```

### Output

```text
JavaScript
```

---

# 🧠 What does `/\s+/` mean?

Don't worry too much about regex yet.

Just remember:

```text
/\s+/
```

means:

> Split wherever there is one or more whitespace characters.

So it handles:

```text
single space
multiple spaces
tabs
```

much better than:

```js
split(" ");
```

---

# 🔥🔥🔥 4. Sentence with punctuation

Consider:

```text
"JavaScript is powerful!"
```

Our simple solution gives:

```text
powerful!
```

Its length includes:

```text
!
```

So technically:

```text
powerful! → 9 characters
```

If the interviewer says:

> Ignore punctuation.

Then we should remove punctuation first.

Example:

```js
function longestWord(sentence) {
  sentence = sentence.replace(/[^\w\s]/g, "");

  const words = sentence.trim().split(/\s+/);

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("JavaScript is powerful!"));
```

Output:

```text
JavaScript
```

Now:

```text
powerful!
```

becomes:

```text
powerful
```

---

# 🔥🔥🔥 5. Longest word using `reduce()`

Since you've already learned `reduce()`, you may see this:

```js
function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  return words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
}

console.log(longestWord("JavaScript is very powerful"));
```

### Output

```text
JavaScript
```

---

# 🧠 Understand the `reduce()` logic

We compare two things:

```text
longest
word
```

If:

```text
word.length > longest.length
```

return:

```text
word
```

Otherwise:

```text
longest
```

So reduce keeps carrying the longest word found so far.

---

# 🔥🔥🔥 6. Find longest word AND its length

Sometimes the interviewer asks:

> "Return both the longest word and its length."

```js
function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return {
    word: longest,
    length: longest.length,
  };
}

console.log(longestWord("JavaScript is very powerful"));
```

### Output

```text
{
  word: "JavaScript",
  length: 10
}
```

---

# 🔥🔥🔥 7. Find ALL longest words

Now suppose:

```text
"cat dog elephant tiger"
```

Lengths:

```text
cat      → 3
dog      → 3
elephant → 8
tiger    → 5
```

Only:

```text
elephant
```

is longest.

But:

```text
"Java code React Node"
```

has:

```text
Java  → 4
code  → 4
React → 5
Node  → 4
```

Only `React`.

Let's use:

```text
"cat dog pig"
```

All are length `3`.

If we want **all longest words**:

```js
function longestWords(sentence) {
  const words = sentence.trim().split(/\s+/);

  let maxLength = 0;
  const result = [];

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result.length = 0;
      result.push(word);
    } else if (word.length === maxLength) {
      result.push(word);
    }
  }

  return result;
}

console.log(longestWords("cat dog pig"));
```

### Output

```text
["cat", "dog", "pig"]
```

---

# 🔥🔥🔥 8. Tricky Empty Sentence

What should happen here?

```js
longestWord("");
```

With:

```js
sentence.trim().split(/\s+/);
```

we can get:

```text
[""]
```

A more robust solution is:

```js
function longestWord(sentence) {
  const trimmed = sentence.trim();

  if (trimmed === "") {
    return "";
  }

  const words = trimmed.split(/\s+/);

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
```

Now:

```js
console.log(longestWord(""));
```

Output:

```text
""
```

---

# 🔥🔥🔥 9. Tricky Question — Numbers in Sentence

Suppose:

```text
"JavaScript 2026 is amazing"
```

Words:

```text
JavaScript → 10
2026       → 4
is         → 2
amazing    → 7
```

Answer:

```text
JavaScript
```

Unless the interviewer specifically says:

> Ignore numbers.

Then you need to filter them out.

---

# 🔥🔥🔥 10. Longest Word — What Should You Ask?

When an interviewer says:

> Find the longest word in a sentence.

There are some hidden questions:

```text
Should punctuation count?

Should multiple spaces be handled?

Should uppercase/lowercase matter?

What if two words have the same length?

What if the sentence is empty?

Should numbers count as words?
```

In a real interview, clarify if the requirement isn't obvious.

---

# 🔥🔥🔥 Combined Thinking

These two problems teach two very important patterns.

## Anagram

You need to compare **characters**.

Think:

```text
characters
    ↓
frequency / sorting
    ↓
compare
```

Example:

```text
listen
silent
  ↓
same characters?
  ↓
true
```

---

## Longest Word

You need to compare **words**.

Think:

```text
sentence
   ↓
split into words
   ↓
check word.length
   ↓
remember longest
```

Example:

```text
"JavaScript is powerful"

       ↓

["JavaScript", "is", "powerful"]

       ↓

compare lengths

       ↓

"JavaScript"
```

---

# 🧠 Final Cheat Sheet

```text
ANAGRAM
Two strings contain the same characters
with the same frequency.

Common approach:
sort + compare

or:

frequency count + compare
```

```text
LONGEST WORD
1. Split sentence into words
2. Keep a variable for longest
3. Compare word.length
4. Return longest
```

---

# 🔥🔥🔥 Patterns to Memorize

### Anagram — easiest version

```js
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
```

### Longest word — easiest version

```js
function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
```

### 🧠 One-Line Memory Trick

```text
Anagram      → Same characters?

Longest word → Biggest word.length?
```

And remember the bigger pattern you've learned so far:

```text
Reverse              → go backwards

Palindrome           → compare with reverse

Frequency            → count occurrences

First non-repeating  → frequency === 1 + first

Duplicates           → frequency > 1

Remove duplicates    → Set / seen

Anagram              → same frequency

Longest word         → compare lengths
```
