---
layout: ../../../layouts/BlogLayout.astro
title: I was defeated by the Borrow Checker.
description: Unfortunately the perfect programming language does not exist.
pubDate: "2024-11-15"
tags: ["programming", "rust", "borrow checker"]
image: 
    url: ""
    alt: ""
    caption: ""
---

So, I've been writing [my own programming language](https://thp-lang.org/)
for the past few years. It's gone through many rewrites, but I settled on
the Rust programming language. Or so I thought.

So, I've been recently working on the [Symbol Table](https://en.wikipedia.org/wiki/Symbol_table),
and apparently this is one of those things that are hard on Rust.
Like linked lists, or any other data structure. But wait! There is a
solution! `RefCell`! Right? Right?


## The inner mutability problem?

So, I have a node (a scope, really):

```rust
struct Scopes<'a> {
    scopes: RefCell<HashMap<String, SymbolTableScope<'a>>>,
}

struct SymbolTableScope<'a> {
    scope_id: String,
    members: RefCell<HashMap<String, Type>>,
    parent_scope: Option<String>,
}
```

A scope has members: variables and what type they are,
a scope id, and a optional parent.

So now, I want to look for a symbol on the current scope,
and if it's not there, look on the parent scopes.

```rust
impl SymbolTableScope<'_> {
    pub fn get_type(&self, symbol_name: &String) -> Some(???) {
        match self.get(symbol_name) {
            Some(t) => Some(t),
            None => {
                match self.parent_scope {
                    Some(parent) => parent.get_type(symbol_name),
                    None => None
                }
            }
        }
    }
}
```

The code is not exactly what I wrote, but the concept is there.
I get an error:

```plain
error[E0515]: cannot return value referencing temporary value
```

And I get it (at least I think I do), but I haven't found a way
to solve it. I cannot clone it, I cannot solve it with lifetimes,
nothing comes to mind. And even if cloning worked, eventually
I'll want to remove all cloning for performance.

So, what to do?



## Debugging my language knowledge rather than my program

So, I admit defeat. The borrow checker defeated me. Maybe
I'm not smart enough, maybe I need to go through the book
again. But at this point, I'd say 30% of my time went to
fight the borrow checker. That is 30% of time that didn't
go into features, tests, bug fixes, documentation, and
so on.

And sure, the borrow checker gives you safety
like no other language does. But is it worth it?
how many compilers were written on C/C++? Did we not do
systems programming before Rust?

I think I've reached a point where I cannot justify
using Rust anymore. Rust is amazing for small to
medium programs, but it seems like as soon as you
need both performance and multiple mutability,
Rust becomes a slowdown. So, I've decided I will be
rewriting my language, yet again, probably in Zig.
I will specially miss the `ariadne` and `rustyline`
crates, they made my life and compiler so much
better. But alas, so long and thanks for all the
fish.

## Thank you Rust, welcome Zig

I will now rewrite my compiler in Zig. As always,
I am going in without being a master in the language,
but that's the fun part.

If Zig fails me maybe I'll settle on Go or smt, idk






