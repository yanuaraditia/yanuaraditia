---
title: Debounce – What's the difference with throttle?
description: Debounce means delaying the execution of a repeatedly called function until there is an idle condition within a specified time range.
image: /images/blog/debounce.png
date: 2023-06-10
---

As a web developer, whether back-end or front-end, you’ve probably heard the term **Throttle** before, right? Simply put, throttle is used to limit the number of hits to an endpoint or application by a single user/client within a certain period. For example, if we want to limit the `api/user` endpoint to only be accessed 60 times per minute, we can use throttling technology. So, what is debounce?

## Debounce

Debounce literally means _to bounce_ if you translate it with Google Translate, and that’s not far off. Debounce comes from an electronics concept, like a TV remote, where the remote only sends a signal when you’ve actually finished pressing a button. The concept is similar here.

## When should you use debounce?

Let me explain. As a good front-end developer, it’s best to maintain harmony between FE and BE developers, right? One way to do this is by using debounce. For example, suppose we want to create an input field that searches for a list of districts based on the keyword entered by the user. So, what should we do? Here’s a sample case.

### Example Case

An input field requires a minimum of 3 characters, and the system should hit the API when the user finishes typing, with a 100ms delay after the last input. So, how do we do this in JavaScript? Here’s how:

1. First, you need to set a global variable, either with `var` or `let`, as needed.

```js
let debounce
```

2. In the main trigger function (can be applied in the listener)

```js
const onChange = () => {
  if (debounce) {
    clearTimeout(debounce)
  }

  debounce = setTimeout(() => {
    fetch('some_stuff')
  }, 100)
}
```

3. Yep, that's it—simple, right? Okay, let's break it down.

### Explanation

1. First, we need to set a variable to hold the timeout function.
2. We always need to check if the variable already has a value; if it does, use the `clearTimeout` function to remove the queued delay.
3. Now, just fill the variable again. If there are no more changes, the variable won't be cleared, so `fetch` (the main function) will automatically be triggered.

## Debounce vs Throttle

Short and sweet, right? It's not hard to prevent things like flood caused by front-end apps—just start by using _debounce_. But that doesn't mean you should ignore _throttle_; you still need both to keep things in sync. So that's a simple article from me, thanks for reading and see you in the next post.
