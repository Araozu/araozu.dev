---
layout: ../../../layouts/BlogLayout.astro
title: Are AIs useful for anything other than boilerplate?
description: An overview of my journey using the AIs, and my latest dissapointment.
pubDate: "2024-12-20"
tags: ["ai", "copilot", "claude", "sonnet", "cursor", "zig"]
image: 
    url: ""
    alt: ""
    caption: ""
---

So, I've never been a fan of the AIs. My reasoning is simple:

- It can solve easy problems, but so can I.
- It requires a lot of manual intervention to solve a hard problem, and at that point I might as well
  do it myself, since I also know how to solve a hard problem.
- Its good at boilerplate, except for when it writes the wrong boilerplate (very frequent),
  then I have to override it and write my own boilerplate.
- Its good for generating documentation.
- Can really only do mainstream languages. Throw it some gleam, zig, etc, and it becomes
  almost useless.
- Its factually wrong, hallucinates

Basically, if I wanted help solving a hard problem, rather than the AI helping *me*, **I** am helping
the AI solve the problem. Fun!

This has led me to my current stance on AIs for programming: They are a (very overengineered, expensive
and complicated) tool that should be used with care, and in the right situations (easy problems, boilerplate).

So, as I've just had my latest reality check with the AIs, I began to remember my interactions with the AIs
over the years, and decided to write this.


## Background

I don't just ask the AIs or the internet for a solution, copy paste
and move on. I put effort into understanding whatever I'm copying and pasting. And before I even reach
that point, I try to solve my problems myself using documentation, trial and error, seeing other
codebases, etc.

As I result, I consider that I have good problem solving skills, and over the time I've been doing this,
I've become quite fast. This is important to understand my experiences.


## Chat yippity 3 and copilot

I was there when chat yippity 3 launched in late 2022. I was in my last semester at uni, but I didn't
really use it or pay attention to it (nor that I could've used it since I was dealing with hard problems).

It was when copilot launched that I became interested in the AIs. By that point I was working with,
among other things, PHP, which at the time I despised. So, I thought that I could use the yippity
to make my life easier. I payed the $10 fee, installed vscode, and was ready to go.

Then I realized what I told you above: it only worked for solving easy problems, and boilerplate.
I had to write a lot of PHP boilerplate, and half the time it wrote it nice, the other half it
would write the wrong boilerplate. On the beginning I would accept whatever it wrote, but if it was
wrong I needed to go back, delete. Then I began to first review whatever it wrote, and if it was wrong,
I would write the right thing myself.

Do you see the problem? I'm more than capable of writing boilerplate. Half the time the AI saves me
some typing, and the other half it:

- loses me time, by having to review its solution
- if I accept then realize there is an error, it loses me time deleting and going back
- now I have to write the thing myself, so there's that

I quickly came to the realization that, altought somewhat good for boilerplate, on average I would
use the same time (if not less) by just writing the boilerplate myself. And on top of that, I'm
paying micro$oft 10 dollars a month. Nice.


Moreover, I realized that I was intentionally slowing down. I would type a word, stop, wait for the
AI to autocomplete, review, accept/reject, continue typing. Instead of just continually typing and
getting the code out the door.

I promptly stopped sending my 10 dollars a month to micro$oft.


## v0.dev

When it first launched all v0 could ever do was generic landpages. It only knew one style: modern
corporate. If you asked for anything else, something different, something unique, it gave you
the same, boring modern corporate UI style.

Nowadays it does the same, except that it seem tied to react and shadcn, continuing and enabling
the dependance of some devs to the react ecosystem. But that is another blog post for another time.


## Chat yippity 4

I was AI-free for the last 2 years. This december, 2024, I decided to check them out again,
after some of my colleages insisting it had improved. 10 trillion parameters and what not.

So, the other day I noticed an error on my terminal: eslint 8 is deprecated, migrate to eslint 9.
I knew that eslint 9 was a breaking change, so what better chance to put the AIs to work!

I went to the github and asked the copilot (yippity 4o) to upgrade my eslint config to version 9.
It is a dead simple config, mind you.

The yippity 4o, with 1 trillion parameters, access to the internet and all of the free open source
code on github told me this:

```yippity-4
I need to inform you that ESLint 9 hasn't been released yet.
As of December 2023, ESLint 8.x is the latest major version.
The most recent stable version is ESLint 8.56.0.

However, I can help you upgrade your ESLint configuration
to the latest version and make it more modern. Here's the
updated configuration that uses current best practices:
```

How lovely 🥰🥰, turns out eslint 9 isnt even out yet.

Then I asked it what was the latest version of eslint 9.

```yippity-4
As of December 2024, the latest version of ESLint is v9.17.0,
which was released on December 13, 2024. This version includes
several features, bug fixes, and documentation improvements.

Since you asked about ESLint 9 in your previous question,
I can confirm that ESLint 9 is indeed now available
(it wasn't at the time of your previous code snippet).
Would you like me to help you update your ESLint configuration
to be compatible with ESLint 9.17.0?
```

🤯🤯🤯 OMG! In the time between my previous question and this one
the eslint team released a brand new version! How amazing!

You see where this is going. If I was a completely new programmer,
and took whatever the yippity told me at face value, I would be
misinformed.

Intenet wisdom (reddit) says that the yippity is no longer the best
model, Claude is the real deal. So, let's go see if it doesn't
lie to me!


## Claude 3.5 Sonnet

Context: I'm working on a side project on Zig, dealing with allocation
and deallocation of memory.

I had a situation where I had a memory leak. For context, in Zig you
manually manage memory, like in C.

This code creates an array list:

```zig
var arrl = std.ArrayList(i32).init(alloc);
```

It will allocate memory with the `alloc`. Think of `alloc` as `malloc`
in C.

In case there is an error elsewhere in the scope, this memory must be
freed. Otherwise we would have a memory leak. In Zig you do this
with `errdefer`, it runs some code if an error is thrown:

```zig
errdefer arrl.deinit();
```

What I'm saying here in this code is: If an error is thrown in this scope,
I want to run the `deinit` method on the array list, which frees its memory.

How are errors thrown in Zig? Like this:

```zig
try something();
```

The function `something()` may throw an error, and `try` will capture the error
and rebubble it. Then, the `errdefer` above will run, and free the memory
used by the array list. Simple right? Here is the full snippet.

```zig
var arrl = std.ArrayList(i32).init(alloc);
errdefer arrl.deinit();

try something();
```

However, there is a different way. I can `catch` the error, do something with it,
and then re-throw the error, like this:

```zig
something() catch |err| switch (err) {
    error.OutOfMemory => return error.Unknown,
    else => return err,
}
```

I `catch` the error, then see what type of error it is with `switch`. If it is
an `OutOfMemory` error I throw a new error, `Unknown`. Otherwise I throw the same
error.

```zig
var arrl = std.ArrayList(i32).init(alloc);
errdefer arrl.deinit();

something() catch |err| switch (err) { // [!code focus:4] // [!code highlight]
    error.OutOfMemory => return error.Unknown,
    else => return err,
}
```

Now that the setup is done, here comes the AI.


## A slower, biased search engine

First, I tried using the AI as a fancy search engine. Zig is a really
new programming language, so finding information about it is hard.
I thought that since the AI has already scrapped the whole internet
it may be able to give me hard to find information, or at the very
least derive it from other information. But apparently I was wrong.

The AI only gave back results that were easily findable with a search.
So, not a lot of use there.


## A liar and manipulator

It is well known that if you tell the AI that it is wrong, it will
always accept the blame and try to fix it. But what if what it
gave you in the first place was right? Then it will hallucinate
new, wrong information.

Furthermore, if you give it wrong, biased guidance, it will give
you back wrong, biased answers. And here is where my Zig example comes in.

While brainstorming I had a thought: 

```zig
var arrl = std.ArrayList(i32).init(alloc);
errdefer arrl.deinit();

something() catch |err| switch (err) { // [!code highlight:4]
    error.OutOfMemory => return error.Unknown,
    else => return err,
}
```

Incorrectly, I theorized that when I manually handle errors with `catch`,
the `errdefer` statement is not run, for whatever reason. So I asked
the AI about it, and I told it my theory.

The AI (Claude 3.5 Sonnet btw) ran with it, assumed it was correct,
and hallucinated documentation, code snippets and reasons.
And dumb me believe for a while, because:

- I didnt know what was right and what was wrong
- It fed into my theory that, at the time, seemed plausible, so it
all made sense.

Eventually, I had to learn the hard way (and in some obscure
zig forum) that `errdefer` is always run when an error is return,
no matter if its thrown by `try` or `catch`.


## Something you cannot trust

After this little experience I was reminded that the AIs are not something
you can trust. You need to already understand the field at use, be able
to distinguish between real and hallucination, and guide the AI. At which
point, i don't even know what the AI is for...


