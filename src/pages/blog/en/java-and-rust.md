---
layout: ../../../layouts/BlogLayout.astro
title: Rust candy and Java vegetables
description: |
    I diskile Java/Go's verbosity. I like Rust/Zig
    syntax sugar and semantics.
pubDate: "2024-07-26"
tags: ["tech", "languages", "java", "rust", "go", "verbosity"]
image: 
    url: "/img/blog/en/langs/cover.jpg"
    alt: "Image of a kid eating sweets and other eating vegetables."
    caption: "Images from Irasutoya."
---

These may sound like first world problems, but I dislike working
with Java. The main reason: syntax, verbosity, semantics.

See, in rust I can just do `Some(value)` and wherever I see
the `Option<Type>` signature, I know that a value can be null.

Meanwhile in Java you can't tell. You just can't. Everything
can be null. You either go read the friendly manual
or get a `NullPointerException`. There is no in-between when
encountering an API for the first time.

And the pattern continues everywhere.


## Errors


So what if I want to signal that a function may return an error?
In Rust I just return `Result<OkType, ErrorType>` and
use pattern matching or bubble up the error.

```rust
fn next_token(chars: Vec<char>) -> Result<Token, Error> {
    // Bubble up the error easily
    let next_token = possibly_errors(chars)?;

    // Handle the error, return a different error
    // or recover
    let next_token = match possibly_errors(chars) {
        Ok(t) => t,
        Error(Error::EOF) => Token::EOF,
        Error(e) => return e,
    };

    // continue...
}
```

I can see just from the function signature that it may fail, which
error cases there are, and it's easy to handle or bubble.


So what about Java? Well, it depends.

If we are using checked exceptions (all my homies hate checked exceptions)
(we don't use checked exceptions) we can see all the `throws` in the
signature and the compiler enforces proper handling of those.

So, how do we bubble up the exception?

```java
protected Token nextToken(ArrayList<Char> chars)
    throws EndOfFileException, LexException
{
    // Bubble up
    Token nextToken;
    try {
        nextToken = possiblyThrows(chars);
    } catch (Exception e) {
        throw e;
    }


    // Handle the error, return a different error
    // or recover
    Token nextToken;
    try {
        nextToken = possiblyThrows(chars);
    } catch (EndOfFileException e) {
        nextToken = new Token::EOF();
    } catch (LexException e) {
        throw e;
    }

    // continue...
}
```

It's slow to write and think about. It breaks the flow of
programming. I've just come up with the solution to the
problem I'm having and I'm writing as fast as I can, and
then I'm hit with a wall of verbosity. I've lost momentum.
The excitement of programming is gone. All that remains
is boring, repetitive keywords and operators.

And that's the optimistic case. Because nobody writes code
like above. Everybody wraps everything in a giant try-catch.
Context is lost. Flow is lost.

And even worse, nobody likes nor uses checked exceptions.
Java programmers will tell you that checked exceptions are
bad. Just Google "java checked vs unchecked exceptions".

So what really happens is you write your code, and because
everybody uses `RuntimeException` you don't get an error
in your editor because you are calling something that may
fail. You just let it break.

```java
protected Token nextToken(ArrayList<Char> chars)
    throws RuntimeException
{
    // No errors detected, YOLO
    Token nextToken = possiblyThrows(chars);

    // continue...
}
```

Then your program blows up at runtime, and you have
to read a 10 page long stack trace to find where it
chrashed and why.

See, you need "discipline" and "good practices" to write
effective Java code. The compiler can't enforce those,
what are you talking about? And what if, as a human
being, you forget to add the boilerplate once, and your
program blows up in testing? Skill issue. Just wrap
`main()` in a giant try-catch.

So, what other candy does Rust offer that is too
1000 iq for us mortals below the Rust wizards?


## Proper flow control

Say I want to assing a value to a variable if some
condition is met.

```java
Type variable = (condition)? value1  : value2;
```

Now what if I want to operate on `value1`
before assigning it?

```java
Type variable;
if (condition) {
    // operations with `value1`
    variable = value1;
} else {
    variable = value2;
}
```

What if I have multiple conditions?

```java
String result;
switch (someValue) {
    case "A": {
        // other things
        result = "a";
        break;
    }
    case "B": {
        // other things
        result = "b";
        break;
    }
}
```

Oops, I forgot `default`. Now I have a null pointer
going around, breaking things. Luckily I didn't
forget to scope all cases and use `break` tho.
The compiler doesn't care. It's a skill issue.

And Rust?

```rust
// Conditionals are expressions
let variable = if condition {
    // operations with value1
    value1
} else {
    value2
};

// Pattern matching
let result: String = match some_value {
    "A" => {
        // other things
        "a"
    }
    "B" => {
        // Other things
        "b"
    }
};
```

Dang. I forgot the default case again.
The compiler will yell at me, tell me that
I'm missing a case. It will not compile until
the code is covered.

And later on, if I add some new cases, the code
will break again if I don't handle those new cases
everywhere. Java would silently fail and let my
program crash at runtime.


## The small things

There are a lot of small things that Rust do that Java
doesn't.

- Sum types
- Pattern matching
- Conditionals as expressions
- Proper type inference
- Blocks of code as expressions
- Immutability
- Borrow checking
- Traits and structs
- Hygienic macros
- #\[derive] auto implementation
- Cargo
- Crates
- rust analyzer
- Documentation comments
- Different syntax for values and pointers
- Unsafe when neccesary

All those things add up to create a good experience
when programming. All those clear obstacles when
programming.

And a lot can be said about every one of these,
but I think you get the point.


## Skill issue detected!!!1!1!!

**SKILL ISSUE** is a good meme, but really it doesn't make
any sense anywhere when used unironically. Because when
taken to it's logical conclusion we should all be living
in the caverns bangings rocks for fun.

A Java dev will say: Oh, you can't write boilerplate
and check every place it may fail? Skill issue.

Then a C++ dev will say: Oh, you can't write code
for different platforms at the same time? Skill issue.

Then a C dev will say: Oh, you can't write code without
your little classes and templates? Skill issue.

Then an assembly dev will say: Oh, you can't write
instructions for every instruction set and need
portability? Skill issue.

Then an machine code dev will say: Oh, you can't just
memorize every instruction and need little mnemonics?
Skill issue.

Then a punchcard machine operator will say: Oh, you can't
just write your program first try without making any
mistake? Skill issue.

Then an oficinist will say: Oh, you can't just do all the
calculations on paper and need a machine to do them
for you? Skill issue.

Then a farmer will say: Oh, you can't just keep track of all
your assets and do the calculations in your head? Skill issue.

Then a gatherer will say: Oh, you can't just gather the food
you need and leave the soil do its thing? Skill issue.

Then a caveman will say: Oh, you can't just outchase a leopardd
and kill a deer for food? Skill issue.

And so on until all we do is survive for the sake of it.
Improvements people, we all crave them yet ridiculize them
if they don't belong to our camp.


## If Java is like vegetables, then Java is good?

Yes if by good you mean you can pay the bills.



## The joy of programming

![Rust sparks joy, Java doesn't spark joy](/img/blog/en/langs/sparks_joy.jpg)

It's been said a lot of times by a lot of people. Programming
is about solving problems, not about writing little
colored words. And if your motivation for writing code is
money, sure, this doesn't matter to you at all. You'd do
whatever it takes to make money, and that's okay.

But if your motivation is the satisfaction you get from
solving problems, Java and it's verbosity gets in the
way. Unnecesarily slows things down. Breaks the flow.
Turns the joy of solving problems into writing
little colored words half the time.

Rust is by no means perfect. It has many issues. But
when learned it allows you to write code at the speed
of your thougths, and does it so in a safe way,
upfront, no surprises.



