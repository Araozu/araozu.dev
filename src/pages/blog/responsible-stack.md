---
layout: ../../layouts/BlogLayout.astro
title: The responsible tech stack
description: tech stack
pubDate: "2024-05-20"
tags: ["tech stack"]
image: 
    url: /img/blog/001_responsible/thumb.webp
    alt: Visual representation of the blog
    caption: ThePrimeagen & Theo, as depicted by the author.
---

> TLDR: There's a theoretical "responsible" tech stack that would
> ...

At my first job I worked at a small shop, as "the computer guy". I did
everything, from converting word files to `pdf`, to mantain 10 years old
legacy PHP webpages, to implementing internal systems.
I was the only IT guy, there were around 5-10 call center people and
the boss only came like 3 times a week.

After passing an easy interview, I found my predecessor (and their
predecessors) were stuck in the 90s. Code was directly edited on the
shared hosting, there was absolutely no version control, a bunch of
`page final.php`, `page final2.php`, `page final final3.php` files were
flying around, etc. A total mess.

So, after collecting and moving around hardware I managed to assemble a
little """server""" where I installed Ubuntu Server, set up RAID-5,
SMB file sharing, Gitea for VCS, Jenkins for CI/CD, Docker, etc.
Something closer to today's tech.

And then the time came to implement my first internal system, which
would remove a lot of administrative work that I had to do. This system
would remain for whoever came after me, and they would have to maintain
it.

So, I began to think about what tech stack to use.


## A first approach

The administrative work occupied around 90% of my time. I wasn't required
to improve anything, making a system was my own initiative, to be less
stressed and have more time to do actual dev things. So an idea I had
at the time was to use whatever was the fastest way to start.

Since it was to be deployed on an internal server, I could use (almost)
any tech stack. I was only limited by a remote MySQL database. And since
I was the only IT guy there, I could do whatever I wanted.


I decided to use Node.js with Nest.js and Solid.js, as it was the
tech I had used the most at the time. In a few days I had a small MVP,
and as time passed I added more functionalities and logic.

Eventually, I was able to automate almost all administrative work with
my system. The system had a few bugs here and there, but since I made
the thing, I knew exactly how to solve it.

After some time, as I added more features and requirements changed,
working with a SSR-JS-FE-Framework proved to be a pain. The code
became a mess, it was hard to make changes and ensure that previous
functionality didn't broke, and I may or may not have manually used
bleeding edge Server Side Rendering not made for Nest.js.

And then, I was told that there would be a new person on IT, part time,
as business was growing. So, as the junior dev that I was, I decided
that it was time to do a rewrite.

## Using what I knew & liked

I had been learning Rust on my free time, and I fell in love with the
language. It was (and still is) my favorite language, almost perfect,
in my opinion. So when time for a rewrite came, I decided to evaluate
what I knew & liked:

- I learned Java at uni, but I didn't really like the verbosity.
- I already used Node.js, it was a mess. And even with TypeScript,
    its not the same as a strongly typed language.
- Python? Meh.
- Rust... How about Rust...

So, I did some research on Rust web frameworks. I explored Leptos,
Dioxus, Rocket, Axum, raw html templates, even Tauri. In the end, I
decided to rewrite the backend in Rust with Rocket, reuse the
Solid.js frontend minus the SSR, and communicate between REST.

It was a success. I was able to rewrite the backend quickly,
errors went down to almost zero, it was **blazingly fast**, and I
enjoyed developing the system. Perfect.


## A new system

After learning of my successful implementation, my boss wanted me
to develop a new internal system, this time to be used by the other
staff at the company. So, I went back to the drawing board.

But this time, there were some different circumstances. Mainly, that
the requirements would change a lot during, and after development.
And so my successors would have to constantly maintain and improve
the system. So, what tech stack to use?

At the time, I was being red-pilled by ThePrimeagen into using htmx.
There was the possibility to use Rust as a full-stack language.
However, how many people knew about Rust? And HTMX? If I used those,
would the people after me be able to maintain (let alone improve)
the system? Would me leaving lead to the demise of the company?
Was I being too delusional?

I began to think what would be the best course of action. At my
university we all learned Java, and it along with C# was very common
in my city. Node.js was beginning to pop up, and there was a lot
of PHP. Really mid languages tbh.

Frontend was all React or plain html. There was a little of Vue/Angular
here and there. Tailwind was the new shiny thing (this is 2023).

Some ex-classmates I asked didn't know there were things outside React.
Like Solid, Svelte, Astro, etc. And they didn't know there were other
programming languages. No one knew what Rust, or Go, or Elixir were.

But I knew about these knew things. I had used them successfully, and
they are better. So, I thought:

I could use new tech, develop **blazingly fast** by myself, as fault-tolerant
of a system as possible, such that the system would continue to work,
and few changes would be required in the future. But, future workers
would not be able to understand the system, and they would have to learn
Rust & HTMX (which tbh I don't have a lot of faith people would be able to).

Or, I could use whatever people use. Maybe some PHP with Laravel and React.
Or even Java if I felt fancy. I would be misserable developing it,
there would be many opportunities for bugs, and more maintenance would
be required in the future. But, future workers would be able to do such
tasks.


## The responsible stack

So, **I** could be happy and **blazingly fast** and productive and efficient,
and build a reliable piece of software that would have better chances to work
correctly and reliably;
but the company would have trouble hiring, new people would get in trouble
because they have to learn Rust and HTMX before they could even read the code but
the boss wants new features by yesterday, they might become frustrated and
resign, etc, etc. Not very good looking forward.

Or, I could be the adult, pick well established and understood technologies
with a large talent pool, facilitate the future of the company in spite of
(possibly) developing a worse product, and perpetuating the current system
of **if it ain't broke don't fix it**, promoving inadequate technologies
and ultimately, contributing to the users having a worse experience, such
that future devs have a better experience.

JUST USE REACT!! IT'S INDUSTRY STANDARD!!

[\*\*cue in sad defeat music\*\*](https://www.youtube.com/watch?v=XdofmoYcJNE)

## !!!

Alright, I've been thinking. When life gives you React, don't make a
SPA, make life take the React back. Get mad! I don't want your damn
React meta frameworks, what am I supposed to do with these?
Demand to see life's manager! Make life rue the day it thought it could
give ~~Cave Johnson~~ React.

Do you know who I am? I'm the man who is going to BURN your house DOWN! With the
React. I'm gonna get my engineers to invent a combustible RUST FRAMEWORK
that BURNS your house DOWN!

---

So I began working with Rust.

A month later I was let go. Good luck Edith, I hope you like low level languages.







