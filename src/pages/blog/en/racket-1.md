---
layout: ../../../layouts/BlogLayout.astro
title: My problem with learning Racket (and lisps in general)
description: Why can't I find something like this?
pubDate: "2024-11-06"
tags: ["programming", "learning", "lisp"]
image: 
    url: ""
    alt: ""
    caption: ""
---

For the last month I've been wanting to learn a lisp, and
naturally the question of "which one to choose" came up.
After an intensive search on the most authoritative pages
about lisp (reddit & hn) I learned that there are these
lisps available for learning:

## Common lisp

I've seen that common lisp is well regarded by almost everyone.
However, it is confusing to not have a de-facto implementation.

I choose to try out SBCL and to follow Practical Common Lisp.
And I've come to realize that either I'm blind, or there is no
documentation on common lisp. Like, I cannot go to a page
for CL or SBCL and see the stdlib. I have to search google
for how to do every little thing. Literally unusable.


## Scheme

I've read that scheme is a good lisp, but due to its academic
nature is really barebones. I don't want to implement a stdlib,
I just want to learn lisp by solving some problems. So this is
a no.


## Clojure

JVM 🤮🤮🤮


## Racket

Racket seemed like the best choice for learning lisp. It is
modern, has extensive documentation and there is a single
implementation.

So, I learn some chapters of the racket guide, and went on
to solve some Advent of Code.

## wtf?

And I ran into a problem immediately. The racket interpreter's
error reporting is useless.

I had code like this:

```racket
(define (split-string input)
    (define letters (string->list input))
    (define first-letter (first letters))
    (define last-letter  (last letters))
    ; other operations
    dummy-return)
```

This code basically takes a `string` as input, converts it
into a `list`, and gets the first and last element of the list.

So, what happens if I pass to it an empty string `""`? Obviously
it breaks. However, how the racket interpreter reports this error
is the problem.

See, any other language will tell you where this thing failed.
Something like `error on line 3: indexing element 0 of an empty list`.
I'm not asking for Rust-level error reporting (which should be
the baseline for error reporting), I'm not asking for a stack trace,
I'm not even asking for the column where the error happened.
I just want to know on which line it failed.

What does racket give me?

```bash
split-string: contract violation
 expected: (and/c list? (not/c empty?))
 given: '()
 context: my/file/name:1:0
```

It tells me there is an error __somewhere__ on the `split-string`
function. Where? Who knows. Somewhere inside.

And whats worse is that, if this function is called by other functions,
and those by other functions and so on, racket tells me the error
is on the outer most function. Really?


## The straw that broke the camel's back

Normally, I expect better tooling for a language. I expect the language
to have auto-complete, warnings/errors on my code editor (neovim btw),
inline documentation, and so on. It's not a deal breaker however.
I am totally find writing code on notepad if there is at least documentation,
and racket REPL makes experimenting a lot easier.

But for a dynamically typed language to have error reporting this bad...
A dynamically typed language **must** have good error reporting,
because otherwise it's almost imposible to find where errors are.
And racket is not a toy language made by a hobbist on their free time.

Honestly, at this point I might have to just use clojure. It's almost
impossible to program on a dynamic language with bad error reporting.



