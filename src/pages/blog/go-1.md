---
layout: ../../layouts/BlogLayout.astro
title: Golang first impressions
description: First thoughts after using a little bit of Golang
pubDate: "2024-05-25"
tags: ["programming", "golang", "rust", "short"]
image: 
    url: ""
    alt: ""
    caption: ""
---

I've been trying out Golang for a few days, and here are some thoughts
I have about it.

And by a few days I mean that I've solved AoC until day 11 (I think),
and I'm writing a game backend that communicates via JSON/WebSockets
to a web frontend.


## Irrelevant background

I don't remember where did I hear about Golang first. But I clearly
remember that my first opinion of it was heavily influenced by fasterthanlime
posts about it. I think I discovered his page with his "I want off Mr. Golang's
wild ride" and "Lies we tell to ourselves to keep using Golang" posts.

So, I had a negative impression about it for some time. And at the time I
was felling in love with Rust, which Amos uses as a comparison point,
so all the arguments made sense, and I did what any reasonable person on the
internet would do: I made his arguments mine :)

Then, another tech-fluencer I follow began to talk about Golang. ThePrimeagen.
And apparently he liked Golang a lot. He was (and I think still is at the
time of writing) learning
Golang, and was happy to try it out. So I did what any reasonable person on
the internet would do: I made his opinions mine :)

And so, I decided to try out Golang, coming from having learned a lot of Rust.


## A nicer C + gc

My very first impression was that it felt a lot like C. Very imperative code,
very simple, very minimalist. You can't even do something like `"hello".length`,
you do `len("hello")`, in a very C-style. However, you don't have to manually
manage all your memory, since Golang is garbage collected. So, it feels like a
nicer C.


## Confusion with references

I think that Rust messed up with the way that I think about
references/parameters/pass-by-value/pass-by-reference.

First, in Java and JS I got used that anything that is not a primitive
datatype is passed by reference. Since neither of these use pointers, that's
reasonable.

Then, in Rust, you define instead ownership, lifetimes and references. So, I
got used to:

```rust
fn test_function<'a>(
    a: Type,
    b: mut Type,
    c: &Type,
    d: &mut Type,
    e: &'a Type,
    f: &'a mut Type,
) {
    // ...
}
```

Which are, off the top of my head:

- a: Take ownership of `Type`
- b: Take ownership of a mutable `Type`
- c: A reference to `Type`
- d: A mutable reference to `Type`
- e: A reference to `Type` with lifetime `'a`
- f: A mutable reference to `Type` with lifetime `'a`

I got used to pass-by-refernce, in one way or another.

So, I came to Golang expecting the same. Primitive types are passed by value,
complex types are passed by reference. But apparently they aren't, which had
me scratching my head for many hours.

I had a function that took a struct, modified some values, and returned.

```go
// Some hypothetical code
type Node struct {
    Value   string
    Visited bool
}

func mark_as_visited(node Node) {
    // ...
    node.Visited = true
    // ...
}
```

Apparently, this will create a copy of `Node` instead of mutating the parameter.
So Golang doesn't have automaty pass-by-reference, only pass-by-value. Which
mimics the way C works, but in my limited experience with C I was always using
pointers due to `malloc` and friends, so I never noticed. Skill issue.

But still, for a garbage collected language, I was expecting it to behave like
other garbage collected languages. (And now I wonder if Go is garbage collected,
and you can't do pointer arithmetic, why do you have access to pointers?)



## if err != nil

I wish Go had some amount of syntax for error handling. `if err != nil` feels
verbose, but it's not bad. What I'm confused about still is why it's all
`error`, instead of having different error types? I guess I got used to Rust.

Still, errors as values are the best way to do error handling.

## nil

It's 2024 and we still have `nil` pointer exceptions. I think it's a huge
mistep to not have some form of nullable types. Something like `int?` that
clearly communicates that the value can be `nil`, and more importantly,
that forces you to explicitly check for it. Kotlin, Rust, Zig, Nim and
almost every modern language have it.

And being relatively "low-level" or having a runtime penalty is not an excuse
because a) Go is not "low-level" b) Go ships a gc and runtime with every binary
c) Zig is "low-level" and still has nullable types.


## zero values

Altough zero values have not caused problems for me (yet), I can definitely see
how they are bad. Just having a struct that contains a pointer to other struct
can potentially cause a NPE, and the compiler doesn't do anything about it.

Yes, it's a skill issue to not check in every single place structs are used.
And by that logic, it's a skill issue to not program in punch cards and use
modern languages. smh.


## devtools

The devtools are (as far as my limited used goes) really, really good. The
language server is fast, I love the fast, opinionated, on save code formatter
(better than rust analyzer & cargo fmt) and the package manager is good.

## conclusions

So in conclusion, I'm still learning Go. I'm not at the level that
the things that Amos complains about are problems for me. But insofar, the
language itself is, to me, inferior to Rust. Still good, but not as good
as Rust in every aspect.

